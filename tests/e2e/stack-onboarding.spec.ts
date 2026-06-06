import { expect, test } from "@playwright/test";

test("home onboarding exposes stack guidance", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Fork instalado com sucesso")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Seu fork esta pronto para uso local" })).toBeVisible();
  await expect(page.getByText("Stack version", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open dashboard" })).toBeVisible();
});

test("sign-in and subscription pages keep the same stack language", async ({ page }) => {
  await page.goto("/sign-in");
  await expect(page.getByRole("heading", { name: "Sign in is the first module, not the first question" })).toBeVisible();
  await expect(page.getByText("Auth checklist")).toBeVisible();

  await page.goto("/subscribe");
  await expect(page.getByRole("heading", { name: "Subscription is a controlled step, not a blocker" })).toBeVisible();
  await expect(page.getByText("Access states")).toBeVisible();
});

test("dashboard remains the secondary operational view", async ({ page }) => {
  await page.goto("/app/dashboard");

  await expect(page.getByRole("heading", { name: "Stack dashboard" })).toBeVisible();
  await expect(page.getByText("Current status")).toBeVisible();
  await expect(page.getByRole("heading", { name: "TRIAL" })).toBeVisible();
});
