# HermesLock

> Zero-trust. Ephemeral. Secure.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Part of](https://img.shields.io/badge/Voltex%20Network-FCRI-purple)](https://fcri.science)

**HermesLock** is a high-efficiency, zero-trust messaging platform built for secure, ephemeral communication and private data exchange — no logs, no metadata, no surveillance.

---

## Security Model

```
End-to-End Encryption    → Messages encrypted client-side before transit
Zero-Knowledge Server    → Server never sees plaintext content
Self-Destruct            → Messages auto-delete after configurable TTL
No Metadata Logging      → No read receipts, typing indicators stored
Forward Secrecy          → New keys per session
```

---

## Architecture

```
hermeslock/
├── src/app/
│   ├── page.tsx         Landing + auth
│   ├── inbox/           Secure inbox
│   ├── channel/[id]/    Encrypted channel view
│   └── settings/        Key management, profile
├── lib/
│   ├── crypto.ts        Client-side E2E encryption (AES-256-GCM)
│   ├── self-destruct.ts Message TTL and deletion logic
│   └── socket.ts        WebSocket connection manager
├── server/              Node.js + Socket.io backend
└── tests/
```

---

## Stack

Next.js 16 · TypeScript · Tailwind CSS 4 · Socket.io · Web Crypto API · Node.js · PostgreSQL

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/hermeslock
cd hermeslock && npm install
cp .env.example .env
npm run dev
```
