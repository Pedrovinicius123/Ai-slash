const parallel = (operation) => {
    return new Promisse((resolve, reject) => {
        setTimeout(() => resolve(operation), 100);
    });
}

module.exports = parallel
