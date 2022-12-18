import { test, expect } from '@playwright/test';

test.describe('Shows page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://nada-tv-test.vercel.app/shows/43201');
  });

  test('show page test', async ({ page }) => {
    // @ts-check

    // Go to the Shows page
    await page.goto('https://nada-tv-test.vercel.app/shows/43201');

    // Click the Logo link
    await page.getByRole('banner').click();
    
    // Expect a show page logo contains a substring.
    page.getByRole('banner').getByRole('link', { name: 'TV Bland' });

    // Expect a show page has main tag
    page.getByRole('main');

    // Expect a show page contins a substring.
    page.locator('[id="__next"] div').filter({ hasText: '2.7/5Dangerous LiaisonsDangerous Liaisons follows the Marquise de Merteuil and t' }).nth(3);
    
    // Expect a show page contins an image with alt text.
    page.getByRole('img', { name: 'Dangerous Liaisons' });

    // Expect a show page contins an image with alt text.
    page.getByText('2.7/5Dangerous LiaisonsDangerous Liaisons follows the Marquise de Merteuil and t');
    
    // Expect it contins a rating text.
    page.getByTestId('rating-5.4');
    
    // Expect it contins a descripton.
    page.locator('#truncateme');

    // Expect it contins a bold text.
    page.locator('b');

    // Expect it contins a show info
    page.getByText('Show InfoScheduleSundayStatus RunningGenresDrama, History');

    // Expect it contins a starring info
    page.getByText('StarringAlice EnglertCamilleNicholas DentonPascal ValmontFisayo AkinadeChevalier');

    // Expect it contins a starring block title
    page.getByText('Starring');

    // Expect a starring block contins actor's title
    page.getByRole('main').locator('div').filter({ hasText: 'Alice EnglertCamille' }).nth(3);

    // Expect a starring block contins an actor's image with alt text.
    page.getByRole('img', { name: 'Alice Englert' });

    // Expect a starring block contins an actor's name.
    page.getByText('Alice Englert');

    // Expect a starring block contins an actor's character.
    page.getByText('Camille');
  });

});
