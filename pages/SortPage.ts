import { Page, expect } from '@playwright/test';

export class SortPage {
    constructor(private page: Page) {}

    async selectSort(option: string) {
        await this.page.locator('select').selectOption({ label: option });
        await this.page.waitForTimeout(1000);
    }

    async getProductNames(): Promise<string[]> {
        const names = await this.page.locator('.card-title').allTextContents();
        return names.map(n => n.trim().toLowerCase());
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.page.locator('.card-text').allTextContents();
        return prices.map(p =>
            Number(p.replace(/[^0-9.]/g, ''))
        );
    }

    async expectNamesSortedAZ() {
        const names = await this.getProductNames();
        const sorted = [...names].sort();
        expect(names).toEqual(sorted);
    }

    async expectNamesSortedZA() {
        const names = await this.getProductNames();
        const sorted = [...names].sort().reverse();
        expect(names).toEqual(sorted);
    }

    async expectPricesLowToHigh() {
        const prices = await this.getProductPrices();
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sorted);
    }

    async expectPricesHighToLow() {
        const prices = await this.getProductPrices();
        const sorted = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sorted);
    }
}
