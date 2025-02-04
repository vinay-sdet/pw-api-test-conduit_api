import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto("https://conduit.bondaracademy.com/")
})

test('Has a text conduit', async ({ page }) => {
 
  // Expect a title "to contain" a substring.
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
});


