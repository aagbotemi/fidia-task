<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
}

.sidebar {
  min-height: 100vh;
  max-width: 270px;
  width: 100%;
  background: #F7FAFC;
  box-shadow: inset -1px 0px 0px #E3E8EE;
  padding: 12px 20px 0px 20px;
}
</style>
