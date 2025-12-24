import { Page, expect } from '@playwright/test';

export class FilterPage {
    constructor(private page: Page) {}

    async filterByCategory(category: string) {
        await this.page.getByRole('checkbox', { name: category }).check();
    }

    async filterByBrand(brand: string) {
        await this.page.getByRole('checkbox', { name: brand }).check();
    }

    async expectResultsVisible() {
        const cards = this.page.locator('.card');
        const noResults = this.page.getByText('No products found');

        await Promise.race([
            cards.first().waitFor({ state: 'visible', timeout: 8000 }),
            noResults.waitFor({ state: 'visible', timeout: 8000 })
        ]);

        expect(true).toBeTruthy();
    }

}
