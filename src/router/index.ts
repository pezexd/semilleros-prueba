import { accessStore } from "@/stores/accessStore";
import { onboardingStore } from "@/stores/onboardingStore"
import { storeToRefs } from "pinia"
import { NavigationGuardNext, RouteLocationNormalized, createRouter, createWebHistory } from "vue-router";
// import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
// import TopMenu from "../layouts/TopMenu/TopMenu.vue";

const authGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	const { isAuth } = storeToRefs(onboardingStore())
	const storeAccess = accessStore()
	const canAccess = await storeAccess.canUserAccess(to.name as string)

	if (!isAuth && to.name != 'login')
		next({ name: 'login' })
	else {
		if (!canAccess) {
			next({ name: '403' })
		}
		else {
			next()
		}
	}
}

const routes = [
	{
		path: '/',
		name: '/',
		component: () => import('@/pages/auth/login.vue'),
		beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
			next({ name: 'login' })
		}
	},
	{
		path: '/403',
		name: '403',
		component: () => import('@/pages/403.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/auth/login.vue')
	},
	{
		path: "/dashboard",
		name: 'dashboard',
		component: () => import('@/layouts/SideMenu/SideMenu.vue'),
		beforeEnter: authGuard,
		children: [
			{
				path: "",
				name: "side-menu-page-1",
				component: () => import('@/pages/Page1.vue'),
			},
			{
				path: "page-2",
				name: "side-menu-page-2",
				component: () => import('@/pages/Page2.vue'),
			},
			{
				path: "example-form",
				name: "example.create",
				component: () => import('@/pages/monitors/exampleForm.vue')
			},
			{
				path: "example-list",
				name: "example.index",
				component: () => import('@/pages/monitors/exampleCrud.vue')
			},
		],
	},
	// {
	//   path: "/simple-menu",
	//   component: SimpleMenu,
	//   children: [
	//     {
	//       path: "page-1",
	//       name: "simple-menu-page-1",
	//       component: Page1,
	//     },
	//     {
	//       path: "page-2",
	//       name: "simple-menu-page-2",
	//       component: Page2,
	//     },
	//   ],
	// },
	// {
	//   path: "/top-menu",
	//   component: TopMenu,
	//   children: [
	//     {
	//       path: "page-1",
	//       name: "top-menu-page-1",
	//       component: Page1,
	//     },
	//     {
	//       path: "page-2",
	//       name: "top-menu-page-2",
	//       component: Page2,
	//     },
	//   ],
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { left: 0, top: 0 };
	},
});

export default router;
