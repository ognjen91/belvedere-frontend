<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{$t('error.notFound') }}}}</h1>
    <h1 v-else>{{$t('error.otherError') }}}}</h1>
    <nuxt-link :to="localePath('index')">{{$t('error.goHome') }}}}</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'pagesNoBottomBoxes'
}
</script>
