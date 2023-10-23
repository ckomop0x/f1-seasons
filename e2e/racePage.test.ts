import { test, expect } from '@playwright/test';

test('Season 2020 race have proper h2', async ({ page }) => {
  await page.goto('/2020/1');

  // Expect a title "to contain" a substring.
  // Use page.locator to find the h1 element by its text.
  await page.waitForTimeout(1000);
  const h1Element = await page.locator('h2');

  // Get the text value from the h1 element.
  const textValue = await h1Element.innerText();

  // Check if the element exists and assert it.
  // await expect(h1Element).toExist();
  await expect(textValue).toBe('Red Bull Ring');
});
