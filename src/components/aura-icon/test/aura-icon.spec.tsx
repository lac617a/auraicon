import { newSpecPage } from '@stencil/core/testing';
import { AuraIcon } from '../aura-icon';

describe('aura-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AuraIcon],
      html: `<aura-icon></aura-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <aura-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aura-icon>
    `);
  });
});
