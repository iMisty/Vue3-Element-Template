/*
 * @Author: Miya
 * @Date: 2020-11-09 15:14:05
 * @LastEditTime: 2021-02-20 10:56:03
 * @LastEditors: Miya
 * @Description: Mermaid-UI Model
 * @FilePath: \LandingPage\src\extends\model.ts
 * @Version: 1.0
 */
import Vue from 'vue';
import Model from '@/components/MermaidModel';
import { VueClass } from 'vue-class-component/lib/declarations';
// import MermaidModel from '@/components/MermaidModel';

const confirmConstructor: any = Vue.extend(Model);

const MermaidModelComponent = text => {
  return new Promise((res, rej) => {
    const modelDom = new confirmConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(modelDom.$el);
    modelDom.text = Object.assign({}, modelDom.text, text);
    modelDom.confirm = () => {
      console.log('confirm');
      modelDom.isShow = false;
      res('Confirm');
    };
    modelDom.cancel = () => {
      console.log('cancel');
      modelDom.isShow = false;
      rej('cancel');
    };
  });
};

// (MermaidModel as any).install = (Vue: any) => {
//   Vue.component(MermaidModel.name, MermaidModel);
// };

export default MermaidModelComponent;
