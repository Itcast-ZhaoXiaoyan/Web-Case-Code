public class ArrayQueue{
    private final Object[] items;
    private int head =0;
    private int tail =0;
    
    /*初始化队列
      capacity——队列长度
    */
    public ArrayQueue(int capacity){
        this.items = new Object[capacity];
    }
    
    /*入队*/
    public boolean put(Object item){
        if(head==(tail+1)%items.length){
            //说明队满
            return false;
        }
        items[tail] = item;
        tail = (tail+1)%items.length;   //tail标记向后移动一位
        return false;
    }
    
    /*获取队列头元素，不出队*/
    public Object peek(){
        if(head==tail){
            return null;   //说明是空
        }
        return items[head];
    }
    
    /*出队*/
    public Object poll(){
        if(head==tail){
            return null;
        }
        Object item=items[head];
        items[head]=null;    //把没用的元素赋空值，
        head=(head+1)%items.length;    //head向后移动一位
        return item;
    }
    
    public boolean isFull(){
        return head==(tail+1)%items.length;
    }
    public boolean isEmpty(){
        return head==tail;
    }
    
    /*队列元素数*/
    public int size(){
        if(tail==head){
            return tail-head;
        }
        else{
            return tail+items.length-head;
        }
    }
}
