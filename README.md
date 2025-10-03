# Movies App (React + Vite)

A simple movies browser built with React and Vite that uses The Movie Database (TMDB) API to display trending movies,
search for titles, and view movie details including cast and reviews. The app uses React Router for client-side routing
and Axios/fetch for data fetching.

Note: This README replaces the default Vite template and documents the actual project. Unknown or not-yet-implemented
details are marked as TODO.

## Overview

Features:

- Browse trending movies (daily)
- Search movies by title
- View movie details
- View cast and reviews on nested routes
- Smooth “scroll to top” control

Routing:

- `/` — Home (trending)
- `/movies` — Search
- `/movie/:id` — Movie detail page
    - `/movie/:id/cast` — Cast subpage
    - `/movie/:id/reviews` — Reviews subpage

## Tech Stack

- Language: JavaScript (ESNext)
- Framework/Library: React 19
- Router: React Router v7
- Build Tool/Bundler: Vite 7
- Styling: CSS Modules (e.g., `*.module.css`) and plain CSS
- UI: Material UI (@mui/material) is installed and may be used in components
- HTTP: axios and native fetch
- Linting: ESLint 9

## Requirements

- Node.js >= 18 (required by Vite 7 and ESLint 9)
- npm >= 9 (or a compatible npm bundled with your Node version)

## Getting Started

1. Install dependencies
    - npm install

2. Start the development server
    - npm run dev
    - Open the printed local URL (typically http://localhost:5173)

3. Build for production
    - npm run build

4. Preview the production build locally
    - npm run preview

5. Lint the project
    - npm run lint

## Scripts (from package.json)

- dev: Start Vite dev server
- build: Build the app for production
- preview: Preview the production build
- lint: Run ESLint on the project

## Entry Points

- HTML entry: `index.html` (mounts React root at `<div id="root" />`)
- JS entry: `src/main.jsx` (creates root and renders `<App />` wrapped in `<BrowserRouter />`)
- App root: `src/App.jsx` (declares routes and layout)

## Environment Variables

The project currently uses a TMDB API token that is hardcoded in `src/utils/api.js` as `API_KEY` (Bearer token).

- Current behavior: `src/utils/api.js` sets `API_KEY` and also configures axios defaults. Fetch requests use the same
  token via Authorization header.
- Recommended: Move the token into a Vite environment variable (e.g., `VITE_TMDB_TOKEN`) and load it from
  `import.meta.env.VITE_TMDB_TOKEN`. Do not commit real tokens.

Suggested steps (TODO):

1. Create a `.env.local` file (ignored by Git) with:
    - VITE_TMDB_TOKEN=your_tmdb_bearer_token_here
2. Update `src/utils/api.js` to read from `import.meta.env.VITE_TMDB_TOKEN`.
3. Document the need for a TMDB token in this README and remove any hardcoded credentials from source control.

Note: If you intend to deploy publicly, consider using TMDB API key configuration that complies with TMDB Terms and
security best practices.

## Project Structure

A simplified view of the relevant folders/files:

- index.html
- vite.config.js
- eslint.config.js
- package.json
- src/
    - main.jsx — App bootstrap (React root + BrowserRouter)
    - App.jsx — Routes and top-level layout
    - index.css, App.css — Global and App styles
    - utils/
        - api.js — TMDB API calls (trending, search, details, cast, reviews)
    - contents/
        - Header/ — Header component
        - MoviesList/ — List component used in pages
    - pages/
        - HomePage/HomePage.jsx — Trending list
        - MoviesPage/Movies.jsx — Search page
        - MovieDetailPage/MovieDetailPage.jsx — Movie details page (parent route)
        - CastPage/CastPage.jsx — Nested route for cast
        - ReviewsPage/ReviewsPage.jsx — Nested route for reviews
        - Each page may have an associated `*.module.css`

## How to Run

1. Ensure Node and npm meet the requirements
2. Install deps: `npm install`
3. Run dev server: `npm run dev`
4. Open the browser at the URL Vite prints (e.g., http://localhost:5173)

## Tests

- No automated tests were found in this repository. TODO: Add tests (e.g., with Vitest or Jest + React Testing Library)
  and document how to run them.

## Known Issues / TODOs

- Security: TMDB API token is hardcoded in `src/utils/api.js` (move to Vite env vars as described above)
- Tests: none present (add unit/integration tests)
- Accessibility and performance audits: not documented (TODO)
- CI/CD: not configured (TODO)

## License

No license file is present in the repository. TODO: Choose and add a LICENSE file (e.g., MIT) and update this section
accordingly.

## Acknowledgements

- Built with React and Vite
- Data provided by The Movie Database (TMDB)
