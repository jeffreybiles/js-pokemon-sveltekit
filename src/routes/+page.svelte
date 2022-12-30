<script lang="ts">
import type { PageData } from './$types';
import { productionApi } from './production-api';
  
export let data: PageData;
import Lesson from '$lib/Lesson.svelte';

</script>

<div class="container">
  <h1>Welcome to the Pokedex Tutorial</h1>
  <h2>Learn and compare Next 13, Remix 1.10, Nuxt 3, and SvelteKit 1.0</h2>
  <p>New set of lessons released weekly.  Season 1 (22 lessons) is planned, and the SvelteKit version is fully built out.</p>
  <div class="lessons">
    {#each data.lessons as lesson}
      <Lesson lesson={lesson} />
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
</style>