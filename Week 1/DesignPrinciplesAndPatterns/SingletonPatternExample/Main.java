public class Main{
    public static void main(String[] args){
        Logger l1= Logger.getInstance();
        Logger l2= Logger.getInstance();

        l1.log("First Message");
        l2.log("Second Message");

        if(l1==l2){
            System.out.println("Same instance i.e. Singleton");
        }else{
            System.out.println("Different instance i.e. Not singleton");
        }
    }
}