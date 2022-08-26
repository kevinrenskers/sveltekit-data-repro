<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  console.log("/+layout.svelte", data.foo);
</script>

<slot />
