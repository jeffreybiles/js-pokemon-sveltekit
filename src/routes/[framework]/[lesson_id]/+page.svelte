<script lang="ts">
  import { page } from "$app/stores";
  import { frameworkArray } from "$lib/frameworks";
    import VideoPlayer from "$lib/VideoPlayer.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: frameworkSlug = $page.params.framework;
  $: lesson_id = $page.params.lesson_id;
  $: framework = frameworkArray.find((f) => f.slug === frameworkSlug);
  $: lesson = data.lessons.find((l) => l.id === lesson_id);
  $: implementation = lesson?.implementations.find((i) => i.framework === framework?.name);
</script>

{#if lesson}
  <h1>{lesson?.name}</h1>

  {#if implementation?.youtubeId}
    <VideoPlayer youtubeId={implementation.youtubeId} />
  {:else if implementation}
    <!-- This video will be released on {implementation.releaseDate} -->
  {:else}
    This video is coming soon!
  {/if}
{/if}

<!-- TODO - links to other implementations -->
<!-- TODO - next/previous/index -->