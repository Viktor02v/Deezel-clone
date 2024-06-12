<script setup>
import { toRefs, watch } from 'vue'

import lyrics from '../lyrics.json'

import GuitarElectric from 'vue-material-design-icons/GuitarElectric.vue'

import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { currentTrack, lyricsPosition, trackTime } = storeToRefs(useSong);

const props = defineProps({ words: String, time: String })
const { words, time } = toRefs(props)

watch(() => trackTime.value, (trackTime) => {
	setTimeout(() => {
		lyrics[currentTrack.value.id].forEach(res => {
			if(res.time == trackTime) lyricsPosition.value = res.time
		});
	}, 1000);
})
</script>

<template>
	<div :id="time" class="my-10 text-white opacity-100" :class="{'opacity-30': lyricsPosition !== time}">
		<div v-if="words === 'INSTRAMENTAL SECTION'" class="flex w-full">
			<GuitarElectric class="mx-auto" :size="200" />
		</div>
		<div v-if="words !== 'INSTRAMENTAL SECTION'" >{{ words }}</div>
	</div>
</template>