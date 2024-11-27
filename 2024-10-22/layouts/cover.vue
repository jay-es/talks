<template>
  <div class="slidev-layout cover grid text-white bg-primary bg-cover">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.cover {
  background-image: url("../assets/bg-cover.svg");

  h1 {
    font-size: 2.68rem;
    line-height: 1.4;
  }

  p {
    opacity: 0.75;
  }
}
</style>
