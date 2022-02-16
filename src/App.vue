<template>
  <router-view />
  <a href="https://github.com/hai2007/big-screen-dataview" target="_blank"
    >Fork Me on Github</a
  >
</template>
<style scoped>
a {
  user-select: none;
  position: fixed;
  transform: rotate(45deg);
  line-height: 1.6em;
  transform-origin: 150px 23px;
  text-align: center;
  font-family: sans-serif;
  display: inline-block;
  top: 67px;
  right: -66px;
  width: 300px;
  background-color: #f44336;
  outline: 4px solid #f44336;
  border: 2px dashed #ffffff;
  color: #ffffff;
  z-index: 1;
}
</style>
