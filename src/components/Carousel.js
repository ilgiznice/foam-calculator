import {
  ORDER,
  IMAGE_PATHS,
  SHAPE_NAMES,
  HTMLContainers,
  IMAGE_FOLDER_PATH,
} from '../constants';

const getImgSrc = shape => `${IMAGE_FOLDER_PATH}/${IMAGE_PATHS[shape]}`;

export const Carousel = () => {
  const $container = $(HTMLContainers.carousel.content);
  const content = ORDER.map((shape, i) => {
    const wrapper = $('<div />', {
      class: `item ${i === 0 ? 'active' : ''}`,
      'data-index': i,
      'data-shape': shape,
    });
    const img = $('<img />', {
      src: getImgSrc(shape),
      alt: SHAPE_NAMES[shape],
    });

    wrapper.append(img);

    return wrapper;
  });

  $container.append(content);

  $container.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $(HTMLContainers.carousel.prevArrow),
    nextArrow: $(HTMLContainers.carousel.nextArrow),
  });

  $container.on('beforeChange', (a, b, c, nextSlide) => {
    $(HTMLContainers.foamShape)
      .prop('selectedIndex', nextSlide)
      .trigger('change');
  });
};
