# Exploring Bundling Next.js Project Contents

This repository explores patterns for bundling Next.js project contents for use in other Next.js applications. It is configured as a monorepo that contains two types of packages: Bundles and Applications.

Bundles are Next.js Applications that provide bundled functionality for use in _other_ applications.
Applications are generic Next.js applications with varying build settings used to evaluate the compatiblity of a bundle.

## Why Bundle Functionality?
- OAuth2 libraries providing a Next.js `page` for completing an OAuth2 flow.
- General page sharing between Next.js applications.

# Running

1. Build the `bundle` package: `npx lerna run build --scope bundle`
2. Run the Next.js applications:
    - `npx lerna run dev --scope my-app`
      - JavaScript-based Next.js project created with `npx create-next-app@latest`
    - `npx lerna run dev --scope my-typescript-app`
      - Typescript-based Next.js project created with `npx create-next-app@latest`


# `bundle` Package (Using ESBuild to Bundle Pages)

This is the first attempt at making a package that can be used in other Next.js applications. 

- The code was bootstrapped with `npx create-next-app@latest`
- Custom content was added to the `src/pages/index.tsx` file
- `esbuild` was added as a dev dependency
- `bundle.mjs` is used to bundle the desired shared entry points
- The `package.json` file was updated to include the bundled output as `exports`

## Requirements in Bundled Pages
- **Must explicitly import `React`**.

## Known Issues
- There seems to be an issue with `next/font/google"` in downstream applications – I've just disabled this for now.
