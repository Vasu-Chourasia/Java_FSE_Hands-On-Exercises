abstract class DocumentFactory{
    abstract Document createDocument();
    public void openDocument(){
        Document doc= createDocument();
        doc.open();
        
    }
}