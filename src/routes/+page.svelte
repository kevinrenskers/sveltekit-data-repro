<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  console.log("/+page.svelte", data.foo);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
