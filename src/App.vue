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
		<div class="h-full px-3 py-4 overflow-y-auto bg-darker">
			<div class="flex flex-col justify-between h-full">
				<div class="flex-grow">
					<div class="px-4 py-6">
						<div class="flex gap-4 items-center justify-center">
							<img src="/ecommerce_review.svg" class="object-cover h-12 w-12" alt="" />
							<div class="text-justify">
								<h1 class="text-lg font-semibold leading-none mb-1">E-commerce</h1>
								<h1 class="text-lg font-semibold leading-none">Product Review</h1>
							</div>
						</div>
					</div>
					<div class="p-4">
						<ul class="space-y-1">
							<li>
								<router-link :to="{ name: 'Dashboard' }" active-class="bg-white">
									<a
										href="javascript:void(0)"
										:class="[
											'flex items-center rounded-2xl font-semibold text-sm text-dark py-4 px-6',
											route.name === 'Dashboard'
												? 'bg-orange text-white shadow-lg shadow-lightorange'
												: '',
										]"
									>
										<svg
											class="w-5 h-5 mr-3"
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
											'flex items-center rounded-xl font-semibold text-sm text-dark py-4 px-6',
											route.name === 'Dataset'
												? 'bg-orange text-white shadow-lg shadow-lightorange'
												: '',
										]"
										><svg
											class="w-5 h-5 mr-3"
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
								<router-link :to="{ name: 'Research' }">
									<a
										href="javascript:void(0)"
										:class="[
											'flex items-center rounded-xl font-semibold text-sm text-dark py-4 px-6',
											route.name === 'Research'
												? 'bg-orange text-white shadow-lg shadow-lightorange'
												: '',
										]"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-5 h-5 mr-3"
										>
											<path
												fill-rule="evenodd"
												d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
												clip-rule="evenodd"
											/>
										</svg>

										Research
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
