/**
 * Created by aio on 2023/2/24 19:36
 */

// [3,4,5,1,2]
function minArray(numbers: number[]): number {

    for (let i = 1 ; i < numbers.length ; i++){
        if(numbers[i-1]> numbers[i]){
            return numbers[i]
        }
    }
    return numbers[0]
};

console.log(minArray([1,3,5]))
