import { getAccessState } from "../../../lib/access";
import {
  ArrowRight,
  Database,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Runtime",
    value: "Healthy",
    detail: "Local stack is reachable and ready to iterate.",
  },
  {
    label: "Access",
    value: "TRIAL",
    detail: "Session and subscription gates stay server-side.",
  },
  {
    label: "Next module",
    value: "Auth + billing",
    detail: "Customize the next domain after the stack is stable.",
  },
];

export default function DashboardPage() {
  const access = getAccessState();

  return (
    <main className="container page-shell">
      <section className="hero compact dashboard-hero">
        <div className="hero-copy">
          <div className="status-pill">
            <LayoutDashboard size={14} />
            Working dashboard
          </div>
          <h1>Stack dashboard</h1>
          <p className="hero-text">
            This is the operational landing zone after onboarding. It is simple
            on purpose: access state, server scope and the next step are easy
            to scan.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/">
              <ArrowRight size={16} />
              Return to onboarding
            </Link>
            <Link className="button secondary" href="/sign-in">
              Sign in flow
            </Link>
          </div>
        </div>

        <aside className="hero-panel card">
          <h2>Current status</h2>
          <div className="module-list">
            <div className="module-item">
              <strong>Access state</strong>
              <p className="muted">{access}</p>
            </div>
            <div className="module-item">
              <strong>Owner scope</strong>
              <p className="muted">Resolved server-side</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-grid stats-grid">
        {stats.map((stat) => (
          <article className="card stat-card" key={stat.label}>
            <p className="eyebrow">{stat.label}</p>
            <h2>{stat.value}</h2>
            <p className="muted">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>What is next</h2>
          <p className="muted">
            <Sparkles size={16} className="inline-icon" />
            Customize project specs, then wire auth and billing to the real
            product rules.
          </p>
        </article>
        <article className="card">
          <h2>Data boundary</h2>
          <p className="muted">
            <Database size={16} className="inline-icon" />
            Keep your domain data separate from the stack memory and build on
            top of the base contracts only.
          </p>
        </article>
        <article className="card">
          <h2>Security boundary</h2>
          <p className="muted">
            <ShieldCheck size={16} className="inline-icon" />
            Treat access, ownership and commercial state as server decisions.
          </p>
        </article>
      </section>
    </main>
  );
}
