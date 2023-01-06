<script lang="ts">
  import { sidebarOpen } from '../stores';
  import Iconify from '@iconify/svelte';
  import { frameworkArray } from '$lib/frameworks';
  import { goto } from '$app/navigation';
  import type { Implementation, Lesson } from './api/lessons/lessons';
  
  const changeFramework = (e: any) => {
    const frameworkSlug = e.target.value;
    if(!lessonId) {
      goto(`/${frameworkSlug}`);
    } else {
      goto(`/${frameworkSlug}/${lessonId}`);
    }
  }

  export let lessons: Lesson[] = [];
  export let lessonId: string = '';
  export let frameworkSlug: string = 'lessons';

  $: implementations = lessons.find(lesson => lesson.id === lessonId)?.implementations || [] as Implementation[];
</script>

<div class="navbar">
  <div
    class="open-sidebar"
    on:click={() => $sidebarOpen = !$sidebarOpen}
    on:keydown={(e) => { if (e.key === 'Enter') { $sidebarOpen = !$sidebarOpen; } }}
  >
    <Iconify icon="mdi:menu" />
    <div class="text">Menu</div>
  </div>
  <div>
    <a href="/" class="logo">JS Pokemon Tutorial</a>, in
    <select on:change={changeFramework} bind:value={frameworkSlug}>
      <option value="lessons"></option>
      {#each frameworkArray as framework}
        {@const implementation = implementations.find((i) => i.framework == framework.name)}
        {@const unreleased = !implementation?.lengthInSeconds}
        <!-- So it turns out that the select box is not stylable -->
        <!-- So we're going to use svelte-select instead -->
        <option value={framework.slug} class:unreleased>
          {framework.name}
          {#if unreleased && lessonId}
            <small>({implementation?.releaseDate?.split(',')[0] ?? 'soon...'})</small>
          {/if}
        </option>
      {/each}
    </select>
  </div>
  <div class="links">
    <a href="https://www.jeffreybiles.com/consulting/">Hire Jeffrey</a>
  </div>
</div>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
}
.navbar a {
  color: #fff;
  text-decoration: none;
}
.navbar .open-sidebar {
  display: none;
}

@media (max-width: 700px) {
  .navbar .open-sidebar {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .open-sidebar .text {
    padding-left: 4px;
  }
}
</style>