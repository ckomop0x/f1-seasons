import { expect, test } from '@playwright/test';

test('Season 2020 has correct heading', async ({ page }) => {
  await page.goto('/2020');

  await expect(page.locator('h1')).toContainText('Selected season: 2020');
});
