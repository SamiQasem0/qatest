import { Page, expect } from '@playwright/test';

class CartPage {
    constructor(private page: Page) {}

    async goToHome() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async searchHammer() {
        const searchInput = this.page.locator('input[type="search"]');

        await searchInput.waitFor({ state: 'visible' });
        await searchInput.click();
        await searchInput.fill('Claw Hammer with Shock Reduction Grip');

        await searchInput.press('Enter');

        await this.page.waitForSelector('.card', { timeout: 5000 });
    }





    async addHammerToCart() {
        const productName = 'Claw Hammer with Shock Reduction Grip';

        const productCard = this.page
            .locator('.card')
            .filter({ hasText: productName });

        await expect(productCard).toBeVisible();

        await productCard
            .getByRole('button', { name: /add to cart/i })
            .click();

        await this.page.waitForTimeout(2000);
    }




    async goToCart() {
        await this.page.getByRole('link', { name: /checkout/i }).click();
    }

    async expectHammerInCart() {
        await expect(
            this.page.locator('.cart-item')
        ).toHaveCount(1);
    }

    async removeHammerFromCart() {
        await this.page.getByRole('button', { name: /remove/i }).click();
    }

    async expectCartEmpty() {
        await expect(
            this.page.getByText(/cart is empty/i)
        ).toBeVisible();
    }
}

export default CartPage
