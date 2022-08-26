import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const data = await parent();

  console.log("/route/+page.ts", data.foo);

  return {
    ...data,
    xyz: 123
  };
};
