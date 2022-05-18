//1. Написать рекурсивную функцию возведения в степень. 
//На вход принимать число и его степень, на выходе выдавать рассчитанное значение.
console.log('Задача 1:')
let number = 5;
let pow = 6;
let multiplier;

function recursionPow (number, pow, multiplier = number) {
	if (pow === 0) {
		return
	}

	console.log(number)
	number = number * multiplier
	recursionPow(number, pow-1, multiplier)
	
}

recursionPow(number, pow)

//=============================================================================







//2. Написать приложение, получающее массив с вложенными массивами и 
//возвращающее его “плоскую” версию. 
//Встроенный метод массивов flat использовать нельзя.
console.log('Задача 2:')
let firstArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let secondArray = [];

function flatArray (array) {
	array.forEach(function(element){
		if (typeof element === 'number') {
			secondArray.push(element)
		} else {
			flatArray(element)
		}
	})
}

flatArray(firstArray)
console.log(secondArray)

//=============================================================================








//3. Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.

//Например: 441 => четыреста сорок один
console.log('Задача 3:')
let firstNumber = ['',' один',' два',' три',' четыре',' пять',' шесть',' семь',' восемь',' девять'];
let secondNumber = ['','десять',' двадцать',' тридцать',' сорок',' пятьдесят',' шестьдесят',' семьдесят',' восемьдесят',' девяносто'];
let thirdNumber = ['','сто',' двести',' триста',' четыреста',' пятьсот',' шестьсот',' семьсот ',' восемьсот ',' девятьсот',''];
let anyNumber = ['десять',' одиннадцать ',' двенадцать ',' тринадцать ',' четырнадцать ',' пятнадцать ',' шестнадцать ',' семьнадцать ',' восемьнадцать ',' девятнадцать ',''];




function stringWriter(target){
	let targetNumber = String(target).split('').reverse()
	let stringInteger = "";
	let thousand = '';
	let exceptions = ['2','3','4'];
	
	
	if (targetNumber[3] === '1' && targetNumber[4] !== '1') {
		thousand = ' тысяча '
	} else if ((exceptions.includes(targetNumber[3])) && targetNumber[4] !== '1') {
		
		thousand = ' тысячи '
	} else {
		thousand = ' тысяч '
	}


	if (targetNumber.length > 3) {
		stringInteger += thirdNumber[targetNumber[5]]  || ''
	
		if (targetNumber[4] === '1') {
			stringInteger += anyNumber[targetNumber[3]] + thousand || ''
		} else if (targetNumber[3] === '1') {
			stringInteger += secondNumber[targetNumber[4]] || ''
		
			stringInteger += ' одна '  + thousand || ''
		} else if (targetNumber[3] === '2') {
			stringInteger += secondNumber[targetNumber[4]] || ''
		
			stringInteger += ' две '  + thousand || ''
		} else {
			stringInteger += secondNumber[targetNumber[4]] || ''
		
			stringInteger += firstNumber[targetNumber[3]]  + thousand || ''
		}
	}
	

	
	stringInteger += thirdNumber[targetNumber[2]]   || ''
	
	if (targetNumber[1] === '1') {
		stringInteger += anyNumber[targetNumber[0]]  || ''

	} else {
		stringInteger += secondNumber[targetNumber[1]]  || ''
	
		stringInteger += firstNumber[targetNumber[0]]   || ''
	}

	
	
	
	
	


	console.log(target + ' : ' + stringInteger)
}

stringWriter(584643)
stringWriter(12345)
stringWriter(873954)
stringWriter(10012)
stringWriter(91564)
stringWriter(574)
stringWriter(1574)
stringWriter(22574)
stringWriter(16999)
stringWriter(999999)



//4) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. 
//Если у одной строки с последующей первый и последний символы, то true. Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]
console.log('Задача 4:')
let stringsArray = ["asd", "afffd", "cc", "kk", "kek","lol","amd", "any word"];
let result = [];

function matchCheck (array) {
	for (let i = 1; i < array.length; i++) {
		if (array[i-1][0] !== array[i][0]) {
			result.push(false)
			continue
		}
		if (array[i-1][-1] !== array[i][-1]) {
			result.push(false)
			continue
		}
		result.push(true)
	}

}

matchCheck(stringsArray)
console.log(result)

//=============================================================================


//5) Дана матрица [[1, 2, 3, 2, 3, 7, 9], [4, 5, 6, 5, 7, 8, 9], [7, 8, 9, 4, 6, 3, 1]](Это к примеру. Точную не помню). дальше берется матрица 3х3 и идет по этой матрице сдвигаясь на один столбец на каждой итерации. 
//Функция должна вернуть массив булевых значений. Если в матрице 3х3 цифры не повторяются, то true.
console.log('Задача 5:')

let matrix = [[1, 2, 3, 2, 3, 7, 9, 1, 2, 3], 
              [4, 5, 6, 5, 7, 8, 9, 4, 5, 6,], 
              [7, 8, 9, 4, 6, 3, 1, 7, 8, 9]];


let uniqueIntegers = [];




function matrixScan() {
 	for (let x = 2; x < matrix[0].length; x++) {
 		let testMatrix = [];
 		
 		for (let y = 0; y<3; y++) {
 			
 			testMatrix.push(matrix[y][x-2])
 			testMatrix.push(matrix[y][x-1])
 			testMatrix.push(matrix[y][x])
 		}
 		

 		let testSet  = new Set;

 		testMatrix.forEach(function(element){
 			testSet.add(element)
 		})


 		if (testMatrix.length === testSet.size) {
 			uniqueIntegers.push(true) 
 		} else {
 			uniqueIntegers.push(false)
 		}

 		

 	}
}
matrixScan()
console.log(uniqueIntegers)