class Solution {
    
    static class IntDescendingComparator implements Comparator<Map.Entry<Integer, Integer>> {
        @Override
        public int compare(Map.Entry<Integer, Integer> a, Map.Entry<Integer, Integer> b) {
            return a.getValue() - b.getValue();
        }
    }
    
    public List<Integer> topKFrequent(int[] nums, int k) {
        final List<Integer> res = new ArrayList<Integer>(k);

        final Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        final PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<Map.Entry<Integer, Integer>>(k, new IntDescendingComparator());
        Integer val;
        for (int i = 0; i < nums.length; i++) {
            val = map.get(nums[i]);
            if (val == null) {
                map.put(nums[i], 1);
            } else {
                map.put(nums[i], val + 1);
            }
        }

        for (final Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (minHeap.size() < k) {
                minHeap.offer(entry);
            } else if (minHeap.peek().getValue() < entry.getValue()) {
                minHeap.poll();
                minHeap.offer(entry);
            }
        }
        
        for (int i = 0; i < k; i++) {
            res.add(minHeap.poll().getKey());
        }
        return res;
    }
}
