import java.util.Arrays;

/*定义一个栈的类*/
public class  Stack{
    private int size = 0;
    private int[] array;
    
    /*定义一个栈的方法，初始化*/
    public Stack(int init){
        if(init <= 0){
           init = 10;    //初始化栈的数组长度为10
        }
        array = new int[init];
    }
}


/*入栈——item，存放入栈元素的值*/
public void push(int item){
    if(size == array.length){
        array = Arrays.copyof(array,size*2);
    }
    array[size++] = item;
}

/*先获取栈顶元素，但是没有出栈*/
public int peek(){
    if(size==0)     //栈内数组元素长度为0
    {
        throw new IndexOutOfBoundsException("栈内已经空");
    }
    return array[size-1];      //否则返回数组的栈顶元素size-1
}


/*出栈——同时获取栈顶元素*/
public int pop(){
    int item = peek();
    size--;    //直接使元素个数-1，不需要真的清除元素，下次入栈会覆盖旧元素的值；
    return item;
}


/*栈是否已经满了*/
public boolean isFull(){
    return size == array.length;
}

/*栈是否空栈*/
public boolean isEmpty(){
    return size == 0;
}

public int size(){
    return size;
}


