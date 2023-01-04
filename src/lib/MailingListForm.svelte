<script lang="ts">
  import { browser } from "$app/environment";
  import { tick } from "svelte";
  import { toast } from '@zerodevx/svelte-toast'

  let email = "";
  let hidden = "";
  let previousEmail: string | null = "";
  if(browser) {
    previousEmail = localStorage.getItem("email");
  }

  const submit = async () => {
    if(hidden) {
      alert("Thanks for trying to sign up! But you've been marked as a robot.  Try again if you're human, and maybe don't fill out the hidden honeypot field this time.")
      return;
    }
    const response = await fetch("/api/mailing-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      localStorage.setItem("email", email);
      previousEmail = email;
      toast.push('Thanks for signing up!', {
        theme: {
          '--toastColor': "rgb(0, 100, 0)",
          '--toastBackground': 'rgb(240, 255, 240)',
          '--toastBarBackground': 'rgb(0, 200, 0)',
        },
      })
    } else {
      toast.push("Something went wrong. Please try again.", {
        theme: {
          '--toastColor': "rgb(100, 0, 0)",
          '--toastBackground': 'rgb(255, 240, 240)',
          '--toastBarBackground': 'rgb(200, 0, 0)',
        },
      })
    }
  };
  const newAddress = async () => {
    localStorage.removeItem("email");
    previousEmail = "";
    await tick()
    document.getElementById("email")?.focus();
  };
</script>

<div class="mailing-list">
  {#if previousEmail}
    <div style="padding-bottom: 4px;">You're signed up for the mailing list at {previousEmail}.</div>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={newAddress}>Sign up with a different address?</a>
  {:else}
    <h2 class="title">Weekly videos in your inbox</h2>
    <p>Get notified when new lessons are released, and when Jeffrey's creating other cool projects.</p>
    <form on:submit|preventDefault={submit}>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" bind:value={email} />
      <input type="text" name="honeypot" id="honeypot" bind:value={hidden} />
      <button type="submit">Learn JS frameworks</button>
    </form>
  {/if}
</div>

<style>
  .mailing-list {
    padding: 16px;
    border: 1px solid rgb(170, 170, 170);
    border-radius: 8px;
    max-width: 700px;
  }
  .title {
    font-size: 44px;
    margin: 0;
  }
  .title, p, div {
    color: #333;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    color: #555;
  }
  button {
    cursor: pointer;
    color: #555
  }
  input, button {
    padding: 8px;
    margin-bottom: 16px;
    margin-top: 4px;
    border: 1px solid #AAA;
    border-radius: 6px;
    font-size: 20px;
  }
  #honeypot {
    visibility: hidden;
    height: 2px;
    margin: 0;
    padding: 0;
  }
</style>