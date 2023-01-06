<script lang="ts">
  import type { Lesson, lessons } from './api/lessons/lessons'
  import Iconify from '@iconify/svelte';
  import { frameworkArray, frameworks, type FrameworkName } from '$lib/frameworks';
  import { timeDisplay } from '$lib/utils';

  export let lessons: Lesson[] = []
  export let selectedLessonId: string = ''
  export let selectedFramework: string; 
  import { sidebarOpen } from '../stores';
  import { onMount } from 'svelte';
  $: selectedFrameworkName = 'SvelteKit 1.0'//frameworkArray.find(framework => framework.slug === selectedFramework)?.name;

  const closeIfSmallScreen = () => {
    if(window.innerWidth < 700) {
      $sidebarOpen = false;
    }
  };
  onMount(closeIfSmallScreen)
</script>

{#if !$sidebarOpen}
  <div
    class="lessons-sidebar collapsed hoverable-button active"
    on:click={() => $sidebarOpen = true}
    on:keydown={(e) => { if (e.key === 'Enter') { $sidebarOpen = true; }}}
  >
    <Iconify icon="material-symbols:keyboard-double-arrow-right" />
  </div>
{:else}
  <div class="lessons-sidebar">
    <div
      class="collapse-button hoverable-button"
      on:click={() => $sidebarOpen = false}
      on:keydown={(e) => { if (e.key === 'Enter') { $sidebarOpen = false; }}}
    >
      <Iconify icon="material-symbols:keyboard-double-arrow-left" />
    </div>
    <a class="lesson hoverable-button" class:active={!selectedLessonId} href="/{selectedFramework ?? ''}">
      <div class="lesson-number"></div>
      <div class="lesson-title">Home</div>
    </a>

    {#each lessons as lesson}
      {@const implementation = lesson.implementations.find(implementation => implementation.framework === selectedFrameworkName)}
      <a
        class="lesson hoverable-button"
        class:active={lesson.id == selectedLessonId}
        href="/{selectedFramework ?? 'lessons'}/{lesson.id}"
        on:click={closeIfSmallScreen}
      >
        <div class="lesson-number">{lesson.number}</div>
        <div class="lesson-title">{lesson.name}</div>
        <!-- {#if !selectedFramework}
          <div class="lesson-implementations">
            {#each lesson.implementations as implementation}
              {#if implementation.lengthInSeconds}
                <Iconify icon={frameworks[implementation.framework].icon} />
              {/if}
            {/each}
          </div>
        {:else} -->
          {#if implementation?.lengthInSeconds}
            <div class="time-display">
              {timeDisplay(implementation?.lengthInSeconds)}
            </div>
          {:else}
            <div class="projected-release-date">
             {implementation?.releaseDate ?? 'Soon'}
            </div>
          {/if}
        <!-- {/if} -->
        
      </a>
    {/each}
  </div>
{/if}

<style>
.lessons-sidebar {
  margin: 0;
  font-family: sans-serif;
  border-right: 1px solid #ccc;
  z-index: 1;
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
  border-bottom: 1px solid var(--darkColor);
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
.projected-release-date, .time-display {
  font-size: 12px;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4px;
}
.projected-release-date {
  font-weight: 300;
  color: #999;
}

@media (max-width: 700px) {
  .lessons-sidebar.collapsed {
    display: none;
  }
  .lessons-sidebar {
    position: absolute;
    background: #fff;
  }
}
</style>