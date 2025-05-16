<picture>
  <source align="right" width="200" media="(prefers-color-scheme: dark)" srcset="https://kitconcept.com/kitconcept-white.svg">
  <img align="right" width="200" alt="kitconcept, GmbH" src="https://kitconcept.com/kitconcept-black.svg">
</picture>

# Volto Carousel Block (@kitconcept/volto-carousel-block)

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-carousel-block)](https://www.npmjs.com/package/@kitconcept/volto-carousel-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-carousel-block/)
[![Code analysis checks](https://github.com/kitconcept/volto-carousel-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-carousel-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/kitconcept/volto-carousel-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-carousel-block/actions/workflows/unit.yml)

> [!WARNING]
> This add-on is meant to be used in combination with the [volto-light-theme](https://github.com/kitconcept/volto-light-theme). If you plan to use this add-on with plain Volto you will have to write your own styles for it. You can use the existing ones via manual import like this `import "@kitconcept/volto-carousel/theme/_main.scss"` or as reference.

## Compatibility

| version | Volto version | VLT version |
|-------------|---------------|-----------------------|
| 1.x.x       |   >=Volto 18.20.0  | >= 7.0.0-alpha.1 |

## Features

The `@kitconcept/volto-carousel-block` allows editors to add a carousel to a Volto page.

### Looping Behavior (`allowLoop` Setting)
The `allowLoop` setting controls whether looping can be enabled for individual blocks across the site.

- **When `allowLoop` is set to `true`**:
Each block will display a checkbox that allows you to enable or disable looping for that specific block individually.

- **When `allowLoop` is set to false (or omitted)**:
Looping is completely disabled across the entire site. No loop checkboxes will be shown, and blocks cannot be looped.

Make sure to set `allowLoop` to `true` if you want to allow users to toggle looping behavior for specific blocks like this:

```json
config.blocks.blocksConfig.carousel = {
  ...config.blocks.blocksConfig.carousel,
  allowLoop: true,
};
```

## Installation

To install your project, you must choose the method appropriate to your version of Volto.

### Volto 18 and later

Add `@kitconcept/volto-carousel-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-carousel-block": "*"
}
```

Add `@kitconcept/volto-carousel-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-carousel-block'];
```


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```shell
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-carousel-block
cd my-volto-project
```

Add `@kitconcept/volto-carousel-block` to your package.json:

```json
"addons": [
    "@kitconcept/volto-carousel-block"
],

"dependencies": {
    "@kitconcept/volto-carousel-block": "*"
}
```

Download and install the new add-on by running:

```shell
yarn install
```

Start volto with:

```shell
yarn start
```


## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

Generated using [Cookieplone (0.7.1)](https://github.com/plone/cookieplone) and [cookiecutter-plone (4ef2c3b)](https://github.com/plone/cookiecutter-plone/commit/4ef2c3bc541230519660d3d93adc3b49edeb369a) on 2025-03-17 10:52:54.565233. A special thanks to all contributors and supporters!
