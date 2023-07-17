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
// const { isAuthenticated } = require("../middlewares/auth.js");

const router = require("express").Router();

router
  // .post("/add-income", isAuthenticated, addIncome)
  // .get("/get-income", isAuthenticated, getIncomes)
  // .delete("/delete-income/:id", isAuthenticated, deleteIncome)
  // .post("/add-expense", isAuthenticated, addExpense)
  // .get("/get-expense", isAuthenticated, getExpense)
  // .delete("/delete-expense/:id", isAuthenticated, deleteExpense);
  .post("/add-income", addIncome)
  .get("/get-income", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
