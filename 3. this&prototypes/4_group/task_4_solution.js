class PerfectNumbers {
    classify(n) {
        if (n<=0) return 'Classification is only possible for natural numbers.';
        if (n==1) return 'deficient';

        const sum = getFactorsSum(n);
        if (sum == n) return 'perfect';
        return (sum > n ? 'abundant' : 'deficient')
    }
}
const getFactorsSum = (num) => {
    let sum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum;
}
module.exports = PerfectNumbers;
