import { Page, expect } from '@playwright/test';

export class RegisterPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/register');
    }

    async register() {
        await this.page.getByLabel('First name').fill('Sami');
        await this.page.getByLabel('Last name').fill('Qasem');

        await this.page.getByLabel('Date of Birth').fill('2002-02-22');

        await this.page.getByLabel('Street').fill('Main Street');
        await this.page.getByLabel('Postal code').fill('P402');
        await this.page.getByLabel('City').fill('Nablus');
        await this.page.getByLabel('State').fill('West Bank');


        await this.page.getByLabel('Country').selectOption({ label: 'Japan' });

        await this.page.getByLabel('Phone').fill('0597260094');

        const email = `sami${Date.now()}@test.com`;
        await this.page.getByLabel('Email address').fill(email);



        const randomNumber = Math.floor(Math.random() * 1000);

        await this.page.getByLabel('Password').fill(`Aa@12345${randomNumber}`);


        await this.page.getByRole('button', { name: 'Register' }).click();
    }

    async assertRegistered() {
        await expect(this.page).toHaveURL(/login/);
    }
}
