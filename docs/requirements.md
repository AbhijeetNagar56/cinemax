# Requirements

**Project:** Movie Streaming Web App (working title: *MovieStream*)
**Context:** Full-stack development course project (frontend-focused, slight backend)

---

## 1. Project Constraints

- Allowed technologies: **HTML, CSS, JavaScript, React** only
- Backend is limited to a "slight" layer handled on the client (API calls, `localStorage`)
- Code must be written by the student. Pre-written UI components and libraries are allowed.
- The app will be **deployed publicly**, so content licensing matters

---

## 2. Functional Requirements

### 2.1 Navigation and Layout
| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Navbar on every page with logo, Home, Movies, Genres dropdown, Top Rated, My List, search, and profile/login | Must |
| FR-02 | Footer on every page with About, Contact, Terms and TMDB attribution | Must |
| FR-03 | Responsive layout with a mobile hamburger menu | Should |

### 2.2 Home Page
| ID | Requirement | Priority |
|---|---|---|
| FR-04 | Hero section showing a featured movie (backdrop, title, rating, year, description) | Must |
| FR-05 | Hero buttons: Play, Add to My List, More Info | Must |
| FR-06 | Horizontal rows: Trending, Adventure, Sci-Fi, Top Rated (rating >= 8) | Must |
| FR-07 | Continue Watching row for logged-in users, with a progress bar | Should |
| FR-08 | Movie cards show poster, title, rating and year, with a hover effect and quick actions | Must |

### 2.3 Browse and Search
| ID | Requirement | Priority |
|---|---|---|
| FR-09 | Browse page showing a grid of movies | Must |
| FR-10 | Filter by genre from the Navbar dropdown | Must |
| FR-11 | Search by title with debounced input | Must |
| FR-12 | Sort by rating or release year | Should |
| FR-13 | Empty state when nothing matches | Should |

### 2.4 Movie Details
| ID | Requirement | Priority |
|---|---|---|
| FR-14 | Details page with poster, overview, rating, genres, release date and cast | Must |
| FR-15 | Embedded YouTube trailer (via iframe) | Must |
| FR-16 | "Similar movies" row | Could |

### 2.5 Player
| ID | Requirement | Priority |
|---|---|---|
| FR-17 | Watch page with an HTML5 `<video>` player and controls | Must |
| FR-18 | Playback progress saved and resumed | Should |

### 2.6 Authentication (Slight Backend)
| ID | Requirement | Priority |
|---|---|---|
| FR-19 | Signup and login forms with validation | Must |
| FR-20 | Session persisted across refresh using `localStorage` | Must |
| FR-21 | Protected routes (`/watch/:id`, `/my-list`) redirect to Login | Must |
| FR-22 | Logout | Must |

### 2.7 Watchlist and History
| ID | Requirement | Priority |
|---|---|---|
| FR-23 | Add and remove movies from My List | Must |
| FR-24 | My List page showing saved movies | Must |
| FR-25 | List and history stored per user | Should |

---

## 3. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | **Performance:** initial Home load under about 3 seconds on a normal connection; lazy-load images |
| NFR-02 | **Usability:** loading indicators and clear error messages for failed API calls |
| NFR-03 | **Responsiveness:** works on mobile (360px), tablet and desktop |
| NFR-04 | **Accessibility:** alt text on images, keyboard-focusable controls, readable contrast |
| NFR-05 | **Maintainability:** reusable components, API calls isolated in `services/`, consistent naming |
| NFR-06 | **Browser support:** latest Chrome, Edge, Firefox and Safari |
| NFR-07 | **Version control:** regular Git commits with meaningful messages |

---

## 4. Data and Content Requirements

| Item | Source |
|---|---|
| Movie metadata, posters, backdrops | TMDB API (free key) or local `movies.json` fallback |
| Trailers | YouTube embeds via the TMDB `/videos` endpoint |
| Full-length playback | Open-licensed or public-domain videos only (Big Buck Bunny, Sintel, Tears of Steel, Internet Archive classics) |
| Users, session, watchlist, history | Browser `localStorage` |

---

## 5. Legal and Compliance

- Show the TMDB attribution: *"This product uses the TMDB API but is not endorsed or certified by TMDB."*
- Do **not** host or download copyrighted full movies.
- Do **not** download trailers and serve them from your own server. Embed from YouTube instead.
- Do not run ads or charge money (keep it a portfolio or course project).
- Check trademarks and domain availability before using the app name publicly.
- `localStorage` auth is for demo only. Do not collect real passwords or personal data.

---

## 6. Technical Requirements

**Tools**
- Node.js (LTS) and npm
- Vite + React
- React Router
- Git and GitHub
- VS Code
- A free TMDB account and API key

**Optional pre-written libraries**
- Swiper (carousels)
- React Bootstrap or Material UI (forms, navbar elements)
- React Icons

**Code the student writes personally**
- `MovieCard`, `MovieRow`, `Hero`, `Navbar` logic
- `services/api.js`, `authService.js`, `storage.js`
- Context providers and protected routes
- Search, filter and sort logic

---

## 7. Deliverables

- Working, deployed web app with a live link
- GitHub repository with clean commit history
- `README.md` with features, screenshots, setup steps and tech stack
- `architecture.md`, `phases.md` and `requirements.md`
- Short demo or presentation for the course

---

## 8. Out of Scope

- Custom server, database or real authentication
- Payments and subscriptions
- Streaming full copyrighted films
- Recommendation algorithms and user-generated content
- Video transcoding or adaptive streaming (HLS/DASH)