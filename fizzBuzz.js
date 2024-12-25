// Problema: Reemplazar números por 'Fizz' si son múltiplos de 3, 'Buzz' si son múltiplos de 5, y 'FizzBuzz' si son múltiplos de ambos.
//  Aplicación: Muy usado en entrevistas técnicas para evaluar lógica básica

function fizzBuzz(n) {
    // Itera desde 1 hasta n, evaluando 
    // cada número para ver si es divisible por 3, 5 
    // o ambos.
    for (let i = 1; i <= n; i++) {
      // Si el número es divisible por 15 (múltiplo de 3 y 5),
      //  imprime "FizzBuzz".
      if (i % 15 === 0) {
        console.log("FizzBuzz");
      } 
      // Si el número es divisible por 3
      // , imprime "Fizz".
      else if (i % 3 === 0) {
        console.log("Fizz");
      } 
      // Si el número es divisible por 5,
      //  imprime "Buzz".
      else if (i % 5 === 0) {
        console.log("Buzz");
      } 
      // Si no cumple ninguna de las condiciones
      //imprime el número.
      else {
        console.log(i);
      }
    }
  }
  
  // Llama a la función fizzBuzz para imprimir los resultados hasta 15.
  fizzBuzz(15);
  
  