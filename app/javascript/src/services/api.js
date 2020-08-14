import axios from 'axios'

const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}

const ApiService = axios.create({
  headers: {
    common: {
      'X-CSRF-Token': token.content
    }
  }
})

export default ApiService