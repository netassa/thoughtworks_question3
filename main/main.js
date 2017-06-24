module.exports = function main(num) {
  // Write your code here
	var sum = 0;
	for(var i=0;i<num.length;i++){
		sum += num[i];
	}
	return sum;
};
