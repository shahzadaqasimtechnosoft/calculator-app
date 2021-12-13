import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ExpressionStoreService {
  constructor(private http: HttpClient) {
  }

  persist(expr: string): Observable<any> {
    const expression = {expression: expr};
    return this.http.post(
      'https://ng-calculator-562d4-default-rtdb.firebaseio.com/expressions.json',
      expression);
  }

  retrieveAll(): Observable<any> {
    return this.http.get<{ [key: string]: Object }>(
      'https://ng-calculator-562d4-default-rtdb.firebaseio.com/expressions.json'
    ).pipe(
      map(responseData => {
        const expressionsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            expressionsArray.push({...responseData[key], id: key});
          }
        }
        return expressionsArray;
      })
    );
  }

  clearAll() {
    this.http.delete(
      'https://ng-calculator-562d4-default-rtdb.firebaseio.com/expressions.json'
    ).subscribe({
      next: () => {
        console.log('Deleted all');
      }
    });
  }
}
