/*插入排序原理及操作
  其分为两部分：待排序数列、已排好数列
 首先待排序数列为全部数组，找第一个元素为已排好数列，其余为待排数列
  将第一个元素，与右边第一个进行比较，若<右边，不变；若>右边，元素右移，
  再拿待排序列依次从右——左进行遍历，>的话，不变；<的话，交换
*/

public class insertSort
{
    private int[] array;
    
    //定义一个函数insertSort()函数
    public inserSort(int[] array)
    {
        this.array=array;
    }
    
    //定义一个排序算法函数
    public void sort()
    {
       //判断数组是否为空，若为空，抛出错误
       if( array==null )
       {
          throw new RuntimeException("Array  is null");
       }
       
       //定义数组长度赋值给length
       int length=array.length;
       
       //若数组长度>0,循环i从0到length-1
       if(length>0)
       {
          for(int i=0;i<length-1;i++)
          {
              int temp=array[i];
              int j =i;
              
              //当j>0,array[j-1]>temp(左>右),执行j--（从右向左依次判断）
              for(;j>0 && array[j-1] > temp;j--)
              {   
                //数组对应值右移
                  array[j] = array[j-1];
              }
              
              array[j] = temp;
          }
       }
    }
    
    public void print()
    {
        for(int i=0;i<length;i++)
        {
           System.out.println(array[i] );
        }
    }
}

//测试代码
public static void main(String[] args)
{
    testInsertSort();
}

public static void testInsertSort()
{
    int[] array ={1,4,1,5,0,6,2,12,15};
    InsertSort insertSort = new InsertSort(array);
    insertSort.sort();
    insertSort.print();
}
