const loader = require('uniswap-v2-loader')
const dump_csv = require('path').join(__dirname, 'dump.csv')

module.exports.load = (params = {}) => loader.load({
    factory: '0x115934131916c8b277dd010ee02de363c09d037c',
    filename: dump_csv,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x115934131916c8b277dd010ee02de363c09d037c',
        filename: dump_csv,
        ...params
    }
)