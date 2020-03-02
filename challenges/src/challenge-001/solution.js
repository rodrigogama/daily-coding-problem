/**
 * Time complexity O(n^2)
 * Space complexity O(n)
 * @param {*} nums 
 * @param {*} k 
 */
function sumPairArray(nums, k) {
  if (!nums || !nums.length || typeof k !== 'number') return false;

  const length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i !== j && nums[i] + nums[j] === k) {
        return true;
      }
    }
  }

  return false;
}

console.log(sumPairArray([10, 15, 3, 7], 17));

/**
 * Bonus
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {*} nums 
 * @param {*} k 
 */
function sumPairArrayBonus(nums, k) {
  if (!nums || !nums.length || typeof k !== 'number') return false;

  const length = nums.length;
  const numSet = new Set();

  for (let i = 0; i < length; i++) {
    if (numSet.has(k - nums[i])) return true;
    numSet.add(nums[i]);
  }

  return false;
}

console.log(sumPairArrayBonus([10, 15, 3, 7], 17));
