<script setup>
import { toRefs, ref } from 'vue'
import { RouterLink } from 'vue-router'

import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { CssSyntaxError } from 'postcss'

let currentSlide = ref(0)
let isHoverCategory = ref(false)

const props = defineProps({ category: String, data: Array })
const { category, data } = toRefs(props)

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
	<div>

	</div>
</template>