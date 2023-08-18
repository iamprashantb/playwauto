import { test, expect } from '@playwright/test';


test('RegisterPage', async ({ page }) => {
    
    await page.goto('https://dev-takeo.vercel.app/auth/signup');

    //await page.goto('https://takeo.ai/auth/signup');

    await page.locator('#firstName').click();
    await page.locator('#firstName').fill('JOHNNY');


    await page.locator('#lastName').click();
    await page.locator('#lastName').fill('WADE');

    await page.locator("#email").click();
    await page.locator("#email").fill('johnnywade@yopmail.com');

    await page.getByPlaceholder('1 (702) 123-4567').click();
    await page.getByPlaceholder('1 (702) 123-4567').fill('+15678943216');

    await page.locator('#dateOfBirth').click();
    await page.locator("#dateOfBirth").fill('1999-12-07');

    await page.locator('#country').click();
    await page.locator("#country").fill('USA');

    await page.locator('#state').click();
    await page.locator("#state").fill('Texas');
   
    await page.locator('#city').click();
    await page.locator("#city").fill('Dallas');

    // await page.locator('#zip').click();
    // await page.locator("#zip").fill('54322');

    await page.fill('#zip', '54332');
    await page.locator('#address').click();
    await page.locator("#address").fill('StreetNYC')

    //checkbox 
    await page.locator('input[type="checkbox"]').check()

  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#bootCampId').click();
  await page.getByRole('option', { name: 'AWS Python Developer Bootcamp' }).click();
  await page.locator('#startDate').click();
  await page.getByRole('option', { name: '3-6 months' }).click();
  await page.getByLabel('No').first().check();
  await page.getByLabel('Yes').nth(1).check();
  await page.getByLabel('No').nth(2).check();
  await page.locator('#codingExperience').click();
  await page.getByRole('option', { name: 'Advanced' }).click();
  await page.getByPlaceholder('Write about your past experience').click();
  await page.getByPlaceholder('Write about your past experience').fill('Full Stack');
  await page.locator('#highestEducation').click();
  await page.getByRole('option', { name: 'College' }).click();
  await page.getByPlaceholder('Write about yourself').click();
  await page.getByPlaceholder('Write about yourself').fill('Student');
  await page.getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Online search' }).click();
  await page.getByPlaceholder('Write about other options').click();
  await page.getByPlaceholder('Write about other options').fill('UDEMY');
  await page.getByRole('button', { name: 'Send for Eligibility' }).click();
    //Dynamic dropdown
    //await page.getByRole('button', {id:'bootCampId',xpath:'1'}).click()
    //await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });
    //await page.getByLabel('Which bootcamps are you interested?').selectOption({label:'Full Stack Developer Bootcamp'});
    //await page.getByLabel('Which bootcamps are you interested?').selectOption({value:'63e9c144ed312ca6287b6b48'});
    //await page.getByLabel('Which bootcamps are you interested?').selectOption({tabindex:'2'});
    
    //await page.getByclass('MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1qurhb6').selectOption({tabindex:'2'});
    //await page.getByPlaceholder('Which bootcamps are you interested?').selectOption({tabindex:'2'});

    //await page.locator("/html/body/div[3]/div/div/form/div/div/div[1]/div/label").selectOption({tabindex:'2'});



})

