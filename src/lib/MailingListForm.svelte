<!-- TODO - make this nicer and styled (it's mostly copilot-generated) -->
<!-- Then use it in multiple places -->

<script lang="ts">
    import { goto } from "$app/navigation";


  let name = "";
  let email = "";
  let hidden = "";

  const submit = async () => {
    if(hidden) {
      alert("Thanks for trying to sign up! But you've been marked as a robot.  Try again if you're human, and maybe don't fill out the hidden honeypot field this time.")
      return;
    }
    const response = await fetch("/api/mailing-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    });
    if (response.ok) {
      alert("Thanks for signing up!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };  
</script>

<form on:submit|preventDefault={submit}>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" bind:value={email} />
  <label for="name">Name</label>
  <input type="text" name="name" id="name" bind:value={name} />
  <input type="text" name="honeypot" id="honeypot" bind:value={hidden} />
  <button type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
  button {
    cursor: pointer;
  }
  input, button {
    padding: 8px;
    margin-bottom: 16px;
    margin-top: 4px;
  }
  #honeypot {
    visibility: hidden;
    height: 2px;
    margin: 0;
    padding: 0;
  }
</style>