<template>
  <app-header />

  <!-- Introduction -->
  <section class="relative py-20 mb-8 text-center text-white">
    <div
      class="absolute inset-0 w-full h-full bg-contain introduction-bg"
      style="background-image: url(assets/img/header.png)"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="mb-5 text-5xl font-bold">Listen to Great Music!</h1>
        <p class="w-full mx-auto md:w-8/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus et dolor mollis, congue augue non, venenatis elit.
          Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et
          sapien. Duis sed magna pulvinar, fringilla lorem eget,
          ullamcorper urna.
        </p>
      </div>
    </div>

    <img
      class="relative block w-auto max-w-full mx-auto mt-5 -mb-20"
      src="assets/img/introduction-music.png"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="relative flex flex-col bg-white border border-gray-200 rounded">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <i class="float-right text-2xl text-green-400 fa fa-headphones-alt"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex items-center justify-between p-3 pl-6 transition duration-300 cursor-pointer hover:bg-gray-50">
          <div>
            <a
              href="#"
              class="block font-bold text-gray-600"
            >Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="text-gray-600 fa fa-comments"></i>
              15
            </span>
          </div>
        </li>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>

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

  <auth-modal />

</template>

<script>
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
  },
};
</script>
