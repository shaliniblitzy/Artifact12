'use strict';

/**
 * server.js
 *
 * Express.js application entry point for the Artifact12 tutorial project.
 *
 * This file is the central integration point for the feature: it instantiates
 * the Express application, registers the two HTTP endpoints, and binds the
 * network listener.
 *
 * Endpoints
 *   GET /              -> "Hello world"   (preserved original behavior, FR-03)
 *   GET /good-evening  -> "Good evening"  (new endpoint, FR-02)
 *
 * Module system: CommonJS (require/module). The project's package.json does not
 * set "type": "module", so this file intentionally uses `require(...)` rather
 * than ESM `import` syntax.
 *
 * Runtime: Node.js >= 18 (Express 5 requirement, see package.json "engines").
 */

// Import the Express web framework (the project's single runtime dependency).
const express = require('express');

// Instantiate the Express application that owns the routing table and listener.
const app = express();

// Listening port. Honor an externally supplied PORT (e.g. from a hosting
// platform) and fall back to 3000 for local development.
const PORT = process.env.PORT || 3000;

/**
 * GET /
 *
 * FR-03 (backward compatibility): preserves the original tutorial behavior by
 * returning the plain-text body "Hello world" exactly (capital "H", lowercase
 * "w", single separating space).
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /good-evening
 *
 * FR-02 (new feature): returns the plain-text body "Good evening" exactly
 * (capital "G", lowercase "e", single separating space).
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and log a developer-friendly readiness message.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
