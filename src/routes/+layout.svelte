<script lang="ts">
import type { PageData } from './$types';
import { page } from '$app/stores';
  
export let data: PageData;
import LessonSidebar from './LessonSidebar.svelte';

</script>

<div class="container">
  <LessonSidebar lessons={data.lessons} selectedLessonId={$page.params.lesson_id} />
  <div class="main-content">
    <slot />
  </div>
</div>

<style>
/* resetting */
:global(body) {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.container {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.main-content {
  padding: 0 16px;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}

:global(*) {
  font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
}
:global(.hoverable-button) {
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  color: #555;
}
:global(.hoverable-button:hover), :global(.hoverable-button:hover div) {
  background-color: #333;
  color: #fff;
}
:global(.hoverable-button.active), :global(.hoverable-button.active div) {
  background-color: #555;
  color: #fff;
}

</style>