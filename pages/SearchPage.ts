import { Page, expect } from '@playwright/test';

export class SearchPage {
    constructor(private page: Page) {}

    async searchFor(text: string) {
        const searchInput = this.page.getByPlaceholder('Search');
        await searchInput.fill('');
        await searchInput.fill(text);
        await this.page.keyboard.press('Enter');
    }

    async expectResultsVisible() {
        await expect(this.page.locator('.card').first()).toBeVisible();
    }

    async expectNoResults() {
        await expect(
            this.page.getByText('No products found')
        ).toBeVisible();
    }
}
