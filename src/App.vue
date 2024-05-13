<script setup>
import { RouterView, RouterLink } from 'vue-router'

import Magnify from 'vue-material-design-icons/Magnify.vue'
import Bell from 'vue-material-design-icons/Bell.vue'
import SideMenuItem from './components/SideMenuItem.vue'
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



	<!-- SIDE NAV: START -->
	<div id="SideNav" class="fixed w-[240px] bg-[#191922] h-[100vh] border-r border-r-[#32323D] ">
		<!-- Logo: START -->
		<div class="pl-6 pt-3 cursor-pointer w-full">
			<RouterLink class="text-white" to="/">
				<img src="/images/deezer-logo.png" width="130">
			</RouterLink>
		</div>
		<!-- Logo: END -->
		<div class="mt-[56px]">
			<!-- Menu section : START -->
			<SideMenuItem icon-string="music" :iconSize="20" name="Music" page-url="/"/>
			<SideMenuItem icon-string="podcast" :iconSize="20" name="Podcasts" page-url="/artist"/>
			<SideMenuItem icon-string="explore" :iconSize="20" name="Explore" page-url="/explore"/>
			<SideMenuItem icon-string="favourite" :iconSize="20" name="Favourites" page-url="/favourite"/>

			<!-- Menu section : END -->
			<!-- Categories section : START -->
			<div class="text-[#A2A2AD] font-light text-[12px] pl-[62px] mt-[25px]">
				<div class="py-[9px] hover:text-[#EF5465] curdor-pointer">
					Favorite tracks
				</div>
				<div class="py-[9px] hover:text-[#EF5465] cursor-pointer">
					Playlist
				</div>
				<div class="py-[9px] hover:text-[#EF5465] cursor-pointer">
					Albums
				</div>
				<div class="py-[9px] hover:text-[#EF5465] cursor-pointer">
					Artists
				</div>
				<div class="py-[9px] hover:text-[#EF5465] cursor-pointer">
					Podcasts
				</div>
			</div>
			<!-- Categories section : END -->
		</div>
	</div>
	<!-- SIDE NAV: END -->



	<!-- Main content: START -->
	<div class="fixed w-[calc(100%-240px)] h-[calc(100%-56px)] ml-[240px] mt-[56px] overflow-x-auto">
		<RouterView />
	</div>
	<!-- Main content: END -->
	<!-- <router-view /> -->
</template>
