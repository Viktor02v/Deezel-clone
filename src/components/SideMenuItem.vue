<script setup>
import { toRefs, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
	name: String,
	pageUrl: String,
	iconString: String,
	iconSize: Number
})
const { name, pageUrl, iconString } = toRefs(props)

let icon = ref(null)
watchEffect(() => {
	if (route.path === pageUrl.value && icon.value === iconString.value + '-red') return

	if (route.path === pageUrl.value) {
		icon.value = iconString.value + '-red'
	} else {
		icon.value = iconString.value + '-white'
	}
})

const isHover = () => {
	if (icon.value === iconString.value + '-red') {
		icon.value = iconString.value + '-white'
	} else if (icon.value === iconString.value + '-white') {
		icon.value = iconString.value + '-red'
	}
}
</script>

<template>
	<div class="flex items-center w-full my-[20px]">
		<RouterLink :to="pageUrl"
			:class="pageUrl === route.path ? 'border-l-[#EF5465] text-[#EF5465]' : 'border-l-[#191922] text-[#FFFFFF]'"
			class="border-l-4 w-full hover:text-[#EF5465] duration-300" @mouseenter="isHover" @mouseleave="isHover">
			<div class="flex items-center pl-3 mx-3">
				<img :src="`/images/icons/${icon}.png`" :width="iconSize">
				<div class="pl-3.5 font-[600] text-[17px] ">{{ name }}</div>
			</div>
		</RouterLink>
	</div>
</template>