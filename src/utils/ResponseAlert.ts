/*
 * @Description: Response Alert Function from Element Message Components
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-09 14:54:16
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-09 15:06:31
 */
import { ElMessage } from 'element-plus';
import type { messageType } from 'element-plus';

const responseAlert = (message: string, type: messageType = 'error'): void => {
  ElMessage({
    message,
    type,
  });
};

export default responseAlert;
