import { createWebHistory, createRouter } from "vue-router";
import Index from "@/pages/Index.vue";
import Create from "@/pages/Create.vue";
import Edit from "@/pages/Edit.vue";



const routes = [
    {
        path: "/",
        name: "post.index",
        component: Index,
    },
    {
        path: "/create",
        name: "post.create",
        component: Create,
    },
    {
        path: "/edit/:id",
        name: "post.edit",
        component: Edit,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;