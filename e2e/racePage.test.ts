import { expect, test } from '@playwright/test';

test('Season 2020 round 1 shows Red Bull Ring', async ({ page }) => {
  await page.goto('/2020/1');

  await expect(page.locator('h2')).toContainText('Red Bull Ring');
});
