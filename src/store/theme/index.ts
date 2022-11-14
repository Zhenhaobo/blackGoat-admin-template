import { defineStore } from 'pinia';
import { darkTheme } from 'naive-ui';
export const useThemeStore = defineStore('theme-config', {
  state: () => {
    return {
      darkMode: false
    }
  },
  getters:{
    naiveTheme:(state)=>  state.darkMode ? darkTheme : null
  },
  actions: {

  }
})
