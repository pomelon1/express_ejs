// api.js
import { httpGet, httpPost } from './http'
export const getorglist = (url) =>{alert("789"); httpGet(url)}

export const save = (data) => {
    return httpPost({
        url: 'apps/wechat/api/save_member',
        data
    })
}