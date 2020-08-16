<template>
  <div class="dashboard">
    <div>
      <img alt="Vue logo" src="../../assets/img/time-turner.svg">
      <Quote content='"I mean, you could claim that anything’s real if the only basis for believing in it is that nobody’s proved it doesn’t exist!"' author="Hermione" location="Harry Potter and the Deathly Hallows"/>
    </div>
  </div>
</template>

<script>
import Quote from '../components/Quote'

export default {
  name: 'Dashboard',
  components: {
    Quote
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img { 
      width: 200px; 
      margin: 30px auto;
    }
  }
</style>