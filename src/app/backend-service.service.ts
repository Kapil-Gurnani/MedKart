import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendServiceService {
  // url = 'http://backend-env.mggungzbcg.us-east-2.elasticbeanstalk.com'
  url = "http://localhost:8000";

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
  };

  getData(api) {
    return this.http.get(this.url + api);
  }

  login(body) {
    return this.http.post(this.url + "/login", body);
  }

  register(body) {
    return this.http.post(this.url + "/register", body);
  }

  addProduct(body) {
    return this.http.post(this.url + "/addProduct", body);
  }

  showProduct() {
    return this.http.get(this.url + "/showProduct");
  }
}
