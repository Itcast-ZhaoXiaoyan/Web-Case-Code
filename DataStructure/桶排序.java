public class BucketSort{
    //定义常量数组——桶、数组
    private int[] buckets;
    private int[] array;
    
    //定义桶排序方法
    public BucketSort(int range,int[] array)     //参数：一定范围、一个排序数组
    {
        //赋值并实例化
        this.buckets = new int[range];
        this.array = array;
    }
    
    
    //排序方法
    public void sort()
    {
      //判断当数组不为空，且数组长度>1时执行
        if(array!=null && array.length>1 )
        {
          //for循环，遍历数组中各元素，并进行相应的桶排序
            for(int i=0;i<array.length;i++)
            {
              //将数组中各元素作为桶编号下标，桶对应有几个数相同的，即对应到相应的的桶编号
                //桶数组下标表示有多少个与桶编号相同的数值元素，即++
                buckets[array[i]++];   
            }
        }
    }
    
    //从大到小排序
    public void print()
    {
        //倒序输出数据，从buckets.length-1到0
        for(int i=buckets.length-1;i>=0;i--)
        {
            //元素中的值为几，就说明有多少个元素
            console.log.println(i);
        }
    }
    
}
