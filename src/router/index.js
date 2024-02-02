import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Dataset from "../views/Dataset.vue";

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/dataset",
		name: "Dataset",
		component: Dataset,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
