/**
 * Time complexity O(n^2)
 * Space complexity O(n)
 * @param {*} nums 
 */
function productArray(nums) {
  if (!nums || !nums.length) return [];

  const length = nums.length;
  let res = Array.from({ length });

  for (let i = 0; i < length; i++) {
    let product = 1;
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
      res[i] = product;
    }
  }

  return res;
}

console.log(productArray([1, 2, 3, 4, 5]));
console.log(productArray([3, 2, 1]));

/**
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {*} nums 
 */
function productArray(nums) {
  if (!nums || !nums.length) return [];

  const length = nums.length;
  let left = Array.from({ length });
  let right = Array.from({ length });
  let res = Array.from({ length });

  left[0] = 1;
  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < length; i++) {
    res[i] = left[i] * right[i];
  }

  return res;
}

console.log(productArray([1, 2, 3, 4, 5]));
console.log(productArray([3, 2, 1]));