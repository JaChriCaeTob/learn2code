# Learn2Code: Browser-Based JavaScript Learning Tool

A beginner-first, browser-based JavaScript course with guided lessons, tiny tasks, hints, and optional full solutions. It is designed for learners who already know HTML/CSS but are new to JavaScript.

## What’s Inside

- 4 chapters, 22 lessons, and 2 mini challenges
- Built-in explanations, syntax maps, step-by-step guidance, and worked examples
- Instant feedback via in-browser code runner
- Optional hints and full solutions for every lesson
- Progress tracking with JSON export

## How To Run

You can run it directly in a browser:

1. Open `index.html` in your browser.
2. Pick a lesson from the sidebar and follow the steps.
3. Use `Run code` and `Check task` to get feedback.

## Progress Tracking

Progress is stored in two places:

- Local storage (automatic, per browser)
- `lesson-progress.json` (downloadable snapshot)

Use the `Download JSON` button to export progress as `lesson-progress.json`.

Note: When opening via `file://`, browsers may block fetching `lesson-progress.json` on load. That is OK — local storage still works and exports remain available.

## Project Files

- `index.html`: UI layout
- `styles.css`: styling and layout
- `app.js`: lessons, logic, validation, progress
- `lesson-progress.json`: progress template and export format

## Chapters

- Chapter 1: Start Here
- Chapter 1: Core Building Blocks
- Chapter 1: Lists and Objects
- Chapter 1: First Mini Challenge
- Chapter 2: Array Methods and Logic
- Chapter 3: Combine Data and Build Mini Reports
- Chapter 4: Practical Data Workflows
