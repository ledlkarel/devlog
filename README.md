# Devlog

A personal developer journal for keeping track of coding activity and weekly goals.

## Tech stack

- **Frontend:** React, TypeScript, Vite, and Zustand
- **Backend:** Express and PostgreSQL
- **Authentication:** Supabase

## Run locally

You'll need Node.js, a PostgreSQL database with an `entries` table, and a Supabase project.

Create `client/.env`:

```env
VITE_API_URL=http://localhost:3000
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Create `server/.env` with your database connection details:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DATABASE=devlog
```

Start the backend:

```sh
cd server
npm install
npm run dev
```

In another terminal, start the frontend from the project root:

```sh
cd client
npm install
npm run dev
```

Open http://localhost:5173.
