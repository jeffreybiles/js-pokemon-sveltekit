<script lang="ts">
  import type { Lesson } from "src/routes/api/lessons/lessons";
  import type { PageData } from './$types';
    import Navigation from "./Navigation.svelte";
  export let data: PageData;
  
  $: lesson = data.lesson as Lesson;
  $: previousLesson = data.previousLesson;
  $: nextLesson = data.nextLesson;

  let selectedFramework = localStorage.getItem('selectedFramework') || 'SvelteKit 1.0';
  $: selectedImplementation = lesson.implementations.find(implementation => implementation.framework === selectedFramework);
  const selectFramework = (framework: string) => {
    selectedFramework = framework;
    localStorage.setItem('selectedFramework', framework);
  }
</script>


<h1 class="lesson-title">{lesson.name}</h1>

{#if lesson.implementations.length > 0}
  <div class="tab-bar">
    <div class="tabs">
      {#each lesson.implementations as implementation}
        <div
          class="tab {implementation.framework == selectedFramework ? 'selected' : ''}"
          on:click={() => selectFramework(implementation.framework)}
          on:keypress={() => selectFramework(implementation.framework)}
        >
          <div>{implementation.framework}</div>
        </div>
      {/each}
    </div>
    <div class="tabs">
      <a class="tab" href={selectedImplementation?.githubUrl}>Code Branch</a>
      <a class="tab" href="https://www.youtube.com/watch?v={selectedImplementation?.youtubeId}">Watch on YouTube</a>
    </div>
  </div>
  <div class="video">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/{selectedImplementation?.youtubeId}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
{:else}
  <div class="tab">
    Coming soon!  Projected release date: {lesson.projectedRelease}
  </div>
{/if}
<Navigation
  previousLesson={previousLesson}
  nextLesson={nextLesson}
/>


{#if lesson.description}
  <div class="description">
    {@html lesson.description}
  </div>
{/if}


<style>
  .lesson-title {
    margin: 16px 0;
    font-size: 32px;
    font-weight: 700;
    font-family: sans-serif;
  }

  .description {
    margin: 16px 0;
  }
.tab-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: start;
    border-bottom: none;
  }
  .tab {
    padding: 8px 16px;
    background-color: #FFFFFF;
    color: #333333;
    cursor: pointer;
    border: black 1px solid;
    border-left: none;
    border-bottom: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    font-family: sans-serif;
  }
  .tab.selected {
    background-color: #333333;
    color: #FFFFFF;
  }
  .tab:first-of-type {
    border-left: black 1px solid;
  }


  .video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .tab:hover {
    background-color: #444444;
    color: white;
  }
</style>