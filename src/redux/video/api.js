import Api from "../../services/apiCaller";

export const getVideoApi = async (params) => {
  let result = { status: 404, data: null};

  try {
    const res = await Api.get("/videos", { params });
    if(res.status === 200){
        result = { ...result, status: res.status, data: res.data.data}
    }
  } catch {
    return null;
  }

  return result;
};
