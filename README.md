# RBLI MARS

# Installation

This will require NPM and Yarn installed.

```
yarn install
```

## Overview

This project is powered by `@parcel-bundler/parcel` and `@janl/mustache.js`.

- Run `yarn parcel index.html --open` to start the development server
- Run `yarn parcel build index.html` to build a production-ready node.js server

## Known Issues

There is a known issue with Bootstrap and Parcel due to the structure of the package.json file within the Bootstrap repo. You will need to go into node_modules/boostrap/package.json and change line 42 key from sass to scss. You will need to redo this each time you pull the sources again.
