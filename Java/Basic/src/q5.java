import java.util.Scanner;

//Write a Java program that takes two numbers as input and display the product of two numbers. Go to the editor
//        Test Data:
//        Input first number: 25
//        Input second number: 5
//        Expected Output :
//        25 x 5 = 125
public class q5 {
    public static void main(String[] args) {
        Scanner skanerek = new Scanner(System.in);
        System.out.println("Input first number");
        int n1 = skanerek.nextInt();
        System.out.println("Input second number");
        int n2 = skanerek.nextInt();
        System.out.println(n1 + n2);
    }
}
