<template>
    <div class="max-w-screen-xl m-auto px-4 sm:px-10">
      <!--COLLORS DIV-->
      <h3 class="text-green-400">01. COLORS</h3>
      <div class="primaryAccent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        <div class="text-grey-500">
          <h4 class="text-sm">Primary colors</h4>
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
            <div class="card">
              <div class="bg-white border border-black w-12 h-12"></div>
              <div>
                <span class="text-xs">#FFFFFF</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-black w-12 h-12"></div>
              <div>
                <span class="text-xs">#323232</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-grey-500">
          <h4 class="text-sm">Accent colors</h4>
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
            <div class="card">
              <div class="bg-accent-purple w-12 h-12"></div>
              <div>
                <span class="text-xs">#60198C</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-accent-blue w-12 h-12"></div>
              <div>
                <span class="text-xs">#0A386A</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="secondaryColors">

        <div class="text-grey-500">
          <h4 class="text-sm">Secondary colors</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12">
            <div class="card">
              <div class="bg-grey-100 w-12 h-12"></div>
              <div>
                <span class="text-xs">#F9F9F9</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-grey-200 w-12 h-12"></div>
              <div>
                <span class="text-xs">#F8F6F6</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-grey-300 w-12 h-12"></div>
              <div>
                <span class="text-xs">#FFF8F8</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-grey-400 w-12 h-12"></div>
              <div>
                <span class="text-xs">#F2F2F2</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-grey-500 w-12 h-12"></div>
              <div>
                <span class="text-xs">#C1C1C1</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-grey-600 w-12 h-12"></div>
              <div>
                <span class="text-xs">#747474</span>
              </div>
            </div>
            <div class="card">
              <div class="bg-accent-purple-light w-12 h-12"></div>
              <div>
                <span class="text-xs">#852BBD</span>
              </div>
            </div>
          </div>
        </div>

      </div>


      <!--FONTS DIV-->
      <h3 class="text-green-400">02. FONTS</h3>
      <div class="text-grey-500 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7">

          <div class="">
            <p class="text-sm">Heading 1</p>
            <h1 class="text-2xl">HEADING 1</h1>
            <p class="text-sm">Heading 2</p>
            <h2 class="text-xl">HEADING 2</h2>
            <p class="text-sm">Heading 3</p>
            <h3 class="text-m">HEADING 3</h3>
            <p class="text-sm">Heading 4</p>
            <h4 class="text-sm">HEADING 4</h4>
          </div>
          <div class="md:col-end-6">
            <p class="text-sm">Caption 1</p>
            <p class="text-m">CAPTION 1</p>
            <p class="text-sm">Caption 2</p>
            <p class="text-sm">CAPTION 2</p>
            <p class="text-sm">Caption 3</p>
            <p class="text-sm">CAPTION 3</p>
            <p class="text-sm">Caption 4</p>
            <p class="text-xs">CAPTION 4</p>
            <p class="text-sm">Caption 5</p>
            <p class="text-xxs">CAPTION 5</p>
          </div>

      </div>
      <div class="text-grey-500 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7">
        <div class="col-span-4 pr-20">
          <h4 class="text-sm">Main text</h4>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan posuere quam id mattis. Donec vel tortor libero. Suspendisse placerat, nibh sit amet tempor accumsan, massa lorem pretium mi, id vestibulum ante tortor porta turpis.</p>
        </div>
        <div class="col-span-2">
          <h4 class="text-sm">Bullet list</h4>
          <div class="mx-5 mt-4">
            <ul class="text-xs list-disc ml-2">
              <li class="mb-2">1st Item</li>
              <li class="mb-2">2nd Item</li>
              <li class="mb-2">3rd Item</li>
              <li>4th Item</li>
            </ul>
          </div>
        </div>
        <div class="col-span-1">
          <h4 class="text-sm">Numbered list</h4>
          <div class="mx-5 mt-4">
            <ul class="text-xs list-decimal ml-2 mb-2">
              <li class="mb-2">1st Item</li>
              <li class="mb-2">2nd Item</li>
              <li class="mb-2">3rd Item</li>
              <li>4th Item</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-grey-500 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7">
        <div class="col-span-4 pr-20">
          <h4 class="text-sm">Main text mobi</h4>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan posuere quam id mattis. Donec vel tortor libero. Suspendisse placerat, nibh sit amet tempor accumsan, massa lorem pretium mi, id vestibulum ante tortor porta turpis.</p>
        </div>
      </div>

<!--ACTIVE ELEMENT DIV-->
      <h3 class="text-green-400">03. ACTIVE ELEMENTS AND STATES</h3>
      <div class="text-grey-500 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-11">
        <div class="col-span-5">
          <h4 class="text-sm">Button</h4>
          <button class="btn btn-purple">More details</button>
        </div>
        <div class="col-span-4">
          <h4 class="text-sm">Checkbox</h4>
          <div>
            <label>
              <input type="checkbox">
              <span class="text-sm">Chair</span>
            </label>
            <label class="ml-4">
              <input type="checkbox">
              <span class="text-sm">TV</span>
            </label>
          </div>
        </div>
        <div class="col-span-2">
          <h4 class="text-sm">Link</h4>
          <a class="link" href="#">link</a>
        </div>
      </div>


    </div>
</template>
