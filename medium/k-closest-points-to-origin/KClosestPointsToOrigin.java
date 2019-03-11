class Solution {
    
    static class DistanceToOriginComparator implements Comparator<int[]> {
        public int compare(int[] a, int[] b) {
            return (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]);
        }
    }
    
    public int[][] kClosest(int[][] points, int K) {
        final int[][] res = new int[K][2];
        final PriorityQueue<int[]> minHeap = new PriorityQueue<int[]>(K, new DistanceToOriginComparator());
        
        for (int i = 0; i < points.length; i++) {
            minHeap.offer(points[i]);
        }
        
        for (int i = 0; i < K; i++) {
            res[i] = minHeap.poll();
        }
        
        return res;
    }
}
