## Environment Setup

React 18.2.0 now only support bellow node version for development: "^12.17.0 || 13.x || 14.x || 15.x || 16.x || 17.x".

17.x is recommanded.

## Build React

```bash
cd react-18.2.0 && yarn && yarn build
```

## Link Modules

```bash
cd build/node_modules/react && npm link
```

and

```bash
cd .. && cd react-dom && npm link
```

## CRA demo

```bash
npm link react react-dom
```