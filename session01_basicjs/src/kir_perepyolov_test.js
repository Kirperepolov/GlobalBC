/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
	*/
	function getDataType (variable) {
		var x = typeof variable;
		return x;
	};

/*
	Напишите функцию, которая принимает 1 аргумент и возвращает:
	'primitive' если тип данных относится к примивным
	'primitive-special' если тип данных специальный
	'object' - если простой обьект
	'object-array' - если массив
	'object-function' - если функция
	*/
	function getDataTypePseudoName (variable) {
		switch (typeof variable) {
			case 'number':
			case 'string':
			case 'boolean':
			var x = 'primitive';
			break;

			case 'undefined':
			var x = 'primitive-special';
			break;

			case 'object':
			if (variable === null) {
				var x = 'primitive-special';
			} else if (Array.isArray(variable)) {
				var x = 'object-array';
			} else {
				var x = 'object';
			};
			break;

			case 'function':
			var x = 'object-function';
			break;

			default:
			var x = 'please input something'; //на всяк випадок
		}
		return x;
	};


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
	*/
	function compareByType (a, b) {
		if (a===b) {
			var x = 1;
		} else if (a==b) {
			var x = 0;
		} else {
			var x = -1;
		};
		return x;
	};

// Numbers

/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
	*/
	function increase (value) {
		var x = value;
		if (typeof value === 'number' && value===value) {
			x++;
		} else {
			x = -1;
		}
		return x;
	};

/*
	Напишите функцию, которая принимает 1 аргумент(число),
	и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
	*/
	function testForSafeNumber (value) {
		if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
			var x = 'safe';
		} else {
			var x = 'danger';
		}
		return x;
	}



// Strings

/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
	*/
	function stringToArray (str) {
		return String(str).split(' ');
	}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
	*/
	function getStringPart(str) {
		return  String(str).split(',')[0];
	}

/*
	Напишите функцию, которая принимает 2 аргумента (строку и символ),
	и возвращает порядковый номер симовола в строке если символ встречается в строке 1 раз,
	false в противоположном случае
	*/
	function isSingleSymbolMatch(str, symbol) {
		var index = 0;
		var counter = 0;
		while (true) {
			var foundPos = str.indexOf(symbol, index);
			if (foundPos == -1) break;

  		index = foundPos + 1; // перебір можилвих положень symbol
			counter++;
		};
		if (counter === 1) {
			return index-1;
		} else {
			return false;
		};
	}

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив и разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
	*/
	function join (array, separator) {
		if (separator === undefined || separator === '') {
			separator = '-';
		};
		var x = array.join(separator);
		return x;
	}


/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
	*/
	function glue (arrA, arrB) {
	// for (var i=0;i<arrB.length;i++) {
		var x = arrA.concat(arrB);
	// };
	return x;
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
	*/
	function order (arr) {							//функція сортує дані типу "number", "string", "undefined"
	var y = arr.concat();
	for (var j=0;j<y.length;j++) {
		for (var i=1;i<y.length;i++) {
			if (
				((y[i] > y[i-1])&&(typeof y[i] === typeof y[i-1]))||(
					(typeof y[i] !== typeof y[i-1])&&(
						(typeof y[i] === 'string')||(typeof y[i-1] === 'undefined')
						)
					)) {
				y.splice(i-1,0,y.splice(i,1)[0]);
		};
	};
};
return y;
};


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
	*/
	function removeNegative (arr) {
		var x = arr.filter(function(number) {
  		return number >= 0;
			}
		);
		return x;
	}

/*
	Напишите функцию, которая принимает 2 числовых массива,
	и возвращает новый массив, состоящий из элементов первого но без элементов
	которые присутствуют во втром
	[1,2,3], [1, 3] => [2]
	*/
	function without (arrA, arrB) {
		var x = [];
		for (var i=0;i<arrA.length;i++){
			if (arrB.indexOf(arrA[i]) === -1) {
				x.push(arrA[i]);
			};
		};
		return x;
	}
