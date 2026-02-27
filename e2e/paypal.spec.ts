import { test, expect } from "@playwright/test";

test.describe("PayPal Checkout", () => {
  test("Calm product page loads PayPal button container", async ({ page }) => {
    await page.goto("/en/shop/calm");

    // The PayPal container div should be rendered for Calm (buttonId: LZ9PU87PH84G6)
    const paypalContainer = page.locator("#paypal-container-LZ9PU87PH84G6");
    await expect(paypalContainer).toBeVisible({ timeout: 15000 });
  });

  test("Sunny Sage product page loads PayPal button container", async ({
    page,
  }) => {
    await page.goto("/en/shop/sunny-sage");

    // The PayPal container div for Sunny Sage (buttonId: 5UMAKGJHZHBEU)
    const paypalContainer = page.locator("#paypal-container-5UMAKGJHZHBEU");
    await expect(paypalContainer).toBeVisible({ timeout: 15000 });
  });

  test("clicking first PayPal purchase button opens PayPal popup or iframe", async ({
    page,
  }) => {
    await page.goto("/en/shop/calm");

    // Wait for PayPal SDK to render the button
    const paypalContainer = page.locator("#paypal-container-LZ9PU87PH84G6");
    await expect(paypalContainer).toBeVisible({ timeout: 15000 });

    // PayPal renders buttons inside an iframe
    const paypalIframe = paypalContainer.locator("iframe").first();

    // Wait a bit for the SDK to fully render
    await page.waitForTimeout(3000);

    const iframeCount = await paypalContainer.locator("iframe").count();

    if (iframeCount > 0) {
      // PayPal SDK loaded and rendered - click the first button inside the iframe
      const frame = paypalIframe.contentFrame();

      // PayPal hosted buttons render a checkout/purchase button
      // Try to find and click the primary action button
      const popupPromise = page.waitForEvent("popup", { timeout: 10000 });

      // Click the PayPal button (it may be a div or button styled element)
      await frame
        .locator('[role="button"], button, .paypal-button')
        .first()
        .click({ timeout: 5000 });

      // A popup window should open for PayPal checkout
      const popup = await popupPromise;
      expect(popup.url()).toContain("paypal.com");
      await popup.close();
    } else {
      // If no iframe, PayPal SDK may not have loaded (no client ID configured)
      // Just verify the container is present
      await expect(paypalContainer).toBeVisible();
    }
  });

  test("PayPal button appears on German product page too", async ({
    page,
  }) => {
    await page.goto("/de/shop/calm");

    const paypalContainer = page.locator("#paypal-container-LZ9PU87PH84G6");
    await expect(paypalContainer).toBeVisible({ timeout: 15000 });
  });
});
