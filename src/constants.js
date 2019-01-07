const RECTANGLE = 'RECTANGLE';
const TRIANGLE = 'TRIANGLE';
const TRAPEZIUM = 'TRAPEZIUM';
const CHAIR = 'CHAIR';
const CLIPPED = 'CLIPPED';
const L_SHAPED = 'L_SHAPED';
const T_SHAPED = 'T_SHAPED';
const V_SHAPED = 'V_SHAPED';
const CIRCULAR = 'CIRCULAR';

export const ORDER = [
  RECTANGLE,
  TRIANGLE,
  TRAPEZIUM,
  CHAIR,
  CLIPPED,
  L_SHAPED,
  T_SHAPED,
  V_SHAPED,
  CIRCULAR,
];

export const IMAGE_PATHS = {
  RECTANGLE: 'custom-square-rectangle-foam.jpg',
  TRIANGLE: 'wedge-custom-cushion.jpg',
  TRAPEZIUM: 'trapezoid-custom-foam-cushion.jpg',
  CHAIR: 'chair_cushion_custom_foam.jpg',
  CLIPPED: 'clipped-bolster-custom-foam-cushion.jpg',
  L_SHAPED: 'l-custom-foam-cushion.jpg',
  T_SHAPED: 't-shape-custom-cushion.jpg',
  V_SHAPED: 'split-v-berth-custom-foam-cushion.jpg',
  CIRCULAR: 'circular-cushion-or-bed.jpg',
};

export const SHAPE_NAMES = {
  RECTANGLE: 'Rectangle or Square Cushion',
  TRIANGLE: 'Triangle or *Wedge Cushion',
  TRAPEZIUM: 'V-Berth / Trapezoid Cushion',
  CHAIR: 'Chair Cushion',
  CLIPPED: 'Clipped Bolster Cushion',
  L_SHAPED: 'L Shaped Cushion',
  T_SHAPED: 'T Shaped Cushion',
  V_SHAPED: 'Split V-Berth Cushion',
  CIRCULAR: 'Circular Cushion or Mattress',
};

export const FIELDS = {
  RECTANGLE: {
    fields: [
      { name: '(1) Length', dimension: 'x' },
      { name: '(2) Width', dimension: 'y' },
    ],
    thicknessName: 'Thickness',
  },
  TRIANGLE: {
    fields: [
      { name: '(2) Length', dimension: 'x' },
      { name: '(3) Width', dimension: 'y' },
    ],
    thicknessName: '(1) Thickness',
  },
  TRAPEZIUM: {
    fields: [
      { name: '(1) Top' },
      { name: '(3) Length', dimension: 'x' },
      { name: '(4) Bottom', dimension: 'y' },
    ],
    thicknessName: '(2) Thickness',
  },
  CHAIR: {
    fields: [
      { name: '(1) Length to radius', dimension: 'x' },
      { name: '(2) Base Length', dimension: 'y' },
      { name: '(4) Radius', dimension: 'x' },
    ],
    thicknessName: '(3) Thickness',
  },
  CLIPPED: {
    fields: [
      { name: '(1) Top' },
      { name: '(3) Length', dimension: 'x' },
      { name: '(4) Bottom', dimension: 'y' },
      { name: '(5) Side' },
    ],
    thicknessName: '(2) Thickness',
  },
  L_SHAPED: {
    fields: [
      { name: '(1) Top' },
      { name: '(3) Length', dimension: 'x' },
      { name: '(4) Center' },
      { name: '(5) Ear Height' },
      { name: '(6) Bottom', dimension: 'y' },
    ],
    thicknessName: '(2) Thickness',
  },
  T_SHAPED: {
    fields: [
      { name: '(1) Top', dimension: 'x' },
      { name: '(3) Ear length', dimension: 'y' },
      { name: '(4) Ear depth' },
      { name: '(5) Center Length', dimension: 'y' },
      { name: '(6) Bottom' },
    ],
    thicknessName: '(2) Thickness',
  },
  V_SHAPED: {
    fields: [
      { name: '(1) Back / Top' },
      { name: '(3) Length', dimension: 'x' },
      { name: '(4) Front / Bottom', dimension: 'y' },
    ],
    thicknessName: '(2) Thickness',
  },
  CIRCULAR: {
    fields: [{ name: '(2) Diameter', dimension: 'x', weight: 2 }],
    thicknessName: '(1) Thickness',
  },
};

export const HTMLContainers = {
  materials: {
    container: '#material-types',
    price: 'material-price',
    description: 'material-description',
  },
  carousel: {
    content: '#carousel-content',
    prevArrow: '#slider-prev',
    nextArrow: '#slider-next',
  },
  foamShape: '#foam-shape',
  baseFields: {
    container: '#base-fields',
    field: (isSelector = true) => `${isSelector ? '.' : ''}base-field`,
  },
  layerFields: {
    container: (layer, isSelector = true) =>
      `${isSelector ? '#' : ''}layer-${layer}-fields`,
    toggleContainer: (layer, isSelector = true) =>
      `${isSelector ? '#' : ''}layer-${layer}-toggle-container`,
    toggle: (layer, isSelector = true) =>
      `${isSelector ? '#' : ''}layer-${layer}-toggle`,
    thickness: (layer, isSelector = true) =>
      `${isSelector ? '#' : ''}layer-${layer}-thickness`,
    foamType: (layer, isSelector = true) =>
      `${isSelector ? '#' : ''}layer-${layer}-foam-type`,
  },
  cart: '#cart',
  price: '#price',
  _price: '[data-drupal-selector="edit-unit-price-0-amount-number"]',
  _description: '[data-drupal-selector="description"]',
};

export const IMAGE_FOLDER_PATH = 'images';

export const DECIMAL_REG_EXP = /^\d*(\.\d*)?\d$/;

export const INPUT_PLACEHOLDER = 'How many inches?';
