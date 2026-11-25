# Green House Sports & Cultural Participation Portal
Mobile-first Next.js App Router + Supabase project.

## Setup
1. Install Node.js 20+ on a computer or use a cloud development environment.
2. Create Supabase project and run `supabase/migrations/001_schema.sql` in SQL Editor.
3. Configure Supabase Auth email/password and ensure no public signup for management accounts unless controlled.
4. Create manager accounts via Supabase Auth admin, then insert role rows in `management_profiles` using SQL Editor (do not expose service role key).
5. Copy `.env.example` to `.env.local` and fill values.
6. `npm install`, `npm run dev`.
7. Deploy via Vercel; set env variables.

## Security warning
This is an implementation starter milestone, not audited production software. The initial registration RPC uses service-role access in the API route's intended server configuration, but the supplied route currently uses an SSR client and must be switched to a restricted server-only service client or an appropriately designed public-safe RPC before registration is considered operational. Rate limiting, setup-secret bootstrap, editing/deleting APIs, exports, audit writes, management event mutation, and realtime policies are not fully implemented. Do not use real student records until these are completed, reviewed and tested.

## Environment
See `.env.example`.
