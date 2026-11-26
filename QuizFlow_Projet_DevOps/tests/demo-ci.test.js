const test = require('node:test');
const assert = require('node:assert/strict');

const { getQuizQuestions } = require('../src/quiz-core.js');

test('QuizFlow fournit 5 questions par quiz', () => {
    assert.equal(getQuizQuestions().length, 5);
});
