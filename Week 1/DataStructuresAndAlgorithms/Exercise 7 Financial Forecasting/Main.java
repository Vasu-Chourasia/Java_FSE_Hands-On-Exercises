class Main {
    public static void main(String[] args) {
        double presentValue = 1000;
        double rate=0.1;  
        int years=3;
        double result=FinancialForecast.futureValue(presentValue, rate, years);

        System.out.println("-------------------------------");
        System.out.println();
        System.out.println("Future Value: " + result);
        System.out.println();
        System.out.println("-------------------------------");
    }
}