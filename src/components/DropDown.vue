<script>
import { computed, onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

export default {
  setup() {
    onUpdated(() => {
      initFlowbite();
    });
  },
};

</script>
<template>
  <button
    id="dropdownSearchButton"
    data-dropdown-toggle="dropdownSearch"
    data-dropdown-placement="bottom"
    class="bg-lightorange rounded-lg text-orange focus:outline-none font-medium text-sm px-4 py-2 mb-4 text-center inline-flex items-center"
    type="button"
  >
    <span class="max-w-20 sm:max-w-20 md:max-w-40 xl:max-w-40 truncate">Select a review</span>
    <svg
      class="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <!-- Dropdown menu -->
  <!-- <div id="dropdownSearch" class="z-10 hidden bg-white rounded-lg shadow w-60">
    <ul
      class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
      aria-labelledby="dropdownSearchButton"
      v-if="items"
    >
      <li
        class="block px-4 py-2 hover:bg-whiten cursor-pointer"
        @click="selectOption"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item.review_text }}
      </li>
    </ul>
  </div> -->
</template>
