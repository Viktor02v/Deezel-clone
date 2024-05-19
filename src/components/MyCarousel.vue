<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MySlider from './MySlider.vue'

import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

let currentSlide = ref(0)
let isHoverCategory = ref(false)

const props = defineProps({ items: Object })


const slideTo = (val) => {
	if (val && currentSlide.value <= 7) {

		let res = currentSlide.value + 4
		if (res <= 12) {
			currentSlide.value = currentSlide.value + 4
		} else if (res > 12) {
			currentSlide.value = 12
		}
	} else if (!val) {

		let res = currentSlide.value - 4
		if (res > 0) {
			currentSlide.value = currentSlide.value - 4
		} else if (res < 1) {
			currentSlide.value = 0
		}
	}
}
</script>

<template>
	<div class="relative">
		<div v-if="items.length > 0">
			<button @click="slideTo(false)" class="absolute z-50 top-[40%] -left-1 rounded-full p-2">
				<ChevronLeft fillColor="#FFFFFF" :size="30" />
			</button>

			<button @click="slideTo(true)" class="absolute rounded-full top-[40%] -right-1 p-2 ">
				<ChevronRight fillColor="#FFFFFF" :size="30" />
			</button>
		</div>
		<div class="flex justify-between pb-5 ml-8 mr-6">
			<RouterLink to="/artist" @mouseenter="isHoverCategory = true" @mouseleave="isHoverCategory = false"
				:class="isHoverCategory ? 'text-[#EF5465]' : 'text-[#FFFFFF]'"
				class="flex items-center font-semibold text-xl cursor-pointer ">

				<ChevronRight :class="isHoverCategory ? 'text-[#EF5465] opacity-100' : 'text-[#FFFFFF]'" :size="25"
					class="mt-1 opacity-0" />
			</RouterLink>
			<div class="px-2"></div>
		</div>
		<Carousel ref="carousel" v-model="currentSlide" :items-to-scroll="4" :items-to-show="4" :transition="800"
			snap-align="start" class="mr-8">
			<Slide v-for="item in items" :key="item" class="flex items-baseline">
				<MySlider :url="item.url" :by="item.by" :song="item.song" :releasedOn="item.releasedOn"  />
			</Slide>
		</Carousel>
	</div>
</template>