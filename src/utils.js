import { Error } from './components/Error';
import { HTMLContainers, DECIMAL_REG_EXP } from './constants';

let hasLayer2 = false;
let hasLayer3Toggle = false;
let hasLayer3 = false;

export const toggleLayers = () => {
  jQuery(HTMLContainers.layerFields.container(2)).toggleClass(
    'hidden',
    !hasLayer2,
  );
  jQuery(HTMLContainers.layerFields.toggleContainer(3)).toggleClass(
    'hidden',
    !hasLayer3Toggle,
  );
  jQuery(HTMLContainers.layerFields.container(3)).toggleClass(
    'hidden',
    !hasLayer3,
  );
};

export const resetLayers = () => {
  hasLayer2 = false;
  hasLayer3Toggle = false;
  hasLayer3 = false;

  toggleLayers();
};

export const getMaterials = () => [
  ...jQuery(HTMLContainers.materials.container)
    .find('div')
    .map(function handler() {
      const $materialType = jQuery(this);
      const price = $materialType.data(HTMLContainers.materials.price);
      const description = $materialType.data(
        HTMLContainers.materials.description,
      );

      return {
        price,
        description,
      };
    }),
];

const setDescription = (layer1Price, layer2Price, layer3Price) => {
  let description = jQuery(HTMLContainers.foamShape)
    .find(':selected')
    .text();
  const totalThickness = [1, 2, 3].reduce((total, layer) => {
    const layerThickness = jQuery(
      HTMLContainers.layerFields.thickness(layer),
    ).val();

    if (!layerThickness) {
      return total;
    }

    return total + parseFloat(layerThickness);
  }, 0);
  const baseDimensions = [
    ...jQuery(HTMLContainers.baseFields.field()).map((_, field) => {
      const $field = jQuery(field);
      const label = $field
        .parent('.base-field-wrapper')
        .find('label')
        .text();
      const value = $field.val();

      return {
        label,
        value,
      };
    }),
  ];
  const getLayerDimensions = layer => {
    const thickness = jQuery(HTMLContainers.layerFields.thickness(layer)).val();
    const $foamType = jQuery(HTMLContainers.layerFields.foamType(layer));

    if (!thickness || $foamType.prop('selectedIndex') === 0) return null;

    return {
      thickness,
      foamType: $foamType.find(':selected').text(),
    };
  };

  description += `\nTotal thickness: ${totalThickness}, dimensions: ${baseDimensions
    .map(({ label, value }) => `${label}: ${value}`)
    .join(', ')}`;

  const layer1Dimensions = getLayerDimensions(1);
  if (layer1Dimensions) {
    description += `\nBase layer: ${layer1Dimensions.thickness}" layer of ${
      layer1Dimensions.foamType
    } ($${(layer1Price / 144).toFixed(2)})`;
  }

  const layer2Dimensions = getLayerDimensions(2);
  if (hasLayer2 && layer2Dimensions) {
    description += `\nSecond layer: ${layer2Dimensions.thickness}" layer of ${
      layer2Dimensions.foamType
    } ($${(layer2Price / 144 + 5).toFixed(2)})`;
  }

  const layer3Dimensions = getLayerDimensions(3);
  if (hasLayer3 && layer3Dimensions) {
    description += `\nThird layer: ${layer3Dimensions.thickness}" layer of ${
      layer3Dimensions.foamType
    } ($${(layer3Price / 144 + 5).toFixed(2)})`;
  }

  // eslint-disable-next-line
  jQuery(HTMLContainers._description).val(description);
};

const getBaseValues = () =>
  [...jQuery(HTMLContainers.baseFields.field())].reduce((baseValues, field) => {
    const $field = jQuery(field);
    const val = $field.val();
    const dimension = $field.data('dimension');
    const weight = $field.data('weight') || 1;

    if (dimension === 'x') {
      // eslint-disable-next-line
      baseValues[0] = (baseValues[0] || 0) + Math.pow(val, Number(weight));
    }

    if (dimension === 'y') {
      // eslint-disable-next-line
      baseValues[1] = (baseValues[1] || 0) + Math.pow(val, Number(weight));
    }

    return baseValues;
  }, []);

const makeGetLayerPrice = baseValues => layer => {
  const layerValues = [
    jQuery(HTMLContainers.layerFields.thickness(layer)).val(),
    jQuery(HTMLContainers.layerFields.foamType(layer)).val(),
  ];
  return [...baseValues, ...layerValues].reduce((price, val) => price * val, 1);
};

export const calculatePrice = () => {
  const baseValues = getBaseValues();
  const getLayerPrice = makeGetLayerPrice(baseValues);

  const layer1Price = getLayerPrice(1);
  const layer2Price = hasLayer2 ? getLayerPrice(2) : 0;
  const layer3Price = hasLayer3 ? getLayerPrice(3) : 0;

  let totalPrice = (layer1Price + layer2Price + layer3Price) / 144 || 0;

  if (hasLayer2 && layer2Price) totalPrice += 5;
  if (hasLayer3 && layer3Price) totalPrice += 5;

  jQuery(HTMLContainers.cart).toggleClass('cart-not-available', totalPrice < 5);
  jQuery(HTMLContainers.price).text(`$ ${totalPrice.toFixed(2)}`);
  jQuery(HTMLContainers.minimumPriceNote).hide();

  if (totalPrice < 5) {
    jQuery(HTMLContainers.minimumPriceNote).show();
  }

  // eslint-disable-next-line
  jQuery(HTMLContainers._price).val(totalPrice.toFixed(2));

  setDescription(layer1Price, layer2Price, layer3Price);
};

export const validateInputValue = function handler() {
  const $this = jQuery(this);
  const val = $this.val().toString();
  const isValid = DECIMAL_REG_EXP.test(val);

  if (!isValid && val !== '') {
    $this.parent().append(Error());
    return;
  }

  $this
    .parent()
    .find('.help-block')
    .remove();

  calculatePrice();
};

const resetLayerFields = layers =>
  layers.forEach(layer => {
    jQuery(HTMLContainers.layerFields.thickness(layer)).val('');
    jQuery(HTMLContainers.layerFields.foamType(layer)).prop('selectedIndex', 0);
  });

export const toggleLayerToggler = layer => {
  let condition;

  switch (layer) {
    case 2:
      condition = hasLayer2;
      break;

    case 3:
      condition = hasLayer3;
      break;

    default:
      condition = false;
  }

  jQuery(`${HTMLContainers.layerFields.toggle(layer)}-plus`).toggleClass(
    'hidden',
    condition,
  );
  jQuery(`${HTMLContainers.layerFields.toggle(layer)}-minus`).toggleClass(
    'hidden',
    !condition,
  );
};

const getLayerValues = layer => ({
  thickness: jQuery(HTMLContainers.layerFields.thickness(layer)).val(),
  foamType: jQuery(HTMLContainers.layerFields.foamType(layer)).val(),
});

const makeSetLayerValues = formValues => layer => {
  const { thickness, foamType } = formValues[`layer${layer}`];

  if (thickness) {
    jQuery(HTMLContainers.layerFields.thickness(layer)).val(thickness);
  }

  if (foamType) {
    jQuery(HTMLContainers.layerFields.foamType(layer)).val(foamType);
  }
};

export const getFormValues = () => {
  const formValues = {
    base: [
      ...jQuery(HTMLContainers.baseFields.field()).map((_, field) =>
        jQuery(field).val(),
      ),
    ],
    layer1: getLayerValues(1),
  };

  if (hasLayer2) {
    formValues.layer2 = getLayerValues(2);
  }

  if (hasLayer3) {
    formValues.layer3 = getLayerValues(3);
  }

  return formValues;
};

export const setFormValues = formValues => {
  const setLayerValues = makeSetLayerValues(formValues);

  jQuery(HTMLContainers.baseFields.field()).each(function handler(index) {
    jQuery(this).val(formValues.base[index]);
  });

  setLayerValues(1);

  if (formValues.layer2) {
    setLayerValues(2);
    hasLayer2 = true;
  }

  if (formValues.layer3) {
    setLayerValues(3);
    hasLayer3Toggle = true;
    hasLayer3 = true;
  }

  toggleLayers();
  [2, 3].forEach(layer => toggleLayerToggler(layer));
  calculatePrice();
};

jQuery(HTMLContainers.layerFields.toggle(2)).click(() => {
  hasLayer2 = !hasLayer2;
  hasLayer3Toggle = hasLayer2;

  if (!hasLayer2) {
    hasLayer3 = false;

    resetLayerFields([2, 3]);
    toggleLayerToggler(3);
  }

  toggleLayerToggler(2);
  toggleLayers();
  calculatePrice();
});

jQuery(HTMLContainers.layerFields.toggle(3)).click(() => {
  hasLayer3 = !hasLayer3;

  if (!hasLayer3) {
    resetLayerFields([3]);
  }

  toggleLayerToggler(3);

  toggleLayers();
  calculatePrice();
});
