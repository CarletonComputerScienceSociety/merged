# Client

# Setup

## Install Yarn

I recommend reading the yarn official setup [guide](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

If you already have npm, run:
```bash
npm install --global yarn
```

## Install dependencies
```bash
yarn install
```

## Start client
```bash
yarn run dev
```

# Other commands

## Start Storybook
```bash
yarn storybook
```

## Run your test
```bash
yarn test
```

## Run ESLint
```bash
yarn run eslint "**/*.ts" --fix
```

## Update Snapshot test
```bash
yarn run test TEST_LOCATION --updateSnapshot
```
