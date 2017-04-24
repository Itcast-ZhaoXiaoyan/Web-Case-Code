public class Stack2Queue{
    private Stack stack1;
    priavte Stack stack2;
    private int maxLength;
    
    private Stack2Queue(int capacity){
        maxLength = capacity;
        stack1 = new Stack(capacity);
        stack2 = new Stack(capacity);
   }
   
   public boolean put(int item){
        if(stack1.isFull() || maxLength==size()){
             return false;
        }
        stack1.push(item);
        return true;
   }
        
        
    public int poll(){
        if(!stack2.isEmpty){
            return stack2.pop();
        }
        else{
            while(!satck1.isEmpty){
                stack2.push(stack1.pop());
            }
            return stack2.pop();
        }
    }
        
    public int size(){
        return satck1.size()+stack2.size();
    }
}
