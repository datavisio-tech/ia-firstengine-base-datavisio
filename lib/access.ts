export type AccessState = "NO_SUBSCRIPTION" | "TRIAL" | "ACTIVE" | "CANCELED" | "EXPIRED" | "SUSPENDED";

export function getAccessState(): AccessState {
  return "TRIAL";
}

export function canAccessApp(state: AccessState): boolean {
  return state === "TRIAL" || state === "ACTIVE";
}
