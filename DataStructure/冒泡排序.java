/*冒泡排序原理：
  大的在前，小的在后；从尾到头依次操作
  （1）从尾部开始比较相邻的2元素，若尾部>前面，交换位置
  （2）往前对每个相邻的元素都比较、交换，这样到数组头部时，第一个元素为最大的元素
  （3）重复从尾部开始第1,2步操作，除了在这之前头部已经排好的元素
  （4）继续对越少的元素进行比较、交换操作，直到没有可以比较的数据为止，排序完成
*/


public class BubbleSort{
  //定义一个私有的int型空数组
    private int[] array;
  
  //定义一个公共的排序方法BubbleSort()，传入参数array
  public BubbleSort(int[] array)
  {
    //this表示引用成员变量，当前的int[] array（引用类型），而非传参
      this.array=array;    
  }
  
  
  //第一种：从小到大进行排序sort()
  public void sort()
  {
    //定义一个数组长度常量，并赋值
      int length = array.length;
      
    //判断长度是否大于0
      if(length>0)
      {
          //排序算法，采用双重循环遍历来实现
          for(int i=0;i<length;i++)
          {
             for(int j=0;j<length-i;j++)
             {
              //若头部>尾部，二者交换位置
                if(array[j]>array[j+1])
                {
                    int temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
             }
          } 
      }
  }
  
  
  //第二种：从大到小的排序
  public void sort2()
  {
      //定义数组长度，以便于下边对数组双重循环
      int length = array.length;
      
      //若数组长度>0，再继续双重循环
      if(length>0)
      {
          for(int i=length-1;i>0;i--)
          {
              for(int j=length-1-i;j>0;j--)
              {
                  if(array[j+1]>array[j])
                  { 
                      temp=array[j+1];
                      array[j+1]=array[j];
                      array[j]=temp;
                  }
              }
          }
      }
  }
  
  //定义打印函数
  public void print()
  {
      for(int i=0;i<array.length;i++)
      {
          System.out.println(array[i]);
      }
  }
  

}
