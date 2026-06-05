import { expect, test } from "@playwright/test";

test("public shell renders valid document", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/IA-1stEngine/);
  const doctype = await page.evaluate(() => document.doctype?.name);
  expect(doctype).toBe("html");
});
