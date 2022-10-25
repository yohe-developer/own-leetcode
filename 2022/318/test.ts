import Bank from "./index"

const bank = new Bank([10, 100, 20, 50, 30])

bank.withdraw(3, 10)
bank.transfer(5, 1, 20)
bank.deposit(5, 2)
