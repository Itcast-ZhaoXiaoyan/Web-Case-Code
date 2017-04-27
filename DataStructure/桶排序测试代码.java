public class SortTest{
    testBucketSort();
    
}

/*桶排序*/
private static void testBucketSort()
{
    int[] array = {5,7,1,3,5,2};
    BucketSort bucketSort = new BucketSort(11,array);
    bucketSort.sort();
    bucketSort.print()
}
