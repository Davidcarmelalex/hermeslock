# Contributing to HermesLock

Security is the product. Any contribution that weakens encryption, adds logging, or reduces user privacy will be rejected.

## Setup
```bash
npm install && cp .env.example .env && npm run dev
```

## Commit Convention
```
feat(crypto): implement AES-256-GCM message encryption
feat(server): add self-destruct TTL cleanup job
fix: resolve WebSocket reconnection token leak
test: add encryption roundtrip tests
```
