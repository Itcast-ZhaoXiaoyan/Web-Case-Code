package me.ifren.algorithm.ch03;

public class SelectSort {
	private int[] array;
	public SelectSort(int[] array){
		this.array=array;
	}
	
	public void sort(){
		int length=array.length;
		
		for(int i=0;i<length;i++){
			//将i赋值给minIndex，作为最小的索引
			int minIndex=i;
			
			for(int j=i+1;j<length;j++){
				//如果最小索引minIndex对应数组值>索引j对应的数组值，将j赋值给minIndex
				if(array[minIndex]>array[j]){
					minIndex=j;
				}
			}
			
			//当minIndex!=i时
			if(minIndex!=i){
				//定义一个中间值temp保存minIndex索引下数组值
				int temp=array[minIndex];
				array[minIndex]=array[i];
				array[i]=temp;
			}
		
		}
	}
	
	
	public void print(){
		for(int i=0;i<array.length;i++){
			System.out.println(array[i]);
		}
	} 
}
