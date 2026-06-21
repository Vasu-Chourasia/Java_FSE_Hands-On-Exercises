class LinearSearch{
    public static Product search(Product[] products, int key){
        for(int i=0;i<products.length;i++){
            if(products[i].productId==key){
                return products[i];
            }
        }
        return null;

    }
}