## Clean install a project

npm ci

## Install a package

npm install

## Install Parcel - for live reload

npm install --save-dev parcel

## GULP

`gulp build`

`build-watchify`

## Run with Parcel for live reload

npx parcel index.html

and try http://localhost:1234/

## Type Doc

# Install

npm install --save-dev typedoc

npm install --save-dev typedoc typedoc-plugin-md

# Execute typedoc

### HTML version

npx typedoc --options typedoc.json

npx typedoc --out ./docs ./src/scripts/index.ts

npx typedoc --out ./docs --entryPointStrategy expand ./src/scripts

### Markdown documentation

npx typedoc --plugin typedoc-plugin-md --out ./docs ./src/scripts/index.ts

npx typedoc --plugin typedoc-plugin-md --out ./docs --entryPointStrategy expand ./src/scripts
