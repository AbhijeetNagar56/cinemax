# Architecture

**Project:** Movie Streaming Web App (working title: *MovieStream*)
**Stack:** HTML, CSS, JavaScript, React (only)
**Scope:** Frontend-focused, with a slight "backend" layer handled on the client side

---

## 1. Overview

A Netflix-style streaming web app. Movie data comes from a public API (TMDB) or a local `movies.json`. User accounts, watchlist and watch history are stored in the browser with `localStorage`. There is no custom server, which keeps the project within the course constraint.

```
┌──────────────┐     fetch()      ┌─────────────────────┐
│  React App   │ ───────────────► │ TMDB API / movies.json│
│  (Browser)   │ ◄─────────────── │  (movie data)        │
└──────┬───────┘                  └─────────────────────┘
       │ read / write
       ▼
┌──────────────┐
│ localStorage │  users, session, watchlist, watch history
└──────────────┘
       │ embed
       ▼
┌──────────────┐
│ YouTube      │  trailers (iframe embed)
│ <video> tag  │  free/open-licensed full videos
└──────────────┘
```

---

## 2. Layers

| Layer | Responsibility | Where |
|---|---|---|
| Presentation | Pages and reusable UI components | `pages/`, `components/` |
| State | Logged-in user, watchlist, global UI state | `context/` |
| Service ("slight backend") | API calls, auth logic, storage helpers | `services/` |
| Data | TMDB responses, fallback JSON, localStorage | `data/`, browser |

---

## 3. Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── MovieRow.jsx
│   ├── MovieCard.jsx
│   ├── VideoPlayer.jsx
│   ├── SearchBar.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Browse.jsx
│   ├── MovieDetails.jsx
│   ├── Watch.jsx
│   ├── MyList.jsx
│   └── Login.jsx
├── services/
│   ├── api.js          // all fetch calls to TMDB / JSON
│   ├── authService.js  // signup, login, logout (localStorage)
│   └── storage.js      // watchlist + history helpers
├── context/
│   ├── AuthContext.jsx
│   └── ListContext.jsx
├── data/
│   └── movies.json     // fallback local data
├── styles/
│   └── *.css
├── App.jsx             // routes
└── main.jsx
```

---

## 4. Page Layout (Home)

```
┌──────────────────────────────────────────────────────────────┐
│ NAVBAR  [Logo] Home | Movies | Genres ▼ | Top Rated | My List│
│                         [🔍 Search]        [Profile / Login] │
├──────────────────────────────────────────────────────────────┤
│ HERO    Featured movie: backdrop, title, rating, description │
│         [ ▶ Play ] [ + My List ] [ ℹ More Info ]             │
├──────────────────────────────────────────────────────────────┤
│ ROW     Trending Now      [card][card][card][card] →         │
│ ROW     Adventure         [card][card][card][card] →         │
│ ROW     Sci-Fi            [card][card][card][card] →         │
│ ROW     Top Rated (8+)    [card][card][card][card] →         │
│ ROW     Continue Watching [card + progress bar]    →         │
├──────────────────────────────────────────────────────────────┤
│ FOOTER  About | Contact | Terms | TMDB attribution           │
└──────────────────────────────────────────────────────────────┘
```

Navbar and Footer are shared by every page. Only the middle section changes.

---

## 5. Component Tree

```
App
├── AuthProvider
│   └── ListProvider
│       ├── Navbar
│       ├── Routes
│       │   ├── Home
│       │   │   ├── Hero
│       │   │   └── MovieRow (×N) → MovieCard (×N)
│       │   ├── Browse      → SearchBar, genre filter, MovieCard grid
│       │   ├── MovieDetails → trailer iframe, info, MovieRow (similar)
│       │   ├── Watch       → VideoPlayer
│       │   ├── MyList      (ProtectedRoute) → MovieCard grid
│       │   └── Login
│       └── Footer
```

`MovieRow` is one reusable component called many times with a different `title` and `movies` array. Genre and rating rows are just filters on the data.

---

## 6. Routing

| Path | Page | Protected |
|---|---|---|
| `/` | Home | No |
| `/browse` | Browse (search, genre, sort) | No |
| `/browse?genre=Adventure` | Browse filtered by genre | No |
| `/movie/:id` | Movie Details | No |
| `/watch/:id` | Watch / Player | Yes |
| `/my-list` | Watchlist | Yes |
| `/login` | Login / Signup | No |

Protected routes redirect to `/login` when no user is in `AuthContext`.

---

## 7. Data Model

**Movie (from TMDB or JSON)**
```json
{
  "id": 157336,
  "title": "Interstellar",
  "overview": "...",
  "poster_path": "/xyz.jpg",
  "backdrop_path": "/abc.jpg",
  "vote_average": 8.7,
  "release_date": "2014-11-05",
  "genre_ids": [12, 18, 878]
}
```

**localStorage keys**
```
users          → [{ id, name, email, password }]
currentUser    → { id, name, email }
watchlist_<id> → [movieId, movieId, ...]
history_<id>   → [{ movieId, progress, updatedAt }]
```

> Note: passwords in `localStorage` are for course demo purposes only. This is not real security. Do not reuse real passwords.

---

## 8. Data Flow Examples

**Load Home**
1. `Home` mounts → `useEffect` calls `api.getTrending()`, `api.getByGenre()`
2. Loading state shown → data arrives → state updated
3. Rows render; Hero picks the top or a random movie

**Add to My List**
1. Click `+` on `MovieCard` → `ListContext.addMovie(id)`
2. Context updates state and writes to `localStorage`
3. `MyList` page re-renders from context

**Login**
1. Form submit → `authService.login(email, password)`
2. Match against `users` in `localStorage`
3. Success → `AuthContext` stores user → redirect to Home

---

## 9. Video Strategy

| Use | Source | Why |
|---|---|---|
| Trailers (Details page) | YouTube iframe embed via TMDB `/videos` key | Embedding is the standard, accepted approach |
| Full playback (Watch page) | Open-licensed films (Big Buck Bunny, Sintel, Tears of Steel) or public domain (Internet Archive) | Legal to host yourself |
| Never | Full copyrighted movies; downloaded trailers hosted on your server | Copyright / piracy risk |

---

## 10. Tech Choices

| Need | Choice |
|---|---|
| Framework | React (Vite) |
| Routing | React Router |
| State | `useState`, `useEffect`, `useContext` |
| HTTP | `fetch` with async/await |
| Styling | Plain CSS (or CSS Modules); responsive with Flexbox/Grid |
| Pre-written components (allowed) | Swiper (carousels), React Bootstrap or Material UI (forms, navbar bits) |
| Hand-written (own work) | `MovieCard`, `MovieRow`, `Hero`, API service, auth logic, watchlist logic |

---

## 11. Deployment

- Build: `npm run build`
- Host: Netlify, Vercel or GitHub Pages (static hosting is enough)
- Keep the TMDB API key in an environment variable (`VITE_TMDB_KEY`). Note that any key used in frontend code is visible in the browser, so use only a free, low-risk key.
- Add TMDB attribution in the footer.
- Do not run ads or charge money.