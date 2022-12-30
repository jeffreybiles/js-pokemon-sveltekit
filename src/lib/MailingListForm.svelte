<!-- TODO - make this nicer and styled (it's mostly copilot-generated) -->
<!-- Then use it in multiple places -->

<script lang="ts">
  let name = "";
  let email = "";

  const submit = async () => {
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

<h1>Sign up for Mailing List</h1>
<form on:submit|preventDefault={submit}>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" bind:value={email} />
  <label for="name">Name</label>
  <input type="text" name="name" id="name" bind:value={name} />
  <button type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
  input, button {
    padding: 8px;
    margin-bottom: 16px;
    margin-top: 4px;
  }
</style>