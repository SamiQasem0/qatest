import { test } from '@playwright/test';
import { FilterPage } from '../pages/FilterPage';

test.describe('Filter', () => {

    test('Filter by category', async ({ page }) => {
        const filterPage = new FilterPage(page);

        await page.goto('https://practicesoftwaretesting.com/');
        await filterPage.filterByCategory('Hand Tools');

        await filterPage.expectResultsVisible();
    });

    test('Filter by brand', async ({ page }) => {
        const filterPage = new FilterPage(page);

        await page.goto('https://practicesoftwaretesting.com/');
        await filterPage.filterByBrand('MightyCraft Hardware');

        await filterPage.expectResultsVisible();
    });

});
