import { test, expect } from '@playwright/test';

test('Add then remove Claw Hammer from cart', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    const searchInput = page.locator('input[placeholder="Search"]');
    await searchInput.fill('Claw Hammer with Shock Reduction Grip');

    await page.locator('button:has(svg)').first().click();

    const productCard = page.locator('.card', {
        hasText: 'Claw Hammer with Shock Reduction Grip'
    }).first();

    await expect(productCard).toBeVisible();

    await productCard.locator('img').click();

    const addToCartBtn = page.getByRole('button', { name: /add to cart/i });
    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();

    await expect(
        page.getByText('Product added to shopping cart')
    ).toBeVisible({ timeout: 5000 });

});

