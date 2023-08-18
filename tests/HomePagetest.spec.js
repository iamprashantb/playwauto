const {test, expect} = require('@playwright/test')


test('Home Page', async ({page}) => {

    await page.goto('https://www.takeo.ai');

    const pageTitle = page.title();
    console.log('Page title Is:', pageTitle);

    //await expect(pageTitle).toBe('Home - Takeo');

    const PageURL = page.url();
    console.log('Page URL Is:', PageURL);

    await expect(page).toHaveURL('https://www.takeo.ai/');

    await page.close();
    
})
