import nextjs from "@prisma/composer/nextjs";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "next-stock",
  // Required on 0.6.0 even when empty: omitting deps crashes the reserved-param check.
  deps: {},
  build: nextjs({ module: import.meta.url, appDir: "." }),
});
