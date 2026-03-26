# 🎬 Movie List App

A React-based movie discovery and favorites management app powered by [The Movie Database (TMDb) API](https://www.themoviedb.org/).

## Features

- **Browse popular movies** – loads a curated list of popular titles on startup.
- **Search** – real-time search as you type, querying the TMDb search endpoint.
- **Favorites** – add or remove any movie with a single click; your list is saved automatically in `localStorage` so it survives page refreshes.
- **Dark theme** – clean, card-based UI with hover effects and a responsive grid layout.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Routing | React Router DOM v7 |
| Build tool | Vite 6 |
| Styling | Plain CSS |
| Data | TMDb REST API |
| Deployment | GitHub Pages (`gh-pages`) |

## Project Structure

```
src/
├── main.jsx              # Entry point – mounts app inside BrowserRouter
├── App.jsx               # Root component: MovieProvider + route definitions
├── pages/
│   ├── Home.jsx          # Browse & search movies
│   └── Favorites.jsx     # View saved favorites
├── components/
│   ├── NavBar.jsx        # Navigation header (present on every page)
│   └── Moviecard.jsx     # Reusable movie card with favorites toggle
├── contexts/
│   └── MovieContext.jsx  # Global favorites state + localStorage sync
├── Services/
│   └── api.js            # TMDb API helpers (getPopularMovies, searchMovies)
└── css/                  # Component-scoped stylesheets
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- A free [TMDb API key](https://developer.themoviedb.org/docs/getting-started)

### Install & run

```bash
npm install
npm run dev
```

The app is served at `http://localhost:5173` by default.

### Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish to GitHub Pages |

## How It Works

1. **App start** – `App.jsx` wraps the whole tree with `MovieProvider` (context) and `BrowserRouter`.
2. **Home page** – fetches popular movies from TMDb on mount; re-fetches matching results on every keystroke in the search box.
3. **MovieCard** – each card shows the poster, title, and release year. The ♥ button calls `addToFavs` / `removeFromFavs` from context.
4. **MovieContext** – holds the `favorites` array in state; a `useEffect` writes it to `localStorage` whenever it changes, and another reads it back on first render.
5. **Favorites page** – simply reads `favs` from context and renders the same `MovieCard` grid.
