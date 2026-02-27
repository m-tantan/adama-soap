import { test, expect } from "@playwright/test";

test.describe("Shop Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/shop");
  });

  test("displays shop page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Our Soaps/i }),
    ).toBeVisible();
  });

  test("shows all products in grid", async ({ page }) => {
    await expect(page.getByText("Calm")).toBeVisible();
    await expect(page.getByText("Sunny Sage")).toBeVisible();
  });

  test("product cards show prices", async ({ page }) => {
    // Both products are €8.50
    const prices = page.getByText("€8.50");
    await expect(prices.first()).toBeVisible();
  });

  test("product cards have images", async ({ page }) => {
    const productImages = page.locator(
      'img[alt="Calm"], img[alt="Sunny Sage"]',
    );
    await expect(productImages.first()).toBeVisible();
  });

  test("product card links to product detail page", async ({ page }) => {
    const calmLink = page.getByRole("link", { name: /Calm/i }).first();
    await expect(calmLink).toHaveAttribute("href", /\/en\/shop\/calm/);
  });
});

test.describe("Product Detail - Calm", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/shop/calm");
  });

  test("displays product name", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Calm/i }),
    ).toBeVisible();
  });

  test("displays product price", async ({ page }) => {
    await expect(page.getByText("€8.50")).toBeVisible();
  });

  test("displays product image", async ({ page }) => {
    const mainImage = page.locator("img").first();
    await expect(mainImage).toBeVisible();
  });

  test("has thumbnail images for image gallery", async ({ page }) => {
    // Calm has 3 images so there should be thumbnails
    const thumbnails = page.locator(
      '[style*="width: 80px"], [style*="width:80px"]',
    );
    const count = await thumbnails.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("clicking thumbnail changes main image", async ({ page }) => {
    const thumbnails = page.locator(
      '[style*="width: 80px"], [style*="width:80px"]',
    );
    const count = await thumbnails.count();
    if (count >= 2) {
      const firstImgSrc = await page
        .locator("img")
        .first()
        .getAttribute("src");
      await thumbnails.nth(1).click();
      const newImgSrc = await page
        .locator("img")
        .first()
        .getAttribute("src");
      expect(newImgSrc).not.toBe(firstImgSrc);
    }
  });

  test("shows Description tab by default with product description", async ({
    page,
  }) => {
    await expect(page.getByText(/Calm is your moment of pause/i)).toBeVisible();
  });

  test("can switch to Ingredients tab", async ({ page }) => {
    await page.getByRole("button", { name: /Ingredients/i }).click();
    await expect(page.getByText(/Olea Europaea/i)).toBeVisible();
    await expect(page.getByText(/Lavandula Angustifolia/i)).toBeVisible();
  });

  test("shows eco info box", async ({ page }) => {
    await expect(
      page.getByText(/Made with upcycled coffee grounds/i),
    ).toBeVisible();
    await expect(
      page.getByText(/Vegan, plastic-free and zero waste/i),
    ).toBeVisible();
    await expect(page.getByText(/Handmade cold-process soap/i)).toBeVisible();
  });
});

test.describe("Product Detail - Sunny Sage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/shop/sunny-sage");
  });

  test("displays Sunny Sage product name", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Sunny Sage/i }),
    ).toBeVisible();
  });

  test("displays correct price", async ({ page }) => {
    await expect(page.getByText("€8.50")).toBeVisible();
  });

  test("shows description content", async ({ page }) => {
    await expect(
      page.getByText(/Sunny Sage is clarity with a smile/i),
    ).toBeVisible();
  });

  test("can switch to Ingredients tab and shows sage ingredients", async ({
    page,
  }) => {
    await page.getByRole("button", { name: /Ingredients/i }).click();
    await expect(page.getByText(/Salvia Sclarea/i)).toBeVisible();
    await expect(
      page.getByText(/Citrus Aurantium Dulcis Peel Oil/i),
    ).toBeVisible();
  });
});
