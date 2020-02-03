const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


	var jsonReturn = {
		data: results.data;
		status: results.status;
		statusText: results.statusText;
		headers: results.headers ? results.headers: '';
		requestHeader: results.config? results.config.headers : ''
	}





    return JSON.stringify(results.data);
}

