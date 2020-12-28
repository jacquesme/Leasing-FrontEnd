<template>
  <div class="">
    <div class="flex items-center">
      <div class="bg-accent-purple w-1 h-10 inline-block"></div>
      <div class="ml-3 w-48 h-10 flex items-center">
        <h3 class="text-m text-accent-purple font-medium">MAKE / MODEL</h3>
      </div>
    </div>
    <div class="ml-4 mt-5">
      <div class="mb-6">
        <input
          type="text"
          placeholder="Model"
          class="border w-full p-2 rounded border-accent-purple"
        />
      </div>
      <div class="">
        <label class="container inline-flex"
          >Audi
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Bmw
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Ford
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Honda
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Kia
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Mercedes-Benz
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Ford
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Porsche
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>

        <label class="container inline-flex"
          >Toyota
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarModel",
};
</script>

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-left: 0;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 19px;
  width: 19px;
  background-color: transparent;
  border: 3px solid #60198c;
  border-radius: 3px;
}

/* On mouse-over, add a grey background color */
/*.container:hover input ~ .checkmark {*/
/*  background-color: #60198C;*/
/*}*/

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #60198c;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 3px;
  top: -2px;
  width: 6px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
