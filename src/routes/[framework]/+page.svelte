<script lang="ts">
  import { page } from "$app/stores";
  import { frameworkArray } from "$lib/frameworks";
  import { timeDisplay } from "$lib/utils";
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: frameworkSlug = $page.params.framework;
  $: framework = frameworkArray.find((f) => f.slug === frameworkSlug);
</script>

<div class="framework-page">
{#if framework}
  <h1 class="title">
    {framework.name}
    <Icon icon={framework.icon} />
  </h1>

  {#if framework.slug === 'sveltekit-1'}
    <p>Learn Svelte 3 and SvelteKit 1.0 by building a pokedex app from scratch.</p>
    <p>A demo site and a git commit are provide for every lesson, so you can follow along with ease.</p>
  {/if}
  <!-- TODO - add customized description and/or styling - part of 'make frontpage beautiful' -->

  {#each data.lessons as lesson (lesson.id)}
    {@const implementation = lesson.implementations.find((i) => i.framework === framework?.name)}
    <a
      href="/{frameworkSlug}/{lesson.id}"
      class="lesson-link {implementation?.lengthInSeconds ? 'implemented' : 'not-implemented'}"
    >
      {lesson.name}
      {#if implementation?.lengthInSeconds}
        <span class="length">
          {timeDisplay(implementation.lengthInSeconds)}
        </span>
      {:else}
        <span class="length">
          {implementation?.releaseDate ?? 'Coming soon'}
        </span>
      {/if}
    </a>
  {/each}

{/if}

{#if !framework}
  <h1>Framework '{frameworkSlug}' not found</h1>
{/if}
</div>
<style>
  .framework-page {
    max-width: 800px;
    margin: 0 auto;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }
  .lesson-link {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border: 1px solid var(--darkColor);
    border-radius: 4px;
    margin-bottom: 8px;
    text-decoration: none;
    color: #333;
  }
  .lesson-link:hover {
    background-color: var(--darkColor);
    color: white;
  }
  .implemented {
  }
  .not-implemented {
    background-color: #eeeeee;
    border-color: var(--lightColor);
    opacity: 0.6;
  }
</style>