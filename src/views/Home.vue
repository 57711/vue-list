<template>
  <div class="home">
    <h1>Home Page</h1>
    <div>
      <p>This is a single page app wrote by VueJS.</p>
      <p>Two pages with vue-route</p>
      <p>
        The list page renders some news from an open API. 
        It is an endless scrolling page and you can mark up any item you like.
        And it could be stay there even the page is refreshed. 
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>
<style scoped>
.home{
  margin:30px;
}
</style>>
