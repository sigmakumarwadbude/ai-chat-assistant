
import { test, expect } from '@playwright/test';

test.describe('AI Chat Assistant', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', {
      waitUntil: 'domcontentloaded',
    });
  });

  test('should load the application', async ({ page }) => {
    await expect(page.locator('app-root')).toBeVisible();

    await expect(page).toHaveTitle('AI Chat Assistant');

    await expect(
      page.getByRole('heading', {
        name: 'AI Chat Assistant',
        level: 1,
      }),
    ).toBeVisible();
  });

  test('should match the application visual snapshot', async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot('application.png', {
      fullPage: true,
    });
  });
});
