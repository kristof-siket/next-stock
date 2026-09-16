// @ts-check
import { module } from "@prisma/composer";
import nextStockService from "./service.mjs";

export default module("new-next", ({ provision }) => {
  provision(nextStockService, { id: "nextstock" });
});
