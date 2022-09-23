/**用来判断不同设备图片的尺寸，从而调整swiper尺寸 */
export default function (selector) {
  return new Promise((resolve) =>{
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.exec(res =>{
      resolve(res)
    })
  })
}