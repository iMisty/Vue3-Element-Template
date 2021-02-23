/*
 * @Author: Miya
 * @Date: 2020-09-22 17:16:08
 * @LastEditTime: 2021-02-23 11:59:55
 * @LastEditors: Miya
 * @Description: API域名
 * @FilePath: \LandingPage\src\config\api.config.ts
 * @Version: 1.0
 */
import axios from 'axios';
const AUTH_TOKEN = localStorage.getItem('blog-token');
// axios.defaults.baseURL = 'https://v2.dressweb.cn';
axios.defaults.baseURL = 'http://localhost:12345';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.timeout = 5000;

// 获取信息
export const INFO = '/info';
// 文章
export const BLOG = '/blog';
// 项目
export const WORK = '/work';
// 关于页
export const ABOUT = '/user/about';
// 关于页团队
export const TEAM = '/user/team';
// 页脚部分
export const FOOTER = '/user/footer';
// 页脚联系方式
export const FOOTER_CONTENT = '/user/footer/contact';
// 验证token
export const TOKEN = '/user/status';
// 注册账户
export const REGISTRY = '/registry';
// 登录
export const LOGIN = '/login';

// 请求拦截器
axios.interceptors.request.use(
  // eslint-disable-next-line
  (config: any) => {
    const token = `Bearer ${localStorage.getItem('blog-token')}`;
    console.log(`Token: ${token}`);
    console.log(config);
    console.log(`Method: ${config.method}`);
    if (
      // config.url === '/info/*' ||
      // config.url === '/registry' ||
      // config.url === '/login' ||
      config.method === 'get' ||
      config.url === '/user/status'
    ) {
      return config;
    }
    if (token) {
      config.headers.common['Authorization'] = `${token}`;
      return config;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export const GET = async (url: string, data?: object) => {
  const result = await axios({
    method: 'get',
    url,
    params: data
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
    .then(res => {
      return res.data;
    })
    .catch(rej => {
      return rej;
    });
  return result;
};

export const POST = async (url: string, data?: object) => {
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
};

export const PUT = async (url: string, data?: object) => {
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
};

export const DELETE = async (url: string, data?: object) => {
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
};

export class AJAX {
  private static async getMethod(url: string, data?: object) {
    const result = await axios({
      method: 'get',
      url,
      params: data
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(res => {
        return res.data;
      })
      .catch(rej => {
        return rej;
      });
    return result;
  }

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

/**
 * @description AJAX方法工具函数
 * @param method AJAX方法
 * @param url API地址
 * @param data 传输数据
 */
// export const AJAXa = async (
//   method: string,
//   url: string,
//   data?: object | Array<String>
// ) => {
//   // 输入其他字符时
//   const methods = ['get', 'post', 'put', 'delete'];
//   if (!methods.includes(method)) {
//     return 'Unsupport Method';
//   }

//   // 输入指定字符
//   switch (method) {
//     case 'get':
//       return await GET(url, data);
//     case 'post':
//       return await POST(url, data);
//     case 'put':
//       return await PUT(url, data);
//     case 'delete':
//       return await DELETE(url, data);
//   }
// };
