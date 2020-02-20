import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/';

export default {
  postMessage(url = baseUrl + 'postmessages/') {
    return {
      fetchAll: () => axios.get(url),
      fetchById: id => axios.get(url + id),
      create: newPost => axios.post(url + newPost),
      update: (id, updatedPost) => axios.post(url + id, updatedPost),
      delete: id => axios.post(url + id)
    }
  }
}