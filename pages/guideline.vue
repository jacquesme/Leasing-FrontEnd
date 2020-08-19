<template>
    <div class="max-w-screen-xl m-auto px-4 sm:px-10">

<!--COLORS DIV-->

      <h3 class="text-green-400 mt-8">01. COLORS</h3>
      <div class="grid md:ml-8">
        <div class="primaryAccent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 mb-8">
          <!--Primary Colors-->
          <div class="text-grey-500">
            <h4 class="text-sm">Primary colors</h4>
            <div class="text-grey-600 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
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

          <!--Accent Sizes-->
          <div class="grid text-grey-500">
            <h4 class="text-sm">Accent colors</h4>
            <div class="text-grey-600 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
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

        <!--Secondary Colors-->
        <div class="secondaryColors mb-16">

          <div class="text-grey-500">
            <h4 class="text-sm">Secondary colors</h4>
            <div class="text-grey-600 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12">
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
      </div>


<!--FONTS DIV-->

      <h3 class="text-green-400">02. FONTS</h3>
      <div class="grid md:ml-8">
        <div class="text-grey-500 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 mt-8 mb-8">

          <!--Heading Sizes-->
          <div>
            <p class="text-sm">Heading 1</p>
            <h1 class="text-2xl heading-style">HEADING 1</h1>
            <p class="text-sm">Heading 2</p>
            <h2 class="text-xl heading-style">HEADING 2</h2>
            <p class="text-sm">Heading 3</p>
            <h3 class="text-m heading-style">HEADING 3</h3>
            <p class="text-sm">Heading 4</p>
            <h4 class="text-sm heading-style">HEADING 4</h4>
          </div>

          <!--Caption Sizes-->
          <div class="md:col-end-6">
            <p class="text-sm">Caption 1</p>
            <p class="text-m caption-style">CAPTION 1</p>
            <p class="text-sm">Caption 2</p>
            <p class="text-sm caption-style">CAPTION 2</p>
            <p class="text-sm">Caption 3</p>
            <p class="text-sm caption-style">CAPTION 3</p>
            <p class="text-sm">Caption 4</p>
            <p class="text-xs caption-style">CAPTION 4</p>
            <p class="text-sm">Caption 5</p>
            <p class="text-xxs caption-style">CAPTION 5</p>
          </div>

        </div>

        <!--Main Text-->
        <div class="sm:grid sm:grid-cols-4 md:grid-cols-7">
          <div class="col-span-4 pr-20">
            <h4 class="text-sm text-grey-500">Main text</h4>
            <p class="text-sm text-grey-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan posuere quam id mattis. Donec vel tortor libero. Suspendisse placerat, nibh sit amet tempor accumsan, massa lorem pretium mi, id vestibulum ante tortor porta turpis.</p>
          </div>

          <!--Bullet List-->
          <div class="col-span-2">
            <h4 class="mt-4 text-sm text-grey-500">Bullet list</h4>
            <div class="mx-5 mt-4">
              <ul class="text-xs text-grey-600 list-disc ml-2">
                <li class="mb-2">1st Item</li>
                <li class="mb-2">2nd Item</li>
                <li class="mb-2">3rd Item</li>
                <li>4th Item</li>
              </ul>
            </div>
          </div>

          <!--Numbered List-->
          <div class="col-span-1">
            <h4 class="mt-4 text-sm text-grey-500">Numbered list</h4>
            <div class="mx-5 mt-4">
              <ul class="text-xs text-grey-600 list-decimal ml-2 mb-2">
                <li class="mb-2">1st Item</li>
                <li class="mb-2">2nd Item</li>
                <li class="mb-2">3rd Item</li>
                <li>4th Item</li>
              </ul>
            </div>
          </div>
        </div>

        <!--Mobi-->
        <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 mb-16">
          <div class="col-span-4 pr-20">
            <h4 class="mt-4 text-sm text-grey-500">Main text mobi</h4>
            <p class="text-sm text-grey-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan posuere quam id mattis. Donec vel tortor libero. Suspendisse placerat, nibh sit amet tempor accumsan, massa lorem pretium mi, id vestibulum ante tortor porta turpis.</p>
          </div>
        </div>
      </div>

<!--ACTIVE ELEMENTS DIV-->

      <!--Button / Checkboxes / Link-->
      <h3 class="text-green-400">03. ACTIVE ELEMENTS AND STATES</h3>
      <div class="grid md:ml-8">
        <div class="text-grey-500 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-10 mt-8">

          <!--Button-->
          <div class="col-span-5 mb-6">
            <h4 class="text-sm mb-4">Button</h4>
            <button class="btn btn-purple">More details</button>
          </div>

          <!--Checkboxes-->
          <div class="col-span-3 sm:col-span-2 md:col-span-3 mb-6">
            <h4 class="text-sm mb-4">Checkbox</h4>
            <div>
              <label>
                <input type="checkbox" id="checkbox-1" name="checkbox"/>
                <label for="checkbox-1" class="inline-block align-middle">Checkbox 1</label>
                <span class="text-sm text-grey-600">Chair</span>
              </label>
              <label>
                <input type="checkbox" id="checkbox-2" name="checkbox" />
                <label for="checkbox-2" class="inline-block align-middle">Checkbox 2</label>
                <span class="text-sm text-grey-600">TV</span>
              </label>
            </div>
          </div>

          <!--Link-->
          <div class="col-span-2 mb-6">
            <h4 class="text-sm mb-4">Link</h4>
            <a class="link" href="#">link</a>
          </div>
        </div>

        <!--Input-->
        <h4 class="text-sm text-grey-500 mb-6">Input</h4>
        <div class="text-grey-500 text-xs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-5 mb-6">
          <card class="lg:col-start-1">
            <input type="text" placeholder="Enter login" class="myInp">
            <p>Main</p>
          </card>
          <card class="lg:col-start-3">
            <input type="text" placeholder="Join" class="myInp">
            <p>Fill</p>
          </card>
          <card class="lg:col-start-5">
            <input type="text" placeholder="Jo2ma.com" class="errorInp">
            <p>Error</p>
          </card>
        </div>

        <!--Pagination-->
        <div class="wrapper  mb-12">
          <h4 class="text-sm text-grey-500 mb-6">Pagination</h4>
          <nav>
            <ul class="pagination">
              <li class="pag-list bg-grey-100"><a href="" class="pag-arrow"><</a></li>
              <li class="pag-list bg-grey-100"><a href="">1</a></li>
              <li class="pag-list bg-white"><a href="">...</a></li>
              <li class="pag-list bg-accent-blue text-white shadow-md"><a href="">77</a></li>
              <li class="pag-list bg-white"><a href="">...</a></li>
              <li class="pag-list bg-grey-100"><a href="">1589</a></li>
              <li class="pag-list bg-grey-100"><a href=""class="pag-arrow">></a></li>
            </ul>
          </nav>
        </div>

        <!--Table-->
        <div class="grid grid-cols-1 mb-16">

          <h4 class="text-sm text-grey-500">Table</h4>
          <p class="text-xs mt-6 mb-4">The table has a zebra pattern with alternating white and light gray lines.</p>
          <table class="table-fixed">
            <thead class="bg-grey-400">
            <tr>
              <th class="w-4/5">Name</th>
              <th class="w-1/6">The cost</th>
              <th class="w-1/12"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="td-1">Lorem ipsum dolor sit amet.</td>
              <td class="td-2">$1200.00</td>
              <td class="td-3">Delete</td>
            </tr>
            <tr>
              <td class="td-1">Lorem ipsum dolor.</td>
              <td class="td-2">$127.00</td>
              <td class="td-3">Delete</td>
            </tr>
            <tr>
              <td class="td-1">Lorem ipsum.</td>
              <td class="td-2">$154.00</td>
              <td class="td-3">Delete</td>
            </tr>
            <tr>
              <td class="td-1">Lorem ipsum dolor sit amet.</td>
              <td class="td-2">$1890.00</td>
              <td class="td-3">Delete</td>
            </tr>
            <tr>
              <td class="td-1">Lorem ipsum dolor.</td>
              <td class="td-2">$12.50</td>
              <td class="td-3">Delete</td>
            </tr>
            <tr>
              <td class="td-1">Lorem ipsum dolor.</td>
              <td class="td-2">$12500.78</td>
              <td class="td-3">Delete</td>
            </tr>
            <tr>
              <td class="td-1">Lorem ipsum dolor sit.</td>
              <td class="td-2">$25400.00</td>
              <td class="td-3">Delete</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>


<!--POP-UP WINDOW-->

      <h3 class="text-green-400">04. POP-UP WINDOW</h3>
      <div class="grid md:ml-8">
        <div class="text-black text-sm grid grid-cols-6 mt-6 mb-16">
          <div class="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1">
            <!--The modal-->
            <div class="modal shadow-lg sm:grid-span-2">
              <!--modal content-->
              <div class="modal-content">
                <ul>
                  <li class="modal-list"><img src="../assets/img/loyalty.png" alt=""><span><a href="">My items</a></span></li>
                  <li class="modal-list"><img src="../assets/img/verified.png" alt=""><span><a href="">My purchases</a></span></li>
                  <li class="modal-list"><img src="../assets/img/notification.png" alt=""><span><a href="">My orders</a></span></li>
                  <li class="modal-list"><img src="../assets/img/person.png" alt=""><span><a href="">Personal data</a></span></li>
                  <li class="mt-6 py-4 bg-grey-400 flex items-center text-grey-600 fill-current"><span><a href="">Log off</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import LogOff from '~/assets/svg/log-off.svg?inline';

  export default {
    components: {LogOff}
  }
</script>



<!--

-->
