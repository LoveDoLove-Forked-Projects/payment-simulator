import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PayWebRequestInfo} from "../model/pay-web-request.info";

@Injectable({
  providedIn: 'root'
})
export class PaygateService{

  constructor(private http: HttpClient){

  }

  getTransactionDetail(paygateId: string){
    return this.http.get<PayWebRequestInfo>('/rest/ui/transactionDetail',{
      params : {
        paygateId: paygateId
      }
    });
  }
}