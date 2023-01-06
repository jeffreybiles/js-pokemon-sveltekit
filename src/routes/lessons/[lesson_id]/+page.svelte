<script lang="ts">
  import { frameworks } from "$lib/frameworks";
  import MailingListForm from "$lib/MailingListForm.svelte";
    import VideoPlayer from "$lib/VideoPlayer.svelte";
  import type { Lesson } from "src/routes/api/lessons/lessons";
  import type { PageData } from './$types';
  import Navigation from "$lib/Navigation.svelte";
  export let data: PageData;
  
  $: lesson = data.lesson as Lesson;
  $: previousLesson = data.previousLesson;
  $: nextLesson = data.nextLesson;

  let selectedFramework = /*localStorage.getItem('selectedFramework') ||*/ 'SvelteKit 1.0';
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
      <!-- {#each lesson.implementations as implementation}
        <div
          class="tab framework-tab"
          style="--color: {frameworks[implementation.framework].color};"
          class:active={implementation.framework == selectedFramework}
          on:click={() => selectFramework(implementation.framework)}
          on:keypress={() => selectFramework(implementation.framework)}
        >
          <div>{implementation.framework}</div>
        </div>
      {/each} -->
    </div>
    <div class="tabs">
      {#if selectedImplementation?.githubUrl}
        <a class="tab hoverable-button" href={selectedImplementation.githubUrl}>Code Branch</a>
      {/if}
      <a class="tab hoverable-button" href="https://www.youtube.com/watch?v={selectedImplementation?.youtubeId}">Watch on YouTube</a>
    </div>
  </div>
  {#if selectedImplementation && selectedImplementation.youtubeId}
    <VideoPlayer youtubeId={selectedImplementation.youtubeId} />
  {/if}
{:else}
  <div class="tab">
    Coming soon!  Projected release date: {lesson.projectedRelease}
  </div>
{/if}

<Navigation
  baseFolder='lessons'
  lesson={lesson}
  previousLesson={previousLesson}
  nextLesson={nextLesson}
/>

{#if lesson.description}
  <div class="description">
    {@html lesson.description}
  </div>
{/if}

<MailingListForm />

<style>
  .lesson-title {
    margin: 16px 0;
    font-size: 32px;
    font-weight: 700;
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
    border: black 1px solid;
    border-left: none;
    border-bottom: none;
    text-decoration: none;
    font-size: 20px;
  }
  .tab:first-of-type {
    border-left: black 1px solid;
  }
  .framework-tab {
    color: var(--color);
    cursor: pointer;
    border-right: 1px solid black;
    border-bottom: none;

  }
  .framework-tab.active, .framework-tab:hover {
    background-color: var(--color);
    color: white;
  }
  .framework-tab:hover {
    opacity: 0.8;
  }



  @media (max-width: 1400px) {
    .tab {
      font-size: 18px;
      padding: 6px 12px;
    }
  }
  @media (max-width: 1060px) {
    .tab {
      font-size: 14px;
    }
  }
  @media (max-width: 700px) {
    .tab-bar {
      flex-direction: column-reverse;
    }
    .tab, .hoverable-button {
      font-size: 12px;
      padding: 4px 6px;
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
  }

</style>