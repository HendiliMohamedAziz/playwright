import { test, expect } from '@playwright/test';

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

test('1.1', async ({ page }) => {
  await test.step('Go to Playwright homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(1500);
  });
  await test.step('Check title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
  await test.step('Click Get Started', async () => {
    await page.locator('text=Get Started').click();
    await delay(2000);
  });
});

test('1.2', async ({ page }) => {
  await test.step('Open homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Try to validate wrong title (intentional fail)', async () => {
    await expect(page).toHaveTitle(/Jenkins/);
  });
});

test('1.3', async ({ page }) => {
  await test.step('Navigate to docs', async () => {
    await page.goto('https://playwright.dev/docs/intro');
    await delay(2000);
  });
  await test.step('Verify title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
  await test.step('Take a screenshot', async () => {
    await page.screenshot({ path: 'screenshots/1.3.png', fullPage: true });
    await delay(2500);
  });
});

test('1.3.1', async ({ page }) => {
  await test.step('Visit homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Click Docs link', async () => {
    await page.locator('text=Docs').click();
    await delay(3000);
  });
  await test.step('Check Get Started visible', async () => {
    await expect(page.locator('text=Get Started')).toBeVisible();
  });
});

test('1.3.2', async ({ page }) => {
  await test.step('Go to homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2500);
  });
  await test.step('Intentional fail: Find missing element', async () => {
    await expect(page.locator('text=NonExistingButton')).toBeVisible();
  });
});

test('1.3.3', async ({ page }) => {
  await test.step('Open homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Check Docs button visible', async () => {
    await expect(page.locator('text=Docs')).toBeVisible();
  });
  await test.step('Take screenshot', async () => {
    await page.screenshot({ path: 'screenshots/1.3.3.png', fullPage: true });
    await delay(2000);
  });
});

test('1.4', async ({ page }) => {
  await test.step('Navigate to intro docs', async () => {
    await page.goto('https://playwright.dev/docs/intro');
    await delay(2500);
  });
  await test.step('Check page title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
  await test.step('Scroll through page', async () => {
    await page.mouse.wheel(0, 600);
    await delay(2000);
  });
});

test('1.5', async ({ page }) => {
  await test.step('Go to homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Wait a bit', async () => {
    await delay(2000);
  });
  await test.step('Intentional fail: wrong URL check', async () => {
    await expect(page).toHaveURL(/example/);
  });
});

test('1.6', async ({ page }) => {
  await test.step('Open site', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Scroll and take screenshot', async () => {
    await page.mouse.wheel(0, 500);
    await delay(1500);
    await page.screenshot({ path: 'screenshots/1.6.png', fullPage: true });
  });
});

test('1.7', async ({ page }) => {
  await test.step('Visit docs', async () => {
    await page.goto('https://playwright.dev/docs/intro');
    await delay(3000);
  });
  await test.step('Verify Docs text visible', async () => {
    await expect(page.locator('text=Docs')).toBeVisible();
  });
});

test('1.8', async ({ page }) => {
  await test.step('Open homepage', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Check Get Started button visible', async () => {
    await expect(page.locator('text=Get Started')).toBeVisible();
  });
  await test.step('Click and wait', async () => {
    await page.locator('text=Get Started').click();
    await delay(2500);
  });
});

test('1.9', async ({ page }) => {
  await test.step('Go to homepage', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Intentional fail: missing selector', async () => {
    await expect(page.locator('#does-not-exist')).toBeVisible();
  });
});

test('1.10', async ({ page }) => {
  await test.step('Open site', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Scroll down', async () => {
    await page.mouse.wheel(0, 400);
    await delay(3000);
  });
  await test.step('Check title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('1.11', async ({ page }) => {
  await test.step('Navigate to site', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2500);
  });
  await test.step('Click Docs', async () => {
    await page.locator('text=Docs').click();
    await delay(2000);
  });
  await test.step('Verify title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('1.12', async ({ page }) => {
  await test.step('Go to Playwright site', async () => {
    await page.goto('https://playwright.dev/');
    await delay(2000);
  });
  await test.step('Take screenshot', async () => {
    await page.screenshot({ path: 'screenshots/1.12.png', fullPage: true });
    await delay(3000);
  });
  await test.step('Validate title', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});
