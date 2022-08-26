import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent }) => {
  const data = await parent();

  return {
    ...data,
    foo: "bar"
  };
};
