function processStringData(data) {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 10);
        });
    } catch(e) {
        console.error('Error in processStringData:', e);
        return Promise.reject(e);
    }
}

module.exports = {
    processStringData
};
