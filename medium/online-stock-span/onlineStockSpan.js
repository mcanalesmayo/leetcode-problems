
var StockSpanner = function() {
    this.history = [];
    this.day = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let res;
    
    this.day++;
    if (this.history.length > 0) {
        let curr;
        do {
            curr = this.history.pop();
        } while (this.history.length > 0 && curr.price <= price);
        
        if (curr.price > price) {
            // There's a highest price before
            this.history.push(curr);
            res = this.day - curr.day;
        } else {
            // This is the highest price ever reached
            res = this.day;
        }
    } else {
        // First price ever added
        res = 1;
    }
        
    this.history.push({ price: price, day: this.day });
    
    return res;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = Object.create(StockSpanner).createNew()
 * var param_1 = obj.next(price)
 */
