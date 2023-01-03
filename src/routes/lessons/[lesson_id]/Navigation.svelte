<script lang="ts">
  import Icon from '@iconify/svelte';

  import type { Lesson } from "src/routes/api/lessons/lessons";

  export let lesson: Lesson;
  export let previousLesson: Lesson;
  export let nextLesson: Lesson;
</script>

<div class="navigation-buttons">
  <div class="previous-button">
    {#if previousLesson}
      <a class="button hoverable-button" href="/lessons/{previousLesson.id}">
        <Icon icon="carbon:arrow-left" />
        Previous
      </a>
    {:else}
      <div class="button hoverable-button disabled">
        <Icon icon="carbon:arrow-left" />
        Previous
      </div>
    {/if}
  </div>
  <div class="demo-button">
    {#if lesson.demoSubdomain}
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a
        class="button hoverable-button"
        href="https://{lesson.demoSubdomain}.js-pokemon.com" target="_blank"
      >
        Explore demo
      </a>
    {:else}
      <div class="button hoverable-button disabled">
        Explore demo (coming soon)
      </div>
    {/if}
  </div>

  <div class="next-button">
    {#if nextLesson}
      <a class="button hoverable-button" href="/lessons/{nextLesson.id}">
        Next
        <Icon icon="carbon:arrow-right" />
      </a>
    {:else}
      <div class="button hoverable-button disabled">
        Next
        <Icon icon="carbon:arrow-right" />
      </div>
    {/if}
  </div>
</div>

<style>
  .navigation-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .previous-button, .next-button, .demo-button {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-left: none;
  }
  .previous-button {
    border-left: 1px solid black;
  }
  .previous-button :global(.iconify) {
    margin-right: 8px;
  }
  .next-button :global(.iconify) {
    margin-left: 8px;
  }
  .button {
    padding: 8px 16px;
    width: 100%;
    font-size: 16px;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>