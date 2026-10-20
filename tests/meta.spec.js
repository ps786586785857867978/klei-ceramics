import {test, expect} from '@playwright/test';

// Red at the start: these are your to-do list for checklist category 6.

test('page has a language, a title and a description', async ({page}) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', /.+/);
    await expect(page).toHaveTitle(/.{10,}/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{50,}/);
});

test('page can be shared: Open Graph tags', async ({page}) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\//);
});

test('page has a favicon and a theme colour', async ({page}) => {
    await page.goto('/');
    await expect(page.locator('link[rel="icon"]')).toHaveCount(1);
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', /.+/);
});
