# Artifact12

A minimal Node.js + Express tutorial server exposing two plain-text HTTP endpoints.

## Prerequisites

- Node.js **>= 18** (required by Express 5; Node.js 22.x LTS recommended).
- npm (bundled with Node.js).

## Installation

```bash
npm install
```

This installs Express (`express` `^5.2.1`) and creates a local `node_modules/` directory, which is git-ignored and not committed.

## Running the server

```bash
npm start
```

This runs `node server.js`. The server listens on `http://localhost:3000` by default; the port is configurable via the `PORT` environment variable (`process.env.PORT || 3000`).

## Endpoints

| Method | Path | Response |
| ------ | --------------- | -------------- |
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

Verify the endpoints with `curl`:

```bash
curl http://localhost:3000/             # Hello world
curl http://localhost:3000/good-evening # Good evening
```
