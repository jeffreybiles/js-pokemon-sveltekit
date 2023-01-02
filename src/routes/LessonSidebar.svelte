<script lang="ts">
  import type { Lesson } from './api/lessons/lessons'
  import Iconify from '@iconify/svelte';

  export let lessons: Lesson[] = []
  export let selectedLessonId: string = ''


  const frameworkIcons = {
    'Next 13': 'logos:nextjs-icon',
    'Remix 1.10': 'logos:remix-icon',
    'Nuxt 3': 'vscode-icons:file-type-nuxt',
    'SvelteKit 1.0': 'vscode-icons:file-type-svelte',
  }

</script>

<div class="lessons-sidebar">
  <a class="lesson" class:active={!selectedLessonId} href="/">
    <div class="lesson-number"></div>
    <div class="lesson-title">Home</div>
  </a>
  {#each lessons as lesson}
    <a class="lesson" class:active={lesson.id == selectedLessonId} href="/lessons/{lesson.id}">
      <div class="lesson-number">{lesson.number}</div>
      <div class="lesson-title">{lesson.name}</div>
      {#if lesson.implementations.length > 0}
      <div class="lesson-implementations">
        {#each lesson.implementations as implementation}
          <Iconify icon={frameworkIcons[implementation.framework]} />
        {/each}
      </div>
      {:else}
      <div class="projected-release-date">
        {lesson.projectedRelease}
      </div>
      {/if}
      
    </a>
  {/each}
</div>

<style>
  .lessons-sidebar {
  margin: 0;
  font-family: sans-serif;
  border-right: 1px solid #ccc;
}
.lessons-sidebar, .main-content {
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}
.lesson {
  display: grid;
  grid-template-columns: 30px 1fr 80px;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  font-weight: 300;
  color: #555;
  text-decoration: none;
}
.lesson.active, .lesson.active div {
  background-color: #333;
  color: #fff;
}
.lesson:hover, .lesson:hover div {
  background-color: #333;
  color: #fff;
}
.lesson-number, .lesson-implementations, .projected-release-date {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lesson-number {
  font-size: 12px;
  font-weight: 300;
  color: #555;
}
.lesson-implementations :global(svg) {
  margin: 2px;
}
.projected-release-date {
  font-size: 12px;
  font-weight: 300;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>