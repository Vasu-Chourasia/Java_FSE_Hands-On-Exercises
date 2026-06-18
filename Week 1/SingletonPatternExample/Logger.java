class Logger{
    private Logger() {}
    private static Logger only_instance;
    public static Logger getInstance (){
        if(only_instance==null){
            only_instance= new Logger();

        }
        return only_instance;

    }
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}