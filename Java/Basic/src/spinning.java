public class spinning {
    public static void main(String[] args) {
        String test = " a bardzodlugie slowo kopie abcde dbg";
        System.out.println(spinWords(test));
    }

    public static String spinWords(String sentence) {
        int currentSpace = 0;
        int nextSpace = sentence.indexOf(" ");
        StringBuilder work = new StringBuilder();
        StringBuilder finalString = new StringBuilder();

        while (nextSpace != -1) {
            work.append(sentence.substring(currentSpace, nextSpace));
            if (work.length() >= 5) {
                finalString.append(work.reverse());
            } else {
                finalString.append(work);
            }
            finalString.append(" ");
            work.setLength(0);

            currentSpace = nextSpace + 1;
            nextSpace = sentence.indexOf(" ", currentSpace);
        }


        work.append(sentence.substring(currentSpace));
        if (work.length() >= 5) {
            finalString.append(work.reverse());
        } else {
            finalString.append(work);
        }
        return finalString.toString().trim();

    }

}
