import { test } from '@playwright/test';
import { SortPage } from '../pages/SortPage';

test.describe('Sort', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
    });

    test('Sort - Name A to Z', async ({ page }) => {
        const sort = new SortPage(page);
        await sort.selectSort('Name (A - Z)');
        await sort.expectNamesSortedAZ();
    });

    test('Sort - Name Z to A', async ({ page }) => {
        const sort = new SortPage(page);
        await sort.selectSort('Name (Z - A)');
        await sort.expectNamesSortedZA();
    });

    test('Sort - Price Low to High', async ({ page }) => {
        const sort = new SortPage(page);
        await sort.selectSort('Price (Low - High)');
        await sort.expectPricesLowToHigh();
    });

    test('Sort - Price High to Low', async ({ page }) => {
        const sort = new SortPage(page);
        await sort.selectSort('Price (High - Low)');
        await sort.expectPricesHighToLow();
    });

});
