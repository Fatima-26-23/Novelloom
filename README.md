# Novelloom

Novelloom is an AI-powered novel analysis app. Upload an EPUB or PDF manuscript and it surfaces character arcs, hidden relationships, and complex timelines from the text.

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Auth:** NextAuth.js with Google OAuth
- **Fonts:** Inter, Plus Jakarta Sans (`next/font/google`)

## Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── (auth)/             # Login / signup routes
│   ├── (dashboard)/        # Dashboard, library, upload, profile, settings
│   ├── logout/
│   ├── layout.tsx          # Root layout
│   └── providers.tsx       # NextAuth SessionProvider wrapper
├── pages/api/auth/         # NextAuth route handler ([...nextauth].js)
├── components/
│   ├── auth/                # Login/signup forms, social auth, etc.
│   ├── dashboard/           # Sidebar, stats, timeline, summaries, upload, settings UI
│   └── landing/             # Marketing/landing page sections
└── lib/
    └── utils.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Google Cloud project with an OAuth 2.0 Client ID (for Google sign-in)

### 1. Install dependencies

This archive contains the `src/` source tree only. Scaffold a Next.js app (or drop this `src/` folder into an existing one) and install the required packages:

```bash
npm install next react react-dom next-auth
npm install -D typescript @types/react @types/node tailwindcss
```

### 2. Configure environment variables

Copy the example env file and fill in your own values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `GOOGLE_CLIENT_ID` | OAuth Client ID from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `GOOGLE_CLIENT_SECRET` | OAuth Client Secret from the same credentials page |
| `NEXTAUTH_SECRET` | Random secret used to sign/encrypt session tokens. Generate one with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Base URL of the app, e.g. `http://localhost:3000` in development |

When creating the Google OAuth client, add this as an authorized redirect URI:

```
http://localhost:3000/api/auth/callback/google
```

(swap in your production URL when deploying).

### 3. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Authentication

Sign-in is handled by NextAuth's Google provider, configured in `src/pages/api/auth/[...nextauth].js`. The client-side session is made available app-wide via `SessionProvider` in `src/app/providers.tsx`.

## License

Add a license of your choice.
