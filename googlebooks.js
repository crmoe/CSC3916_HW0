const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    return JSON.stringify({
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        requestHeader: response.config.headers
    }});
}
