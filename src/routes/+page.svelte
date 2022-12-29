<script lang="ts">
import type { PageData } from './$types';
import { productionApi } from './production-api';
  
export let data: PageData;
</script>

<h1>Welcome to the Pokedex Tutorial</h1>
{#each data.lessons as lesson}
  <div class="lesson">
    <h2>{lesson.name}</h2>
    {#if lesson.implementations.length === 0}
      <p>Coming soon!</p>
    {:else}
      <a href="https://{lesson.demoSubdomain}.{productionApi}.com" target="_blank" rel="noreferrer">
        See it in action
      </a>
      
      {#each lesson.implementations as implementation}
      <h3>{implementation.framework}</h3>
      <a href={implementation.githubUrl} target="_blank" rel="noreferrer">See the code</a>
      {/each}
    {/if}
  </div>
  <!-- TODO - put framework icons for each of the implementations that are available, maybe direct links to the github repo and videos -->
{/each}

<style>
.lesson {
  border: 1px solid black;
  padding: 1rem;
  padding-top: 0;
  margin: 1rem;
}
</style>