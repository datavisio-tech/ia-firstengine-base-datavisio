import Link from "next/link";

export default function SubscribePage() {
  return (
    <main className="container">
      <div className="card">
        <h1>Subscription</h1>
        <p className="muted">Use this route as the server-side destination for users without commercial access.</p>
        <Link className="button" href="/app/dashboard">Activate trial placeholder</Link>
      </div>
    </main>
  );
}
