import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

const accessStates = [
  "NO_SUBSCRIPTION",
  "TRIAL",
  "ACTIVE",
  "CANCELED",
  "EXPIRED",
  "SUSPENDED",
];

export default function SubscribePage() {
  return (
    <main className="container page-shell">
      <section className="hero compact">
        <div className="hero-copy">
          <div className="status-pill">
            <BadgeCheck size={14} />
            Commercial access gate
          </div>
          <h1>Subscription is a controlled step, not a blocker</h1>
          <p className="hero-text">
            Use this route when a user needs to move from the onboarding flow to
            a commercial or trial state. The access state remains server-side.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/app/dashboard">
              Open dashboard
              <ArrowRight size={16} />
            </Link>
            <Link className="button secondary" href="/">
              Back to onboarding
            </Link>
          </div>
        </div>

        <aside className="hero-panel card">
          <h2>Access states</h2>
          <ul className="stack-list">
            {accessStates.map((state) => (
              <li key={state}>{state}</li>
            ))}
          </ul>
          <p className="muted">
            The UI should show the state clearly, then move the user forward.
          </p>
        </aside>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>Runtime rule</h2>
          <p className="muted">
            <ShieldCheck size={16} className="inline-icon" />
            Commercial access is enforced server-side and should not be hidden
            behind a generic landing page.
          </p>
        </article>
      </section>
    </main>
  );
}
