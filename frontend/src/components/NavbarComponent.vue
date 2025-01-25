<script setup></script>

<template>
  <div class="navbar bg-base-300">
    <!-- menu -->
    <div class="navbar-start lg:hidden">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-lg dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-56 p-2 shadow"
        >
          <li>
            <div class="form-control">
              <input type="text" placeholder="Search" class="input w-full" />
              <button class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Logo -->
    <div class="navbar-center lg:navbar-start">
      <a class="btn btn-ghost text-2xl">SHADOW MARKET 🌓</a>
    </div>
    <!-- Search -->
    <div class="navbar-end">
      <div class="form-control">
        <input type="text" placeholder="Search" class="hidden lg:inline input w-full" />
      </div>
      <div class="hidden lg:inline">
        <button class="btn btn-ghost btn-circle ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <!-- ADD -->
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          style="fill: #b2ccd6"
        >
          <path
            fill-rule="evenodd"
            d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
