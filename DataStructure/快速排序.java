/*快速排序基本原理
    首先，找一个数字作为基准数（一般左边第一个数）
 （1）思想——若待排序数>基准数，右边；若待排序数<基准数，左边（相等不调换）
    即采用“分治法”将待排数分为两部分，以“基准数”为界限
 （2）操作——首先从数列右边—>左边找，设右起下标为i（进行i--），左起下标为j（j++），
    若找到第一个比基准值小的数，就与基准值交换；
    接着从左向右找，即j++，找到比基准值大的数，与基准值交换；
    重复操作，直到i与j相遇时，就结束
*/

public class QuickSort
{
  //定义一个私有变量，整型数组
    private int[] array;
    
  //快排算法方法，引用array类型变量
    public QuickSort(int[] array)
    {
        this.array=array;
    }
    
  //排序算法sort()
    public void sort()
    {
      //调用quickSort()方法，传入参数数组array，并从0到array.length-1结束
       quickQuick(array,0,array.length-1);
    }
    
  //定义打印函数
    public void print()
    {
       for(int i=0;i<array.length;i++)
       {
          System.out.println(array[i]);
       }
    }
  
  //定义快排函数（递归算法，调用自身）
    public void quickSort(int[] src,int begin,int end)
    {
        //若bigin<end，定义变量基准值key为src[begin],对begin/end分别赋值为整型i/j
        if(begin<end)
        {
            int key = src[begin];
            int i = begin;
            int j = end;
          
            //当i<j
            while(i<j)
           {
            //从右——左依次判断，找到src[j] < key执行操作
                //若i<j且src[j] > key时，右循环变量j--，继续向左判断（对j操作）
                while(i<j && src[j] > key )
                {
                   j--;
                }
               //当仅仅是i<j时，（对i进行操作）,即右边找到了src[j]<key,执行操作src[i]与src[j]交换位置，i++
               if(i<j)
               {
                  src[i] = src[j];
                  i++;
               }
                
           
           //执行完右——左，src[]下标，从j变为i，找到src[i] > key进行操作
                //当i<j且src[i] < key时，左循环变量i++，继续向右判断
                while(i<j && scr[i] < key)
                {
                    i++;
                }
                
                //如果i<j，且依次查询到右边，即找到了src[i] > key，交换位置，执行操作
                if(i<j)
                {
                    src[j] = src[i];
                    j--;
                }
           }
            
            
           sort[i] = key;    //依次找一个以i为下标的数组作为基准值key
           
           //由于i从0到i-1，所以采用递归调用自身函数
           quickSort(src,begin,i-1);
           
           //或从i+1到end结束
           quickSort(src,i+1,end);    
        }
        
    }
    
}

