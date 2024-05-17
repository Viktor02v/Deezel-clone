<script setup>
import MultiArtistSelectVue from '@/components/MultiArtistSelect.vue';
import MixesInspiredBy from '../components/MixesInspiredBy.vue';
import MultiArtistSelect from '../components/MultiArtistSelect.vue';

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

		<div class="px-8 mt-8 min-w-[800px]">
			<div class="text-white text-xl font-semibold inline-block">
				Made For You...
			</div>

			<div class="py-3"></div>

			<div class="flex  justify-start gap-7">
				<MultiArtistSelect class="w-1/4 hover:w-1/3 duration-500" category="daily"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/45/300/300', 'https://picsum.photos/id/55/300/300', 'https://picsum.photos/id/54/300/300', 'https://picsum.photos/id/76/300/300']" />

				<MultiArtistSelect class="w-1/4 hover:w-1/3 duration-500" category="training"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/46/300/300', 'https://picsum.photos/id/56/300/300', 'https://picsum.photos/id/57/300/300', 'https://picsum.photos/id/77/300/300']" />

				<MultiArtistSelect class="w-1/4 hover:w-1/3 duration-500 " category="relax"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/47/300/300', 'https://picsum.photos/id/60/300/300', 'https://picsum.photos/id/58/300/300', 'https://picsum.photos/id/78/300/300']" />

				<MultiArtistSelect class="w-1/4 hover:w-1/3 duration-500" category="drive"
					text="Featuring Bring Me the Horizon, Our Last Night, Bad Omens, The Retaliators" to="/artist"
					:images="['https://picsum.photos/id/48/300/300', 'https://picsum.photos/id/59/300/300', 'https://picsum.photos/id/61/300/300', 'https://picsum.photos/id/79/300/300']" />
			</div>
		</div>

	</div>
</template>