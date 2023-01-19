import { form } from "@/types/onboardingTypes";

const module = apiModules.onboarding

export default {
    getCsrfCookie() {
        return api.get("/sanctum/csrf-cookie");
    },
    async register(form: form) {
        await this.getCsrfCookie()

        setLoading(true)

        return api.post(`/${apiPath}/${module}/register`, form)
            .finally(() => {
                setLoading(false)
            })
    },
    async login(form: form) {
        await this.getCsrfCookie();

        setLoading(true)

        return api.post(`/${apiPath}/${module}/login`, form)
            .finally(() => {
                setLoading(false)
            })
    },
    logout() {
        setLoading(true)
        return api.post(`/${apiPath}/${module}/logout`)
            .finally(() => {
                setLoading(false)
            })
    },
};
