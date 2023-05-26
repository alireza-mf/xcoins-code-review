## Usage

1. Firstly create `.env` file and put variables with proper values (See `.env.example`)

2. Install dependencies:

```shell
npm i
```

3. Build the project:

```shell
npm run build
```

To run tests:

```shell
npm test
```

## Code-review improvements

- Added `.gitignore` and `.env.example` files.
- Removed unused dependencies. Moved dependencies that belong to development (like TS related dependencies) to their correct place.
- Added eslint rules and formatted files, removed unnecessary logs, converted `var` declarations to `const`.
- Redundant `cors` and `express` instance were found and removed from Simulator router file.
- Fixed incossistent camel-cased field in Simulator model (`dateRecorded` -> `date_recorded`). Two unneeded fields were found and removed in `seed.ts` file around line 35.
- Mongoose was being connected in an asynchronous way, and http server could be started before the mongoose connection. With some workaround, now we are sure mongoose is connected first.
- Added graceful shut-down process, making sure db and http server are being closed properly.
- Added response handler functions and put proper http status codes for each response (eg. `201 Created` for createProfile route.).
- Restructred routes by adding versioning (eg. `/v1`), separating routers and controller in files, renamed entity nouns in routes to their plural forms as its the REST API standard (eg. `/favorite` -> `/favorites`).
- Introduced interfaces section which contains comprehensive interfaces for all routes (including types for params, bodies, queries and responses) together with `jsDoc` annotations, enums and common types. Afterwards, connected route interfaces to their controller methods in a generic way.
- Added `errorHandler` middleware for facing unexpected internal errors.
- Added validation middleware which validates request inputs against json-schemas. Also added schemas for each route.
- Implemented tests for all routes using `jest` and `supertest` libraries.
- Added scripts in package.json for linting and running tests.
- There was a minor issue with `checkEnv` function, which could go wrong when env variable was `false` or `0`. Now it is being compared with `""` or `undefined` to behave more accurate.

**Note:** Since this is a review and optimization task, tried to add no extra product-related features (eg. authentication), database fields, routes or framework. Only optimized the current codebase with it's features as much as it become more reliable, efficient and safer for production environment.
