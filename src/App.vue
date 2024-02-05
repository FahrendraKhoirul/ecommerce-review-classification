<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useRoute } from "vue-router";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});

const route = useRoute();
</script>

<template>
	<button
		data-drawer-target="logo-sidebar"
		data-drawer-toggle="logo-sidebar"
		aria-controls="logo-sidebar"
		type="button"
		class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
	>
		<span class="sr-only">Open sidebar</span>
		<svg
			class="w-6 h-6"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				clip-rule="evenodd"
				fill-rule="evenodd"
				d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
			></path>
		</svg>
	</button>

	<aside
		id="logo-sidebar"
		class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
		aria-label="Sidebar"
	>
		<div class="h-full px-3 py-4 overflow-y-auto bg-white shadow-md">
			<div class="flex flex-col justify-between h-full">
				<div class="flex-grow">
					<div class="px-4 py-6 text-center border-b">
						<h1 class="text-xl font-bold leading-none">
							<span class="text-yellow-700">Skripsi</span> Mamang
						</h1>
					</div>
					<div class="p-4">
						<ul class="space-y-1">
							<li>
								<router-link :to="{ name: 'Dashboard' }" active-class="bg-white">
									<a
										href="javascript:void(0)"
										:class="[
											'flex items-center rounded-xl font-bold text-sm text-black py-3 px-4 hover:bg-yellow-50',
											route.name === 'Dashboard' ? 'bg-yellow-200' : '',
											route.name === 'Dashboard' ? 'hover:bg-yellow-200' : '',
										]"
									>
										<svg
											class="w-6 h-6 mr-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												fill-rule="evenodd"
												d="M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9h-4Z"
												clip-rule="evenodd"
											/>
										</svg>
										Dashboard
									</a>
								</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'Dataset' }">
									<a
										href="javascript:void(0)"
										:class="[
											'flex items-center rounded-xl font-bold text-sm text-black py-3 px-4 hover:bg-yellow-50',
											route.name === 'Dataset' ? 'bg-yellow-200' : '',
											route.name === 'Dataset' ? 'hover:bg-yellow-200' : '',
										]"
										><svg
											class="w-6 h-6 mr-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												d="M12 7.2c4.4 0 8-1.2 8-2.6C20 3.2 16.4 2 12 2S4 3.2 4 4.6C4 6 7.6 7.2 12 7.2ZM12 22c5 0 8-1.7 8-2.6V15h-.2a7.8 7.8 0 0 1-1.3.7l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.1 10.1 0 0 1-1.3-.7L4 15v4.4c0 1 3 2.6 8 2.6Zm7-14c-.1.2-.3.2-.5.3l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.2 10.2 0 0 1-1.3-.7L4 7.6V12c0 1 3 2.6 8 2.6s8-1.7 8-2.6V7.6h-.2a7.8 7.8 0 0 1-.7.5Z"
											/>
										</svg>

										Dataset
									</a>
								</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'Model' }">
									<a
										href="javascript:void(0)"
										:class="[
											'flex items-center rounded-xl font-bold text-sm text-black py-3 px-4 hover:bg-yellow-50',
											route.name === 'Model' ? 'bg-yellow-200' : '',
											route.name === 'Model' ? 'hover:bg-yellow-200' : '',
										]"
										><svg
											class="w-6 h-6 mr-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-width="2"
												d="M8.7 8.7c1.1-1 2.2-2 3.3-2.7m0 0c3.1-2 6-2.6 7.4-1.3 1.8 1.8 0 6.6-4 10.7-4.1 4-8.9 5.8-10.7 4C3.4 18 4 15.2 6 12m6-6C9 4 6 3.3 4.7 4.6c-1.8 1.8 0 6.6 4 10.7M12 6c1.2.7 2.3 1.7 3.4 2.7m2.7 3.4c2 3 2.6 6 1.3 7.3C18 20.7 15 20 12 18m2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
											/>
										</svg>

										Model
									</a>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</aside>

	<div class="md:ml-64">
		<router-view />
	</div>
</template>
