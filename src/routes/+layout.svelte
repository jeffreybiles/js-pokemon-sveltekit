<script lang="ts">
import type { PageData } from './$types';
  
export let data: PageData;
import Iconify from '@iconify/svelte';

const frameworkIcons = {
  'Next 13': 'logos:nextjs-icon',
  'Remix 1.10': 'logos:remix-icon',
  'Nuxt 3': 'vscode-icons:file-type-nuxt',
  'SvelteKit 1.0': 'vscode-icons:file-type-svelte',
}

/*
We don't need the modal anymore... it can just be a link to the lesson page on main
That means I don't have to worry about styling that modal, or about updating the styling in all the branches later
I can also save the framework preference easily in localstorage
*/
</script>

<div class="container">
  <div class="lessons-sidebar">
    {#each data.lessons as lesson}
    <a class="lesson" href="/lessons/{lesson.id}">
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
  <div class="main-content">
    <slot />
  </div>
</div>

<style>
.container {
  display: flex;
  flex-direction: row;
}
.lessons-sidebar {
  font-family: sans-serif;
  border-right: 1px solid #ccc;
  height: 100%;
}
.lesson {
  display: grid;
  grid-template-columns: 30px 1fr 80px;
  padding: 4px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  font-weight: 300;
  color: #555;
  text-decoration: none;
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
.main-content {
  padding: 16px;
  padding-top: 0;
  width: 100%;
}
</style>