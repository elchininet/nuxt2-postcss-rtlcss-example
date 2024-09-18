<template>
    <div class="relative bg-gray-100">
      <LocaleSelector />
      <Nuxt />
    </div>
</template>

<script>
export default {
  head () {
    return this.$nuxtI18nHead({ addDirAttribute: true })
  }
}
</script>