<script>
  import { sidebarOpen } from '../stores';
  import Iconify from '@iconify/svelte';
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
  <a href="/" class="logo">JS Pokemon Tutorial</a>
  <div class="links">
    <!-- TODO - put links in here -->
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