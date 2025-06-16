let questions = [];

fetch('questions.txt')
  .then(response => response.text())
  .then(text => {
    questions = text.split('\n').map(q => q.trim()).filter(q => q.length > 0);
  })
  .catch(error => {
    console.error('Failed to load questions:', error);
    document.getElementById('question').textContent = 'Failed to load questions.';
  });

function generateQuestion() {
  if (questions.length === 0) {
    document.getElementById("question").textContent = "No questions available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * questions.length);
  document.getElementById("question").textContent = questions[randomIndex];
}
