import styles from './page.module.css'

export default function Home() {
  return (
    <div className={ styles.page }>
      <main className={ styles.main }>
        <h1 className={ styles.title }>Ksense Code Challenge - Webhook</h1>

        <p>
          This project is a simple webhook built with <strong>Next.js</strong> and <strong>TypeScript</strong> to receive the Ksense Code Challenge payload.
        </p>

        <h2>How it works</h2>
        <ul>
          <li>
            Accepts a POST request at{ ' ' }
            <code>https://ksense-code-challenge-xi.vercel.app/api/webhook</code>.
          </li>
          <li>
            Stores the entire payload in Next.js{ ' ' }
            <a
              href="https://vercel.com/docs/vercel-blob"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel blob storage
            </a>.
          </li>
          <li>
            Logs and returns the blob storage URL in the response.
            <ul>
              <li>
                The blob storage URL can be used to obtain the original payload and
                secret code.
              </li>
            </ul>
          </li>
        </ul>

        <h2>Deploy</h2>
        <ol>
          <li>Clone the repo.</li>
          <li>Install dependencies:</li>
        </ol>
        <pre>
          <code>npm i</code>
        </pre>
        <p>Run locally:</p>
        <pre>
          <code>npm run dev</code>
        </pre>
        <p>Deploy on Vercel.</p>

        <p>Use the Webhook URL:</p>
        <pre>
          <code>https://ksense-code-challenge-xi.vercel.app/api/webhook</code>
        </pre>

        <h2>Test the Webhook</h2>
        <p>Local testing with the <code>curl</code> command:</p>
        <pre>
          <code>{ `curl -X POST https://ksense-code-challenge-xi.vercel.app/api/webhook \\
  -H "Content-Type: application/json" \\
  -d '{ "secretCode": "test1234" }'`}
          </code>
        </pre>
      </main>
    </div>
  )
}