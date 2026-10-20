import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const viewports = [
    {name: 'mobile', width: 375, height: 812},
    {name: 'tablet', width: 768, height: 1024},
    {name: 'desktop', width: 1440, height: 900},
];

for (const viewport of viewports) {
    test.describe(viewport.name, () => {
        test.use({viewport: {width: viewport.width, height: viewport.height}});

        test('screenshot for review', async ({page}) => {
            await page.goto('/');
            await page.screenshot({path: `screenshots/${viewport.name}.png`, fullPage: true});
        });

        test('no horizontal scroll', async ({page}) => {
            await page.goto('/');
            const overflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
            expect(overflows).toBe(false);
        });

        test('no serious accessibility violations', async ({page}) => {
            await page.goto('/');
            const {violations} = await new AxeBuilder({page}).analyze();
            const serious = violations.filter((violation) => ['serious', 'critical'].includes(violation.impact));
            expect(serious.map((violation) => `${violation.id}: ${violation.help}`)).toEqual([]);
        });
    });
}
