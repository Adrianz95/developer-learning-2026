
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> numeros = List.of(4, -2, 0, 7, -5, 0);
        List<Integer> listaNumeros = List.of(12, 5, 30, 30, 18, 7);

        EjerciciosDeLogica resultadoEjercicios = new EjerciciosDeLogica();

        System.out.println("---------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("Ejercicio 1: Crea un método que reciba una lista de números enteros y devuelva cuántos son positivos, cuántos negativos y cuántos son cero. ");

        resultadoEjercicios.ejercicioUno(numeros);


        String radar = "radar";
        String java = "java";
        String reconocer = "reconocer";

        System.out.println("---------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("Ejercicio 2: Implementa un método que encuentre el segundo número más grande distinto del máximo de una lista. ");
        resultadoEjercicios.ejercicioDos(listaNumeros);

    }
}