<script lang="ts">
  import Icon from '@iconify/svelte';

  import BaseModal from "./BaseModal.svelte";
  import { productionApi } from "$lib/production-api";
  import type { Lesson } from "src/routes/api/lessons/lessons";

  
  export let lesson: Lesson;
  export let previousLesson: Lesson | undefined;
  export let nextLesson: Lesson | undefined;
  export let close: () => void;

  let selectedFramework = 'SvelteKit 1.0';
  $: selectedImplementation = lesson.implementations.find(implementation => implementation.framework === selectedFramework);

  console.log(lesson.implementations)

</script>
<BaseModal close={close}>
  <div class="modal-content">
    <h1 class="lesson-title">{lesson.name}</h1>

    {#if lesson.description}
      <div class="description">
        {@html lesson.description}
      </div>
    {/if}
    <div class="implementation-tabs">
      {#each lesson.implementations as implementation}
        <div
          class="implementation-tab {implementation.framework == selectedFramework ? 'selected' : ''}"
          on:click={() => selectedFramework = implementation.framework}
          on:keypress={() => selectedFramework = implementation.framework}
        >
          <div>{implementation.framework}</div>
        </div>
      {/each}
    </div>
    <div class="content">
      <div class="button-links">
        <a class="button-link" href={selectedImplementation?.githubUrl}>{lesson.demoSubdomain} code</a>
        <a class="button-link" href="https://www.youtube.com/watch?v={selectedImplementation?.youtubeId}">Watch on YouTube</a>
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
    </div>
    <div class="navigation-buttons">
      <div class="previous-button">
        {#if previousLesson}
          <a class="button" href="https://{previousLesson?.demoSubdomain}.{productionApi}.com/">
            <Icon icon="carbon:arrow-left" />
            Previous
          </a>
        {:else}
          <div class="button disabled">
            <Icon icon="carbon:arrow-left" />
            Previous
          </div>
        {/if}
      </div>
      <div class="index-button">
        <a class="button" href="https://{productionApi}/">Index</a>
      </div>
      <div class="next-button">
        {#if nextLesson}
          <a class="button" href="https://{nextLesson?.demoSubdomain}.{productionApi}.com/">
            Next
            <Icon icon="carbon:arrow-right" />
          </a>
        {:else}
          <div class="button disabled">
            Next
            <Icon icon="carbon:arrow-right" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</BaseModal>

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

  .implementation-tabs {
    display: flex;
    flex-direction: row;
    justify-content: start;
    border-bottom: none;
  }
  .implementation-tab {
    padding: 8px 16px;
    background-color: #FFFFFF;
    color: #333333;
    cursor: pointer;
    border: black 1px solid;
    border-left: none;
    border-bottom: none;
    cursor: pointer;
    font-size: 20px;
  }
  .implementation-tab.selected {
    background-color: #333333;
    color: #FFFFFF;
  }
  .implementation-tab:first-of-type {
    border-left: black 1px solid;
  }

  .content {
    background-color: #333333;
    padding: 8px;
    border: none;
  }

  .button-links {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-bottom: 8px;
  }

  .button-link {
    display: block;
    margin-left: 8px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #CCCCCC;
    color: black;
    text-decoration: none;
  }

  .video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .navigation-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 8px;
  }
  .previous-button {
    display: flex;
    justify-content: flex-start;
  }
  .previous-button :global(.iconify) {
    margin-right: 8px;
  }
  .next-button {
    display: flex;
    justify-content: flex-end;
  }
  .next-button :global(.iconify) {
    margin-left: 8px;
  }
  .index-button {
    display: flex;
    justify-content: center;
  }
  .button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #CCCCCC;
    color: black;
    cursor: pointer;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .button:hover, .button-link:hover, .implementation-tab:hover {
    background-color: #555555;
    color: white;
  }
  .button, .button-link, .implementation-tab {
    font-family: sans-serif;
  }
</style>