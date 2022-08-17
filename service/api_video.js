import request from "./index";

export function getTopMV(offset, limit = 10) {
  return request.get('/top/mv', {
    offset,
    limit
  })
}
/**
 * 请求MV的地址
 * @param {number} id  Mv的id 
 */
export function getMVURL(id) {
  return request.get("/mv/url", {
    id
  })
}
/**
 * 请求MV的详情
 * @param {number} mvid MV的id
 */

export function getMVDetail(id) {
  return request.get("/mv/detail", {
    mvid: id
  })
}
export function getRelatedVedio(id) {
  return request.get('/related/allvideo',{
    id
  })
}