# Machete

Machete is a music player built with Electron and Vue.js. It's inspired by
Tomahawk, and implements an extensible service module for scraping and
playing music from several data sources.

## Packages

1. `machete-app`

   This is the front-end of the application, built with Electron/Vue.js.

2. `machete-proxy`

   To get around CORS restrictions, this is a simple Node.js server that's
   deployed to Heroku for proxying requests when scraping data.

## Project Setup

To get started, please read `packages/machete-app/README.md`.
