const myGreatTODOArray = [
	{
    task: 'Помыть кота!',
    author: 'Petya'
  },
	{
    task: 'Купить кота!',
    author: 'Petya'
  },
	{
    task: 'Сделать ДЗ',
    author: 'Ivan'
  }
];

const myGreatStaffArray = [
	{
    yearStarted: 1992,
    employee: 'Petya'
  },
	{
    yearStarted: 1975,
    employee: 'Oleg'
  },
	{
    yearStarted: 2005,
    employee: 'Ivan'
  },
	{
    yearStarted: 2015,
    employee: 'Mariya'
  },
	{
    yearStarted: 2013,
    employee: 'Nastya'
  },
	{
    yearStarted: 2018,
    employee: 'Alex'
  },
	{
    yearStarted: 2008,
    employee: 'Olga'
  },
	{
    yearStarted: 2016,
    employee: 'Afanasii'
  }
];

function getAllTasksString( TODOArray ) {
  // функция возвращает задачи из списка в виде одной строки
  // потенциальная практика использования reduce

  console.log( TODOArray
    .map(TODOArray => TODOArray.task)
    .reduce( (acc, qua) => {      
        return (acc += ' ' + qua)
    })
    );

}

getAllTasksString(myGreatTODOArray);
// возвращает 'Помыть кота! Купить хлеб Сделать ДЗ'





function getTasksByAuthor( TODOArray, author) {
  // функция возвращает все задачи из списка принадлежащие указанному автору
  // потенциальная практика использования filter
  console.log( TODOArray.filter( newTODOArray => newTODOArray.author === author));
}

getTasksByAuthor(myGreatTODOArray, 'Ivan');
// возвращает [{ task: 'Сделать ДЗ', author: 'Ivan' }]





function findTasksByWord( TODOArray, searchString ) {
  // крайне примитивная функция поиска всех задач,
  // в тексте которых есть запрошенное слово
  // потенциальная практика с ... ? :)
  console.log( TODOArray.filter( newTODOArray => newTODOArray.task.includes(searchString)));
}

findTasksByWord(myGreatTODOArray, 'кот');
// возвращает
// [
//   { task: 'Помыть кота!', author: 'Petya' },
//   { task: 'Купить кота!', author: 'Petya' }
// ]

function getEmployeeByYear( arr, year) {
  console.log(arr.filter( newEmployeeArr => newEmployeeArr.yearStarted >= year));
}

getEmployeeByYear( myGreatStaffArray, 2007);
//хочу вывести всех сотрудников кто пришел позже 2007 года