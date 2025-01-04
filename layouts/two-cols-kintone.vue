<!-- layouts/two-cols-kintone.vue -->
<template>
  <div class="slidev-layout kintone-layout">
    <div class="kintone-header">
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="content">
      <div class="columns">
        <div class="column left">
          <slot name="left" />
        </div>
        <div class="column right">
          <slot name="right" />
        </div>
      </div>
      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
    <div class="kintone-footer"></div>
    <!-- <div class="kintone-logo"></div> -->
  </div>
</template>

<style scoped>
.title {
  font-size: 2em;
  font-weight: bold;
  margin: 2em;
}

.content {
  margin: 2em;
  display: flex;
  flex-direction: column;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex-grow: 1;
}

.column {
  padding: 0.5rem;
  /* 从 1rem 减少到 0.5rem */
}

.column :deep(h2) {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  /* 从 1rem 减少到 0.5rem */
  color: #3b4252;
}

.column :deep(ul) {
  font-size: 1.2rem;
  line-height: 1.6;
}

.column :deep(li) {
  margin-bottom: 0.5rem;
}

.bottom {
  margin-top: 2rem;
}
</style>