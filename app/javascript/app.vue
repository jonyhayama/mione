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
        <v-list-item link @click.prevent="logout">
          <v-list-item-action>
            <v-icon>fa-sign-out-alt fa-fw</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
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

      <v-spacer></v-spacer>

      <v-avatar class="profile" title="asd">
        <v-img :src="current_user.avatar" alt="Avatar" />
      </v-avatar>
      <span class="user-email">{{current_user.email}}</span>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link @click.prevent="logout">
            <v-list-item-title>
              <v-icon>fa-sign-out-alt fa-fw</v-icon>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
  import { mapActions, mapGetters } from "vuex";
  export default {
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    computed: {
      ...mapGetters("Session", ["current_user"])
    },
    methods: {
      logout: async function() {
        try{
          await this.$store.dispatch('Session/logout');
        } finally{
          window.location.href = '/';
        }
      },
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kurale&family=Raleway:wght@300;400;700&display=swap');
</style>

<style scoped lang="scss">
p {
  font-size: 2em;
  text-align: center;
}
.user-email {
  padding-left: 10px;
}
.site-logo {
  display: flex;
  align-items: center;
  font-family: $heading-font-family;
  font-size: 1.5em;
  font-weight: bold;

  > img {
    height: 42px;
    width: auto;
    margin-right: 10px;
  }
}
</style>
