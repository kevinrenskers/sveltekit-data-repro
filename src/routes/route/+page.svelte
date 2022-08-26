<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  console.log("/route/+page.svelte", data.foo);
  console.log("/route/+page.svelte", data.xyz);
</script>

Hello route
