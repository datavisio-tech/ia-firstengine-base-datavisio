import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <nav className="nav">
        <strong>IA-1stEngine SaaS Base</strong>
        <div className="nav">
          <Link href="/sign-in">Sign in</Link>
          <Link className="button" href="/subscribe">Subscribe</Link>
        </div>
      </nav>
      <section style={{ padding: "72px 0 36px" }}>
        <h1>Default SaaS foundation for DataVisio products</h1>
        <p className="muted">A minimal product shell with governance, auth boundaries, billing access states and delivery rules ready to customize.</p>
        <Link className="button" href="/app/dashboard">Open dashboard</Link>
      </section>
      <section className="grid">
        {["Governance", "Auth boundary", "Billing gate", "Runtime validation"].map((item) => (
          <article className="card" key={item}>
            <h2>{item}</h2>
            <p className="muted">Configured as a safe default and expected to be specialized by the forked project.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
