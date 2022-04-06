function playFirstSeasonGame() {
  const monthNumber = Number(prompt("Введите номер месяца"));
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      alert("Зима");
      break;

    case 3:
    case 4:
    case 5:
      alert("Весна");
      break;

    case 6:
    case 7:
    case 8:
      alert("Лето");
      break;

    case 9:
    case 10:
    case 11:
      alert("Осень");
      break;

    default:
      alert("Вы ввели неверное значение");
  }
};

function playSecondSeasonGame(){
  let arrOfItems = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  for (let i = arrOfItems.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrOfItems[i], arrOfItems[j]] = [arrOfItems[j], arrOfItems[i]];
  } 
  alert(`Запомните расположение слов \n ${arrOfItems}`);

  const firstQuestion = prompt('Чему равнялся первый элемент массива?');
  const firstQuestionUpper = firstQuestion[0].toUpperCase() + firstQuestion.slice(1);
  const secondQuestion = prompt('Чему равнялся последний элемент массива?');
  const secondQuestionUpper = secondQuestion[0].toUpperCase() + secondQuestion.slice(1);
  if (firstQuestionUpper === arrOfItems[0] && secondQuestionUpper === arrOfItems[arrOfItems.length - 1]){
    alert('Поздравляем! У вас отличная память!');
  } else if (firstQuestionUpper === arrOfItems[0] || secondQuestionUpper === arrOfItems[arrOfItems.length - 1]){
    alert('У вас почти получилось! Попробуйте еще раз!');
  } else{
    alert('Вы проиграли :(');
  }
};

function playThirdSeasonGame(){
  for (let i = 1; i < 4; i++) {
    const userAnswer = prompt('Летает без крыльев, плачет без глаз').toLowerCase();
    const puzzleAnswer = 'туча';

    const help = {
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
      alert(help[i]);
    }
  }
};
