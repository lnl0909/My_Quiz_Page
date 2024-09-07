document.getElementById('submit-btn').addEventListener('click', function() {
    let score = 0;

    const answers = {
        question1: '고려대학교',
        question2: '정보대학',
        question3: 'kweb'
    };

    const q1Answer = document.querySelector('input[name="question1"]:checked');
    if (q1Answer) {
        if (q1Answer.value === answers.question1) {
            score++;
            q1Answer.parentElement.classList.add('correct');
        } else {
            q1Answer.parentElement.classList.add('incorrect');
        }
    }

    const q2Answer = document.querySelector('input[name="question2"]:checked');
    if (q2Answer) {
        if (q2Answer.value === answers.question2) {
            score++;
            q2Answer.parentElement.classList.add('correct');
        } else {
            q2Answer.parentElement.classList.add('incorrect');
        }
    }

    const q3Answer = document.getElementById('question3').value.trim();
    const q3Element = document.getElementById('question3');
    if (q3Answer) {
        if (q3Answer.toLowerCase() === answers.question3.toLowerCase()) {
            score++;
            q3Element.classList.add('correct');
        }
        else if (q3Answer.toUpperCase() === answers.question3.toUpperCase()) {
            score++;
            q3Element.classList.add('correct');
        } else {
            q3Element.classList.add('incorrect');
        }
    }

    alert(`총 점수: ${score}/3`);

    highlightAnswers();
});

function highlightAnswers() {
    const q1CorrectAnswer = document.querySelector(`input[name="question1"][value="고려대학교"]`);
    const q2CorrectAnswer = document.querySelector(`input[name="question2"][value="정보대학"]`);
    
    q1CorrectAnswer.parentElement.classList.add('correct');
    q2CorrectAnswer.parentElement.classList.add('correct');
}