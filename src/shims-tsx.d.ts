/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-11-02 12:23:16
 * @LastEditors: Miya
 * @Description: shims-tsx
 * @FilePath: \LandingPage\src\shims-tsx.d.ts
 * @Version: 1.0
 */
import Vue, { VNode } from 'vue';
import h2m from 'h2m';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'h2m';
