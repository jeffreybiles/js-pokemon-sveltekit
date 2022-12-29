<script lang="ts">
  import LessonNavModal from '$lib/LessonNavModal.svelte';
  import type { LayoutData } from './$types';
    import type { Lesson } from './api/lessons/lessons';
  
  export let data: LayoutData;

  // Temporary values...
  let lessonModalOpen = false;
  $: lesson = data.lesson as Lesson

</script>


{#if lessonModalOpen}  
  <LessonNavModal 
    lesson={data.lesson}
    previousLesson={data.previousLesson}
    nextLesson={data.nextLesson}
    close={() => lessonModalOpen = false}
  />
{/if}
{#if lesson}
  <button class="lesson-modal-button" on:click={() => lessonModalOpen = true}>
    Tutorials for making this site in {lesson.implementations.map(implementation => implementation.framework).join(', ')}
  </button>
{/if}

<slot />

<style>
  .lesson-modal-button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 16px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #333333;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.7);
    border: none;
  }
</style>