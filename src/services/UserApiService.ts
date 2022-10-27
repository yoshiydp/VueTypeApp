import http from "../http-common";

class UserApiService {
  getAll(): Promise<any> {
    return http.get("/api/user");
  }

  get(id: any): Promise<any> {
    return http.get(`/api/user/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/api/user", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/api/user/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/api/user/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/api/user`);
  }

  findByDescription(title: string): Promise<any> {
    return http.get(`/api/user?title=${title}`);
  }
}

export default new UserApiService();
