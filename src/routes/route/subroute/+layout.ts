import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent }) => {
  const data = await parent();

  console.log("/route/subrout/+layout.ts", data.foo);
  console.log("/route/subrout/+layout.ts", data.xyz);

  return {
    ...data,
  };
};
