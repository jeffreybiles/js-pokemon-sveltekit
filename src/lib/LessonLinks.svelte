<script lang="ts">
  const frameworkIcons = {
    'Next 13': 'logos:nextjs-icon',
    'Remix 1.10': 'logos:remix-icon',
    'Nuxt 3': 'vscode-icons:file-type-nuxt',
    'SvelteKit 1.0': 'vscode-icons:file-type-svelte',
  }

  import type { Implementation } from "src/routes/api/lessons/lessons";
  export let implementation: Implementation;
  import Iconify from "@iconify/svelte";
</script>

<div class="lesson-implementation">
  <Iconify icon={frameworkIcons[implementation.framework]} class="implementation-icon" />
  <hr style="width: 100%" />
  <div class="lesson-implementation-links">
    <a href={implementation.githubUrl} target="_blank" rel="noreferrer">
      <Iconify icon="logos:github-icon" class="implementation-icon" />
    </a>
    <!-- TODO - add playlist ID based on which framework -->
    <a href="https://www.youtube.com/watch?v={implementation.youtubeId}" target="_blank" rel="noreferrer">
      <Iconify icon="logos:youtube-icon" class="implementation-icon" />
    </a>
  </div>
</div>

<style>
  .lesson-implementation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .lesson-implementation-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .lesson-implementation :global(.implementation-icon) {
    width: 32px;
    height: 32px;
    margin: 8px;
  }
</style>