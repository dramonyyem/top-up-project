<template>

    <v-text-field
        placeholder="Search..."
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search templates"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClick"
    ></v-text-field>

</template>

<script>
  export default {
    data: () => ({
      loaded: false,
      loading: false,

    }),

    methods: {
      onClick () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>