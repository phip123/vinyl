<template>
  <div id="app">
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              <b-icon
                  icon="music"
                  size="is-large">
              </b-icon>
            </h1>
          </div>
        </div>
      </section>
    </div>
    <router-view></router-view>
    <footer class="footer">
      <div class="content has-text-centered">
        <b><i>end</i></b>
      </div>
    </footer>
  </div>

</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
