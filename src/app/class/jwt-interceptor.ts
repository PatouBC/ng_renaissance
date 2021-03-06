import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenData = this.authService.tokenData;
        if (tokenData && tokenData.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${tokenData.token}`
                }
            });
        }
        return next.handle(request);
    }
}
