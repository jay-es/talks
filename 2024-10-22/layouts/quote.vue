<template>
  <div class="slidev-layout quote grid bg-cover">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.quote {
  background-image: url("../assets/bg-quote.svg");

  h1 {
    font-size: 4rem;
    color: hsl(262 83% 33%);
  }
}
</style>
