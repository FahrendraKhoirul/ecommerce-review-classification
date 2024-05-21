import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/DashboardNew.vue";
import Dataset from "../views/DatasetNew.vue";
import Model from "../views/Model.vue";

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
	{
		path: "/model",
		name: "Model",
		component: Model,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
