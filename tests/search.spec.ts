import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.describe('Search', () => {

    test('Search - valid product', async ({ page }) => {
        const searchPage = new SearchPage(page);

        await page.goto('https://practicesoftwaretesting.com/');

        await searchPage.searchFor('Hammer');
        await searchPage.expectResultsVisible();
    });

    test('Search - no results', async ({ page }) => {
        const searchPage = new SearchPage(page);

        await page.goto('https://practicesoftwaretesting.com/');

        await searchPage.searchFor('zzzzzz');
        await searchPage.expectNoResults();
    });

});
