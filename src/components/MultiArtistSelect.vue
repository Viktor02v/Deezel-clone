<script setup>
import { toRefs, ref } from 'vue'
import { RouterLink } from 'vue-router'

import Play from 'vue-material-design-icons/Play.vue'

let isHover = ref(false)

const props = defineProps({ category: String, images: Array, text: String, to: String })

const { category, images, text, to } = toRefs(props)
</script>

<template>
	<div>
		<RouterLink :to="to" class="relative" >
			<div
				class="flex  justify-center items-center contrast-[2] brightness-[0.87] rounded-md aspect-square overflow-hidden"
				@mouseenter="isHover = true" @mouseleave="isHover = false">
				
				<div
					:class="isHover ? 'transition ease-in duration-150 bg-opacity-20' : 'transition ease-out duration-150 bg-opacity-5'"
					class="absolute w-full h-full bg-black z-10 rounded-md" />

				<img class="absolute contrast-[0.55] right-0 top-0 w-1/2" :src="images[0]">
				<img class="absolute contrast-[0.55] left-0 top-0 w-1/2" :src="images[1]">
				<img class="absolute contrast-[0.55] right-0 bottom-0 w-1/2" :src="images[2]">
				<img class="absolute contrast-[0.55] left-0 bottom-0 w-1/2" :src="images[3]">

				<div v-if="isHover" class="absolute z-10 p-2 rounded-full bg-white inline-block">
					<Play :size="33" />
				</div>

				<div
					class="absolute z-30 flex items-center bottom-1 left-0 h-7 ml-1 bg-black rounded-full px-2 bg-opacity-10">
					<img width="24" class="pr-2 opacity-[0.75] brightness-[1.2]" src="/images/deezer-sound-icon.png">
					<div class="text-white font-bold text-[21px]">{{ category }}</div>
				</div>
			</div>
		</RouterLink>

		<div class="h-2"></div>

		<RouterLink :to="to">
			<div class="hover:underline text-gray-200 font-light text-sm ">
				{{ text }}
			</div>
		</RouterLink>
	</div>
</template>