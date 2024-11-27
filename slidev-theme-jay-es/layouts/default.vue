<template>
  <div class="slidev-layout default bg-cover">
    <slot />
  </div>
</template>

<style>
.slidev-layout.default {
  background-image: url("../assets/bg-default.svg");

  h1 {
    @apply text-3xl text-white bg-primary -mx-14 px-14 -mt-10 py-5 mb-6;
  }
}
</style>
