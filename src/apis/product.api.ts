import { Staff } from '~/components/Modal/CreateStaff'
import http from '~/utils/http'
import upload from '~/utils/upload'

export const getProduct = (params?: unknown) => http.get('/product/get-all', { params })
export const getAllKey = () => http.get('/key')
export const blockKey = (body: { key: string; code: string }) => http.post('/key/block-key', body)
export const removeKey = (body: { key: string }) => http.post('/key/delete-key', body)
export const searchKey = (username: string) => http.get(`/user/auth/search?q=${username}`)
export const searchUser = (email: string) => http.get(`/v1/user/search-staff?email=${email}`)
export const searchComment = (title: string) => http.get(`/v1/comment/search?content=${title}`)
export const searchContact = (title: string) => http.get(`/v1/contact/search?content=${title}`)
export const searchMessage = (title: string) => http.get(`/v1/message/search?content=${title}`)
export const deleteContact = (body: string[]) =>
  http.delete(`/v1/contact/delete`, {
    data: {
      id: body
    }
  })
export const deleteMessage = (body: string[]) =>
  http.delete(`/v1/message/delete`, {
    data: {
      id: body
    }
  })
export const deleteComment = (body: string[]) =>
  http.delete(`/v1/comment/delete`, {
    data: {
      id: body
    }
  })
export const deleteStaff = (id: string) => http.delete(`v1/user/${id}`)
export const createKey = (body: { date: number; username: string }) => http.post('key/create', body)
export const createStaff = (body: Staff) => http.post('v1/user/register-staff', body)
export const updateStaff = (id: string, body: any) => upload.patch(`v1/user/${id}`, body)
export const getAllComment = (params?: unknown) => http.get('/v1/comment/get-all-comment', { params })
// export const getAllComment = (params?: unknown) => http.get('/v1/comment/get-all-comment', { params })
export const getAllContact = (params?: unknown) => http.get('/v1/contact/get-all-contact', { params })
export const getAllCategory = (params?: unknown) => http.get('/v1/category/get-category', { params })
export const getAllMessage = (params?: unknown) => http.get('/v1/message/get-all-message', { params })
export const getAllProduct = (params?: unknown) => http.get('/v1/product/get-all-product', { params })
export const updateProfile = (body: any) => upload.patch('/v1/user/update', body)
export const updateConfig = (body: { title: string; price: number; url_tele: string; content: string[] }) =>
  http.post('/config/update', body)
export const getAllStaff = () => http.get('v1/user/get-all-staff')
export const getAllOrder = () => http.get('v1/order/get-order')
export const searchOrder = (name: string) => http.get(`/v1/message/search?content=${name}`)
export const deleteOrder = (body: string[]) =>
  http.delete(`/v1/order/delete`, {
    data: {
      id: body
    }
  })
export const repComment = (id: string, body: any) => http.post(`v1/comment/rep-comment`, body)
