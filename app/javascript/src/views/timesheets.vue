<template>
  <div class="timesheets">
    <v-tabs v-model="tab" align-with-title >
      <v-tab v-for="tab in tabs" :key="tab.label" >
        {{ tab.label }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in tabs" :key="tab.label" >
        <v-card flat>
          <v-card-text><iframe :src="tab.src" ></iframe></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
      tabs: [
        {
          label: 'BairesDev',
          src: 'https://docs.google.com/spreadsheets/d/17j9Rk5ZmXKOu3WCaCUyiesgi2Dku34Z7Bgj3Jty4y0k/edit'
        },
        {
          label: 'Personal',
          src: 'https://docs.google.com/spreadsheets/d/1zX15KiYJK4rchSe-dvSIK6StxoF-ofC-9axXSs6nzt8/edit#gid=0'
        },
        {
          label: 'Hours per day',
          src: 'https://docs.google.com/spreadsheets/d/1pbNw_8TTpv8eFHB1s43ysXGJttjo6R4caEb5aHfztn4/edit#gid=0'
        }
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .timesheets {
    margin-top: -26px;

    iframe {
      width: 100%;

      /* 100vh - mainHeader - tabs - vCard padding - footer */
      height: calc( 100vh - 64px - 48px - 32px - 36px);
    }
  }
</style>