# Volto Carousel Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-carousel-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-carousel-block)
[![Build Status](https://github.com/kitconcept/volto-carousel-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-carousel-block/actions)
[![Build Status](https://github.com/kitconcept/volto-carousel-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-carousel-block/actions)
[![Build Status](https://github.com/kitconcept/volto-carousel-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-carousel-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Carousel Block allows editors to add a carousel to a Volto page.

## Screenshot

![Carousel-Block](https://github.com/kitconcept/volto-carousel-block/raw/master/screenshot.png)

## Screencast

https://user-images.githubusercontent.com/486927/164645687-f1318004-aa32-4438-8adc-45f623714649.mov

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-carousel-block
cd my-volto-project
```

Add `@kitconcept/volto-carousel-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-carousel-block"
],

"dependencies": {
    "@kitconcept/volto-carousel-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The carousel block will show up in the Volto blocks chooser.

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
