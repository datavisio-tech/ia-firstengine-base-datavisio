import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  ArrowRight,
  BookOpen,
  GitFork,
  LayoutDashboard,
  Layers3,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

async function readStackVersion(): Promise<string> {
  try {
    const stackPath = path.join(process.cwd(), "STACK.md");
    const contents = await readFile(stackPath, "utf8");
    const match = contents.match(/Stack version:\s*`([^`]+)`/);
    return match?.[1] ?? "unknown";
  } catch {
    return "unknown";
  }
}

const nextSteps = [
  "review STACK.md",
  "review docs/ai-context/CHANGELOG_AI.md",
  "run npm run stack:status",
  "run npm run stack:sync",
  "run npm run typecheck",
  "run npm run test",
  "run npm run build",
  "then start npm run dev",
];

const helpfulLinks = [
  {
    label: "STACK.md",
    href: "https://github.com/datavisio-tech/ia-firstengine-base-datavisio/blob/main/STACK.md",
    icon: BookOpen,
  },
  {
    label: "README.md",
    href: "https://github.com/datavisio-tech/ia-firstengine-base-datavisio/blob/main/README.md",
    icon: GitFork,
  },
  {
    label: "docs/ai-context/CHANGELOG_AI.md",
    href: "https://github.com/datavisio-tech/ia-firstengine-base-datavisio/blob/main/docs/ai-context/CHANGELOG_AI.md",
    icon: Layers3,
  },
  {
    label: "docs/specs/PROJECT_SPEC.spec.md",
    href: "https://github.com/datavisio-tech/ia-firstengine-base-datavisio/blob/main/docs/specs/PROJECT_SPEC.spec.md",
    icon: ShieldCheck,
  },
];

const stackModules = [
  {
    title: "Authentication",
    description: "Better Auth is the entry point for sign in and identity wiring.",
  },
  {
    title: "Subscription gating",
    description: "Commercial access states stay server-side and explicit.",
  },
  {
    title: "Dashboard",
    description: "The dashboard is available, but it is not the first thing the user should need to understand.",
  },
];

export default async function HomePage() {
  const stackVersion = await readStackVersion();

  return (
    <main className="container page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">IA-1stEngine SaaS Base</p>
          <strong>DataVisio stack onboarding</strong>
        </div>
        <div className="topbar-actions">
          <Link className="topbar-link" href="/app/dashboard">
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
          <Link className="button secondary" href="/sign-in">
            Sign in
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="status-pill">
            <GitFork size={14} />
            Fork instalado com sucesso
          </div>
          <h1>Seu fork esta pronto para uso local</h1>
          <p className="hero-text">
            This is the first screen of the stack. It confirms the install,
            shows the stack version, and points the user to the exact next
            actions instead of forcing the dashboard first.
          </p>

          <div className="hero-metrics">
            <article className="metric-card">
              <span>Stack version</span>
              <strong>{stackVersion}</strong>
            </article>
            <article className="metric-card">
              <span>Runtime target</span>
              <strong>localhost:3000</strong>
            </article>
            <article className="metric-card">
              <span>Control layer</span>
              <strong>Harness Engineering</strong>
            </article>
          </div>

          <div className="hero-actions">
            <Link className="button" href="/app/dashboard">
              <LayoutDashboard size={16} />
              Open dashboard
              <ArrowRight size={16} />
            </Link>
            <Link className="button secondary" href="/subscribe">
              View access flow
            </Link>
          </div>
        </div>

        <aside className="hero-panel card">
          <h2>What to do next</h2>
          <ol className="stack-list">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>Useful links</h2>
          <ul className="stack-links">
            {helpfulLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                <Link href={link.href} target="_blank" rel="noreferrer">
                  <Icon size={16} />
                  <span>{link.label}</span>
                </Link>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="card">
          <h2>Next stack modules</h2>
          <div className="module-list">
            {stackModules.map((module) => (
              <div className="module-item" key={module.title}>
                <strong>{module.title}</strong>
                <p className="muted">{module.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Harness Engineering</h2>
          <p className="muted">
            The harness is the control layer for context selection, validation,
            observability and release gates. It keeps the stack predictable
            before and after deployment.
          </p>
          <Link className="text-link" href="/app/dashboard">
            <PlayCircle size={16} />
            Continue from the dashboard
          </Link>
        </article>
      </section>
    </main>
  );
}
