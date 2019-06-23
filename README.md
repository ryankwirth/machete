# Machete

Machete is a music player built with Electron and Vue.js. It's inspired by
Tomahawk, and implements an extensible service module for scraping and
playing music from several data sources.

## Packages

1. `machete-app`

   This is the front-end of the application, built with Electron/Vue.js.

2. `machete-core`

   This manages music playback, service registration, and event handling.
   It is service-agnostic, so individual service objects must be provided
   during initialization. When a service is registered, it is provided
   an `injectable` object that contains utilities for fetching web pages
   with `needle` and `cheerio`. This means that services can remain very
   lightweight and avoid having dependencies of their own.

3. `machete-core-youtube`

   A service for playing music from YouTube via the [IFrame API](https://developers.google.com/youtube/iframe_api_reference).

4. `machete-proxy`

   This is a simple Node.js server for getting around CORS restrictions.
   It's deployed to Heroku, and used for proxying requests when scraping
   web pages.

## Project Setup

To get started, please read `packages/machete-app/README.md`.
