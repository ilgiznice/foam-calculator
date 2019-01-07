import { HTMLContainers, INPUT_PLACEHOLDER } from '../constants';
import { getMaterials, validateInputValue, calculatePrice } from '../utils';

const Thickness = layer => {
  const wrapper = $('<div />', {
    class: 'form-group col-sm-12 col-md-6 thickness-wrapper',
  });
  const label = $('<label></label>').text('Thickness');
  const input = $('<input />', {
    id: HTMLContainers.layerFields.thickness(layer, false),
    class: 'form-control',
    placeholder: INPUT_PLACEHOLDER,
  }).on('keyup', validateInputValue);

  wrapper.append(label, input);

  return wrapper;
};

const LearnMore = () => {
  const link = $('<a />', { class: 'modal-togggle' });
  const image = $('<img />', { src: 'svg/information.svg' });
  const text = 'Learn more about foam types';

  link.append(image, text);

  return link;
};

const FoamType = layer => {
  const materialTypes = getMaterials();
  const wrapper = $('<div />', {
    class: 'form-group col-sm-12 col-md-6',
  });
  const label = $('<label />').text('Foam Type');
  const select = $('<select />', {
    id: HTMLContainers.layerFields.foamType(layer, false),
    class: 'form-control',
  }).on('change', calculatePrice);
  const options = materialTypes.map(({ price, description }) =>
    $('<option />', {
      val: price,
    }).text(description),
  );
  const emptyOption = $('<option selected disabled />').text('Select');

  select.prop('selectedIndex', 0).append(emptyOption, options);
  wrapper.append(label, select);

  if (layer === 1) {
    wrapper.append(LearnMore());
  }

  return wrapper;
};

export const LayerFields = () => {
  [1, 2, 3].forEach(layer => {
    const thickness = Thickness(layer);
    const foamType = FoamType(layer);

    $(HTMLContainers.layerFields.container(layer))
      .html('')
      .append(thickness, foamType);
  });
};
