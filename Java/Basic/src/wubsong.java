public class wubsong {
    public static void main(String[] args) {
        System.out.println(findEvenIndex(new int[]{4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4}));
    }

    public static int findEvenIndex(int[] arr) {
        for (int x = 0; x < arr.length - 1; x++) {
            int sumleft = 0;
            int sumright = 0;
            System.out.println("x = " + x);
            for (int i = 0; i < x; i++) {
                sumleft = sumleft + arr[i];
            }
            for (int n = x + 1; n < arr.length; n++) {
                sumright = sumright + arr[n];
            }
            System.out.println("sumleft = " + sumleft);
            System.out.println("sumright = " + sumright);
            if (sumleft == sumright) {
                return x;
            }
        }

        return -1;

    }
}