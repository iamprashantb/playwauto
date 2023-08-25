import { test, expect } from '@playwright/test';


test('LoginPage', async ({ page }) => {
    
    await page.goto('https://dev-takeo.vercel.app/auth/login');

    //await page.goto('https://takeo.ai/auth/login');

    await page.locator('#email').click();
    await page.locator('#email').fill('admin@takeo.ai');


    await page.locator('#password').click();
    await page.locator('#password').fill('Test@1234');

    //await page.locator('#password').fill('t@Ke0@Adm1nn');

    await page.locator("//button[@id=':R2lalddclcla:']").click();

})

