<template>
  <div class="popup">
    <div v-for="(item, key) in items" :key="key">
      <div class="popup-item">
        <a href="#"
          ><span class="popup-item_svg" v-html="item.svg"></span>
          {{ item.name }}</a
        >
      </div>
    </div>
    <a href="#" class="popup-logoff"
      ><p class="popup-logoff_item">
        {{ logOff.name
        }}<span class="popup-logoff_item_svg" v-html="logOff.svg"></span></p
    ></a>
  </div>
</template>

<script>
export default {
  props: ["items", "logOff"],
};
</script>

<style lang="scss" scoped>
.popup {
  padding-top: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 180px;
  color: black;
  font-size: 14px;

  &-item {
    margin-top: 1rem;
    margin-left: 1.5rem;
    &_svg {
      margin-right: 1rem;
      margin-top: 2px;
      display: inline-block;
      height: 0.75rem;
      width: 0.75rem;
    }
  }
  &-logoff {
    margin-top: 1.8rem;
    padding-bottom: 5px;
    display: block;
    background-color: #f2f2f2;
    &_item {
      margin-bottom: 6px;
      margin-left: 1.5rem;
      margin-top: 1.5rem;
      padding-top: 12px;
      color: #747474;
      &_svg {
        margin-left: 1rem;
        margin-top: 1px;
        vertical-align: middle;
        display: inline-block;
        fill: #747474;
        height: 1rem;
        width: 1rem;
      }
    }
  }
}
</style>
