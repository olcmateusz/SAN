import java.util.Scanner;

//Write a Java program to print the sum (addition), multiply, subtract, divide and remainder of two numbers. Go to the editor
//        Test Data:
//        Input first number: 125
//        Input second number: 24
//        Expected Output :
//        125 + 24 = 149
//        125 - 24 = 101
//        125 x 24 = 3000
//        125 / 24 = 5
//        125 mod 24 = 5
public class q6 {
    public static void main(String[] args) {
        Scanner skanerek = new Scanner(System.in);
        System.out.println("Input first number");
        int n1 = skanerek.nextInt();
        System.out.println("Input second number");
        int n2 = skanerek.nextInt();
        int o1, o2, o3, o4, o5;
        o1 = n1 + n2;
        o2 = n1 - n2;
        o3 = n1 * n2;
        o4 = n1 / n2;
        o5 = n1 % n2;
        System.out.println(o1 + "\n" + o2 + "\n" + o3 + "\n" + o4 + "\n" + o5);
    }
}
