<script setup>
import MixesInspiredBy from '../components/MixesInspiredBy.vue';
import MultiArtistSelect from '../components/MultiArtistSelect.vue';
import CustomCarousel from '../components/CustomCarousel.vue';
import SliderItem from '../components/SliderItem.vue';

</script>

<template>
	<div class="max-w-[1500px] mx-auto">

		<!-- Mixes Section: START -->
		<div class="px-8 mt-8 min-w-[800px] w-full">

			<div class="text-white text-xl font-semibold inline-block">
				Mixes inspired by...
				<div class="text-sm font-light text-[#A2A2AD]">
					Discover new tracks similar to your favourites
				</div>
			</div>

			<div class="py-3"></div>

			<div class="flex justify-between w-full gap-8">
				<div class="xl:w-1/3 w-1/2 ">
					<MixesInspiredBy class="pb-1.5" text="VAMPIRE (feat. Oli Sykes Of Bring Me The Horizon)" by="Ic3peak"
						to="/artist" image="https://picsum.photos/id/147/300/300" />
					<MixesInspiredBy class="pb-1.5" text="Deutchland " by="Rammstein" to="/artist"
						image="https://picsum.photos/id/166/300/300" />
					<MixesInspiredBy class="pb-1.5" text="Fallout " by="Masked wolf" to="/artist"
						image="https://picsum.photos/id/127/300/300" />
				</div>

				<div class="xl:w-1/3 w-1/2 ">
					<MixesInspiredBy class="pb-1.5" text="Pray For Plagues" by="Bring Me The Horizon" to="/artist"
						image="https://picsum.photos/id/201/300/300" />
					<MixesInspiredBy class="pb-1.5" text="Candy Truck " by="Bring Me The Horizon " to="/artist"
						image="https://picsum.photos/id/222/300/300" />
					<MixesInspiredBy class="pb-1.5" text="L'efant sauvage' " by="Gojira" to="/artist"
						image="https://picsum.photos/id/212/300/300" />
				</div>

				<div class="xl:block hidden xl:w-1/3 ">
					<MixesInspiredBy class="pb-1.5" text="Bad Life" by="Sigrid" to="/artist"
						image="https://picsum.photos/id/211/300/300" />
					<MixesInspiredBy class="pb-1.5" text="Dystopia" by="Magadeth" to="/artist"
						image="https://picsum.photos/id/123/300/300" />
					<MixesInspiredBy class="pb-1.5" text="Can You Feel My Heart' " by="Bring Me The Horizon" to="/artist"
						image="https://picsum.photos/id/94/300/300" />
				</div>
			</div>
		</div>
		<!-- Mixes Section: END -->

		<!-- Artists Section: START -->
		<div class="px-8 mt-8 min-w-[800px]">
			<div class="text-white text-xl font-semibold inline-block">
				Made For You...
			</div>

			<div class="py-3"></div>

			<div class="flex  justify-start gap-7">
				<MultiArtistSelect class="w-1/4 " category="daily"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/45/300/300', 'https://picsum.photos/id/55/300/300', 'https://picsum.photos/id/54/300/300', 'https://picsum.photos/id/76/300/300']" />

				<MultiArtistSelect class="w-1/4" category="training"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/46/300/300', 'https://picsum.photos/id/56/300/300', 'https://picsum.photos/id/57/300/300', 'https://picsum.photos/id/77/300/300']" />

				<MultiArtistSelect class="w-1/4 " category="relax"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/47/300/300', 'https://picsum.photos/id/60/300/300', 'https://picsum.photos/id/58/300/300', 'https://picsum.photos/id/78/300/300']" />

				<MultiArtistSelect class="w-1/4 " category="drive"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/48/300/300', 'https://picsum.photos/id/59/300/300', 'https://picsum.photos/id/61/300/300', 'https://picsum.photos/id/79/300/300']" />
			</div>
		</div>
		<!-- Artists Section: END -->

		<!-- Favorite Artist Section: START -->
		<div class="px-8 mt-8 min-w-[800px]">
			<div class="py-3"></div>

			<p class="text-center pb-6 text-white text-sm">Unlock flow by selecting your favourite artists for improved
				recommendations.</p>

			<div class="flex justify-center gap-7">
				<div class="flex text-white items-center justify-center relative">
					<img width="100" class=" absolute -left-36 z-0 rounded-full cursor-pointer"
						src="https://picsum.photos/id/188/300/300">
					<img width="115" class="  absolute -left-[80px] z-10 rounded-full cursor-pointer"
						src="https://picsum.photos/id/66/300/300">
					<img width="160" class="rounded-full z-20 cursor-pointer" src="https://picsum.photos/id/144/300/300">
					<img width="100" class=" absolute -right-36 z-0 rounded-full cursor-pointer"
						src="https://picsum.photos/id/141/300/300">
					<img width="115" class=" absolute -right-[80px] z-10 rounded-full cursor-pointer"
						src="https://picsum.photos/id/222/300/300">
				</div>
			</div>

			<div class="flex justify-center w-full p-3">
				<button type="button"
					class="text-white text-[15px] font-semibold rounded-full bg-[#EF5465] hover:bg-[#d8384a] px-8 py-2 text-center">
					ADD ARTIST
				</button>
			</div>
		</div>
		<!-- Favorite Artist Section: END -->

		<!-- Carousel Section: START -->
		<div class="mt-8 min-w-[800px]">
			<CustomCarousel category="New releases for you" :data="[
				{ url: 'https://picsum.photos/id/89/300/300', song: 'Foregone', by: 'In Flames', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/101/300/300', song: 'Dark Waters', by: 'Delain', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/121/300/300', song: 'Heritage', by: 'Distant', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/134/300/300', song: 'Meanwhile', by: 'Klone', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/144/300/300', song: 'Truth Decay', by: 'You Me At Six', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/155/300/300', song: 'This Is Why', by: 'Paramore', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/166/300/300', song: 'The Jaws Of Life', by: 'Pierce The Veil', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/198/300/300', song: 'The Future Is Your Past', by: 'In The Brian Jonestown Massacre', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/211/300/300', song: 'The Land, The Water, The Sky ', by: 'Black Belt Eagle Scout', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/223/300/300', song: 'The Day My Father Died', by: 'SYML', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/225/300/300', song: 'Complete Mountain Almanac', by: 'Complete Mountain Almanac', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/239/300/300', song: 'Music From Montana Story', by: 'Kevin Morby', releasedOn: '10/02/2023' },
			]" />

			<CustomCarousel class="mt-6" :data="[
				{ url: 'https://picsum.photos/id/90/300/300', song: 'Punk Lines', by: 'In Flames', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/123/300/300', song: 'Red Fusion', by: 'Delain', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/168/300/300', song: 'Crazy Games', by: 'Distant', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/131/300/300', song: 'Shadows Of Magnet', by: 'Klone', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/149/300/300', song: 'Change Of Moves', by: 'You Me At Six', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/151/300/300', song: 'State Of Secrets', by: 'Paramore', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/167/300/300', song: 'Rainbow In Dream', by: 'Pierce The Veil', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/193/300/300', song: 'Dream Kisses', by: 'In The Brian Jonestown Massacre', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/201/300/300', song: 'A Lovers]s Headlight', by: 'Black Belt Eagle Scout', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/221/300/300', song: 'Second Feelings', by: 'SYML', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/223/300/300', song: 'Serial Choices', by: 'Complete Mountain Almanac', releasedOn: '10/02/2023' },
				{ url: 'https://picsum.photos/id/238/300/300', song: 'Teenage Hysteria', by: 'Kevin Morby', releasedOn: '10/02/2023' },
			]" />
		</div>
		<!-- Carousel Section: END -->
	</div>
</template>