<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
export default {
	setup() {
		onMounted(() => {
			initFlowbite();
		});
	},
};
</script>

<template>
	<div class="w-full px-20 py-12 bg-white">
		<div class="max-w-2xl mx-auto mr-64 mb-12">
			<h2 class="text-dark font-semibold text-2xl mb-4 leading-relaxed">
				Classification of E-commerce Review Aspects using
				<span class="bg-orange rounded-md px-2 text-white">Neural Network</span>
			</h2>
			<h4 class="text-lg font-bold mb-2">Background</h4>
			<p class="text-base font-sm text-black">
				In recent years, e-commerce has grown exponentially. It has also increased
				the number of online customers. It's important to understand the impact that
				online reviews have on this growing number of e-commerce users. Reviews
				become the primary and trusted information for customers. Unlike product
				descriptions, that can be manipulated, reviews come from the experiences of
				previous customers. This shows that the reviews themselves are real and
				describe the actual information about the product or online store itself.
				Therefore, customer reviews are very important in increasing the trust and
				reputation of business owners in e-commerce.
			</p>
			<h4 class="mt-5 text-lg font-bold mb-2">Problem</h4>
			<p class="text-base font-sm text-black">
				The process of sorting review categories manually will take a lot of time
				and effort. Not only that, the manual process will also be prone to
				subjectivity and error. Therefore, there is a need for an accurate
				classification system. Such a system will make the classification process
				easier and faster. It can also provide valuable insights for businesses to
				make better decisions, offer better deals, and improve business operational
				strategies.
			</p>
			<h4 class="mt-5 text-lg font-bold mb-2">Objective</h4>
			<p class="text-base font-sm text-black">
				The purpose of this research is to create a Neural Network-based machine
				learning model that can classify product reviews into 3 classes, namely
				product, customer service, and delivery.
			</p>
			<table class="mt-4 text-base text-left font-sm text-black">
				<thead class="text-sm text-gray-700 bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3">Class</th>
						<th scope="col" class="px-6 py-3">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b">
						<td
							scope="row"
							class="px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap"
						>
							Product
						</td>
						<td class="px-6 py-4 text-sm">
							The product category describes customer satisfaction with the quality,
							performance, and conformity of the product to the description given.
						</td>
					</tr>
					<tr class="bg-white border-b">
						<td
							scope="row"
							class="px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap"
						>
							Customer Service
						</td>
						<td class="px-6 py-4 text-sm">
							The customer service category covers the interaction between the customer
							and the service provided, such as friendliness, responsiveness, and other
							things related to customer service.
						</td>
					</tr>
					<tr class="bg-white border-b">
						<td
							scope="row"
							class="px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap"
						>
							Shipping & Delivery
						</td>
						<td class="px-6 py-4 text-sm">
							The delivery category involves aspects of speed of delivery, condition of
							goods when received, and timeliness of delivery.
						</td>
					</tr>
				</tbody>
			</table>
			<h4 class="mt-5 text-lg font-bold mb-2">Dataset</h4>
			<p class="text-base font-sm text-black">
				The dataset used is taken from Kaggle and the ground truth is obtained from
				a survey to general respondents. Dataset is only limited to using Indonesian
				language.
			</p>
			<h4 class="mt-5 text-lg font-bold mb-2">Result</h4>
			<p class="text-base font-sm text-black">
				From the 9 test scenarios that were performed. The best model is achieved
				with the results as below:
			</p>
			<div class="flex justify-center gap-4 mt-4">
				<img
					src="/src/assets/images/training.png"
					class="w-3/6 h-fit"
					alt="training"
				/>
				<img
					src="/src/assets/images/testing.png"
					class="w-3/6 h-fit"
					alt="training"
				/>
			</div>

			<p class="mt-2 text-base font-sm text-black">
				The figure above shows a graph of the training process of the best model
				obtained (B3) using training data. From the training process model B3 takes
				about 283.35 seconds or 4.72 minutes with a total of 3379 epochs. From the
				training process, model B3 also obtained a cost value of 0.088147 and an
				accuracy of 89.49%. However, in the testing process on testing, the model
				only gets an accuracy of 65.9%.
			</p>
			<h4 class="mt-5 text-lg font-bold">Word Analysis</h4>
			<h4 class="mt-2 text-base font-bold mb-2 text-gray-600">Class Product</h4>
			<img
				src="/src/assets/images/product_wordcloud.png"
				class="w-4/6 h-fit mx-auto"
				alt="word analysis"
			/>
			<p class="mt-2 text-base font-sm text-black mb-4">
				Words such as "bagus"(good), "sesuai"(suitable), "mantap"(great) are the 3
				words that dominate or are most relevant to the product class. These words
				have a high TF-IDF value for the product class. This shows that aspects such
				as the quality of the item, the suitability of the description, and also
				customer satisfaction have a considerable influence in the assessment of the
				product by customers.
			</p>

			<h4 class="mt-2 text-base font-bold mb-2 text-gray-600">
				Class Customer Service
			</h4>
			<img
				src="/src/assets/images/customerservice_wordcloud.png"
				class="w-4/6 h-fit mx-auto mt-2"
				alt="word analysis"
			/>
			<p class="mt-2 text-base font-sm text-black mb-4">
				Words such as "cepat"(fast), "respon"(response), "barang"(goods) are the 3
				words that dominate or are most relevant to the customer service class.
				These words have high TF-IDF values in the customer service class. This
				shows that aspects such as how the seller responds, the speed of the seller
				in serving customers, and also the quality of goods received by customers
				have a considerable influence in the assessment of customer service.
			</p>

			<h4 class="mt-2 text-base font-bold mb-2 text-gray-600">
				Class Shipping/Delivery
			</h4>
			<img
				src="/src/assets/images/shippingdelivery_wordcloud.png"
				class="w-4/6 h-fit mx-auto mt-2"
				alt="word analysis"
			/>
			<p class="mt-2 text-base font-sm text-black mb-4">
				Words such as "cepat"(fast), "kirim"(send), "terima"(receive) are the 3
				words that dominate or are most relevant to the delivery class. These words
				have a fairly high TF-IDF value in the delivery class. This shows that
				aspects such as speed and accuracy of delivery are highly considered by
				customers in assessing the delivery aspect. The presence of the words "safe"
				and "secure" also shows that the safety and security of goods delivery is an
				important concern of customers.
			</p>

			<p class="mt-2 text-base font-sm text-black">
				The results of word analysis using TF-IDF values provide a deeper
				understanding of the aspects that are often considered by customers. With
				this analysis, sellers or e-commerce businesses can utilize it to identify
				what aspects need to be improved or evaluated in their online stores
				according to customer feedback through reviews.
			</p>
		</div>
	</div>
</template>
