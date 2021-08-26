const twoSum = (nums, target) => {
  var sum = target,
    temp = [],
    j = 0,
    i = 0;
  while (sum != 0) {
    if (sum >= nums[i]) {
      sum = sum - nums[i];
      temp[j] = i;
      i++;
      j++;
    }
  }
  return temp;
};
console.log(twoSum([2, 7, 11, 15], 9)); //Output : [0,1]
