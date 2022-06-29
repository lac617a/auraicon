import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'aura-icon',
  styleUrl: 'aura-icon.css',
  shadow: true,
})
export class AuraIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
