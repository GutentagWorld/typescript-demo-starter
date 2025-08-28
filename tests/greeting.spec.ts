import { test, expect } from '@playwright/test';

test.describe('Greeting App', () => {
  test('should greet user with entered name', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('h1')).toHaveText('TypeScript Demo Starter');
    
    await page.fill('#nameInput', 'World');
    await page.click('#greetButton');
    
    await expect(page.locator('#output')).toHaveText('Hello World!');
  });

  test('should show message when no name is entered', async ({ page }) => {
    await page.goto('/');
    
    await page.fill('#nameInput', '');
    await page.click('#greetButton');
    
    await expect(page.locator('#output')).toHaveText('Please enter your name.');
  });

  test('should work with Enter key', async ({ page }) => {
    await page.goto('/');
    
    await page.fill('#nameInput', 'Playwright');
    await page.press('#nameInput', 'Enter');
    
    await expect(page.locator('#output')).toHaveText('Hello Playwright!');
  });
});