import { http, local, upload, testRegist } from "../utils/http"

export const GetMenuData = () => http.post('HomePage/GetMainMenu');
export const GetListsService = () => http.post('Admin/CmsItem/GetListCMS');
export const GetItemService = (id) => http.post('Admin/CmsItem/GetItemAndCSA', id);
export const getItemCms = (data) => http.post(`Admin/CMSItem/GetItem`, data);
export const GetItemServices = (id) => http.post(`HomePage/GetItem?id=${id}`);
export const GetAbout = (param: number) => http.post(`HomePage/GetItem?id=${param}`);
export const GetLanguage = () => http.post(`HomePage/GetListLanguage`);
export const GetItem = (id: number) => http.post(`HomePage/GetItem?id=${id}`);
export const GetTreeInNode = (parentId) => http.post(`Admin/swModule/GetTreeInNode?parentId=${parentId}`);
export const CustomerRegistReq = (data) =>
  http.post(`Admin/SwCustomerReq/Insert`, data);
export const testRegistApi = (data) =>
  testRegist.post(`api/create`, data);