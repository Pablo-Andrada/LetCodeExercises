/**
 * Two Pointers approach
 * Tiempo: O(n)
 * Espacio: O(1)
 */
function isPalindromeTwoPointers(s) {

    // Normalizamos primero
    const normalized = s
        .toLowerCase()                 // <- 1: convierte todas las letras a minúsculas para que la comparación sea case-insensitive
        .replace(/[^a-z0-9]/g, '');    // <- 2: elimina todo lo que NO sea letra a–z o número 0–9 (quita espacios y signos)

    let left = 0;                     // <- 3: índice del extremo izquierdo (inicio del string normalizado)
    let right = normalized.length - 1;// <- 4: índice del extremo derecho (última posición)

    // Recorremos desde ambos extremos
    while (left < right) {            // <- 5: bucle que avanza ambos punteros hasta que se crucen o detecten desigualdad

        // Si encontramos diferencia, no es palíndromo
        if (normalized[left] !== normalized[right]) { // <- 6: comparación carácter a carácter
            return false;              // <- 7: si difieren, podemos concluir `false` inmediatamente
        }

        left++;                        // <- 8: mover el puntero izquierdo hacia la derecha
        right--;                       // <- 9: mover el puntero derecho hacia la izquierda
    }

    return true;                       // <- 10: si nunca hubo diferencia, es palíndromo
}

// Explicación detallada de cada paso (por qué y qué cuidados tener)

// toLowerCase() — asegura que ‘A’ y ‘a’ sean equivalentes.
// Importante: si querés soporte multilenguaje (acentos, ñ, caracteres Unicode) reemplazar el replace con una expresión regular con flag u o normalizar Unicode primero.

// .replace(/[^a-z0-9]/g, '') — quita todo lo que no sea alfanumérico ASCII.
// Consecuencia: los espacios, comas, signos y mayúsculas quedan ignorados. Si el problema pide respetar acentos o alfabetos distintos, esta regex queda corta.

// 3–4. left y right — inicialización clásica de two pointers. Siempre verifica right = length - 1 (off-by-one común).

// while (left < right) — condición: cuando se crucen (left >= right) ya comparaste todos los pares necesarios. Para strings de longitud impar, el carácter central no necesita comparación.

// 6–7. Comparación directa normalized[left] !== normalized[right] — si falla, devolvemos false de inmediato (early exit). Esto evita trabajo innecesario.

// 8–9. left++ y right-- — avanzas punteros simétricamente.

// return true — si el loop terminó sin discrepancias, es palíndromo.

// Patrón que surge y cómo pensarlo (plantilla mental)

// Nombre del patrón: Two Pointers (dos punteros desde extremos).

// Cuándo usarlo:

// Cuando la propiedad que comparás se relaciona entre posiciones simétricas (inicio/fin).

// Cuando podés comprobar la validez con comparaciones locales entre extremos y avanzar sin reevaluar subproblemas.

// Suele dar O(n) tiempo y O(1) espacio adicional (si evitas crear copias grandes).

// Plantilla mental (pasos rápidos que seguir en entrevista):

// Normalizar el input si el problema lo requiere (lowercase, quitar no-alfanuméricos). Decide explícitamente si crearás una copia o harás la normalización sobre la marcha.

// Inicializar punteros: left = 0, right = n-1.

// Loop: mientras left < right, comparar elementos. Si distinto -> return false. Si igual -> mover ambos punteros (o mover sólo el puntero correspondiente si uno debe saltarse caracteres).

// Return true al salir del loop.

// Explicar complejidad: tiempo O(n), espacio O(1) (si no hiciste copias) o O(n) si hiciste normalized.