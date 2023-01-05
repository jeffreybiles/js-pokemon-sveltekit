<script lang="ts">
  export let youtubeId: string;
</script>

<div class="video">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/{youtubeId}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

<style>
  .video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
</style>