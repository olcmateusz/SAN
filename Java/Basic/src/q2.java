import java.util.Scanner;

public class q2 {
    public static void main(String[] args) {
        Scanner skan = new Scanner(System.in);
        System.out.println("Podaj pierwsza liczbe");
        int n1 = skan.nextInt();
        System.out.println("Podaj druga liczbe");
        int n2 = skan.nextInt();
        System.out.println("Wynik dodawania podanych liczb to: " + (n1 + n2));
    }
}
