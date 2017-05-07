package me.ifren.algorithm.ch03;

public class selectSortTest {
	public static void main(String[] args){
		testSelectSort();
	} 
	
	public static void testSelectSort(){
		int[] array={1,4,2,5,0,21};
		SelectSort selectSort = new SelectSort(array);
		selectSort.sort();
		selectSort.print();
	}
}
