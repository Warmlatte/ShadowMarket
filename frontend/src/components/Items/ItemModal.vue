<script setup></script>

<template>
  <div>
    <!-- Item -->
    <div class="w-full lg:w-1/2 h-auto space-y-6 mb-10">
      <!-- one -->
      <button
        class="btn btn-ghost w-full h-full bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title">治療藥水</h2>
          </div>
        </div>
      </button>
      <dialog id="item" class="modal">
        <div class="modal-box">
          <div>
            <div class="flex justify-between">
              <p class="text-4xl font-bold text-yellow-500">
                治療藥水
                <span class="italic text-lg text-gray-500 ml-1">藥水</span>
              </p>
              <!-- Dropdown -->
              <div class="">
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button" class="btn btn-ghost m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li><a>編輯</a></li>
                    <li><a>刪除</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-3">
              <span class="text-gray-400">½ lb</span><span class="italic text-red-600">常見</span>
            </div>
            <div class="w-full h-1 bg-yellow-500 mt-3"></div>
            <div class="mt-5">
              <strong class="text-2xl">效果</strong>
              <p class="mt-2 mb-5 text-lg">回復生命2d4+2</p>
              <strong class="text-2xl">價格</strong>
              <p class="mt-2 mb-5 text-lg text-yellow-400">50 gp</p>

              <a
                class="text-xl text-gray-400 hover:text-gray-300"
                href="https://5eclone.pingstudio.tw/items.html#%e6%b2%bb%e7%99%82%e8%97%a5%e6%b0%b4_dmg"
                target="_blank"
                ><strong>更多資訊</strong></a
              >
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <!-- two -->
      <button
        class="btn btn-ghost w-full h-full bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item1.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title">＋1 武器服務</h2>
          </div>
        </div>
      </button>
      <dialog id="item1" class="modal">
        <div class="modal-box">
          <div>
            <div class="flex justify-between">
              <p class="text-4xl font-bold text-yellow-500">
                ＋1 武器服務
                <span class="italic text-lg text-gray-500 ml-1">其他</span>
              </p>
              <!-- Dropdown -->
              <div class="">
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button" class="btn btn-ghost m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li><a>編輯</a></li>
                    <li><a>刪除</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-3">
              <span class="text-gray-400">- lb</span><span class="italic text-red-600">非常見</span>
            </div>
            <div class="w-full h-1 bg-yellow-500 mt-3"></div>
            <div class="mt-5">
              <strong class="text-2xl">效果</strong>
              <p class="mt-2 mb-5 text-lg">將持有之非魔法武器賦予+1加值。</p>
              <strong class="text-2xl">價格</strong>
              <p class="mt-2 mb-5 text-lg text-yellow-400">100 gp</p>

              <a class="text-xl text-gray-400 hover:text-gray-300" href="#" target="_blank"
                ><strong>更多資訊</strong></a
              >
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <!-- three -->
      <button
        class="btn btn-ghost w-full h-full bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item2.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title">火焰抗性藥水</h2>
          </div>
        </div>
      </button>
      <dialog id="item2" class="modal">
        <div class="modal-box">
          <div>
            <div class="flex justify-between">
              <p class="text-4xl font-bold text-yellow-500">
                火焰抗性藥水
                <span class="italic text-lg text-gray-500 ml-1">藥水</span>
              </p>
              <!-- Dropdown -->
              <div class="">
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button" class="btn btn-ghost m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li><a>編輯</a></li>
                    <li><a>刪除</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-3">
              <span class="text-gray-400">½ lb</span><span class="italic text-red-600">非常見</span>
            </div>
            <div class="w-full h-1 bg-yellow-500 mt-3"></div>
            <div class="mt-5">
              <strong class="text-2xl">效果</strong>
              <p class="mt-2 mb-5 text-lg">獲得1h的火焰抗性</p>
              <strong class="text-2xl">價格</strong>
              <p class="mt-2 mb-5 text-lg text-yellow-400">200 gp</p>

              <a
                class="text-xl text-gray-400 hover:text-gray-300"
                href="https://5etools.wayneh.tw/items.html#火焰抗性藥水_dmg"
                target="_blank"
                ><strong>更多資訊</strong></a
              >
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<style scoped></style>
