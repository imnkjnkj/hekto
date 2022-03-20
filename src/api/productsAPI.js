import axiosClient from "./axiosClient";

const productsApi = {
  getAllProducts: async () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  // get: (id: any) => {
  //   const url = `/taskslist/${id}`;
  //   return axiosClient.get<any>(url);
  // },
  // getByStatus: (value: any) => {
  //   const url = `/taskslist?status=${value}`;
  //   return axiosClient.get<any>(url);
  // },
  // putTask: (id: any, value: any) => {
  //   const url = `/taskslist/${id}`;
  //   return axiosClient.put<any>(url, value);
  // },
  // delTask: (id: any) => {
  //   const url = `/taskslist/${id}`;
  //   return axiosClient.delete<any>(url);
  // },
  // postTask: (param: any) => {
  //   const url = "/taskslist";
  //   return axiosClient.post<any>(url, param);
  // },
};
export default productsApi;
