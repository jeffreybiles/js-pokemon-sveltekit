<script lang="ts">
  import { page } from "$app/stores";
  import { frameworkArray } from "$lib/frameworks";
  import VideoPlayer from "$lib/VideoPlayer.svelte";
  import Navigation from "$lib/Navigation.svelte";
  import type { PageData } from "./$types";
    import Icon from "@iconify/svelte";
    import type { Implementation } from "src/routes/api/lessons/lessons";

  export let data: PageData;

  $: frameworkSlug = $page.params.framework;
  $: lesson_id = $page.params.lesson_id;
  $: framework = frameworkArray.find((f) => f.slug === frameworkSlug);
  $: lesson = data.lesson
  $: implementation = lesson?.implementations.find((i: Implementation) => i.framework === framework?.name);
</script>

{#if lesson}
  <div class="flex-between">
    <h1>{lesson?.name}</h1>
    {#if implementation?.lengthInSeconds}
      <h1 class="flex-between">
        <a href="https://www.youtube.com/watch?v={implementation?.youtubeId}" target="_blank" rel="noreferrer" class="flex-between">
          <Icon icon="mdi:youtube" style="margin-right: 10px;" />
        </a>
        <a href={implementation?.githubUrl} target="_blank" rel="noreferrer" class="flex-between">
          <Icon icon="mdi:github" />
        </a>
      </h1>
    {/if}
  </div>

  {#if implementation?.youtubeId}
    <VideoPlayer youtubeId={implementation.youtubeId} />
  {:else if implementation}
   <p>This video will be released on {implementation?.releaseDate}</p>
  {:else}
    <p>This video is coming soon!</p>
  {/if}
  <Navigation
    baseFolder={frameworkSlug}
    lesson={lesson}
    previousLesson={data.previousLesson}
    nextLesson={data.nextLesson}
  />
  <div class="description">
    {@html lesson.description}
  </div>
{/if}

<!-- TODO - links to other implementations -->

<style>
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: black;
  }
  p, .description :global(p), .description :global(li) {
    font-size: 18px;
  }
</style>