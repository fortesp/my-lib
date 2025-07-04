import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrls: {
    "light": 'my-component.light.scss',
    "dark": 'my-component.dark.scss'
  },
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() mode: "dark" | "light" = "dark";

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="component">Hello, World! I'm {this.getText()}</div>;
  }
}
