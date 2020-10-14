/*
 * @Author: Miya
 * @Date: 2020-10-14 16:44:35
 * @LastEditTime: 2020-10-14 17:02:46
 * @LastEditors: Miya
 * @Description: Koa APP
 * @FilePath: \LandingPage\server\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'Koa';
import * as Router from 'koa-router';
import mongoose = require('mongoose');
import { dbs } from './config/db';

const app = new Koa();
const router = new Router();
const port = 12451;

// Router
router.get('/', async (ctx, next) => {
  ctx.body = 'Hello TypeScript';
});

// MiddleWare
app.use(router.routes());

// MongoDB
mongoose.connect(dbs, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(port);

console.log(`Server running on port ${port}`);
