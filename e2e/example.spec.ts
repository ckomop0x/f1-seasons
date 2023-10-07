import { test, expect } from '@playwright/test';

test('Main page title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/F1 Standings/);
});

test('Season 2020 have proper h1', async ({ page }) => {
  await page.goto('/2020');

  // Expect a title "to contain" a substring.
  // Use page.locator to find the h1 element by its text.
  const h1Element = await page.locator('h1');

  // Get the text value from the h1 element.
  const textValue = await h1Element.innerText();

  // Check if the element exists and assert it.
  // await expect(h1Element).toExist();
  await expect(textValue).toBe('SELECTED SEASON: 2020');
});

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

// test('Main page has correct meta tags', async ({ page }) => {
//   await page.goto('/');
//   await expect(page.locator("//link[@rel='canonical']")).toHaveAttribute(
//     'href',
//     'https://ondrabus.com/',
//   );
//   await expect(page.locator("//meta[@property='og:url']")).toHaveAttribute(
//     'content',
//     'https://ondrabus.com/',
//   );
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole('heading', { name: 'Installation' }),
//   ).toBeVisible();
// });
