/*
 * @Author: Miya
 * @Date: 2022-08-09 23:23:04
 * @LastEditTime: 2022-08-10 23:32:05
 * @LastEditors: Miya
 * @Description: IndexedDB methods
 * @FilePath: \Vue3-Element-Template\src\utils\IndexedDB.ts
 */

import {
  createStore,
  get,
  getMany,
  set,
  setMany,
  update,
  del,
  clear,
  entries,
} from 'idb-keyval';
import type { UseStore } from 'idb-keyval';

/**
 * Interface for indexedDB base
 * @interface
 */
type indexedDBType = {
  database: string;
  store: string;
};

/**
 * Class for indexedDB Methods
 */
class IndexedDB {
  private nameDatabase: string = 'Miramiya-DB';
  private nameStore: string = 'application';

  /**
   * @private
   * Get Active indexedDB Database and Store
   * @returns {UseStore} Get indexedDB Database and Store
   */
  private getStore(): UseStore {
    return createStore(this.nameDatabase, this.nameStore);
  }

  /**
   * @public
   * Set New Database and Store
   * @param database {string} Database Name
   * @param store {string} Store in Database
   * @returns {Promise<UseStore>} Status with indexedDB
   */
  public async setStore(database: string, store: string): Promise<UseStore> {
    if (!store) {
      throw new Error('[IndexedDB] Store Name is Required');
    }
    if (database === this.nameDatabase) {
      throw new Error(
        `[IndexedDB] Can not Create Multiple Stores Within the Same Database. `
      );
    }
    const setNewStore = createStore(database, store);
    return setNewStore;
  }

  /**
   * @public
   * Get All Items with Active Database and Store
   * @returns {Promise<string[][]>} All Items in active indexedDB database
   */
  public async getAllItems(): Promise<string[][]> {
    const entriesItem = await entries();
    return entriesItem;
  }

  /**
   * @public
   * Get Now Selected IndexedDB Database and Store
   * @return {indexedDBType} Now Selecting indexedDB Database Name and Store Name
   */
  public get databaseInfo(): indexedDBType {
    return { database: this.nameDatabase, store: this.nameStore };
  }

  /**
   * @public
   * Set Now Selected IndexedDB Database and Store
   * @param Option {indexedDBType} Set Base Database
   */
  public set databaseInfo({ database, store }: indexedDBType) {
    this.nameDatabase = database;
    this.nameStore = store;
  }

  /**
   * @private
   * Set new Object on Active Database Store
   * @param key {string} Add object key
   * @param value {any} Add object value
   * @returns {Promise<boolean>} Success Status
   */
  private async setItemForDB(key: string, value: any): Promise<boolean> {
    try {
      await set(key, value, this.getStore());
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * @private
   * Update Object on Active Database Store
   * @param key {string} Add object key
   * @param newValue {any} Add object value
   * @returns {Promise<boolean>} Success Status
   */
  private async updateItemForDB(key: string, newValue: any): Promise<boolean> {
    try {
      await update(key, () => newValue, this.getStore());
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * Get item in Active Database Store
   * @param key Object key in Active Database Store
   * @returns {Promise<String | undefined>} String or undefined
   */
  public async getItem(key: string): Promise<String | undefined> {
    const getItemMethod = await get(key, this.getStore());
    return getItemMethod;
  }

  /**
   * @public
   * Set or Update item in Active Database Store
   * @description If this key is Exist,then will be Update value.Else will be Set New Item
   * @param key Object key in Active Database Store
   * @returns {Promise<String | undefined>} String or undefined
   */
  public async setItem(key: string, value: any): Promise<boolean> {
    const getValue = await this.getItem(key);
    if (!getValue) {
      return this.setItemForDB(key, value);
    }
    return this.updateItemForDB(key, value);
  }
}

export default IndexedDB;
