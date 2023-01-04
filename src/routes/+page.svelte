<script lang="ts">
  import MailingListForm from "$lib/MailingListForm.svelte";
  import Iconify from "@iconify/svelte";
  import { frameworkArray } from "$lib/frameworks";

  const startLearning = (framework: string) => {
    localStorage.setItem('selectedFramework', framework);
    window.location.href = '/lessons/101';
  }
</script>
<h1>Welcome to the Pokedex Tutorial</h1>
<h2>Learn and compare Next 13, Remix 1.10, Nuxt 3, and SvelteKit 1.0</h2>
<p class="status-report">Status: season 1 (22 lessons) is planned, and the SvelteKit version is fully built out.</p>

<div class="framework-buttons">
  {#each frameworkArray as framework (framework.name)}
    <button
      class="framework-button"
      on:click={() => startLearning(framework.name)}
      style="background-color: {framework.color};"
    >
      Start Learning {framework.name}
      <Iconify icon={framework.icon} />
    </button>
  {/each}
</div>

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
  }
  .framework-button:hover {
    opacity: 0.8;
  }
  .status-report {
    font-style: italic;
    font-weight: 200;
    font-size: 1.2rem;
    margin: 1rem 0;
  }
</style>