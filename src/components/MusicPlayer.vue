<script setup>
import { ref, watch, onMounted } from 'vue'

import ShuffleVariant from 'vue-material-design-icons/ShuffleVariant.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import MicrophoneVariant from 'vue-material-design-icons/MicrophoneVariant.vue'
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue'
import Tune from 'vue-material-design-icons/Tune.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue'
import SkipForvard from 'vue-material-design-icons/SkipForvard.vue'
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue'
import VolumeMute from 'vue-material-design-icons/VolumeMute.vue'

import lyrics from '../lyrics.json'

import uniqolor from 'uniqolor'

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia'

const useSong = useSongStore()
const { audio, isPlaying, currentTrack, currentArtist, isLyrics, trackTime, currentVolume } = storeToRefs(useSong)

let randColor = ref('')
randColor.value = uniqolor.random()
let isHover = ref(false)
let isVolumeHover = ref(false)
let isTrackTimeCurrent = ref('00:00')
let isTrackTimeTotal = ref('00:00')
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {
	if (audio.value) {
		setTimeout(() => {
			timeupdate()
			loadmetadata()
		}, 300)
	}

	if (currentTrack.value) {
		seeker.value.addEventListener('change', () => {
			const time = audio.value.duration * (seeker.value.value / 100);
			audio.value.currentTime = time
		});
		seeker.value.addEventListener('mousedown', () => {
			audio.value.pause()
			isPlaying.value = false
		});
		seeker.value.addEventListener('mouseup', () => {
			audio.value.play()
			isPlaying.value = true
		});
		seekerContainer.addEventListener('click', (e) => {
			const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
			const time = audio.value.duration * clickPosition;
			audio.value.currentTime = time
			seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
		});

	}
})




const timeupdate = () => {
	audio.value.addEventListener('timeupdate', () => {
		var minutes = Math.floor(audio.value.currentTime / 60);
		var seconds = Math.floor(audio.value.currentTime - minutes * 60);
		isTrackTimeCurrent.value = `${minutes} : ${seconds.toString().padStart(2, '0')}`
		trackTime.value = isTrackTimeCurrent.value
		const value = (100 / audio.value.duration) * audio.value.currentTime;
		range.value = value
		seeker.value.value = value
	})
}

const loadmetadata = () => {
	audio.value.addEventListener('loadedmetadata', () => {
		const duration = audio.value.duration;
		const minutes = Math.floor(duration / 60);
		const seconds = Math.floor(duration % 60);
		isTrackTimeTotal.value = `${minutes} : ${seconds.toString().padStart(2, '0')}`
	})
}

watch(() => audio.value, () => {
	timeupdate()
	loadmetadata()
})

watch(() => isTrackTimeCurrent.value, (time) => {
	if(time && time == isTrackTimeTotal.value) {
		useSong.nextSong(currentTrack.value)
	}
})

watch(() => currentTrack.value.id, (val) => {
	randColor.value = uniqolor.random()
	if(currentTrack.value.lyrics){
		isLyrics.value = true
		return
	}
	isLyrics.value = false
})
</script>

<template>


</template>

<style>
.rangeDotHidden[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 0;
	height: 0;
}

.rangeDot[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	border-radius: 100%;
	width: 12px;
	height: 12px;
}
</style>
