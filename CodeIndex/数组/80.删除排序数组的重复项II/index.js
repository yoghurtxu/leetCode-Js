var removeDuplicates = function(nums) {
    let l = nums.length
    let par = 0
    for (let i = 1; i < l; i++) {
        if (nums[i] != nums[i - 1]) {
            par = 0
        } else {
            par++
            if (par > 1) {
                console.log(nums[i])
                nums.splice(i, 1)
                i--
            }
        }
    }
    return nums
};

// var removeDuplicates = function(nums) {
//     let l = nums.length
//     for (let i = 2; i < l; i++) {
//         if (nums[i] == nums[i - 2]) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums.length
// };

var res = removeDuplicates([1,1,1,2,2,3,3,3])
console.log(res,'res');