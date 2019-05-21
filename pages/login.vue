<template lang="html">
    <div style="height: 80vh;" class='flex-center'>
      <h2>Happy redirection :)</h2>
    </div>
</template>

<script>
export default {
  layout: "pages",

  mounted(){
    setTimeout(()=>{
      window.location.href = this.theWebsite
    }, 2000);
  }
}
</script>

<style lang="css" scoped>
</style>
