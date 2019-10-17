import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiPath: string = "api/categories";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>
  {
    return this.http.get(this.apiPath).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(error);
      }),
      map((data: any[]) => {
        const categories: Category[] = [];
        data.forEach(item => categories.push(item as Category));
        return categories;
      })
    );
  }

  getById(id: number): Observable<Category>
  {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(this.apiPath).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(error);
      }),
      map(data => {
        return data as Category;
      })
    );
  }

  create(category: Category): Observable<Category>
  {
    return this.http.post(this.apiPath, category).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(error);
      }),
      map(data => {
        return data as Category;
      })
    );
  }

  update(category: Category): Observable<Category>
  {
    const url = `${this.apiPath}/${category.id}`;
    return this.http.put(url, category).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(error);
      }),
      map(() => category)
    )
  }

  delete(id: number): Observable<any>
  {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(error);
      }),
      map(() => null)
    )
  }
}
