import { axiosInstance } from "./axiosInstance";

export const getProduct = async () =>{
    try{
        const res = await axiosInstance.get('product');
        return res.data.data

    }catch (error){
        throw Error(String(error));
    }
};

export const createProduct = async (data) =>{
    try{
        const res = await axiosInstance.post('product',data);
        return res
        
    }catch (error){
        throw Error(String(error));
    }
};

export const updateProduct = async (data) =>{
    try{
        const res = await axiosInstance.put('product',data);
        return res
        
    }catch (error){
        throw Error(String(error));
    }
};

export const deleteProduct = async (id) =>{
    try{
        const res = await axiosInstance.delete("product",id);
        return res
        
    }catch (error){
        throw Error(String(error));
    }
};

export const getEditProject = async (id) => {
    try {
      const res = await axiosInstance.get(`product?id=${id}`);
      return res.data.data;
    } catch (error) {
      throw Error(String(error));
    }
  };