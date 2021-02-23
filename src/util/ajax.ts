/*
 * @Author: Miya
 * @Date: 2021-02-23 16:38:07
 * @LastEditTime: 2021-02-23 17:08:52
 * @LastEditors: Miya
 * @Description: AJAX工具方法
 * @FilePath: \LandingPage\src\util\ajax.ts
 * @Version: 2.0
 */

import axios from 'axios';

export class AJAX {
  // get方法
  private static async getMethod(url: string, data?: object) {
    const result = await axios({
      method: 'get',
      url,
      params: data
    })
      .then(res => {
        return res.data;
      })
      .catch(rej => {
        return rej;
      });
    return result;
  }

  // post方法
  private static async postMethod(url: string, data?: object) {
    const result = await axios({
      method: 'post',
      url,
      data
    })
      .then(res => {
        return res.data;
      })
      .catch(rej => {
        return rej;
      });
    return result;
  }

  // put方法
  private static async putMethod(url: string, data?: object) {
    const result = await axios({
      method: 'put',
      url,
      data
    })
      .then(res => {
        return res.data;
      })
      .catch(rej => {
        return rej;
      });
    return result;
  }

  // delete方法
  private static async deleteMethod(url: string, data?: object) {
    const result = await axios({
      method: 'delete',
      url,
      data
    })
      .then(res => {
        return res.data;
      })
      .catch(rej => {
        return rej;
      });
    return result;
  }

  /**
   * @description 实例化一个ajax方法
   * @param method AJAX传输方法
   * @param url API地址
   * @param data 传输数据
   */
  public static async init(
    method: string,
    url: string,
    data?: object | Array<string>
  ) {
    const methods = ['get', 'post', 'put', 'delete'];
    if (!methods.includes(method)) {
      return 'Unsupport Method';
    }

    // 输入指定字符
    switch (method) {
      case 'get':
        return await this.getMethod(url, data);
      case 'post':
        return await this.postMethod(url, data);
      case 'put':
        return await this.putMethod(url, data);
      case 'delete':
        return await this.deleteMethod(url, data);
    }
  }
}
