import { test, expect } from '@playwright/test';

test('Login - valid credentials', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    await page.locator('[data-test="email"]').fill(process.env.EMAIL!);

    await page.locator('[data-test="password"]').fill(process.env.PASSWORD!);

    await page.locator('[data-test="login-submit"]').click();

    await expect(
        page.locator('text=sami qasem')
    ).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(3000);
});
