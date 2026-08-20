import axios from './config';

export const login = async(data)=>{
    // 拦截器已经返回 res.data,这里直接返回即可
    
    return axios.post('/login',data);
}
