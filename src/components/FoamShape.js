import { ORDER, SHAPE_NAMES, HTMLContainers, FIELDS } from '../constants';
import { resetLayers, toggleLayerToggler } from '../utils';
import { BaseFields } from './BaseFields';

export const FoamShape = () => {
  const options = ORDER.map((shape, index) =>
    $('<option></option>', {
      value: shape,
      'data-index': index,
    }).text(SHAPE_NAMES[shape]),
  );

  $(HTMLContainers.foamShape)
    .append(options)
    .on('change', function handler() {
      const $this = $(this);
      const foamShape = $this.val();
      const index = $this.find(':selected').data('index');

      BaseFields(foamShape);

      resetLayers();
      [2, 3].forEach(layer => toggleLayerToggler(layer));

      $(HTMLContainers.carousel.content).slick('slickGoTo', index, true);
      [1, 2, 3].forEach(layer => {
        $(HTMLContainers.layerFields.thickness(layer)).val('');
        $(HTMLContainers.layerFields.foamType(layer)).prop('selectedIndex', 0);
      });

      $(HTMLContainers.layerFields.thickness(1))
        .parent('.thickness-wrapper')
        .find('label')
        .text(FIELDS[foamShape].thicknessName);
    })
    .trigger('change');
};
