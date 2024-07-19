class DiySet {
    
    constructor() {
        this.values = []
    }

    add(value) {
        if(!this.has(value)){
            this.values.push(value)
        }
    }

    has(value) {
        for(let i = 0; i < this.values.length; i++){
            if(this.values[i] == value){
                return true
            }
        }
        return false
    }

    get size() {
        return this.values.length
    }
}

export default DiySet