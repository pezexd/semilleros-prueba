import { defineStore, acceptHMRUpdate } from "pinia";
import { Icon } from "../base-components/Lucide/Lucide.vue";

export interface Menu {
  icon: Icon;
  title: string;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

export const useSideMenuStore = defineStore("sideMenu", {
  state: (): SideMenuState => ({
    menu: [
      {
        icon: "Activity",
        pageName: "side-menu-page-1",
        title: "Page 1",
      },
      {
        icon: "Activity",
        pageName: "side-menu-page-2",
        title: "Page 2",
      },
      {
        icon: "Activity",
        pageName: "example.create",
        title: "Formulario de Ejemplo",
      },
      {
        icon: "Activity",
        pageName: "example.index",
        title: "Listado de Ejemplo",
      },
    ],
  }),
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSideMenuStore, import.meta.hot))