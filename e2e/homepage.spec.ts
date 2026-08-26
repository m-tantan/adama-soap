import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/");
  });

  test("redirects root to /en/", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/en\//);
  });

  test("renders the header with navigation links", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    await expect(header.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(header.getByRole("link", { name: "About" })).toBeVisible();
    await expect(
      header.getByRole("link", { name: "Instagram" }),
    ).toBeVisible();
  });

  test("header logo is visible and links to home", async ({ page }) => {
    const logo = page.locator('header img[alt*="Adama"]');
    await expect(logo).toBeVisible();
  });

  test("renders DiscoverSoaps section with products", async ({ page }) => {
    // Shop title area
    await expect(page.getByText("Shop")).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Explore Shop/i }),
    ).toBeVisible();

    // Product cards for Calm and Sunny Sage
    await expect(page.getByText("Calm").first()).toBeVisible();
    await expect(page.getByText("Sunny Sage").first()).toBeVisible();
  });

  test("renders HeroSection with title and description", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: /Handmade Vegan Coffee Soap from Munich/i,
      }),
    ).toBeVisible();
  });

  test("renders OurStory section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Our Story/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Who We Are/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Our Mission/i }),
    ).toBeVisible();

    // Founder photo
    const founderImg = page.locator('img[alt*="yoav"], img[alt*="founder"]');
    await expect(founderImg.first()).toBeVisible();
  });

  test("renders CafePartners section", async ({ page }) => {
    await expect(page.getByText(/Our Partners/i)).toBeVisible();
    await expect(page.getByText(/Cafe Faber/i)).toBeVisible();
    await expect(page.getByText(/Poppi Farmer/i)).toBeVisible();
  });

  test("renders sustainability partners", async ({ page }) => {
    await expect(
      page.getByText(/abgefüllt.*unverpackt/i).first(),
    ).toBeVisible();
  });

  test("renders FollowUs section with Instagram link", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Follow Us/i }),
    ).toBeVisible();
    const instagramLink = page.getByRole("link", { name: /@adamasoaps/i });
    await expect(instagramLink).toBeVisible();
    await expect(instagramLink).toHaveAttribute(
      "href",
      /instagram\.com\/adamasoaps/,
    );
  });

  test("renders Footer with contact info", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/Adama Soaps/i)).toBeVisible();
    await expect(footer.getByText(/Adamasoaps@gmail.com/i)).toBeVisible();
    await expect(
      footer.getByText(/Holzstr.*11.*80469.*Munich/i),
    ).toBeVisible();
  });

  test("footer has policy links", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(
      footer.getByRole("link", { name: /Privacy Policy/i }),
    ).toBeVisible();
    await expect(
      footer.getByRole("link", { name: /Shipping Policy/i }),
    ).toBeVisible();
    await expect(
      footer.getByRole("link", { name: /Terms/i }),
    ).toBeVisible();
    await expect(
      footer.getByRole("link", { name: /Return/i }),
    ).toBeVisible();
  });

  test("footer has Instagram social link", async ({ page }) => {
    const footer = page.locator("footer");
    const igLink = footer.getByRole("link", { name: /Instagram/i });
    await expect(igLink).toBeVisible();
    await expect(igLink).toHaveAttribute("href", /instagram\.com/);
  });
});
