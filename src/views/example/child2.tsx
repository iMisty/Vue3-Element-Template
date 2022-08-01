/*
 * @Description: Example Child2
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-04 17:18:20
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-01 11:45:46
 */
import { defineComponent, ref } from 'vue';

const currentPage4 = ref(4);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const exampleNest2 = defineComponent({
  render() {
    return <div>This is Children 2</div>;
  },
});

export default exampleNest2;
