<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar bg-neutral">
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
      <RouterLink to="/" class="btn btn-ghost text-2xl"
        >SHADOW MARKET <span class="hidden md:inline">🌓</span></RouterLink
      >
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
      <RouterLink to="/management" class="btn btn-ghost btn-circle">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          style="fill: #b2ccd6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7137 2.12656C15.8784 1.69663 14.7918 2.39036 12.6187 3.77783L12.0565 4.13679C11.4389 4.53106 11.1301 4.7282 10.7836 4.78478C10.4371 4.84135 10.092 4.75097 9.40191 4.57019L8.77361 4.4056C6.34506 3.76944 5.13079 3.45136 4.43551 4.1312C3.74024 4.81103 4.02442 6.03855 4.59279 8.4936L4.73983 9.12875C4.90135 9.82639 4.9821 10.1752 4.91653 10.5216C4.85096 10.868 4.64648 11.1727 4.23754 11.7821L3.86521 12.3369C2.42609 14.4815 1.70653 15.5538 2.11218 16.4039C2.51782 17.254 3.78002 17.3189 6.30442 17.4487L6.95753 17.4823C7.67487 17.5192 8.03356 17.5377 8.33956 17.6952C8.64557 17.8526 8.86425 18.1314 9.30163 18.6888L9.69981 19.1963C11.2389 21.1578 12.0085 22.1386 12.9545 21.9842C13.9005 21.8297 14.3964 20.6423 15.3882 18.2675L15.6448 17.6531C15.9266 16.9783 16.0675 16.6409 16.3222 16.3918C16.5769 16.1428 16.9165 16.0104 17.5958 15.7454L18.2142 15.5043C20.6046 14.572 21.7997 14.1059 21.9787 13.1603C22.1577 12.2148 21.202 11.416 19.2906 9.81846L18.7961 9.40516C18.2529 8.9512 17.9813 8.7242 17.8327 8.4128C17.6841 8.10139 17.6753 7.74082 17.6578 7.01967L17.6418 6.36312C17.58 3.82537 17.5491 2.5565 16.7137 2.12656Z"
            fill="#b2ccd6"
          />
          <path
            opacity="0.5"
            d="M19.5303 18.4697C19.2374 18.1768 18.7626 18.1768 18.4697 18.4697C18.1768 18.7626 18.1768 19.2374 18.4697 19.5303L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L19.5303 18.4697Z"
            fill="#b2ccd6"
          />
        </svg>
      </RouterLink>
      <!-- ADD -->
      <button to="/management" class="btn btn-ghost btn-circle">
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
