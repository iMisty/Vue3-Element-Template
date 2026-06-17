/*
 * @Author: Miya
 * @Date: 2022-01-15 23:54:01
 * @LastEditTime: 2022-09-17 02:16:13
 * @LastEditors: Miya
 * @Description: Validator — thin static-class wrapper around the `validator` lib
 * @FilePath: \Vue3-Element-Template\src\utils\validate.ts
 */
import validator from 'validator';

/**
 * Common validators, encapsulated as static methods over the `validator`
 * library so callers don't have to maintain raw regular expressions.
 *
 * @example
 *   Validate.isEmail('a@b.com');        // true
 *   Validate.isIPv4('192.168.0.1');     // true
 *   Validate.isMobilePhone('13800000000'); // true (zh-CN by default)
 */
export default class Validate {
  /** Validate an email address. */
  static isEmail(
    value: string,
    options?: Parameters<typeof validator.isEmail>[1],
  ): boolean {
    return validator.isEmail(value, options);
  }

  /** Validate an IP address (v4 or v6 unless a version is given). */
  static isIP(
    value: string,
    version?: Parameters<typeof validator.isIP>[1],
  ): boolean {
    return validator.isIP(value, version);
  }

  /** Validate an IPv4 address (replaces the old VALIDATE_IPV4 regexp). */
  static isIPv4(value: string): boolean {
    return validator.isIP(value, 4);
  }

  /** Validate an IPv6 address (replaces the old VALIDATE_IPV6 regexp). */
  static isIPv6(value: string): boolean {
    return validator.isIP(value, 6);
  }

  /** Validate a URL. */
  static isURL(
    value: string,
    options?: Parameters<typeof validator.isURL>[1],
  ): boolean {
    return validator.isURL(value, options);
  }

  /** Validate a phone number (defaults to mainland China). */
  static isMobilePhone(
    value: string,
    locale: Parameters<typeof validator.isMobilePhone>[1] = 'zh-CN',
  ): boolean {
    return validator.isMobilePhone(value, locale);
  }

  /** Validate an identity card number (defaults to mainland China). */
  static isIdCard(
    value: string,
    locale: Parameters<typeof validator.isIdentityCard>[1] = 'zh-CN',
  ): boolean {
    return validator.isIdentityCard(value, locale);
  }

  /** Check whether a string is empty (length 0). */
  static isEmpty(
    value: string,
    options?: Parameters<typeof validator.isEmpty>[1],
  ): boolean {
    return validator.isEmpty(value, options);
  }

  /** Validate that a string contains only numbers. */
  static isNumeric(
    value: string,
    options?: Parameters<typeof validator.isNumeric>[1],
  ): boolean {
    return validator.isNumeric(value, options);
  }

  /** Validate an integer. */
  static isInt(
    value: string,
    options?: Parameters<typeof validator.isInt>[1],
  ): boolean {
    return validator.isInt(value, options);
  }

  /** Validate password strength. */
  static isStrongPassword(
    value: string,
    options?: Parameters<typeof validator.isStrongPassword>[1],
  ): boolean {
    return validator.isStrongPassword(value, options) as boolean;
  }

  /** Validate a JSON string. */
  static isJSON(
    value: string,
    options?: Parameters<typeof validator.isJSON>[1],
  ): boolean {
    return validator.isJSON(value, options);
  }
}
