/*
 * @Author: Miya
 * @Date: 2020-10-14 16:44:35
 * @LastEditTime: 2020-10-14 18:45:37
 * @LastEditors: Miya
 * @Description: Koa APP
 * @FilePath: \LandingPage\server\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'Koa';
import mongoose = require('mongoose');

const app = new Koa();
const port = 12459;

app.listen(port);

console.log(`Server running on port ${port}`);
