<template>
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <div class="fixed bottom-0 left-0 w-full h-16 p-5 pb-4 text-left align-top bg-white">
    <div class="relative">
      <!-- Play/Pause Button -->
      <div class="float-left leading-3 w-7 h-7">
        <button type="button">
          <i class="text-xl text-gray-500 fa fa-play"></i>
        </button>
      </div>
      <!-- Current Position -->
      <div class="float-left mt-1 ml-5 text-lg leading-3 text-gray-400 h-7 w-14">
        <span class="player-currenttime">00:00</span>
      </div>
      <!-- Scrub -->
      <div class="float-left mt-2 leading-3 w-7 h-7 ml-7 player-scrub">
        <div class="absolute left-0 right-0 mx-auto text-lg text-center player-song-info">
          <span class="song-title">Song Title</span> by
          <span class="song-artist">Artist</span>
        </div>
        <span class="relative block w-full h-2 m-1 mt-2 bg-gray-200 rounded cursor-pointer">
          <span
            class="absolute text-lg text-gray-800 top-neg-8"
            style="left: 50%;"
          >
            <i class="fas fa-circle"></i>
          </span>
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            style="width: 50%;"
          ></span>
        </span>
      </div>
      <!-- Duration -->
      <div class="float-left mt-1 ml-8 text-lg leading-3 text-gray-400 h-7 w-14">
        <span class="player-duration">03:06</span>
      </div>
    </div>
  </div>
  <app-player />
  <auth-modal />

</template>

<script>
import AppPlayer from '@/components/Player.vue';
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AppPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s ease-out;
}

.fade-leave-to {
  transition: all 0.25s ease-out;
  opacity: 0;
}
</style>
