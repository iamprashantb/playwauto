const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.getByPlaceholder('John', { exact: true }).click();
  await page.getByPlaceholder('John', { exact: true }).fill('Mathew');
  await page.getByPlaceholder('Doe', { exact: true }).click();
  await page.getByPlaceholder('Doe', { exact: true }).fill('Sharma');
  await page.getByPlaceholder('john.doe@takeo.com').click();
  await page.getByPlaceholder('john.doe@takeo.com').fill('mathew.shharma@yopmail.com');
  await page.getByPlaceholder('1 (702) 123-4567').click();
  await page.getByPlaceholder('1 (702) 123-4567').fill('+15678943216');
  await page.getByLabel('Date of Birth').fill('1996-09-20');
  await page.getByPlaceholder('United States').click();
  await page.getByPlaceholder('United States').fill('US');
  await page.getByPlaceholder('New York').click();
  await page.getByPlaceholder('New York').fill('NY');
  await page.getByPlaceholder('Kingston').click();
  await page.getByPlaceholder('Kingston').fill('KY');
  await page.getByPlaceholder('12401').click();
  await page.getByPlaceholder('12401').fill('54321');
  await page.getByPlaceholder('132, My Street, Kunio street').click();
  await page.getByPlaceholder('132, My Street, Kunio street').fill('Z Street');
  await page.getByLabel('I agree to theTermsandPrivacy policy').check();
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

  // ---------------------
  await context.close();
  await browser.close();
})();