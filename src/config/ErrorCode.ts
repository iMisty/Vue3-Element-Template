/*
 * @Description: AJAX Response Error Code
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-09 15:42:28
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-09 17:57:17
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

const arrayResponseMessageForString = [];

const arrayResponseMessageForCustom = [];
