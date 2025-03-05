# Ksense Code Challenge - Webhook

This project is a simple webhook built with **Next.js** and **TypeScript** to receive the Ksense Code Challenge payload.

## How it works

- Accepts a POST request at `/api/webhook`.
- Stores the entire payload in Next.js KV
- Logs and returns the payload in the response.

## Deploy

1. Clone the repo.
2. Install dependencies:

    ```bash
    npm i
    ```

3. Run locally.

    ```bash
    npm run dev
    ```

4. Deploy on Vercel.

Use the Webhook URL:

```md
https://<your-vercel-project>.vercel.app/api/webhook
```
