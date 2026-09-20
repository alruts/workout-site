# Full Body Workout Regimen — Eleventy Site

A simple website with a home page linking to Day A, Day B, and Day C
workouts. Built with [Eleventy (11ty)](https://www.11ty.dev/).

## Running it locally

You'll need [Node.js](https://nodejs.org/) installed (v18+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start a local dev server (auto-reloads on save)
npm start
```

Then open the URL it prints (usually `http://localhost:8080`).

To build a static version you can upload anywhere (Netlify, GitHub Pages,
etc.), run:

```bash
npm run build
```

This outputs the finished site into the `_site` folder.

## How to edit the content

**You only need to edit one file: `src/_data/workouts.js`.**

That file is a plain JavaScript object holding every exercise, set/rep
scheme, cue, tempo note, and alternative for all three days, plus the
guideline cards on the home page. The Day A / B / C pages and their
navigation links are generated automatically from this file — you never
need to touch the HTML templates to change the workout content.

To add a 4th day (e.g. "Day D"), just add another object to the `days`
array in `workouts.js` with a unique `key` (e.g. `"d"`) — a new page at
`/workout-d/` will be created automatically, and it'll show up in the
home page cards and the day-switcher links on other pages.

## Project structure

```
.
├── .eleventy.js          # Eleventy config
├── package.json
└── src/
    ├── _data/
    │   └── workouts.js   # <-- EDIT THIS to change any content
    ├── _includes/
    │   └── base.njk      # Shared page layout (header/nav/footer)
    ├── css/
    │   └── style.css     # Styling
    ├── index.njk          # Home page
    └── workout.njk        # Template that generates workout-a/b/c pages
```

## Changing the look

Colors, spacing, and fonts all live in `src/css/style.css`. The green
theme color is set once at the top via the `--green` CSS variable —
change it there to re-theme the whole site.
