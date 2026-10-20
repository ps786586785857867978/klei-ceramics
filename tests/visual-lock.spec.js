import {test, expect} from '@playwright/test';

// Locks the build you approved. Compares with your own previous build, NOT with the design.
// First run, or after you approve a change: npx playwright test --update-snapshots

const viewports = [
    {name: 'mobile', width: 375, height: 812},
    {name: 'desktop', width: 1440, height: 900},
];

for (const viewport of viewports) {
    test(`visual lock · ${viewport.name}`, async ({page}) => {
        await page.setViewportSize({width: viewport.width, height: viewport.height});
        await page.goto('/');
        await expect(page).toHaveScreenshot(`${viewport.name}.png`, {fullPage: true, maxDiffPixelRatio: 0.01});
    });
}
