<template>
  <div class="slidev-layout section grid text-white bg-primary bg-cover">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.section {
  background-image: url("../assets/bg-section.svg");

  h1 {
    font-size: 3rem;
    line-height: 1.4;
  }

  p {
    opacity: 0.75;
  }
}
</style>
