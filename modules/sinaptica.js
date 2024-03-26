const parallel = require('./parallel')

class sinapsis {
    constructor(weight, switches=1, probability=1, deltay=0){
        this.weight = weight;
        this.switches = switches;
        this.probability = probability;
        this.deltay = deltay;
        this.operation = {
            up: true,
            down: false
        }
    }

    addWeight = async (lr) => {
        this.weight += lr;
    }

    addSwitch = async () => {
        this.switches++;
    }

    addProb = async (lr) => {
        this.probability += lr;
    }

    changeOperation = async () => {
        if (operation.up === true) {
            operation = {up:true, down:false}
        } 
        else { 
            operation = {up: true, down:false};
        }
    }

    changeDeltaY = async (newDeltay) => {
        this.deltay = newDeltay
    }

    changeWeight = async (nWeight) => {
        this.weight = nWeight
    }
}

const generateSubArray = (i, j, mtrx) => {

    const assigningIndexes = (j) => {
        let line = new Array();
        for(let idx = 0; idx < j; idx++) {
            line.push(new sinapsis(Math.random()))                
        }

        mtrx.push(line)
        
    }

    for (let idx = 0; idx < i; idx++) {
        assigningIndexes(j);
    }
} 


const generateArray = async (i, j) => {

    let mtrx = new Array()    
    parallel(generateSubArray(i,j, mtrx))

    return mtrx
}

module.exports = {
    sinaptic: sinapsis,
    genArr : generateArray
}
