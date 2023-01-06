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
  <h1>
    <Icon icon={framework.icon} />
    {framework.name}
  </h1>

  <!-- TODO - add customized description and/or styling - part of 'make frontpage beautiful' -->

  <!-- TODO - Add completion status (saved to localstorage) to the row.  Probably to the left of the title in a small box. -->
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