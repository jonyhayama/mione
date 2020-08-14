<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item  link to="/">
          <v-list-item-action>
            <v-icon>fa-tachometer-alt fa-fw</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>fa-info-circle fa-fw</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="site-logo">
        <img src="./assets/img/time-turner-negative.svg" />
        Mione
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style scoped lang="scss">
p {
  font-size: 2em;
  text-align: center;
}
.site-logo {
  display: flex;
  align-items: center;
  > img {
    height: 42px;
    width: auto;
    margin-right: 10px;
  }
}
</style>
