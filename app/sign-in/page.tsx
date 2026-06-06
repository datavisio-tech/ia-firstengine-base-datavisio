import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const authSteps = [
  "connect the configured Better Auth provider",
  "map the sign-in callback URL for your fork",
  "verify the session boundary before enabling production access",
];

export default function SignInPage() {
  return (
    <main className="container page-shell">
      <section className="hero compact">
        <div className="hero-copy">
          <div className="status-pill">
            <Sparkles size={14} />
            Auth entry
          </div>
          <h1>Sign in is the first module, not the first question</h1>
          <p className="hero-text">
            This page is the auth entry for a fork that already has the stack
            installed. Connect the provider, then use the dashboard as the
            secured continuation path.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/app/dashboard">
              Continue to dashboard
              <ArrowRight size={16} />
            </Link>
            <Link className="button secondary" href="/">
              Back to onboarding
            </Link>
          </div>
        </div>

        <aside className="hero-panel card">
          <h2>Auth checklist</h2>
          <ul className="stack-list">
            {authSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <p className="muted">
            The stack keeps identity wiring isolated from the rest of the fork.
          </p>
        </aside>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>Security boundary</h2>
          <p className="muted">
            <ShieldCheck size={16} className="inline-icon" />
            Session handling stays server-side. The UI should never become the
            source of truth for auth state.
          </p>
        </article>
      </section>
    </main>
  );
}
