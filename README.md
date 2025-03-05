# Ksense Code Challenge - Webhook

This project is a simple webhook built with **Next.js** and **TypeScript** to receive the Ksense Code Challenge payload.

## How it works

- Accepts a POST request at `https://ksense-code-challenge-xi.vercel.app/api/webhook`.
- Stores the entire payload in Next.js [Vercel blob storage](https://www.google.com/search?client=safari&rls=en&q=vercel+blob+storage&ie=UTF-8&oe=UTF-8).
- Logs and returns the blob storage URL in the response.
  - The blob storage URL can be used to obtain the original payload and secret code.

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
https://ksense-code-challenge-xi.vercel.app/api/webhook
```

## Test the Webhook

Local testing with the `curl` command:

```bash
curl -X POST https://ksense-code-challenge-xi.vercel.app/api/webhook \
  -H "Content-Type: application/json" \
  -d '{ "secretCode": "test1234" }'
