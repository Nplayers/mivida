import { createRouter, createWebHistory } from "vue-router"
import { getJwtToken } from "./apis/auth"
import HomePage from "./pages/HomePage.vue"
import LoginPage from "./pages/LoginPage.vue"
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue"
import ProfilePage from "./pages/ProfilePage.vue"
import SearchPage from "./pages/SearchPage.vue"

const routes = [{
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/search_result",
        name: "search_result",
        component: SearchPage
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage
    },
    {
        path: "/profile/edit",
        name: "profileEdit",
        component: ProfileEdittingPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to) => {
    if (to.name !== "login" && !getJwtToken()) {
        return { name: "login" }
    }
    if (to.name === "login" && getJwtToken()) {
        return { name: "home" }
    }
})


export { router };