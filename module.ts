import { module } from "@prisma/composer";
import nextStockService from "./service.js";

export default module("next-stock", ({ provision }) => {
  provision(nextStockService, { id: "nextstock" });
});
