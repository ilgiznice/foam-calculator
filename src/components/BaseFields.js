import { FIELDS, HTMLContainers, INPUT_PLACEHOLDER } from '../constants';
import { validateInputValue } from '../utils';

export const BaseFields = shape => {
  const foamFields = FIELDS[shape].fields.map(field => {
    const wrapper = jQuery('<div />', {
      class: 'form-group col-sm-12 col-md-6 base-field-wrapper',
    });
    const label = jQuery('<label></label>').text(field.name);
    const attributes = {
      class: `form-control ${HTMLContainers.baseFields.field(false)}`,
      placeholder: INPUT_PLACEHOLDER,
    };

    if (field.dimension) {
      attributes['data-dimension'] = field.dimension;
    }

    if (field.weight) {
      attributes['data-weight'] = field.weight;
    }

    const input = jQuery('<input />', attributes);

    input.on('keyup', validateInputValue);

    wrapper.append(label, input);

    return wrapper;
  });

  jQuery(HTMLContainers.baseFields.container)
    .html('')
    .append(foamFields);
};
