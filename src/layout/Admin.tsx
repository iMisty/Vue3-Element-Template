/*
 * @Description: Admin Template Layout
 * @Version: 2.1
 * @Author: Miya
 * @Date: 2021-11-27 14:10:40
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:27:12
 */
import { defineComponent, computed, watch, onMounted, ref } from 'vue';
import { useAPPStore } from '@/store/appStore';
import LayoutSideBar from './components/layoutSideBar';
import LayoutNavBar from './components/layoutNavBar';
import LayoutMain from './components/layoutMain';
import Style from '@/layout/style/admin.module.less';

const getCollapseStatus = computed(() => {
  const store = useAPPStore();
  return store.isCollapse;
});

const isCollapse = ref<boolean>(true);

const LayoutAdmin = defineComponent({
  name: 'LayoutAdmin',
  components: {
    'layout-sidebar': LayoutSideBar,
    'layout-navbar': LayoutNavBar,
    'layout-main': LayoutMain,
  },
  setup() {
    const watchCollapseStatus = () => {
      watch(getCollapseStatus, (newVal) => {
        isCollapse.value = newVal;
      });
    };

    onMounted(() => {
      watchCollapseStatus();
    });
    return { getCollapseStatus, isCollapse };
  },

  render() {
    return (
      <section class={Style['layout__admin']}>
        <layout-sidebar></layout-sidebar>
        <div
          class={[Style['layout'], isCollapse.value ? '' : Style['isCollapse']]}
        >
          <layout-navbar></layout-navbar>
          <layout-main></layout-main>
        </div>
      </section>
    );
  },
});

export default LayoutAdmin;
