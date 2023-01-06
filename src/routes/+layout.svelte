<script lang="ts">
import type { PageData } from './$types';
import { page } from '$app/stores';

export let data: PageData;
import LessonSidebar from './LessonSidebar.svelte';
import Navbar from './Navbar.svelte';
import Toast from '$lib/Toast.svelte';
import { browser } from '$app/environment';
import { webVitals } from '$lib/vitals';
import { inject } from '@vercel/analytics';
import { frameworkArray } from '$lib/frameworks';

inject();

let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
$: if (browser && analyticsId) {
  webVitals({
    path: $page.url.pathname,
    params: $page.params,
    analyticsId
  })
}

$: frameworkSlug = $page.params.framework;
$: framework = frameworkArray.find((f) => f.slug === frameworkSlug);

</script>

<div class="container"
  style="
  --color: {framework?.color || '#777'};
  --lightColor: {framework?.lightColor || '#eee'};
  --darkColor: {framework?.darkColor || '#333'};
  "
>
  <LessonSidebar
    lessons={data.lessons}
    selectedLessonId={$page.params.lesson_id}
    selectedFramework={$page.params.framework}
  />
  <div class="main-content-container">
    <Navbar
      frameworkSlug={$page.params.framework}
      lessonId={$page.params.lesson_id}
      lessons={data.lessons}
    />

    <div class="main-content">
      <slot />
    </div>
  </div>
</div>

<Toast />

<style>
/* resetting */
:global(body) {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.container {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.main-content-container {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}
.main-content {
  padding: 0 16px;
}

:global(*) {
  font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
}
:global(.hoverable-button) {
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  color: #555;
}
:global(.hoverable-button:hover), :global(.hoverable-button:hover div) {
  background-color: var(--darkColor);
  color: #fff;
}
:global(.hoverable-button.active), :global(.hoverable-button.active div) {
  background-color: var(--color);
  color: #fff;
  font-weight: 500;
}

:global(.hoverable-button.active:hover), :global(.hoverable-button.active:hover div) {
  background-color: var(--darkColor);
  color: #fff;
}

</style>