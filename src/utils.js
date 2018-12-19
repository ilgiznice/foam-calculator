import { Error } from './components/Error';
import { HTMLContainers, DECIMAL_REG_EXP } from './constants';

let hasLayer2 = false;
let hasLayer3Toggle = false;
let hasLayer3 = false;

export const toggleLayers = () => {
  $(HTMLContainers.layerFields.container(2)).toggleClass('hidden', !hasLayer2);
  $(HTMLContainers.layerFields.toggleContainer(3)).toggleClass(
    'hidden',
    !hasLayer3Toggle,
  );
  $(HTMLContainers.layerFields.container(3)).toggleClass('hidden', !hasLayer3);
};

export const resetLayers = () => {
  hasLayer2 = false;
  hasLayer3Toggle = false;
  hasLayer3 = false;

  toggleLayers();
};

export const getMaterials = () => [
  ...$(HTMLContainers.materialTypes)
    .find('div')
    .map(function handler() {
      const materialType = $(this);
      const {
        materialPrice: price,
        materialDescription: description,
      } = materialType.data();

      return {
        price,
        description,
      };
    }),
];

const getBaseValues = () =>
  [...$(HTMLContainers.baseFields.field())].reduce((baseValues, field) => {
    const $field = $(field);
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
    $(HTMLContainers.layerFields.thickness(layer)).val(),
    $(HTMLContainers.layerFields.foamType(layer)).val(),
  ];
  return [...baseValues, ...layerValues].reduce((price, val) => price * val, 1);
};

export const calculatePrice = () => {
  const baseValues = getBaseValues();
  const getLayerValues = makeGetLayerPrice(baseValues);

  const layer1Price = getLayerValues(1);
  const layer2Price = hasLayer2 ? getLayerValues(2) : 0;
  const layer3Price = hasLayer3 ? getLayerValues(3) : 0;

  let totalPrice = (layer1Price + layer2Price + layer3Price) / 144;

  if (hasLayer2 && layer2Price) totalPrice += 5;
  if (hasLayer3 && layer3Price) totalPrice += 5;

  $('#cart').toggleClass('cart-not-available', totalPrice < 5);
  $('#price').text('');

  if (totalPrice > 5) {
    $('#price').text(`$ ${totalPrice.toFixed(2)}`);
  }
};

export const validateInputValue = function handler() {
  const $this = $(this);
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

const resetLayerFields = (...layers) =>
  layers.forEach(layer => {
    $(HTMLContainers.layerFields.thickness(layer)).val('');
    $(HTMLContainers.layerFields.foamType(layer)).val('');
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

  $(`${HTMLContainers.layerFields.toggle(layer)}-plus`).toggleClass(
    'hidden',
    condition,
  );
  $(`${HTMLContainers.layerFields.toggle(layer)}-minus`).toggleClass(
    'hidden',
    !condition,
  );
};

$(HTMLContainers.layerFields.toggle(2)).click(() => {
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

$(HTMLContainers.layerFields.toggle(3)).click(() => {
  hasLayer3 = !hasLayer3;

  if (!hasLayer3) {
    resetLayerFields(3);
  }

  toggleLayerToggler(3);

  toggleLayers();
  calculatePrice();
});
