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
	<div class="px-6 py-16 bg-yellow-50">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-3xl p-8 mb-5 shadow-md">
				<div class="m-6 flex flex-col w-full h-full">
					<h1 class="text-3xl font-bold mb-10">E-commerce Review<br />Dataset</h1>
					<div class="mb-6">
						<div class="p-4 bg-purple-100 rounded-xl text-gray-800 w-1/3">
							<div class="font-bold text-xl leading-none">1024</div>
							<div class="mt-2">Total Data</div>
						</div>
					</div>

					<h2 class="text-2xl font-bold mb-4">Class Distribution<br /></h2>
					<div class="grid grid-cols-3 gap-4 mr-10">
						<div class="p-4 bg-green-200 rounded-xl text-gray-800">
							<div class="font-bold text-2xl leading-none">523</div>
							<div class="mt-2">Product</div>
						</div>
						<div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
							<div class="font-bold text-2xl leading-none">329</div>
							<div class="mt-2">Customer Service</div>
						</div>
						<div class="p-4 bg-purple-100 rounded-xl text-gray-800">
							<div class="font-bold text-2xl leading-none">172</div>
							<div class="mt-2">Shipping/Delivery</div>
						</div>
					</div>
					
				</div>
				<div class="m-6 overflow-x-auto shadow-md sm:rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 whitespace-normal">No</th>
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
							<tr
								v-for="(row, index) in dataset"
								:key="index"
								class="bg-white border-b"
							>
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
			</div>
		</div>
	</div>
</template>
