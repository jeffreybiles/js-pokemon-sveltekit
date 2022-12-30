<script lang="ts">
import type { PageData } from './$types';
import { productionApi } from './production-api';
  
export let data: PageData;
import LessonLinks from '$lib/LessonLinks.svelte';

</script>

<div class="container">
  <h1>Welcome to the Pokedex Tutorial</h1>
  <h2>Learn and compare Next 13, Remix 1.10, Nuxt 3, and SvelteKit 1.0</h2>
  <p>New set of lessons released weekly.  Season 1 (22 lessons) is planned, and the SvelteKit version is fully built out.</p>
  <div class="lessons">
    {#each data.lessons as lesson}
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
      <!-- TODO - put framework icons for each of the implementations that are available, maybe direct links to the github repo and videos -->
    {/each}
  </div>
</div>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
  padding-right: 0;
}
.lessons {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
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