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
  <div class="px-20 py-12 bg-darker">
    <h2 class="font-semibold text-2xl mb-4">Dataset</h2>
    <div class="grid grid-cols-4 gap-6 mb-7">
      <div class="shadow-md shadow-lightorange bg-orange p-6 rounded-lg">
        <button class="p-2 rounded-full bg-darkorange mb-3">
          <img src="../assets/icons/layer.svg" class="h-5 w-5" alt="" />
        </button>
        <h1 class="font-semibold text-4xl text-white mb-2">1.024</h1>
        <p class="font-medium text-lightorange text-base ml-2">Total dataset</p>
      </div>
      <div class="shadow-md bg-white p-6 rounded-lg">
        <button class="p-2 rounded-full bg-lightorange mb-3">
          <img src="../assets/icons/shopping_bag.svg" class="h-5 w-5" alt="" />
        </button>
        <h1 class="font-semibold text-4xl text-dark mb-2">523</h1>
        <p class="font-medium text-gray-400 text-base">Product</p>
      </div>
      <div class="shadow-md bg-white p-6 rounded-lg">
        <button class="p-2 rounded-full bg-lightorange mb-3">
          <img
            src="../assets/icons/customer_service.svg"
            class="h-5 w-5"
            alt=""
          />
        </button>
        <h1 class="font-semibold text-4xl text-dark mb-2">329</h1>
        <p class="font-medium text-gray-400 text-base">Customer Service</p>
      </div>
      <div class="shadow-md bg-white p-6 rounded-lg">
        <button class="p-2 rounded-full bg-lightorange mb-3">
          <img src="../assets/icons/delivery.svg" class="h-5 w-5" alt="" />
        </button>
        <h1 class="font-semibold text-4xl text-dark mb-2">172</h1>
        <p class="font-medium text-gray-400 text-base">Shipping/delivery</p>
      </div>
    </div>
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
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
            <td class="px-6 py-4 font-medium text-dark">{{ index + 1 }}</td>
            <td
              v-for="(value, key) in row"
              :key="key"
              class="px-6 py-4 font-normal text-dark"
            >
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
