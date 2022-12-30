<script lang="ts">
  import type { Lesson } from "src/routes/api/lessons/lessons";
  import LessonLinks from '$lib/LessonLinks.svelte';

  export let lesson: Lesson;
</script>

<div class="lesson">
  <div class="lesson-number">
    {lesson.number}
  </div>
  <div class="lesson-description">
    <h2>{lesson.name}</h2>
    {#if lesson.description}
      <p>{@html lesson.description}</p>
    {/if}
  </div>
  {#if lesson.demoSubdomain}
    <a
      href={`https://${lesson.demoSubdomain}.js-pokemon.com`}
      target="_blank"
      rel="noreferrer"
      class="demo-button"
    >
      Play with the demo
    </a>
  {/if}
  {#if lesson.implementations.length === 0}
    <hr style="width: 100%" />
    <p>Coming soon!</p>
  {:else}
    <p>Or watch the content...</p>

    <div class="lesson-content">
      {#each lesson.implementations as implementation}
        <LessonLinks implementation={implementation} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .lesson {
  border: 1px solid black;
  background: #eee;
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}
  .lesson-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .demo-button {
    width: 100%;
    text-align: center;
    background: #333;
    color: #fff;
    text-decoration: none;
    padding: 8px 0;
    margin: 8px 0;
    border: 1px solid black;
  }
  .lesson-number {
    font-size: 0.8em;
    color: #aaa;
    display: block;
    position: absolute;
    left: 8px;
    top: 8px;
  }
</style>