<!--
  Usage:
```md
---
layout: two-cols-header
---
This spans both
::left::
# Left
This shows on the left
::right::
# Right
This shows on the right
```
-->

<template>
  <div class="slidev-layout default">
    <slot />

    <div class="flex justify-between">
      <div>
        <slot name="left" />
      </div>
      <div class="relative">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
