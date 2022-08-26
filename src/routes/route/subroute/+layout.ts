import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent }) => {
  const data = await parent();

  console.log("/route/+page.ts", data.foo);

  return {
    ...data,
  };
};
