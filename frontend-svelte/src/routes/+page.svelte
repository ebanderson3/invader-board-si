<script>
  import { onMount } from 'svelte';

  let message = 'Loading...';

  onMount(async () => {
    const response = await fetch('http://localhost:5001/');
    const data = await response.json();
    message = data.message;
  });
</script>

<main>
  <h1>{message}</h1>
</main>


