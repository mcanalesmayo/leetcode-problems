class Solution {
    
    private static class MaxDigitComparator implements Comparator<Integer> {
        public int compare(Integer a, Integer b) {
            final String aStr = a.toString(), bStr = b.toString();
            
            return aStr.length() == bStr.length() ? bStr.compareTo(aStr) : (bStr + aStr).compareTo(aStr + bStr);
        }
    }
    
    public String largestNumber(int[] nums) {
        final String res;
        final PriorityQueue<Integer> maxDigitHeap = new PriorityQueue<Integer>(nums.length, new MaxDigitComparator());
        
        for (int i = 0; i < nums.length; i++) {
            maxDigitHeap.offer(nums[i]);
        }
        
        final StringBuilder sb = new StringBuilder();
        while (!maxDigitHeap.isEmpty()) {
            sb.append(maxDigitHeap.poll());
        }
        res = sb.toString();
        
        // Special case to avoid many zeroes if the solution is 0
        if (res.charAt(0) == '0') {
            return "0";
        } else {
            return res;
        }
    }
}
