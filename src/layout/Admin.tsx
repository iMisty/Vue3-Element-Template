/*
 * @Description: Admin Template Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-27 14:10:40
 * @LastEditors: Mirage
 * @LastEditTime: 2022-06-30 17:16:54
 */
import { defineComponent, computed, watch, onMounted, ref } from 'vue';
import { useAPPStore } from '@/store/appStore';
import LayoutSideBar from './components/layoutSideBar.vue';
import LayoutNavBar from './components/layoutNavBar.vue';
import LayoutMain from './components/layoutMain.vue';
import '@/style/layout/admin.less';

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
      <section class="layout__admin">
        <layout-sidebar></layout-sidebar>
        <div class={['layout', isCollapse.value ? '' : 'isCollapse']}>
          <layout-navbar></layout-navbar>
          <layout-main></layout-main>
        </div>
      </section>
    );
  },
});

export default LayoutAdmin;