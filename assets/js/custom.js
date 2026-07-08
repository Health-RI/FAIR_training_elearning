
function checkQuiz(quizName, correctAnswer, explanation) {

    const selected =
        document.querySelector(`input[name="${quizName}"]:checked`);

    const result =
        document.getElementById(`${quizName}-result`);

    if (!selected) {
        result.innerHTML = "Please select an answer.";
        result.style.color = "orange";
        return;
    }

    if (selected.value === correctAnswer) {
        result.innerHTML = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.innerHTML =
            `❌ Incorrect. ${explanation}`;
        result.style.color = "red";
    }
}
