/*希尔排序原理
  首先，将待排序数列按照一定的增量分为若干子数列，不是连续的，它是按照一定的增量进行分割，
  再对各个子数列进行插入排序，接着增量都要减少，然后对每部分进行插入排序
  第一趟m1=n/2——（增量为m1）
  第二趟m2=m1/2——（增量为m2）
  第三趟m3=m2/2——（增量为m3）
  
  
  与插入排序不同的是，需要额外操作的只有对增量的处理及对数列的分块处理
*/

public class ShellSort
{
    private int[] array;
    
    public ShellSort(int[] array)
    {
        this.array=array;
    }
    
    public void sort()
    {
        int temp;
        
        //for循环遍历数组个数的一半，该常量每次除2取余,k为增量
        for(int k=array.length/2 ; k>0 ; k=k/2){
            for(int i=k; i<array.length; i++){
                for(int j=i; j>=k; j=j-k){
                    temp=array[j-k];
                    array[j-k] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    
    public void print()
    {
        for(int i=0;i<array.length;i++){
            System.out.println(array[i]);
        }
    }
}


/*测试代码*/
public class SortTest
{
    public static void main(String[] args)
    {
        testShellSort();
    }
    
    /*希尔排序*/
    private static void testShellSort()
    {
        int[] array = {3,5,2,6,12,1,4};
        ShellSort shellSort = new ShellSort(array);
        shellSort.sort();
        shellSort.print();
        
    }
}
