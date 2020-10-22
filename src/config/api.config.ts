/*
 * @Author: Miya
 * @Date: 2020-09-22 17:16:08
 * @LastEditTime: 2020-10-22 17:21:02
 * @LastEditors: Miya
 * @Description: API域名
 * @FilePath: \LandingPage\src\config\api.config.ts
 * @Version: 1.0
 */
import axios from 'axios';
const AUTH_TOKEN = '';
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(
  // eslint-disable-next-line
  (config: any) => {
    const token = localStorage.getItem('blog-token');
    console.log(token);
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

export const GET = async (url: string, data: object | undefined) => {
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

export const POST = async (
  url: string,
  data: object | undefined,
) => {
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
