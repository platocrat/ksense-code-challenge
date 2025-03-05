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
          <li>Accepts a POST request at <code>/api/webhook</code>.</li>
          <li>Stores the entire payload in Next.js KV.</li>
          <li>Logs and returns the payload in the response.</li>
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
          <code>https://&lt;your-vercel-project&gt;.vercel.app/api/webhook</code>
        </pre>

        <h2>Test the Webhook</h2>
        <p>Local testing with the <code>curl</code> command:</p>
        <pre>
          <code>{ `curl -X POST http://localhost:3000/api/webhook \\
  -H "Content-Type: application/json" \\
  -d '{ "secretCode": "test1234" }'`}
          </code>
        </pre>
      </main>
    </div>
  )
}