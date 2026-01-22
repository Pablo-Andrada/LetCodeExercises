/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ArrayReturn = [];
  

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ArrayReturn.push(i);
                ArrayReturn.push(j);
            }
        }
    }


    return ArrayReturn;
};

/* Explicación:
La función busca, dentro del arreglo nums, dos índices i y j (con j > i) tales que nums[i] + nums[j]  === target. Cuando encuentra una pareja que cumple la condición, añade i y j al array ArrayReturn. Finalmente retorna ArrayReturn
*/