<template>
  <div id="app">
    <nav>
      <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0"> HOME </router-link>
      <router-link to="/random" class="link-offset-2 link-underline link-underline-opacity-0"> RANDOM </router-link>
    </nav>
    <router-view class="m-3" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #242425;
}

nav {
  padding: 30px;
  text-align: left;
  background-color: #242425;
}

nav a {
  font-weight: bold;
  color: #502c2c;
}

nav a.router-link-exact-active {
  color: #ff6720;
  font-size: xx-large;
}
</style>