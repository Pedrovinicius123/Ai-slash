const {Worker, isMainThread, parentPort} = require('worker_threads')
const fs = require('fs')
const path = require('path')

const parallelizeFunction = async (func, nJobs, params, backupFileName, backupDirectoryName) => {
    if (isMainThread){

        const threads = []
        const values = []

        fs.mkdir(backupDirectoryName, (err) => {
            if (err) {
                console.log(`Err: ${err}`)
            }
        })

        let jsonCode = {
            val : null
        }
        
        let jsonCodeStringyfied        
        fs.writeFile(path.join(backupDirectoryName, backupFileName),'', (err)=> {
            console.log(err)
        })

        for (let i = 0; i < nJobs; i++){
            const worker = new Worker(__filename)


            worker.on('message', (value) => {
                values.push(value)
                
                jsonCode.val = values
                jsonCodeStringyfied = JSON.stringify(jsonCode, null, 2)

                try {
                    fs.writeFileSync(path.join(backupDirectoryName, backupFileName), jsonCodeStringyfied)
                }

                catch(error){
                    console.log(error)
                }                
            })

            worker.on('code', (code) => {
                console.error(`Error code ${code}`)
            })

            
            threads.push(worker)
        }
    }    

    else {
        const result = func(params)
        parentPort.postMessage(result)       
    }
}

const retreiveResults = (path) => {
    let res = require(path)
    return res.val
}

const func = (params) => {
    return params.b * params.a
}

parallelizeFunction(func, 2, {a: 2, b: 3}, 'test.json', 'data')
const result = retreiveResults('./data/test.json')

console.log(result)

module.exports = {
    parallelize: parallelizeFunction,
    retreiveInfo: retreiveResults
}
