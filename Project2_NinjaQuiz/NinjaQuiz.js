const correctAnswers = ['B', 'A', 'B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Check Answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score +=25;
        }
    });
    //show result on page
        scrollTo(0,0); //scrolls to  0,0 of page. window object
    // let resultSpan = result.querySelector('span');    
    // resultSpan.textContent = `${score}%`;
    
    // moved to the timer function
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 35);
});

// let i = 0;
// const timer = setInterval(() => {
//  console.log('hello');
//  i++;
//  if(i === 5){
//  clearInterval(timer);
//  }
// }, 1000);
