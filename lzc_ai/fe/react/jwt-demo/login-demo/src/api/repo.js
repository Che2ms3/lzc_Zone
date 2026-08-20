import axios from './config';

export const getRepo = async()=>{
  // 拦截器已经返回 res.data,这里直接返回即可
  return axios.get('/repo');
}