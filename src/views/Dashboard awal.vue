<template>
	<div class="p-4">
		<h1
			class="mb-20 leading-relaxed items-center text-black lg:text-3xl md:text-lg font-extrabold"
		>
			Classification of E-commerce Review Aspects <br />
			using
			<span class="underline underline-offset-3 decoration-8 decoration-orange"
				>Neural Network</span
			>
		</h1>

		<textarea
			id="message"
			rows="4"
			class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange focus:border-orange"
			placeholder="Write e-commerce review here..."
		></textarea>

		<button
			type="button"
			class="my-2 px-5 py-2.5 shadow-md text-sm font-medium text-black inline-flex items-center bg-lightorange hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 mr-2"
			>
				<path
					fill-rule="evenodd"
					d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
					clip-rule="evenodd"
				/>
			</svg>
			Compute
		</button>
		<!-- RESULT -->
		<div class="my-5">
			<div class="my-2 flex justify-between items-center">
				<span class="w-1/5">Product</span>
				<!-- Add width class here -->
				<div class="w-full bg-gray-200 rounded-full h-2.5 bg-lightorange">
					<div class="bg-orange h-2.5 rounded-full" style="width: 10%"></div>
				</div>
				<span class="ml-10 text-right">45%</span>
				<!-- Add width class here -->
			</div>
			<div class="my-2 flex justify-between items-center">
				<span class="w-1/5">Customer Service</span>
				<!-- Add width class here -->
				<div class="w-full bg-gray-200 rounded-full h-2.5 bg-lightorange">
					<div class="bg-orange h-2.5 rounded-full" style="width: 45%"></div>
				</div>
				<span class="ml-10 text-right">45%</span>
				<!-- Add width class here -->
			</div>
			<div class="my-2 flex justify-between items-center">
				<span class="w-1/5">Shipping/Delivery</span>
				<!-- Add width class here -->
				<div class="w-full bg-gray-200 rounded-full h-2.5 bg-lightorange">
					<div class="bg-orange h-2.5 rounded-full" style="width: 45%"></div>
				</div>
				<span class="ml-10 text-center">45%</span>
				<!-- Add width class here -->
			</div>
		</div>
		<div class="mt-8 mb-2 text-black text-xl font-bold">Behind The Scene</div>
		<div class="mb-2 text-black text-xl font-semibold">Original Text Input</div>
		<div class="text-justify text-black text-xl font-normal">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
			when an unknown printer took a galley of type and scrambled it to make a type
			specimen book.
		</div>

		<div class="mt-5 mb-2 text-black text-xl font-semibold">Preprocessing</div>
		<div class="mb-2 text-black text-lg italic font-normal">
			Data cleaning, tokenize, stop word etc.
		</div>
		<div class="text-justify text-black text-xl font-normal">
			Lorem Ipsum simply dummy text of the printing and typesetting industry. dummy
			text ever since the 1500s, when an unknown printer took a galley of type and
			scrambled make a type specimen.
		</div>
		<div class="mt-5 mb-2 text-black text-xl font-semibold">TF-IDF</div>
		<div class="mb-2 text-black text-lg italic font-normal">
			This step changes text input to vector value
		</div>
		<div class="text-black text-xl font-normal">
			[0.4, 1, 0.8, 1, 0.4, 1, 0.8, 1, 0.4, 1, 0.8, 1, 0.4, 1, 0.8, 1, 0.4, 1, 0.8,
			1,]
		</div>
		<div class="mt-5 mb-2 text-black text-xl font-semibold">Neural Network</div>

		<div class="mb-2 text-black text-lg italic font-normal">
			This step performs neural network method
		</div>
	</div>
</template>
