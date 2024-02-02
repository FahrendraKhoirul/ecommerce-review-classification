<script>
import datasetcsv from "../assets/Dataset Skripsi - Fix Dataset (Final).csv";
export default {
	setup() {
		const dataset = datasetcsv;
		return {
			dataset,
		};
	},
};
</script>

<template>
	<div class="m-6 flex flex-col w-full h-full">
		<h1 class="mb-5 text-black text-3xl font-extrabold tracking-tight text-gr">
			E-commerce Review<br />Dataset
		</h1>
		<div
			class="w-64 h-28 bg-yellow-50 rounded-xl flex flex-col justify-center items-center mb-4"
		>
			<div class="text-black text-3xl font-bold">1024</div>
			<div class="text-black text-xl">Total Data</div>
		</div>
		<h2 class="mb-5 text-black text-2xl font-extrabold tracking-tight text-gr">Class Distribution<br /></h2>
		<div class="flex flex-wrap">
			<div
				class="w-64 h-28 bg-yellow-50 rounded-xl flex flex-col justify-center items-center mb-4 mr-4"
			>
				<div class="text-black text-3xl font-bold">523</div>
				<div class="text-black text-xl">Product</div>
			</div>
			<div
				class="w-64 h-28 bg-yellow-50 rounded-xl flex flex-col justify-center items-center mb-4 mr-4"
			>
				<div class="text-black text-3xl font-bold">329</div>
				<div class="text-black text-xl">Customer Service</div>
			</div>
			<div
				class="w-64 h-28 bg-yellow-50 rounded-xl flex flex-col justify-center items-center mb-4 mr-4"
			>
				<div class="text-black text-3xl font-bold">172</div>
				<div class="text-black text-xl">Shipping/Delivery</div>
			</div>
		</div>
	</div>
	<div class="m-6 relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-6 py-3">No</th>
					<th
						v-for="(value, key) in dataset[0]"
						:key="key"
						scope="col"
						class="px-6 py-3"
					>
						{{ key }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, index) in dataset" :key="index" class="bg-white border-b">
					<td class="px-6 py-4 font-medium text-gray-900">{{ index + 1 }}</td>
					<td
						v-for="(value, key) in row"
						:key="key"
						class="px-6 py-4 font-medium text-gray-900"
					>
						{{ value }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
