class Bank {
	balance: number[]
	constructor(balance: number[]) {
		this.balance = balance
	}

	check(account: number): boolean {
		return account >= 0 && account <= this.balance.length
	}

	transfer(account1: number, account2: number, money: number): boolean {
		if (this.check(account2) && this.withdraw(account1, money)) {
			return this.deposit(account2, money)
		}
		return false
	}
	// 向编号为 account 的账户存款 money 美元
	deposit(account: number, money: number): boolean {
		if (this.check(account)) {
			this.balance[account - 1] += money
			return true
		}
		return false
	}
	//从编号为 account 的账户取款 money 美元
	withdraw(account: number, money: number): boolean {
		if (this.check(account) && this.balance[account - 1] > money) {
			this.balance[account - 1] -= money
			return true
		}
		return false
	}
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
