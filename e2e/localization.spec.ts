import { test, expect } from "@playwright/test";

test.describe("Localization - German", () => {
  test("German homepage renders with German content", async ({ page }) => {
    await page.goto("/de/");
    await expect(
      page.getByRole("heading", {
        name: /Handgemachte vegane Kaffeeseife aus München/i,
      }),
    ).toBeVisible();
  });

  test("German navigation labels", async ({ page }) => {
    await page.goto("/de/");
    const header = page.locator("header");
    // Navigation links should use German text
    await expect(header.getByRole("link", { name: /Startseite/i })).toBeVisible();
    await expect(header.getByRole("link", { name: /Über uns/i })).toBeVisible();
  });

  test("German shop page title", async ({ page }) => {
    await page.goto("/de/shop");
    await expect(
      page.getByRole("heading", { name: /Unsere Seifen/i }),
    ).toBeVisible();
  });

  test("German about page renders", async ({ page }) => {
    await page.goto("/de/about");
    // Should render the about page title in German
    await expect(
      page.getByRole("heading", { name: /Unsere schaumige Geschichte/i }),
    ).toBeVisible();
  });

  test("German product detail page shows translated content", async ({
    page,
  }) => {
    await page.goto("/de/shop/calm");
    await expect(
      page.getByRole("heading", { name: /Calm/i }),
    ).toBeVisible();
    // Should have German tab labels
    await expect(
      page.getByRole("button", { name: /Beschreibung/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Inhaltsstoffe/i }),
    ).toBeVisible();
  });

  test("German footer content", async ({ page }) => {
    await page.goto("/de/");
    const footer = page.locator("footer");
    await expect(footer.getByText(/Adama Soaps/i)).toBeVisible();
    await expect(footer.getByText(/Kontakt/i)).toBeVisible();
  });

  test("German OurStory section", async ({ page }) => {
    await page.goto("/de/");
    await expect(
      page.getByRole("heading", { name: /Unsere Geschichte/i }),
    ).toBeVisible();
  });

  test("German CafePartners section", async ({ page }) => {
    await page.goto("/de/");
    await expect(page.getByText(/Unsere Partner/i)).toBeVisible();
  });
});

test.describe("Language Switching", () => {
  test("can switch from English to German", async ({ page }) => {
    await page.goto("/en/");

    // Find and use the language selector
    const langSelect = page.locator("select");
    await langSelect.first().selectOption("de");

    // Should navigate to German version
    await expect(page).toHaveURL(/\/de\//);
    await expect(
      page.getByRole("heading", {
        name: /Handgemachte vegane Kaffeeseife aus München/i,
      }),
    ).toBeVisible();
  });

  test("can switch from German to English", async ({ page }) => {
    await page.goto("/de/");

    const langSelect = page.locator("select");
    await langSelect.first().selectOption("en");

    await expect(page).toHaveURL(/\/en\//);
    await expect(
      page.getByRole("heading", {
        name: /Handmade Vegan Coffee Soap from Munich/i,
      }),
    ).toBeVisible();
  });

  test("language switch preserves current page (about)", async ({ page }) => {
    await page.goto("/en/about");

    const langSelect = page.locator("select");
    await langSelect.first().selectOption("de");

    await expect(page).toHaveURL(/\/de\/about/);
    await expect(
      page.getByRole("heading", { name: /Unsere schaumige Geschichte/i }),
    ).toBeVisible();
  });

  test("language switch preserves current page (shop)", async ({ page }) => {
    await page.goto("/en/shop");

    const langSelect = page.locator("select");
    await langSelect.first().selectOption("de");

    await expect(page).toHaveURL(/\/de\/shop/);
    await expect(
      page.getByRole("heading", { name: /Unsere Seifen/i }),
    ).toBeVisible();
  });

  test("language switch preserves product detail page", async ({ page }) => {
    await page.goto("/en/shop/calm");

    const langSelect = page.locator("select");
    await langSelect.first().selectOption("de");

    await expect(page).toHaveURL(/\/de\/shop\/calm/);
  });
});

test.describe("Localization - HTML lang attribute", () => {
  test("English pages have lang=en", async ({ page }) => {
    await page.goto("/en/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "en");
  });

  test("German pages have lang=de", async ({ page }) => {
    await page.goto("/de/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "de");
  });
});
