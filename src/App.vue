<script setup>
import { RouterView, RouterLink } from 'vue-router'

import Magnify from 'vue-material-design-icons/Magnify.vue'
import Bell from 'vue-material-design-icons/Bell.vue'

</script>

<template>
	<!-- TOP NAV: START -->
	<div id="TopNav"
		class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]">

		<!-- Search section: START -->
		<div class="flex items-center w-full">
			<Magnify class="pl-6 mt-1 pr-2" fillColor="#7E7E88" :size="22" />
			<input type="text" placeholder="Search"
				class="p-1 bg-transparent outline-none font-[300] placeholder-[#BEBEC7] text-[#FFFFFF] w-full max-w-xl">
		</div>
		<!-- Search section: END -->

		<!-- Profile section & notifications: START -->
		<div class="flex items-center pr-10">
			<div class="mr-4 p-1 hover:bg-gray-600 rounded-full cursor-pointer">
				<Bell fillColor="white" :size="20" />
			</div>
			<img
				src="https://yt3.ggpht.com/yti/ANjgQV-BsgP7VzRhrVOhoR9oluzj_l7hWizBLiYQpd6u703zSuU=s88-c-k-c0x00ffffff-no-rj"
				alt="" class="rounded-full w-[33px]">
		</div>
		<!-- Profile section & notifications: END -->
	</div>
	<!-- TOP NAV: END -->
	<!-- <router-view /> -->
</template>
