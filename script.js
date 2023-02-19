let result = '';

function appendToResult(value) {
  result += value;
  document.querySelector('.result-box').value = result;
}

function calculateResult() {
  let finalResult = eval(result);
  document.querySelector('.result-box').value = finalResult;
}

function clearResult() {
  result = '';
  document.querySelector('.result-box').value = result;
}
