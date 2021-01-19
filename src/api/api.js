const axios = require('axios')

export const query = (query) => {
    return axios({
        url: 'https://kzhelbgyrzdftpflqcsrkpztcm.appsync-api.us-east-2.amazonaws.com/graphql',
        headers: { 'x-api-key':'da2-fknhrrjbffgehacxmihhwj3ogm' },
        method: 'post',
        data: {
          query: query
        }
      }).then((result) => {
        return result.data.data
      });
}