# Debug React
debug the source code of react in vscode

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

## Cra or Cra eject or Vite demo

```bash
npm link react react-dom
```

## Issues

### For vite

Try to delete .vite folder under node_modules and `npm run dev`, then start debugging.