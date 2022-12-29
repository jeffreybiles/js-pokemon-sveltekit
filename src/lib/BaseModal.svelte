<div class="modal {classes}">
  <slot />
</div>
<div class="modal-overlay" on:click={close} />

<script setup lang="ts">
export let close: () => void;
export let classes: string = '';
</script>

<style>
/* Styles built off of https://css-tricks.com/considerations-styling-modal/ */
.modal {
  display: block;
  width: 800px;
  max-width: calc(90%);
  max-height: 90%;
  overflow: auto;
  border: 2px solid black;
  padding: 8px; 

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);

  z-index: 1010;
}
.modal-overlay {
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 50%;
  background-color: black;
}
</style>