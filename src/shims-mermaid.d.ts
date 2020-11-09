/*
 * @Author: Miya
 * @Date: 2020-11-09 16:39:21
 * @LastEditTime: 2020-11-09 16:44:05
 * @LastEditors: Miya
 * @Description: Mermaid d.ts
 * @FilePath: \LandingPage\src\shims-mermaid.d.ts
 * @Version: 1.0
 */
import MermaidModel from '@/extends/model';

declare module 'Vue/types/vue' {
  interface Vue {
    $model: MermaidModel;
  }
}
