import axios from "axios";

let myAxios = axios.create();
// 查询数据列表公用方法 get
export const get = function(url, val, config = {}) {
  return myAxios.get(url, {
    params: val,
    ...config,
    data: { customParams: config.customParams }
  });
};
// 删除公用方法
export const del = function(url, data, config = {}) {
  return myAxios.delete(url, {
    data: config.customParams
      ? { ...data, customParams: config.customParams }
      : data,
    ...config
  });
};

export const post = function(url, val, config = {}) {
  let contentType;

  return myAxios.request({
    url,
    data: config.customParams
      ? { ...val, customParams: config.customParams }
      : val,
    method: "post",
    headers: {
      "Content-type": contentType
    },
    ...config
  });
};

// 修改数据公用方法
export const put = function(url, val, config = {}) {
  let contentType;

  return myAxios.request({
    url,
    data: val,
    method: "put",
    headers: {
      "Content-type": contentType
    },
    ...config
  });
};

// formadata post 提交数据
export const postFormData = function(url, val, config = {}) {
  return myAxios.request({
    url,
    data: val,
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    ...config
  });
};

export default myAxios;
