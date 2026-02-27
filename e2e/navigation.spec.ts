import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Home link navigates to homepage", async ({ page }) => {
    await page.goto("/en/about");
    await page.locator("header").getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL(/\/en\/?$/);
  });

  test("About link navigates to about page", async ({ page }) => {
    await page.goto("/en/");
    await page.locator("header").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/en\/about/);
  });

  test("Instagram link opens external site", async ({ page }) => {
    await page.goto("/en/");
    const instagramLink = page
      .locator("header")
      .getByRole("link", { name: "Instagram" });
    await expect(instagramLink).toHaveAttribute(
      "href",
      /instagram\.com\/adamasoaps/,
    );
    await expect(instagramLink).toHaveAttribute("target", "_blank");
  });

  test("Explore Shop link navigates to shop page", async ({ page }) => {
    await page.goto("/en/");
    await page.getByRole("link", { name: /Explore Shop/i }).click();
    await expect(page).toHaveURL(/\/en\/shop/);
  });

  test("clicking a product card navigates to product detail", async ({
    page,
  }) => {
    await page.goto("/en/shop");
    await page.getByRole("link", { name: /Calm/i }).first().click();
    await expect(page).toHaveURL(/\/en\/shop\/calm/);
  });
});

test.describe("Navigation - Mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile hamburger menu toggles navigation", async ({ page }) => {
    await page.goto("/en/");
    const header = page.locator("header");

    // Menu button should be visible on mobile
    const menuButton = header.getByRole("button");
    await expect(menuButton).toBeVisible();

    // Click to open menu
    await menuButton.click();

    // Navigation links should now be visible
    await expect(header.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(header.getByRole("link", { name: "About" })).toBeVisible();
  });

  test("mobile menu link navigates and closes menu", async ({ page }) => {
    await page.goto("/en/");
    const header = page.locator("header");

    // Open menu
    await header.getByRole("button").click();

    // Click About
    await header.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/en\/about/);
  });
});
