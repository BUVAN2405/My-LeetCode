

var kthLargestNumber = function(nums, k) {


    if (nums.length < 2) {
        return "null";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = nums[k];

        }
        else if (nums[k] > secondLargest && nums[k] != firstLargest){
            secondLargest = nums[k];
        }

    }
        return secondLargest;

}   




