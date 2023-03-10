<script lang="ts">
  import MailingListForm from "$lib/MailingListForm.svelte";
  import Iconify from "@iconify/svelte";
  import type { FrameworkName } from "$lib/frameworks";
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";
  export let data: PageData;

  const numLessons = (framework: FrameworkName) => {
    return data.lessons.filter((lesson) => {
      return lesson.implementations.find(impl => impl.framework === framework)?.lengthInSeconds;
    }).length;
  };
</script>

<svelte:head>
	<title>JS Pokemon - learn Javascript frameworks by building a Pokedex</title>
</svelte:head>
<h1>Learn SvelteKit 1.0.  No Svelte experience required.</h1>
<p>Build a pokedex from scratch in SvelteKit 1.0 and Svelte 3.</p>
<!-- <p>This video tutorial series will build the same app in multiple Javascript meta-frameworks.</p> -->
<p>Source code and demo site are available for each lesson.</p>
<p>If this goes well, I may create tutorials in other meta-frameworks (Nuxt 3, Remix 1.10, Next 13, etc.).</p>
<!-- <p>SvelteKit series is in production, and the second series will start in February.</p> -->

<!-- <div class="framework-buttons">
  {#each frameworkArray as framework (framework.name)}
    <a
      class="framework-button"
      href="/{framework.slug}"
      style="background-color: {framework.color};"
      class:disabled={numLessons(framework.name) === 0}
    >
      Learn {framework.name}
      <Iconify icon={framework.icon} />
    </a>
  {/each}
</div> -->

<h1>Build a complete pokedex</h1>
<p>You can filter pokemon by region and name, catch and release them, look at individualized stats for each caught pokemon.</p>
<p>Play around with it in the iframe below.</p>
<div class="iframe-container">
  <iframe
    src="https://complete.js-pokemon.com"
    style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
    title="pokedex-tutorial"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
</div>

<p>Sound good?</p>
<a href='/lessons/101' class="framework-button start-button">Start Learning</a>
<MailingListForm />

<style>
  .framework-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  .framework-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    cursor: pointer;
    gap: 1rem;
    text-decoration: none;
  }
  .start-button {
    background-color: #FF3E00;
    margin-bottom: 16px;
    max-width: 700px;
  }
  .framework-button.disabled {
    opacity: 0.3;
    cursor: default;
  }
  .framework-button:hover {
    opacity: 0.8;
  }
  .status-report {
    font-style: italic;
    font-weight: 200;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  .iframe-container {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin: 2rem 0;
  }
  p, h1 {
    color: #333;
  }
</style>