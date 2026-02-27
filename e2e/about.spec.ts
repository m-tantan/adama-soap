import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/about");
  });

  test("displays about page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Our Sudsy Story/i }),
    ).toBeVisible();
  });

  test("has dark background styling", async ({ page }) => {
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });

  test("displays founder photo", async ({ page }) => {
    const photo = page.locator("img").first();
    await expect(photo).toBeVisible();
  });

  test("displays story paragraphs", async ({ page }) => {
    // Paragraph 1 content (the opening)
    await expect(
      page.getByText(/Denise.*Yoav|started|soap|coffee/i).first(),
    ).toBeVisible();
  });

  test("page is accessible from main navigation", async ({ page }) => {
    await page.goto("/en/");
    await page.locator("header").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/en\/about/);
    await expect(
      page.getByRole("heading", { name: /Our Sudsy Story/i }),
    ).toBeVisible();
  });
});
