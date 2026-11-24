import java.util.List;

public class EjerciciosDeLogica {

    public void ejercicioUno(List<Integer> numeros) {
        int positivo = 0;
        int negativo = 0;
        int cero = 0;

        for (int numero : numeros) {
            if (numero > 0) {
                positivo += 1;
            }

            if (numero < 0) {
                negativo += 1;
            }

            if (numero == 0) {
                cero += 1;
            }
        }

        System.out.println("Positivos: " + positivo);
        System.out.println("Negativos: " + negativo);
        System.out.println("Ceros: " + cero);
    }

    public void ejercicioDos(List<Integer> numeros) {
        int numeroMayor = 0;
        int numeroSegundoMayor = 0;

        if (numeros.size() < 2) {
            throw new Error("Tiene que haber dos números en la lista.");
        }

        for (int numero : numeros) {
            if (numero > numeroSegundoMayor && numero > numeroMayor) {
                numeroSegundoMayor = numeroMayor;
                numeroMayor = numero;
            } else if (numero > numeroSegundoMayor && numero < numeroMayor) {
                numeroSegundoMayor = numero;
            }
        }

        System.out.println("Lista de números: " + numeros);
        System.out.println("Número mayor: " + numeroMayor);
        System.out.println("Número segundo mayor: " + numeroSegundoMayor);
    }

}
