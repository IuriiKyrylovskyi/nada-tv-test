import { test } from '@playwright/test';

test('home page test', async ({ page }) => {
  // @ts-check

  // Go to the Home page
  await page.goto('https://nada-tv-test.vercel.app/');

  // Expect a title contains a string.
  page.getByText('Last Added Shows');

  // Click the Logo link.
  await page.getByRole('banner').getByRole('link', { name: 'TV Bland' }).click();

  // Expect a home page description contains a substring.
  page.getByText('TV Show and web series databaseCreate personalised schedules. Episode guide, cas');
  
  // Navigate between pages by pagination buttons clicking
  await page.locator('.sc-dfd3369a-5').click();
  await page.locator('.sc-dfd3369a-5').click();
  await page.locator('.sc-dfd3369a-5').click();
  await page.locator('div:nth-child(3) > .sc-dfd3369a-6').click();
  await page.locator('.sc-dfd3369a-6').first().click();
})
