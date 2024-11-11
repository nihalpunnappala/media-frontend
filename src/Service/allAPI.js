import { commonAPI } from "./commonAPI";
import { server_url } from "./Server_url";


// addvideo API
export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}


//getVideoAPI
export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}


//getVideo
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}


//deleteVideo
export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

//addHistoryAPI
export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

//getHistoryAPI
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

//deleteHistoryAPI
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}


// addCategoryAPI
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}


//getCategoryAPI
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

//deleteCategory
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// updateCategory
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}