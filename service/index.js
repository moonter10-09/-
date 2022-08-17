const BASE_URL = "https://coderwhy-music.vercel.app/"
class Request {
  request(url, method, parmas) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        data: parmas,
        method: method,
        success: (res) => {
          resolve(res.data)
        },
        fail: () => {
          reject
        },
      });

    })

  }
  get(url, parmas) {
    return this.request(url, 'GET', parmas)
  }
  post(url, data) {
    return this.request(url, 'POST', data)
  }
}
const request = new Request()
export default request