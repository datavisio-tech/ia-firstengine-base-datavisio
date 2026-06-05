import { getAccessState } from "../../../lib/access";

export default function DashboardPage() {
  const access = getAccessState();
  return (
    <main className="container">
      <h1>Dashboard</h1>
      <section className="grid">
        <article className="card"><h2>Access</h2><p>{access}</p></article>
        <article className="card"><h2>Owner scope</h2><p>Resolved server-side</p></article>
        <article className="card"><h2>Next action</h2><p>Customize project specs</p></article>
      </section>
    </main>
  );
}
