<script setup></script>

<template>
  <div class="w-full flex justify-between h-[55vh]">
    <!-- Item  -->
    <div class="w-full lg:w-1/2 space-y-6 mb-10 overflow-y-auto h-full pr-4">
      <!-- one -->
      <button
        class="btn btn-ghost w-full h-auto bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title text-yellow-500">治療藥水</h2>
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

      <!-- Two -->
      <button
        class="btn btn-ghost w-full h-auto bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item1.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title text-yellow-500">＋1 武器服務</h2>
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

      <button
        class="btn btn-ghost w-full h-auto bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item2.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title text-yellow-500">火焰抗性藥水</h2>
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

      <!-- four -->
      <button
        class="btn btn-ghost w-full h-auto bg-transparent hover:bg-transparent hover:shadow-none p-0"
        onclick="item3.showModal()"
      >
        <div class="card bg-base-200 w-96 shadow-xl hover:bg-base-300">
          <div class="card-body">
            <h2 class="card-title text-yellow-500">火焰抗性藥水</h2>
          </div>
        </div>
      </button>
      <dialog id="item3" class="modal">
        <div class="modal-box">
          <div>
            <div class="flex justify-between">
              <p class="text-4xl font-bold text-yellow-500">
                火焰抗性藥水
                <span class="italic text-lg text-gray-500 ml-1">藥水</span>
              </p>
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

    <!-- 固定的 img 區 -->
    <div class="hidden lg:block w-1/2 h-full sticky top-0">
      <div class="w-full h-full m-auto overflow-hidden flex justify-center pr-10">
        <img class="w-[400px] h-[330px] object-cover rounded-xl" src="/money.jpeg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
