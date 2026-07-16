import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { catchError, forkJoin, of } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class InitService {

  private cartService = inject(CartService);
  private accountService = inject(AccountService);

  init() {
    const cartId = localStorage.getItem('cart_id');
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);

    // const user$ = this.accountService.getUserInfo().pipe(
    //   catchError(()=>of(null))
    // )
    //return cart$;
    return forkJoin({
      cart: cart$,
      user: this.accountService.getUserInfo()
      //user:user$
    })
  }
}
