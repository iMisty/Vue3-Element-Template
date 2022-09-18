/*
 * @Description: AJAX Response Error Code
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-09 15:42:28
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-17 02:39:09
 */
import { $t } from '@/language';

/**
 * HTTP Code Response
 * @description HTTP Error Code Response Text
 */
const arrayResponseMessageForStatus = [
  { 400: $t('ErrorCode.base.400') },
  { 401: $t('ErrorCode.base.401') },
  { 403: $t('ErrorCode.base.403') },
  { 404: $t('ErrorCode.base.404') },
  { 500: $t('ErrorCode.base.500') },
  { 502: $t('ErrorCode.base.502') },
];

const arrayResponseMessageForString: never[] = [];

const arrayResponseMessageForCustom: never[] = [];

export { arrayResponseMessageForCustom, arrayResponseMessageForStatus, arrayResponseMessageForString };
