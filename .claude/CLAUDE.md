# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project

LearnSum is a Hong Kong-based two-sided tutoring marketplace. This repository is the mobile and web frontend, built in React Native + Expo. It connects to a separate Next.js backend API hosted on Vercel.

The backend repo is: https://github.com/alveeno/learnsum-mvp-1
Backend API base URL: http://localhost:3000 (update to Vercel URL after deployment)

See the backend repo's PLAN.md for the full database schema and API endpoint reference.

## Stack

- **Framework:** React Native + Expo (SDK 56)
- **Navigation:** Expo Router
- **Styling:** NativeWind (Tailwind for React Native)
- **Backend:** Next.js 14 API routes (separate repo) + Supabase
- **Auth:** Supabase Auth via the backend API
- **Storage:** Supabase Storage (media uploads)
- **Deploy:** Expo EAS Build → iOS App Store + Google Play Store + Expo for Web

## Design System

- Primary: Forest Green #2D6A4F
- Accent: Gold #F4A923
- Background: White #FFFFFF
- Surface/Card: Off-white #F9F9F7
- Muted text: #6B7280
- Destructive/warning: #E63946
- Typography: SF Pro (iOS native default)
- Shape: Circular avatars everywhere, 16pt rounded corners on cards, pill-shaped buttons
- Icons: SF Symbols style via expo-symbols or @expo/vector-icons

## Architecture

### Three user types
`parent` | `student` | `tutor` — stored in Supabase, managed via backend API.

### Navigation structure
- `/` — Welcome screen (role selection)
- `/onboarding/student` — Student onboarding flow
- `/onboarding/parent` — Parent onboarding flow
- `/onboarding/tutor` — Tutor onboarding flow
- `/feed` — Home feed (post-onboarding)
- `/tutors/[slug]` — Tutor profile page
- `/search` — Browse and filter tutors
- `/messages` — Messaging screen
- `/notifications` — Notification centre
- `/profile` — Own profile and settings

### API calls
All data fetching goes through the Next.js backend API (learnsum-mvp-1), not directly to Supabase. Use fetch() with the base URL from environment variables.

### Environment variables
Store in .env.local — never commit this file.
- EXPO_PUBLIC_API_URL — base URL of the Next.js backend
- EXPO_PUBLIC_SUPABASE_URL — Supabase project URL
- EXPO_PUBLIC_SUPABASE_ANON_KEY — Supabase anon key

Note: .env.local is in .gitignore and must never be committed. 
Create it manually with these three values before running the app.

## Development Environment

macOS, Terminal. Single-line commands only.
Node version: v24.14.1

To start the dev server: `npx expo start`
To open iOS simulator: press `i` after dev server starts
To open Android emulator: press `a` after dev server starts

Note: .env.local is in .gitignore and must never be committed.
Create it manually with these three values before running the app:
- EXPO_PUBLIC_API_URL
- EXPO_PUBLIC_SUPABASE_URL
- EXPO_PUBLIC_SUPABASE_ANON_KEY

## What is explicitly out of v1

Do not build these even if they seem natural extensions:
- Push notifications (use in-app only for v1)
- Post likes and comments UI (schema exists, hold the UI)
- Saved filter preferences
- Per-day availability scheduling UI
- Advanced search beyond category and district
- In-app payments or booking system