import { describe, expect, it } from "vitest";
import { canAccessApp } from "../lib/access";

describe("commercial access gate", () => {
  it("allows trial and active states", () => {
    expect(canAccessApp("TRIAL")).toBe(true);
    expect(canAccessApp("ACTIVE")).toBe(true);
  });

  it("blocks inactive states", () => {
    expect(canAccessApp("NO_SUBSCRIPTION")).toBe(false);
    expect(canAccessApp("SUSPENDED")).toBe(false);
  });
});
