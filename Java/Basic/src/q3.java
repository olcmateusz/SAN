import java.util.Scanner;

public class q3 {
    public static void main(String[] args) {
        Scanner skan = new Scanner(System.in);
        System.out.println("Podaj liczbe ktora chcesz podzielic");
        int n1 = skan.nextInt();
        System.out.println("Podaj dzielnik");
        int n2 = skan.nextInt();
        System.out.println("Wynik dzielenia bez reszty to: " + (n1 / n2));
    }
}
