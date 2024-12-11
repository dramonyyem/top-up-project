
<template>
    <v-card
      rounded="0"
      theme="dark"
      flat
    >
    <transition name="fade" mode="out-in">
        <v-window v-model="onboarding">
          <v-window-item
            v-for="n in length"
            :key="`card-${n}`"
            :value="n"
          >
            <v-card
              class="d-flex justify-center align-center"
              height="200"
            >
              <span class="text-h2">
                Card {{ n }}
              </span>
            </v-card>
          </v-window-item>
        </v-window>
    </transition>
  
      <v-card-actions class="justify-space-between">
        <v-btn
          icon="mdi-chevron-left"
          variant="plain"
          @click="prev"
        ></v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          icon="mdi-chevron-right"
          variant="plain"
          @click="next"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        length: 3,
        onboarding: 1,
      }),
  
      methods: {
        next () {
          this.onboarding = this.onboarding + 1 > this.length
            ? 1
            : this.onboarding + 1
        },
        prev () {
          this.onboarding = this.onboarding - 1 <= 0
            ? this.length
            : this.onboarding - 1
        },
      },
      mounted() {
        // Set an interval to automatically move to the next item every 3 seconds
        this.autoTransition = setInterval(this.next, 3000);
    },

    beforeDestroy() {
        // Clear the interval when the component is destroyed
        clearInterval(this.autoTransition);
    },
    }
  </script>
<style lang="scss" scoped>
/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>