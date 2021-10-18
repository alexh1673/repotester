import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
    
    @author McKilla Gorilla
 */
export default class changeName_Transaction extends jsTPS_Transaction {
    constructor(initStore, index,old,newN) {
        super();
        this.store = initStore;
        this.index = index;
        this.old = old;
        this.new = newN;
    }

    doTransaction() {
        this.store.changeItemExecute(this.index, this.new);
    }
    
    undoTransaction() {
        this.store.changeItemExecute(this.index, this.old);
    }
}