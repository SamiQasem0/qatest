import { Page, expect } from '@playwright/test';

export class PriceRangePage {
    constructor(private page: Page) {}

    async goToHome() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async movePriceRange() {
        const minSlider = this.page.locator('.ngx-slider-pointer').first();
        const maxSlider = this.page.locator('.ngx-slider-pointer').nth(1);

        const minBox = await minSlider.boundingBox();
        const maxBox = await maxSlider.boundingBox();

        if (!minBox || !maxBox) {
            throw new Error('Slider not found');
        }

        await this.page.mouse.move(
            minBox.x + minBox.width / 2,
            minBox.y + minBox.height / 2
        );
        await this.page.mouse.down();
        await this.page.mouse.move(minBox.x + 80, minBox.y);
        await this.page.mouse.up();

        await this.page.mouse.move(
            maxBox.x + maxBox.width / 2,
            maxBox.y + maxBox.height / 2
        );
        await this.page.mouse.down();
        await this.page.mouse.move(maxBox.x - 80, maxBox.y);
        await this.page.mouse.up();
    }

    async expectResultsLoaded() {
        const cards = this.page.locator('.card');
        const noResultsText = this.page.getByText('No products found');

        await Promise.race([
            cards.first().waitFor({ state: 'visible', timeout: 5000 }),
            noResultsText.waitFor({ state: 'visible', timeout: 5000 })
        ]);
    }

}
