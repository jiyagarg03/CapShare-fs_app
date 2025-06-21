# CapShare – Record, Upload, and Share Screen Videos Seamlessly

![Next.js](https://img.shields.io/badge/Next.js-15-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

**Live Demo:** [capshare-app.vercel.app](https://capshare-app.vercel.app)  
**Video Walkthrough:** [Watch on YouTube](https://youtu.be/7OAler-MuuY)  
**Source Code:** [GitHub Repository](https://github.com/jiyagarg03/capshare-app)

CapShare is a full-stack, high-performance screen recording and sharing platform, offering a polished alternative to tools like Loom. Built with Next.js App Router and secured with Arcjet, CapShare supports instant screen capture, authenticated video uploads via Bunny.net, and a public feed of shared videos.

---

## 📽 Demo

[![Watch the Demo](https://raw.githubusercontent.com/jiyagarg03/capshare-app/main/public/assets/demo-thumb.png)](https://youtu.be/7OAler-MuuY)

> A 36-second walkthrough of CapShare, demonstrating Google login, video recording, upload to Bunny CDN, and playback.

---

## Features Overview

- Next.js 15 (App Router) setup with full SSR & dynamic routes
- Google OAuth 2.0 using BetterAuth
- Complete screen recording and upload flow
- Bunny.net CDN for smooth video playback
- Arcjet protection: email validation + rate-limiting middleware
- Drizzle ORM with PostgreSQL (via Xata) for schema-safe storage
- Dynamic user profiles and video detail pages
- Responsive design using TailwindCSS
- Deployed via Vercel

---

## Tech Stack

| Layer        | Stack                                      |
|--------------|---------------------------------------------|
| Frontend     | Next.js, Tailwind CSS, TypeScript           |
| Auth         | BetterAuth, Google OAuth                    |
| Backend      | Arcjet (middleware), Drizzle ORM            |
| Database     | PostgreSQL via Xata                         |
| Media/CDN    | Bunny.net (video upload + streaming)        |
| Deployment   | Vercel (edge/serverless)

---

## Getting Started

```bash
git clone https://github.com/jiyagarg03/capshare-app
cd capshare-app
npm install
npm run dev
```

---

### Environment Variables

To run CapShare locally, you'll need to configure the following environment variables:

#### Google OAuth  
- `GOOGLE_CLIENT_ID`  
- `GOOGLE_CLIENT_SECRET`

#### BetterAuth  
- `BETTER_AUTH_SECRET`  
- `NEXT_PUBLIC_BASE_URL`  
- `BETTER_AUTH_URL`

#### Bunny.net (video uploads & streaming)  
- `BUNNY_STORAGE_ACCESS_KEY`  
- `BUNNY_STREAM_ACCESS_KEY`  
- `BUNNY_LIBRARY_ID`

#### Arcjet (rate limiting & email protection)  
- `ARCJET_API_KEY`

#### Xata Database (PostgreSQL)  
- `XATA_API_KEY`  
- `DATABASE_URL_POSTGRES`


---
MIT License • © 2025 Jiya Garg


