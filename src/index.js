
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let answerArr = []
  matrix.forEach((element, index) => { 
    if ((index + 1) % 2 === 0) {
      answerArr.push(element.reverse())
    } else {
      answerArr.push(element)
    }
  });
  return answerArr.flat();
}
