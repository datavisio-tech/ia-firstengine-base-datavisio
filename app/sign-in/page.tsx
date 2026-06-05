import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="container">
      <div className="card">
        <h1>Sign in</h1>
        <p className="muted">Connect this page to the configured Better Auth provider for your project.</p>
        <Link className="button" href="/app/dashboard">Continue with demo session</Link>
      </div>
    </main>
  );
}
