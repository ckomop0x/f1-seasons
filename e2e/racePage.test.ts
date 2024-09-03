import { test, expect } from '@playwright/test';

test.skip('Season 2020 race have proper h2', async ({ page }) => {
  await page.goto('/2020/1');

  // Wait for the h2 element with the expected text to be visible.
  const h2Element = await page.waitForSelector('h2:has-text("Red Bull Ring")');

  // Get the text value from the h2 element.
  const textValue = await h2Element.innerText();

  // Check if the text value matches the expected text.
  await expect(textValue).toBe('Red Bull Ring');
});
