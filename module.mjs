// @ts-check
import { module } from "@prisma/composer";
import nextStockService from "./service.mjs";

export default module("next-stock-new", ({ provision }) => {
  provision(nextStockService, { id: "nextstock" });
});
