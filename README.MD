# Custom foam calculator

## How to develop?

Run "npm run start", open dist/index.html

## How to build?

Run "npm run build"

## Code structure

```
-src
--components
---BaseField (width, length, ...)
---Carousel (carousel with events)
---Error (only decimals error)
---FoamShape (select with events)
---LayerField (thickness and foam type for each layer)
--constants (shapes, order, fields, images, html containers, etc)
--utils (shared functions like calculating price or managing layers)
--index (main entry point)
```

## How to change hidden price and description field names?

Go to src/constants and change "\_price" and "\_description" values in HTMLContainers

## How to add/change/reorder shape?

1. Go to src/constants
2. Add new constant, for example "const NEW_FORM = 'NEW FORM'"
3. Insert constant inside ORDER
4. Add image for shape inside IMAGE_PATHS
5. Name shape inside SHAPE_NAMES
6. Add field for shape inside FIELDS

## How to change materials' wrapper and data attributes?

Go to src/constants and change container, price, description of materials in HTMLContainers
