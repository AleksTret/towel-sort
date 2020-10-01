
// You should implement your task here.

module.exports = function towelSort (matrix) {
	return matrix ? matrix.reduce((resultArray, innerArray, index) => 
  	index % 2 ? resultArray.concat(innerArray.reverse()) : resultArray.concat(innerArray) , []) : [];
}
