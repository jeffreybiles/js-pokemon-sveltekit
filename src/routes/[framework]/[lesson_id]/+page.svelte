<script lang="ts">
  import { page } from "$app/stores";
  import { frameworkArray } from "$lib/frameworks";
  import VideoPlayer from "$lib/VideoPlayer.svelte";
  import Navigation from "$lib/Navigation.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: frameworkSlug = $page.params.framework;
  $: lesson_id = $page.params.lesson_id;
  $: framework = frameworkArray.find((f) => f.slug === frameworkSlug);
  $: lesson = data.lesson
  $: implementation = lesson?.implementations.find((i) => i.framework === framework?.name);
</script>

{#if lesson}
  <h1>{lesson?.name}</h1>

  {#if implementation?.youtubeId}
    <VideoPlayer youtubeId={implementation.youtubeId} />
  {:else if implementation}
    This video will be released on {implementation?.releaseDate}
  {:else}
    This video is coming soon!
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
<!-- TODO - next/previous/index -->