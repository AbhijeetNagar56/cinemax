# Development Phases

**Project:** Movie Streaming Web App (working title: *MovieStream*)

Each phase ends with something that runs. Don't move on until the current phase works.

---

## Phase 0: Planning and Setup
**Goal:** Project skeleton ready.

- [ ] Finalize app name and basic color theme (dark background, one accent color)
- [ ] Get a free TMDB API key
- [ ] Create the project with Vite + React
- [ ] Install React Router
- [ ] Create the folder structure from `architecture.md`
- [ ] Initialize Git and push to GitHub

**Done when:** `npm run dev` shows a blank React app and the repo is on GitHub.

---

## Phase 1: Static UI (hardcoded data)
**Goal:** The Home page frame looks right before any real data exists.

- [ ] `Navbar` (logo, links, search box, login button)
- [ ] `Hero` with one hardcoded movie
- [ ] `MovieCard` (poster, title, rating, year)
- [ ] `MovieRow` (title + horizontal scroll of cards)
- [ ] `Footer`
- [ ] Assemble `Home.jsx` with 3-4 rows using dummy data

**Concepts:** components, props, `.map()` list rendering, Flexbox.
**Done when:** the Home page matches the wireframe with fake data.

---

## Phase 2: Real Data
**Goal:** Replace dummy data with TMDB (or `movies.json`).

- [ ] Write `services/api.js` (trending, by genre, top rated, search, details, videos)
- [ ] Fetch with `useEffect` in `Home`
- [ ] Add loading and error states
- [ ] Hero picks a random or top-rated movie
- [ ] Rows: Trending, Adventure, Sci-Fi, Top Rated (rating >= 8)

**Concepts:** `useEffect`, async/await, state, conditional rendering.
**Done when:** every row shows live movie data.

---

## Phase 3: Routing and Details Page
**Goal:** Multiple pages that share the Navbar and Footer.

- [ ] Set up routes in `App.jsx`
- [ ] `MovieDetails` page at `/movie/:id` (poster, overview, rating, genres, cast)
- [ ] Embed the YouTube trailer using the TMDB `/videos` key
- [ ] Card click navigates to details
- [ ] "Similar movies" row on the details page

**Concepts:** React Router, `useParams`, `useNavigate`.
**Done when:** clicking any card opens its details page with a working trailer.

---

## Phase 4: Browse, Search and Filters
**Goal:** Users can find movies.

- [ ] `Browse` page with a grid of cards
- [ ] Genres dropdown in the Navbar opens `/browse?genre=...`
- [ ] Search bar with debounce
- [ ] Sort by rating or year
- [ ] "No results" empty state

**Concepts:** controlled inputs, query params, derived state, debounce.
**Done when:** searching and filtering both work.

---

## Phase 5: Player Page
**Goal:** A working watch experience.

- [ ] `Watch` page at `/watch/:id`
- [ ] `VideoPlayer` component using the HTML5 `<video>` tag with controls
- [ ] Use open-licensed or public-domain videos (Big Buck Bunny, Sintel, etc.)
- [ ] Save playback progress for "Continue Watching"

**Concepts:** refs, video events (`onTimeUpdate`), `localStorage`.
**Done when:** a video plays and resumes from where it stopped.

---

## Phase 6: Authentication (the "slight backend")
**Goal:** Login, signup and per-user data.

- [ ] `authService.js` (signup, login, logout using `localStorage`)
- [ ] `AuthContext` and `Login` page with validation
- [ ] `ProtectedRoute` for `/watch/:id` and `/my-list`
- [ ] Navbar shows profile and logout when logged in

**Concepts:** Context API, protected routes, form validation.
**Done when:** logging out blocks protected pages and logging in restores access.

---

## Phase 7: Watchlist and History
**Goal:** Personalized features.

- [ ] `ListContext` (add/remove movie, persisted per user)
- [ ] `+` button on cards and on Hero
- [ ] `MyList` page
- [ ] "Continue Watching" row on Home (logged-in users only)

**Done when:** each user sees only their own list and history after refresh.

---

## Phase 8: Polish and Responsiveness
**Goal:** Looks and feels finished.

- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] Card hover effects and smooth transitions
- [ ] Skeleton loaders
- [ ] Mobile hamburger menu
- [ ] 404 page
- [ ] Basic accessibility (alt text, focus states, button labels)
- [ ] Optional: dark/light toggle, ratings/reviews

---

## Phase 9: Testing, Deployment and Submission
**Goal:** Live and submittable.

- [ ] Manual test of the full user flow (signup → browse → watch → logout)
- [ ] Fix console warnings and errors
- [ ] Add TMDB attribution to the footer
- [ ] Move the API key to an environment variable
- [ ] Deploy on Netlify, Vercel or GitHub Pages
- [ ] Write the `README.md` (features, screenshots, setup steps, live link)
- [ ] Prepare a short demo or presentation

---

## Suggested Timeline

| Phase | Estimated time |
|---|---|
| 0. Setup | 0.5 day |
| 1. Static UI | 2-3 days |
| 2. Real data | 1-2 days |
| 3. Routing and details | 2 days |
| 4. Browse and search | 2 days |
| 5. Player | 1-2 days |
| 6. Auth | 2 days |
| 7. Watchlist and history | 1-2 days |
| 8. Polish | 2-3 days |
| 9. Deploy and submit | 1 day |

Adjust to your course deadline. If time runs short, Phases 1-3 plus 6 give a solid core project, and Phases 4, 5, 7 and 8 can be trimmed.