/*
 * @Author: Miya
 * @Date: 2020-09-22 17:16:08
 * @LastEditTime: 2020-11-02 16:17:11
 * @LastEditors: Miya
 * @Description: API域名
 * @FilePath: \LandingPage\src\config\api.config.ts
 * @Version: 1.0
 */
import axios from 'axios';
const AUTH_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDQzMDIyNzgsImV4cCI6MTYwNDM4ODY3OH0.V7O72qs-9L0puZ4KLvoT2uilRpr3bMieRtcuMUFVGOI`;
axios.defaults.baseURL = '/api';
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
// 注册账户
export const REGISTRY = '/registry';
// 登录
export const LOGIN = '/login';

// 请求拦截器
axios.interceptors.request.use(
  // eslint-disable-next-line
  (config: any) => {
    const token = localStorage.getItem('blog-token');
    console.log(`Token: ${token}`);
    console.log(config)
    console.log(`Method: ${config.method}`);
    if (
      config.method === 'get' ||
      config.url === '/registry' ||
      config.url === '/login'
    ) {
      return config;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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

export const POST = async (url: string, data: object | undefined) => {
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

export const PUT = async (url: string, data: object | undefined) => {
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

export const DELETE = async (url: string, data: object | undefined) => {
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
