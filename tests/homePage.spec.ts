import { test, expect } from '@playwright/test';

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

test('2.1', async ({ page }) => {
  await test.step('Go to homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Check title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
  await test.step('Click Get Started', async () => {
    await page.locator('text=Get Started').click();
    await delay(2500);
  });
});

test('2.2', async ({ page }) => {
  await test.step('Open Playwright docs', async () => {
    await page.goto('https://playwright.dev/docs/intro');
    await delay(2000);
  });
  await test.step('Intentional fail: wrong title', async () => {
    await expect(page).toHaveTitle(/Cypress/);
  });
});

test('2.3', async ({ page }) => {
  await test.step('Navigate to homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Take screenshot', async () => {
    await page.screenshot({ path: 'screenshots/2.3.png', fullPage: true });
    await delay(2500);
  });
  await test.step('Verify title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('2.3.1', async ({ page }) => {
  await test.step('Go to Playwright site', async () => {
    await page.goto('https://playwright.dev/');
    await delay(1500);
  });
  await test.step('Click Docs', async () => {
    await page.locator('text=Docs').click();
    await delay(2500);
  });
  await test.step('Check Docs visible', async () => {
    await expect(page.locator('text=Docs')).toBeVisible();
  });
});

test('2.3.2', async ({ page }) => {
  await test.step('Visit homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Intentional fail: missing text', async () => {
    await expect(page.locator('text=LaunchButton')).toBeVisible();
  });
});

test('2.3.3', async ({ page }) => {
  await test.step('Open homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Scroll and screenshot', async () => {
    await page.mouse.wheel(0, 500);
    await page.screenshot({ path: 'screenshots/2.3.3.png', fullPage: true });
    await delay(2500);
  });
  await test.step('Check title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('2.4', async ({ page }) => {
  await test.step('Open docs intro page', async () => {
    await page.goto('https://playwright.dev/docs/intro');
    await delay(3000);
  });
  await test.step('Verify Docs link visible', async () => {
    await expect(page.locator('text=Docs')).toBeVisible();
  });
});

test('2.5', async ({ page }) => {
  await test.step('Go to homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Intentional fail: URL mismatch', async () => {
    await expect(page).toHaveURL(/example/);
  });
});

test('2.6', async ({ page }) => {
  await test.step('Go to Playwright website', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Scroll and wait', async () => {
    await page.mouse.wheel(0, 700);
    await delay(3000);
  });
  await test.step('Validate title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('2.7', async ({ page }) => {
  await test.step('Open homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2500);
  });
  await test.step('Click Get Started', async () => {
    await page.locator('text=Get Started').click();
    await delay(2000);
  });
  await test.step('Check title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('2.8', async ({ page }) => {
  await test.step('Visit Playwright site', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Scroll', async () => {
    await page.mouse.wheel(0, 800);
    await delay(2000);
  });
  await test.step('Take screenshot', async () => {
    await page.screenshot({ path: 'screenshots/2.8.png', fullPage: true });
  });
});

test('2.9', async ({ page }) => {
  await test.step('Go to homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Intentional fail: missing element', async () => {
    await expect(page.locator('#does-not-exist')).toBeVisible();
  });
});

test('2.10', async ({ page }) => {
  await test.step('Navigate to docs intro', async () => {
    await page.goto('https://playwright.dev/docs/intro');
  });
  await test.step('Scroll and screenshot', async () => {
    await page.mouse.wheel(0, 1000);
    await delay(2000);
    await page.screenshot({ path: 'screenshots/2.10.png', fullPage: true });
  });
});

test('2.11', async ({ page }) => {
  await test.step('Visit homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2500);
  });
  await test.step('Click Docs', async () => {
    await page.locator('text=Docs').click();
    await delay(2500);
  });
  await test.step('Verify title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('2.12', async ({ page }) => {
  await test.step('Go to Playwright homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Scroll and wait', async () => {
    await page.mouse.wheel(0, 400);
    await delay(2000);
  });
  await test.step('Take screenshot', async () => {
    await page.screenshot({ path: 'screenshots/2.12.png', fullPage: true });
    await delay(2500);
  });
  await test.step('Validate title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});
