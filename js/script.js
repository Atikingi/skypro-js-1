function playFirstSeasonGame() {
  const monthNumber = Number(prompt("Введите номер месяца"));
  const seasons= {
    1: 'Зима',
    2: 'Зима',
    3: 'Весна',
    4: 'Весна',
    5: 'Весна',
    6: 'Лето',
    7: 'Лето',
    8: 'Лето',
    9: 'Осень',
    10: 'Осень',
    11: 'Осень',
    12: 'Зима',
  }
  return alert(seasons[monthNumber]);
};

function playSecondSeasonGame(){
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  for (let i = fruits.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [fruits[i], fruits[j]] = [fruits[j], fruits[i]];
  } 
  alert(`Запомните расположение слов \n ${fruits}`);

  const firstQuestion = prompt('Чему равнялся первый элемент массива?');
  const firstQuestionUpper = firstQuestion[0].toUpperCase() + firstQuestion.slice(1);
  const secondQuestion = prompt('Чему равнялся последний элемент массива?');
  const secondQuestionUpper = secondQuestion[0].toUpperCase() + secondQuestion.slice(1);
  if (firstQuestionUpper === fruits[0] && secondQuestionUpper === fruits[fruits.length - 1]){
    alert('Поздравляем! У вас отличная память!');
  } else if (firstQuestionUpper === fruits[0] || secondQuestionUpper === fruits[fruits.length - 1]){
    alert('У вас почти получилось! Попробуйте еще раз!');
  } else{
    alert('Вы проиграли :(');
  }
};

function guessPuzzle(){
  for (let i = 1; i < 4; i++) {
    const userAnswer = prompt('Летает без крыльев, плачет без глаз').toLowerCase();
    const puzzleAnswer = 'туча';

    const reactions = {
      1: 'Это не живой объект',
      2: 'Находится над нами',
      3: 'Вы проиграли =('
    }

    if (!userAnswer) {
      return;
    }

    if (userAnswer === puzzleAnswer) {
      return alert('Правильно! Молодец!');
    }else{
      alert(reactions[i]);
    }
  }
};
