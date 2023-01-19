import { defineStore } from "pinia"

export const accessStore = defineStore("access", {
    state: () => ({
        modules: [],
        safeRoutes: ['login', '/', '403', '404'],
    }),
    getters: {
        hasModules: (state) => {
            return state.modules.length
        },
        getModules: (state) => {
            return state.modules
        },
    },
    actions: {
        async getAccess() {
            try {
                const result = await accessServices.getAccess()
                if (result.status === 200) {
                    this.modules = result.data.items;

                }
            } catch (error) {
            }
        },
        async canUserAccess(slug: string) {
            try {
                if (this.safeRoutes.includes(slug)) return true
                const result = await accessServices.userHaveAccess({
                    permission: slug
                })
                return result.data
            } catch (error) {
            }
        }
    }
})