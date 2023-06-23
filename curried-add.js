function curriedAdd(total) {
    // if we pass a number into this function, it returns a function
    // if we pass no arguments into this function it returns the sum of
    // all the numbers passed as arguments into it so far

    // want to keep a running sum in function scope
    // return a function from this function
    // function return itself?
    // when total is undefined, we return sum

    // curriedAdd(1) => return curriedAdd(total) {
    //                         if(!total) return sum
    //}

    // total is initial value
    // return function takes a num
    // that function returns a function that adds num to total

    // call stack
    // secondAdder(1)(2)()
    // --> curriedAdd(1)
    // total = 1
    // return curriedAdd
    // --> curriedAdd(2)
    // total = 3


    const addOrReturn = function (num) {
        if (!num) {
            return total;
        } else {
            total += num;
            return addOrReturn;
        }
    }
    return typeof total === 'number' ? addOrReturn : 0 ;
}

module.exports = { curriedAdd };
