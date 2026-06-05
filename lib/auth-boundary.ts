export type SessionContext = { userId: string; organizationId: string | null; role: "user" | "admin" };

export async function resolveSessionContext(): Promise<SessionContext | null> {
  return { userId: "demo-user", organizationId: "demo-organization", role: "user" };
}
