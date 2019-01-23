class Solution {
    
    public List<Integer> topKFrequent(int[] nums, int k) {
        final List<Integer> res = new ArrayList<Integer>(k);
        final List<Integer>[] frequencies = new List[nums.length+1];
        final Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        Integer val;
        for (int i = 0; i < nums.length; i++) {
            val = map.get(nums[i]);
            if (val == null) {
                map.put(nums[i], 1);
            } else {
                map.put(nums[i], val + 1);
            }
        }

        Integer freq;
        for (final Map.Entry<Integer, Integer> entry : map.entrySet()) {
            freq = entry.getValue();
            if (frequencies[freq] == null) {
                frequencies[freq] = new LinkedList<Integer>();
            }
            frequencies[freq].add(entry.getKey());
        }
        
        int freqSize;
        for (int i = frequencies.length - 1; i >= 1; i--) {
            if (frequencies[i] != null) {
                freqSize = frequencies[i].size();
                if (freqSize <= k) {
                    res.addAll(frequencies[i]);
                    k -= freqSize;
                } else {
                    final Iterator<Integer> it = frequencies[i].iterator();
                    // No need to check for it.hasNext, as at this point it's guaranteed
                    // it has at most the same number of elements as `k`
                    for (int j = 0; j < k; j++) {
                        res.add(it.next());
                    }
                    break;
                }
            }
        }
        
        return res;
    }
}
