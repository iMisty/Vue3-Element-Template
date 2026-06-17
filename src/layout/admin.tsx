/*
 * @Description: Admin Template Layout
 * @Version: 2.1
 * @Author: Miya
 * @Date: 2021-11-27 14:10:40
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:27:12
 */
import {
  defineComponent, computed, onMounted, onBeforeUnmount, ref,
} from 'vue';
import { useAPPStore } from '@/store/appStore';
import Style from '@/layout/style/admin.module.less';
import LayoutSideBar from './components/layoutSideBar';
import LayoutNavBar from './components/layoutNavBar';
import LayoutMain from './components/layoutMain';

// Matches Tailwind's `md` breakpoint: < 768px is treated as mobile.
const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

export default defineComponent({
  name: 'LayoutAdmin',
  components: {
    'layout-sidebar': LayoutSideBar,
    'layout-navbar': LayoutNavBar,
    'layout-main': LayoutMain,
  },
  setup() {
    const store = useAPPStore();
    const isCollapse = computed(() => store.isCollapse);
    const isMobile = ref(false);

    let mediaQuery: MediaQueryList | null = null;

    /**
     * Keep the viewport flag and the sidebar state in sync: on mobile the
     * sidebar is an overlay drawer that starts closed; on desktop it stays
     * docked open.
     */
    const syncViewport = (matches: boolean) => {
      isMobile.value = matches;
      store.isCollapse = !matches;
    };

    const handleMediaChange = (event: MediaQueryListEvent) => {
      syncViewport(event.matches);
    };

    const closeSidebar = () => {
      store.isCollapse = false;
    };

    onMounted(() => {
      mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
      syncViewport(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleMediaChange);
    });

    onBeforeUnmount(() => {
      mediaQuery?.removeEventListener('change', handleMediaChange);
    });

    return () => (
      <section class={Style.layout__admin}>
        <layout-sidebar></layout-sidebar>
        {/* Tap-to-close backdrop, mobile only, behind the drawer */}
        {isMobile.value && isCollapse.value ? (
          <div
            class="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={closeSidebar}
          ></div>
        ) : null}
        <div
          class={[
            Style.layout,
            'ml-0 p-4 transition-[margin] duration-300 md:p-8',
            isCollapse.value ? 'md:ml-56' : 'md:ml-0',
          ]}
        >
          <layout-navbar></layout-navbar>
          <layout-main></layout-main>
        </div>
      </section>
    );
  },
});
