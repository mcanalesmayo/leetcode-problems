
var StockSpanner = function() {
    this.history = [];
    this.day = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let res = 1;
    
    for (let i = this.day; i >= 0; i--) {
        if (this.history[i] > price) {
            break;
        }
        
        res++;
    }
    
    this.day++;
    this.history[this.day] = price;
    
    return res;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = Object.create(StockSpanner).createNew()
 * var param_1 = obj.next(price)
 */
