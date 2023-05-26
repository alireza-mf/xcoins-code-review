# Usage

# Code-review improvements

- Added `.gitignore` and `.env.example` files.
- Removed unused dependencies. Moved dependencies that belongs to development (Like TS related dependencies), to their correct place.
- Added eslint rules and formatted files, removed unnessecary logs, converted `var` declarations to `const`.
- Redundant `cors` and `express` instance was found and removed from Simulator router file.
- Mongoose was being connected in an asyncronous way, and http server could be started before the mongoose connection. With some workaround, now we are sure mongoose is connected first.
- Added gracefull shut-down process, making sure db and http server is being closed properly.
- Added response handler functions and put proper http status codes for each response (eg. `201 Created` for createProfile route.).
- Restructred routes by adding versioning (eg. `/v1`), separating routers and controller in files, renamed entity nouns in routes to their plural forms as its the REST API standard (eg. `/favorite` -> `/favorites`).
- Introduced interfaces section which contains comprehensive interfaces for all routes (including types for params, bodies, queries and responses) together with `jsDoc` annotations, enums and common types. Afterwards connected route interfaces to their controller methods in a generic way.
- Added `errorHandler` middleware for facing with unexpected internal errors.
- Added validation middleware which validates request inputs using json-schemas. Also schemas added for routes.
