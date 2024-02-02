<template>
	<div class="px-6 py-16 bg-yellow-50">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-3xl p-8 mb-5 shadow-md">
				<h1 class="text-3xl font-bold mb-10">
					Classification of E-Commerce Review Aspects using Neural Network
				</h1>

				<hr class="my-10" />
				<div class="flex items-end gap-x-2 justify-end">
					<button
						type="button"
						class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
					>
						Example 1
					</button>
					<button
						type="button"
						class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
					>
						Example 2
					</button>
					<button
						type="button"
						class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
					>
						Example 3
					</button>
				</div>
				<textarea
					id="message"
					rows="4"
					class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-200 focus:border-yellow-200"
					placeholder="Write e-commerce review here..."
				></textarea>
				<div class="text-right">
					<button
						type="button"
						class="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
					>
						Compute
					</button>
				</div>
				<div class="my-5">
					<h2 class="text-2xl font-bold mb-4">Result</h2>
					<div class="flex my-2 justify-between items-center gap-5">
						<span class="">Product</span>
						<div class="w-full rounded-full h-2.5 bg-yellow-50">
							<div class="bg-yellow-200 h-2.5 rounded-full" style="width: 10%"></div>
						</div>
						<span class="text-right">45%</span>
					</div>
					<div class="flex my-2 justify-between items-center gap-5">
						<span class="">Customer Service</span>
						<div class="w-full rounded-full h-2.5 bg-yellow-50">
							<div class="bg-yellow-200 h-2.5 rounded-full" style="width: 10%"></div>
						</div>
						<span class="text-right">45%</span>
					</div>
					<div class="flex my-2 justify-between items-center gap-5">
						<span class="">Shipping / Delivery</span>
						<div class="w-full rounded-full h-2.5 bg-yellow-50">
							<div class="bg-yellow-200 h-2.5 rounded-full" style="width: 10%"></div>
						</div>
						<span class="text-right">45%</span>
					</div>

					<!-- <div class="my-2 flex justify-between items-center">
						<span class="w-1/5">Product</span>
						<div class="w-full bg-gray-200 rounded-full h-2.5 bg-yellow-50">
							<div class="bg-yellow-200 h-2.5 rounded-full" style="width: 10%"></div>
						</div>
						<span class="ml-10 text-right">45%</span>
					</div>
					<div class="my-2 flex justify-between items-center">
						<span class="w-1/5">Customer Service</span>
						<div class="w-full bg-gray-200 rounded-full h-2.5 bg-green-100">
							<div class="bg-green-300 h-2.5 rounded-full" style="width: 75%"></div>
						</div>
						<span class="ml-10 text-right">45%</span>
					</div>
					<div class="my-2 flex justify-between items-center">
						<span class="w-1/5">Shipping/Delivery</span>
						<div class="w-full bg-gray-200 rounded-full h-2.5 bg-purple-100">
							<div class="bg-purple-300 h-2.5 rounded-full" style="width: 15%"></div>
						</div>
						<span class="ml-10 text-center">45%</span>
					</div> -->
				</div>
				<div class="mt-8 mb-5">
					<h2 class="text-2xl font-bold mb-4">Under The Hood</h2>
				</div>

				<div class="ml-4 mb-10">
					<ol class="relative text-gray-500 border-s border-gray-200">
						<li class="mb-10 ms-6">
							<span
								class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white"
							>
								<svg
									class="w-[18px] h-[18px] text-gray-800"
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
							<h3 class="font-medium leading-tight text-black">Original Text Input</h3>
							<p class="text-sm">Text from input without any modification</p>
							<p class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-medium">
								asdnasdasd asjdasd asdasdkd aslkdhalsd asjkdhaksjdhaksjdhaks
							</p>
						</li>
						<li class="mb-10 ms-6">
							<span
								class="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<h3 class="font-medium leading-tight text-black">Preprocessing</h3>
							<p class="text-sm">
								Perform case folding, punctuation removal, tokenization,
								<br />stopword removal, and stemming
							</p>
							<p class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-medium">
								asdnasdasd asjdasd asdasdkd aslkdhalsd asjkdhaksjdhaksjdhaks
							</p>
						</li>
						<li class="mb-10 ms-6">
							<span
								class="absolute flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
							>
								<svg
									class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 20"
								>
									<path
										d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
									/>
								</svg>
							</span>
							<h3 class="font-medium leading-tight text-black">TF-IDF</h3>
							<p class="text-sm">This step changes text input to vector value</p>
							<p class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-medium">
								asdnasdasd asjdasd asdasdkd aslkdhalsd asjkdhaksjdhaksjdhaks
							</p>
						</li>
						<li class="ms-6">
							<span
								class="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-4 ring-white"
							>
								<svg
									class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 20"
								>
									<path
										d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
									/>
								</svg>
							</span>
							<h3 class="font-medium leading-tight text-black">Neural Network</h3>
							<p class="text-sm">perform neural network method</p>
							<p class="text-md p-2 mt-2 bg-gray-50 rounded-md text-black font-medium">
								asdnasdasd asjdasd asdasdkd aslkdhalsd asjkdhaksjdhaksjdhaks
							</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</template>
