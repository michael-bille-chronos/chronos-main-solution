import { reactive, toRefs } from 'vue';

const globalState = reactive({
  showMenu: true,
});

const useMainMenu = () => {
  // METHODS
  const toggleMenu = () => (globalState.showMenu = !globalState.showMenu);

  // RETURN
  return { ...toRefs(globalState), toggleMenu };
};

export default useMainMenu;
