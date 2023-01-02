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

  let collapsed = false;

</script>

{#if collapsed}
  <div
    class="lessons-sidebar collapsed hoverable-button active"
    on:click={() => collapsed = false}
    on:keydown={(e) => { if (e.key === 'Enter') { collapsed = false; }}}
  >
    <Iconify icon="material-symbols:keyboard-double-arrow-right" />
  </div>
{:else}
  <div class="lessons-sidebar">
    <div
      class="collapse-button hoverable-button"
      on:click={() => collapsed = true}
      on:keydown={(e) => { if (e.key === 'Enter') { collapsed = true; }}}
    >
      <Iconify icon="material-symbols:keyboard-double-arrow-left" />
    </div>
    <a class="lesson hoverable-button" class:active={!selectedLessonId} href="/">
      <div class="lesson-number"></div>
      <div class="lesson-title">Home</div>
    </a>

    {#each lessons as lesson}
      <a class="lesson hoverable-button" class:active={lesson.id == selectedLessonId} href="/lessons/{lesson.id}">
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
{/if}

<style>
.lessons-sidebar {
  margin: 0;
  font-family: sans-serif;
  border-right: 1px solid #ccc;
}
.lessons-sidebar.collapsed {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  padding: 0 8px;
  font-size: 24px;
}
.collapse-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  border-bottom: 2px solid #ccc;
  font-size: 20px;
}

.lessons-sidebar {
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}
.lesson {
  display: grid;
  grid-template-columns: 30px 1fr 80px;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  padding: 8px 0;
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