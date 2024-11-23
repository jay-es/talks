<template>
  <div class="slidev-layout default relative">
    <slot />
    <div class="absolute top-21 bottom-0 right-14 py-6">
      <slot name="image" />
    </div>
  </div>
</template>
