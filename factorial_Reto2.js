  
/**
 * 
 * @param {*} number Int
 */
n=-5;
const factorial = (number) => {
    let resp = number
    if (resp<=1) return 1;
    return resp* factorial(resp-1);
}
console.log(factorial(n))