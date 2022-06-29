import { newE2EPage } from '@stencil/core/testing';

describe('aura-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aura-icon></aura-icon>');

    const element = await page.find('aura-icon');
    expect(element).toHaveClass('hydrated');
  });
});
