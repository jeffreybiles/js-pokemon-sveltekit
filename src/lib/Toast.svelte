<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<div class="toast-wrap">
  <SvelteToast options={{ intro: { y: -64 } }} />
</div>


<style>
.toast-wrap {
  --toastContainerTop: 0.5rem;
  --toastContainerRight: 0.5rem;
  --toastContainerBottom: auto;
  --toastContainerLeft: 0.5rem;
  --toastWidth: 100%;
  font-size: 0.875rem;
}
@media (min-width: 40rem) {
  .toast-wrap {
    --toastContainerRight: auto;
    --toastContainerLeft: calc(50vw - 20rem);
    --toastWidth: 40rem;
  }
}
</style>