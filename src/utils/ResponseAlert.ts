/*
 * @Description: Response Alert Function from Element Message Components
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-09 14:54:16
 * @LastEditors: Mirage
 * @LastEditTime: 2026-06-17 16:55:53
 */
import { ElMessage } from 'element-plus';
import type { MessageType } from 'element-plus';

const responseAlert = (message: string, type: MessageType = 'error'): void => {
  ElMessage({
    message,
    type,
  });
};

export default responseAlert;
