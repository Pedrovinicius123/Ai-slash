const {Worker, isMainThread} = require('worker_threads')

const parallelizeFunction = (func) => {
    if (isMainThread){
        const worker = new Worker(__filename)

        worker.on('message', result => {
            console.log(result)
        })
    }

    else {
        func()
    }
}

module.exports = parallelizeFunction
