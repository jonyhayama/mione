<template>
  <div class="quote">
    <p class="content">{{content}}</p>
    <p class="author">{{[author, location].filter(Boolean).join(' @ ')}}</p>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    content: String,
    author: String,
    location: String,
  }
}
</script>

<style scoped lang="scss">
  .quote {
    padding: 30px 50px;
    width: 100%;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;

    p.content {
      font-size: 22px;
      font-family: 'Kurale',serif;
    }

    p.author {
      margin-top: 15px;
      text-align: right;
    }
  }
</style>