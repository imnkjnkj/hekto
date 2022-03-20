import axiosClient from "./axiosClient";

const homePageApi = {
  getPromotion: async () => {
    const url = "/promotion";
    return axiosClient.get(url);
  },
  // getPromotion: async () => {
  //   const url = "/blogs";
  //   return axiosClient.get(url);
  // },
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
export default homePageApi;
