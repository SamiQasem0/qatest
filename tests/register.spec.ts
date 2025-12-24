import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test('Register - valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.register();
    await registerPage.assertRegistered();

    await page.waitForTimeout(3000);
});
