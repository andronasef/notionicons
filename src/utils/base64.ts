/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
const doc = document


const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g

let externalQuotesValue = "single"
let quotes = getQuotes()


function addNameSpace(data: any) {
    if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
        data = data.replace(/<svg/g, `<svg xmlns=${quotes.level2}http://www.w3.org/2000/svg${quotes.level2}`)
    }

    return data
}

// Encoding
// ----------------------------------------

function Base64(data: any) {
    // Use single quotes instead of double to avoid encoding.
    if (externalQuotesValue === `double`) {
        data = data.replace(/"/g, `'`)
    } else {
        data = data.replace(/'/g, `"`)
    }
    data = addNameSpace(data)

    data = data.replace(/>\s{1,}</g, `><`)
    data = data.replace(/\s{2,}/g, ` `)

    // Using encodeURIComponent() as replacement function
    // allows to keep result code readable
    return "data:image/svg+xml," + data.replace(symbols, encodeURIComponent)
}

// Get quotes for levels
// ----------------------------------------

function getQuotes() {
    const double = `"`
    const single = `'`

    return {
        level1: externalQuotesValue === `double` ? double : single,
        level2: externalQuotesValue === `double` ? single : double
    }
}




export default Base64
