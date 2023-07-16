const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");
const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const { isAuthenticated } = require("../middlewares/auth.js");

const router = require("express").Router();

router
  .post("/add-income", isAuthenticated, addIncome)
  .get("/get-income", isAuthenticated, getIncomes)
  .delete("/delete-income/:id", isAuthenticated, deleteIncome)
  .post("/add-expense", isAuthenticated, addExpense)
  .get("/get-expense", isAuthenticated, getExpense)
  .delete("/delete-expense/:id", isAuthenticated, deleteExpense);

module.exports = router;
