<script>
import { computeSentence } from "../ecommerce_neuralnetwork_api";
import { ref, Suspense, onUpdated } from "vue";
import { initFlowbite } from "flowbite";

export default {
	components: {
		Suspense,
	},
	setup() {
		onUpdated(() => {
			initFlowbite();
		});
		const sentenceInput = ref("");
		const isCompute = ref(false);
		const result = ref(null);
		const time = ref("");

		const compute = async (sentence) => {
			isCompute.value = true;
			if (sentenceInput === "") {
				print("Please enter a sentence.");
				return;
			}

			const startTime = performance.now();
			try {
				result.value = await computeSentence(sentence);
			} finally {
				isCompute.value = false;
				const endTime = performance.now();
				time.value = ((endTime - startTime) / 1000).toFixed(3); // convert to seconds
				console.log(`Execution time: ${elapsedTime} seconds`);
			}
		};

		const changeSentenceInput = (sentence) => {
			sentenceInput.value = sentence;
		};

		return {
			sentenceInput,
			compute,
			result,
			isCompute,
			changeSentenceInput,
			time,
		};
	},
};
</script>
<template>
	<div class="px-6 py-16 bg-yellow-50">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-3xl p-8 mb-80 shadow-md">
				<h1 class="text-3xl font-bold mb-10">
					Classification of E-Commerce Review Aspect using Neural Network
				</h1>

				<hr class="my-10" />
				<div class="flex items-end gap-x-2 justify-end">
					<button
						@click="
							changeSentenceInput(
								'Barangnya bagus berkualitas, perawatannya mudah. Semoga awet barangnya'
							)
						"
						type="button"
						class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
					>
						Example 1
					</button>
					<button
						@click="
							changeSentenceInput(
								'Admin baik dan ramah. respon juga cepat. toko rekomendasi banget'
							)
						"
						type="button"
						class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
					>
						Example 2
					</button>
					<button
						@click="
							changeSentenceInput(
								'Barangnya cepat sampai dan kondisi aman selamat. kurir juga ramah...'
							)
						"
						type="button"
						class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
					>
						Example 3
					</button>
				</div>
				<textarea
					v-model="sentenceInput"
					id="message"
					rows="4"
					class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-200 focus:border-yellow-200"
					placeholder="Write e-commerce review here..."
				></textarea>
				<div class="text-right">
					<button
						@click="compute(sentenceInput)"
						type="button"
						class="w-20 inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
						:disabled="isCompute || sentenceInput === ''"
					>
						<span v-if="isCompute"
							><svg
								aria-hidden="true"
								class="w-4 h-4 text-gray-800y animate-spin fill-white"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
						</span>
						<span v-else>Compute</span>
					</button>
				</div>
				<!-- IF RESULT EMPTY -->
				<div v-if="result === null" class="mt-8"></div>
				<!-- IF RESULT AVAILABLE  -->
				<div v-else>
					<div class="mt-8">
						<h2 class="text-2xl font-bold mb-4">
							Result
							<span
								v-text="time"
								class="text-gray-700 font-normal italic text-sm"
							></span
							><span class="text-gray-700 font-normal italic text-sm"> sec</span>
						</h2>
						<div class="flex my-2 justify-between items-center gap-5">
							<span class="w-1/4">Product</span>
							<div class="w-full rounded-full h-2.5 bg-green-100">
								<div
									class="bg-green-300 h-2.5 rounded-full"
									:style="{ width: result['data']['nn_output']['A2'][0][0] * 100 + '%' }"
								></div>
							</div>
							<span class="text-right">{{
								(result["data"]["nn_output"]["A2"][0][0] * 100).toFixed(2)
							}}</span>
						</div>
						<div class="flex my-2 justify-between items-center gap-5">
							<span class="w-1/4">Customer Service</span>
							<div class="w-full rounded-full h-2.5 bg-yellow-50">
								<div
									class="bg-yellow-200 h-2.5 rounded-full"
									:style="{ width: result['data']['nn_output']['A2'][1][0] * 100 + '%' }"
								></div>
							</div>
							<span class="text-right">{{
								(result["data"]["nn_output"]["A2"][1][0] * 100).toFixed(2)
							}}</span>
						</div>
						<div class="flex my-2 justify-between items-center gap-5">
							<span class="w-1/4">Shipping / Delivery</span>
							<div class="w-full rounded-full h-2.5 bg-purple-100">
								<div
									class="bg-purple-300 h-2.5 rounded-full"
									:style="{ width: result['data']['nn_output']['A2'][2][0] * 100 + '%'}"
								></div>
							</div>
							<span class="text-right">{{
								(result["data"]["nn_output"]["A2"][2][0] * 100).toFixed(2)
							}}</span>
						</div>
					</div>

					<div
						id="accordion-flush"
						data-accordion="collapse"
						data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
						data-inactive-classes="text-gray-500 dark:text-gray-400"
					>
						<!-- Header Accordion -->
						<h2 id="accordion-flush-heading-1" class="mt-8 mb-5">
							<button
								type="button"
								class="flex items-center justify-between w-full rtl:text-right text-2xl font-bold mb-4"
								data-accordion-target="#accordion-flush-body-1"
								aria-expanded="false"
								aria-controls="accordion-flush-body-1"
							>
								<span>Under The Hood</span>
								<svg
									data-accordion-icon
									class="w-3 h-3 rotate-180 shrink-0"
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
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>

						<!-- Body Accordion -->
						<div
							id="accordion-flush-body-1"
							class="hidden mt-5"
							aria-labelledby="accordion-flush-heading-1"
						>
							<div class="ml-4 mb-10">
								<ol class="relative text-gray-500 border-s border-gray-200">
									<li class="mb-10 ms-6">
										<span
											class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white"
										>
											<svg
												class="w-[18px] h-[18px] text-black"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
												/>
											</svg>
										</span>
										<h3 class="font-medium leading-tight text-black">
											Original Text Input
										</h3>
										<p class="text-sm">Text from input without any modification</p>
										<p
											v-text="result['data']['sentence']"
											class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-semibold"
										></p>
									</li>
									<li class="mb-10 ms-6">
										<span
											class="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 16 16"
												fill="text-black"
												class="w-4 h-4"
											>
												<path
													fill-rule="evenodd"
													d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z"
													clip-rule="evenodd"
												/>
											</svg>
										</span>
										<h3 class="font-medium leading-tight text-black">Preprocessing</h3>
										<p class="text-sm">
											Perform case folding, punctuation removal, tokenization,
											<br />stopword removal, and stemming
										</p>
										<p
											v-text="result['data']['preprocess']"
											class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-semibold"
										></p>
									</li>
									<li class="mb-10 ms-6">
										<span
											class="absolute flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
										>
											<svg
												class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="text-black"
												viewBox="0 0 18 20"
											>
												<path
													d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
												/>
											</svg>
										</span>
										<h3 class="font-medium leading-tight text-black">TF-IDF</h3>
										<p class="text-sm">This step changes text input to vector value</p>
										<p class="mt-4 text-sm font-normal text-black">
											Important words in the sentence:
										</p>

										<div class="my-2 flex items-start gap-x-2">
											<div v-for="(value, key) in result['data']['top_words']" :key="key">
												<div class="py-2 px-2 bg-gray-50 rounded-xl">
													<div class="text-gray-800 text-lg font-semibold">
														{{ value["score"].toFixed(5) }}
													</div>
													<div
														class="text-zinc-600 text-sm font-semibold items-center justify-center"
													>
														{{ value["word"] }}
													</div>
												</div>
											</div>
										</div>
										<p class="mt-4 text-sm font-normal text-black">
											TF-IDF value of the sentence:
										</p>
										<p
											v-text="result['data']['tfidf']"
											class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-medium"
										></p>
									</li>
									<li class="ms-6">
										<span
											class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white"
										>
											<svg
												class="w-3.5 h-3.5"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="text-black"
												viewBox="0 0 18 20"
											>
												<path
													d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
												/>
											</svg>
										</span>
										<h3 class="font-medium leading-tight text-black">Neural Network</h3>
										<p class="text-sm">perform neural network method</p>
										<p
											class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-medium"
										>
											asdnasdasd asjdasd asdasdkd aslkdhalsd asjkdhaksjdhaksjdhaks
										</p>
										<!-- sketct.js -->
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
