import { test, expect } from '@playwright/test';

test('2.1', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('2.2', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await expect(page).toHaveURL(/.*docs/);
});

test('2.3', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox').fill('test');
    await expect(page.getByRole('textbox')).toHaveValue('test');
});

test('2.3.1', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://example.com');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(3000); // under 3 seconds
});

test('2.3.2', async ({ page }) => {
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshots/example.png', fullPage: true });
});

test('2.3.3', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('2.4', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await expect(page).toHaveURL(/.*docs/);
});

test('2.5', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox').fill('test');
    await expect(page.getByRole('textbox')).toHaveValue('test');
});

test('2.6', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://example.com');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(3000); // under 3 seconds
});

test('2.7', async ({ page }) => {
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshots/example.png', fullPage: true });
});

test('2.8', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('2.9', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await expect(page).toHaveURL(/.*docs/);
});

test('2.10', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox').fill('test');
    await expect(page.getByRole('textbox')).toHaveValue('test');
});

test('2.11', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://example.com');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(3000); // under 3 seconds
});

test('2.12', async ({ page }) => {
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshots/example.png', fullPage: true });
});