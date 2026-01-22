/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const str = String(x);
    return str === str.split('').reverse().join('');
};

/*
Este programa verifica que un numero sea palidromo, es decir que se lea igual de derecha a izquierda que de izquierda a derecha.
- explicacion del codigo:
la funcion toma un argumento x (el número);
si ese número es menor a 0 devolvemos false, porque no puede tener palindromo un número negativo;
aplicamos String() a x para volverlo un string y que sea manejable;
luego a ese str le aplicamos .split() para separar letra por letra, lo damos vuelta con .reverse() y lo volvemos a armar con .join('')
Al resultado lo comparamos con str, si es el mismo devuelve true porque si es palindromo.
*/