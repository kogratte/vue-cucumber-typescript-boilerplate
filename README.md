
[![Node.js CI](https://github.com/kogratte/vue-cucumber-typescript-boilerplate/actions/workflows/continuousIntegration.yml/badge.svg)](https://github.com/kogratte/vue-cucumber-typescript-boilerplate/actions/workflows/continuousIntegration.yml)

# VueJS + Typescript + Cucumber boilerplate

This boilerplate aims to combine every touchy feature I like to use.

## Prerequisite
You must have the following elements:
- Docker
- Node14.x

## Project setup
To run a dev environment, just use the following command:

```
npm run dev
```

Dev environment will be available at localhost:8080, with HMR.

### Compiles and minifies for production
```
npm run prd
```

This will generate a docker image hosting the website. Application will be accessible on port 80.

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```
