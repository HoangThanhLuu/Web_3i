import axios from 'axios';
export class Http {
  instance

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://backend.smartwork.3i.com.vn',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}
export class Local {
  instance

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:6022',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',

      }
    })
  }
}

export class Uploadfile {
  instance

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:6022',
      timeout: 5000,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }
}
export class TestRegist {
  instance

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:4000',
      timeout: 5000,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }
}
const http = new Http().instance;
const local = new Local().instance;
const upload = new Uploadfile().instance;
const testRegist = new TestRegist().instance;
export { http, local, upload, testRegist };