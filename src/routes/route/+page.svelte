<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  console.log("/route/+page.svelte", data.foo);
</script>

Hello to the item
