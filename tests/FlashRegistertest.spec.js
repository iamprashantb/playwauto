import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-takeo.vercel.app/data-engineer-bootcamp');
  //await page.goto('https://takeo.ai/data-engineer-bootcamp');

  await page.getByRole('menuitem', { name: 'Flash' }).click();
  await page.getByRole('heading', { name: 'Data Engineering in a Flash' }).click();
  await page.locator('#fullName').click();
  await page.locator('#fullName').fill('Mathew Lynn');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('mathew.lynn@yopmail.com');
  await page.getByRole('button', { name: 'United States: + 1' }).click();
  await page.getByText('Afghanistan').click();
  await page.getByPlaceholder('1 (702) 123-4567').click();
  await page.getByPlaceholder('1 (702) 123-4567').fill('+936785432190');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('NY');
  await page.getByLabel('Country').selectOption('USA');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByLabel('close').click();
  await page.getByRole('button', { name: 'Get Syllabus' }).first().click();
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('mathew');
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('lynn');
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('mathew.lynn@yopmail.com');
  await page.getByRole('button', { name: 'United States: + 1' }).click();
  await page.getByRole('listbox').getByText('Canada').click();
  await page.getByRole('textbox', { name: '1 (702) 123-4567' }).click();
  await page.getByRole('textbox', { name: '1 (702) 123-4567' }).fill('+15432167890');
  await page.getByLabel('I agree to theTermsandPrivacy policy').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Proceed' }).click();
  const page1 = await page1Promise;
});