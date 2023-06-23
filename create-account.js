function createAccount(pin, balance=0) {
    // function takes PIN and initial deposit amount
    // returns an object with four methods
    // check balance, given correct pin return balance
    // deposit, given correct pin and a deposit, increment by deposit amount
    // withdraw correct pin + amount, decrement by withdraw amount
    // shouldnt be able to withdraw more than you have
    // changePin, given old pin and new pin, change pin to new pin

    // we want a balance variable that persists and can be changed
    // we want a pin number that persists and can be changed

    // we keep PIN and balance in function scope, return an object with
    // methods that use the function scope variables

    return {
        checkBalance: function (enteredPIN) {
            return enteredPIN === pin ? `$${balance}` : 'Invalid PIN.';
        },
        deposit: function (enteredPIN, depositAmount) {
            if (enteredPIN === pin) {
                balance += depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
            } else {
                return 'Invalid PIN.'
            }
        },
        withdraw: function (enteredPIN, withdrawAmount) {
            if (enteredPIN !== pin) return 'Invalid PIN.';
            if (withdrawAmount > balance) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
            balance -= withdrawAmount;
            return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`
        },
        changePin: function(enteredPIN, newPIN){
            if (enteredPIN !== pin) return 'Invalid PIN.';
            pin = newPIN;
            return 'PIN successfully changed!'
        }
    }
}

module.exports = { createAccount };
