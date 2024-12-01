const score = document.getElementById('score')
const result = document.getElementById('result');
const calculate = document.getElementById('calculate-btn');
const reset=document.getElementById('reset');
calculate.addEventListener('click', function () {
    const scorevalue = parseFloat(score.value);
    if (scorevalue < 0 || scorevalue > 100) {
        result.innerText = 'Sorry score is out of bounds';
    }
    if (scorevalue < 60) {
        result.innerText = 'Failed';
    }
    else if (scorevalue >= 60 && scorevalue <= 69) {
        result.innerText = 'D';
    }
    else if (scorevalue >= 70 && scorevalue <= 79) {
        result.innerText = 'C';
    }
    else if (scorevalue >= 80 && scorevalue <= 89) {
        result.innerText = 'B';
    }
    else {
        result.innerText = 'A';
    }
}
);
reset.addEventListener('click',function()
{
    score.value="NULL";
    result.innerText="";
});