import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";
import Galeria from "../pages/Galeria.vue";
import Favoritos from "../pages/Favoritos.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [ 
    {
        path: "/", component: Home
    },
    {
        path: "/search", component: Search
    },
    {
        path: "/galeria", component: Galeria
    },
    {
        path: "/favoritos", component: Favoritos
    },
    {
        path: "/login", component: Login
    },
    {
        path: "/register", component: Register
    }
]

const router =createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;