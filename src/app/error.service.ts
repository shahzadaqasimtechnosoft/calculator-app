import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ErrorService {
  errorEmitter = new Subject<{error: string, message: string}>();

  emitError(error:string, message:string) {
    this.errorEmitter.next({error, message});
  }
}
