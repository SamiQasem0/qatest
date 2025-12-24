import { test } from '@playwright/test';
import { PriceRangePage } from '../pages/PriceRangePage';

test('Filter products by price range slider', async ({ page }) => {
    const priceRange = new PriceRangePage(page);

    await priceRange.goToHome();

    await priceRange.movePriceRange();

    await priceRange.expectResultsLoaded();
});
