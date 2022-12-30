<script lang="ts">
  import Lesson from "$lib/Lesson.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<Lesson lesson={data.lesson} />