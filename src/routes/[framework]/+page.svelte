<script lang="ts">
  import { page } from "$app/stores";
  import { frameworkArray } from "$lib/frameworks";
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: frameworkSlug = $page.params.framework;
  $: framework = frameworkArray.find((f) => f.slug === frameworkSlug);
</script>


{#if framework}
  <h1>
    <Icon icon={framework.icon} />
    {framework.name}
  </h1>

  <!-- Expand upon this as I add more info to the implementation:
    * expected release date
    * length
    * completion status (saved to localstorage)
   -->
  {#each data.lessons as lesson (lesson.id)}
    {@const implementation = lesson.implementations.find((i) => i.framework === framework?.name)}
    <a
      href="/{frameworkSlug}/{lesson.id}"
      class="lesson-link {implementation ? 'implemented' : 'not-implemented'}"
      style="--color: {framework?.color}"
    >
      {lesson.name}
    </a>
  {/each}

{/if}

{#if !framework}
  <h1>Framework '{frameworkSlug}' not found</h1>
{/if}

<style>
  .lesson-link {
    display: block;
    padding: 8px;
    border: 1px solid var(--color);
    border-radius: 4px;
    margin-bottom: 8px;
    text-decoration: none;
    color: #333;
  }
  .lesson-link:hover {
    background-color: var(--color);
    color: white;
  }
  .implemented {
  }
  .not-implemented {
    background-color: #eeeeee;
    border-color: #aaa;
    opacity: 0.6;
  }
</style>