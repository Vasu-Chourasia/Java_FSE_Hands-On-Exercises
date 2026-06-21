import java.util.*;

class BinarySearch{
    public static Product search(Product[] products, int key){
        int l=0;
        int r=products.length-1;
        Arrays.sort(products, new Comparator<Product>(){
            public int compare(Product p1, Product p2){
                return p1.productId- p2.productId;

            }
        });
        while(l<=r){
            int mid= (l+r)/2;
            if(products[mid].productId==key){
                return products[mid];
            }
            else if(products[mid].productId<key){
                l=mid+1;

            }else{
                r=mid-1;

            }
        }
        return null;
    }
}