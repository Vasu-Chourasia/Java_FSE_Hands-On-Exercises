class Main{
    public static void main(String[] args){
        Product[] products={
            new Product(1, "Protein","Edibles"),
            new Product(2,"Banana","Edibles"),
            new Product(3,"Dumbells","Eqipments"),
            new Product(4,"Laptop","Accessories")
        };

        Product linearSearch= LinearSearch.search(products,2);


        Product binarySearch= BinarySearch.search(products,3);
         if (binarySearch != null)
            System.out.println("Found (Linear): " + binarySearch.productName);

        if (linearSearch != null)
            System.out.println("Found (Binary): " + linearSearch.productName);
    }
}