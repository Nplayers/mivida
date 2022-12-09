<template>
  <div class="postActions">
    <TheIcon
      icon="like"
      @click="emit('likeClick')"
      :fill="likedByMe ? '#FF3C3C' : 'none'"
      :stroke="likedByMe ? '#FF3C3C' : '#000'"
    /><span>{{ likes || "" }}</span>
    <TheIcon
      icon="comment"
      @click="emit('commentClick')"
      fill="none"
      stroke="#000"
    /><span>{{ comments || "" }}</span>
    <TheIcon
      icon="favorite"
      @click="emit('favorClick')"
      :fill="favoredByMe ? '#FFD12E' : 'none'"
      :stroke="favoredByMe ? '#FFD12E' : '#000'"
    /><span>{{ favors || "" }}</span>
  </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";

defineProps({
  likes: Number,
  comments: Number,
  favors: Number,
  likedByMe: Boolean,
  favoredByMe: Boolean,
});
const emit = defineEmits(["likeClick", "commentClick", "favorClick"]);
</script>
<style>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-self: end;
  column-gap: 16px;
  row-gap: 4px;
}
.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}
.postActions > span {
  font-size: 14px;
}
</style>
