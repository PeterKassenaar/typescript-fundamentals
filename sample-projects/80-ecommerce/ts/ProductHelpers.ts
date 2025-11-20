// ProductHelpers.ts
import {Book} from "./model/book.model";
import {Order} from "./model/order.model";

export class ProductHelpers {
	// 1. Rij opbouwen voor weergave in Store
	static shopRow(book: Book): string {
		return `
			<tr>				
				<td>${book.title}</td>
				<td>${book.author}</td>
				<td>&euro; ${book.price}</td>
				<td><i class="fa fa-2x fa-question singleBook" data-id="${book.id}"></i></td>
				<td><i class="fa fa-2x fa-shopping-cart orderMe" data-id="${book.id}"></i></td>
			</tr>`;
	}

 // 2. Details per boek tonen in de ui
 static showBookDetail(book: Book): string {
     return `
         <div class="card border-primary mb-3">
             <div class="card-header bg-primary text-white">
                 <h3 class="card-title h5 mb-0">${book.title}</h3>
             </div>
             <div class="card-body">
                 <h4 class="h6">${book.author}</h4>
                 <h4 class="h6">${book.ean}</h4>
                 <p>${book.description}</p>
                 <h4 class="h6">&euro; ${book.price}</h4>
                 <p>Meer informatie: <a href="${book.url}" target="_blank" rel="noopener">${book.url}</a></p>
                 <button id="hideDetail" class="btn btn-primary">Verbergen</button>
             </div>
         </div>
     `
 }

	// 3. Rij opbouwen voor weergave in Shopping Cart
	static cartRow(order: Order): string {
		return `
			<tr>
				<td>${order.book.title}</td>
				<td>${order.book.price}</td>
				<td>${order.numOrders}</td>
				<td><button class="btn btn-danger orderDelete" data-id="${order.orderId}">
					<i class="fa fa-remove" data-id="${order.orderId}"></i>
					</button>
				</td>
			</tr>
			`
	}

	// 4. Totaal berekenen
	static calculateTotal(orders: Order[]): number {
		let total = 0;
		orders.forEach((order: Order) => {
			total += order.numOrders * order.book.price;
		});
		return total;
	}

	// 5. Order plaatsen
	static placeOrder(orders: Order[]):string{
		let orderSummary :any[]= [];
		orders.forEach((order:Order) =>{
			orderSummary.push({
				orderId: order.orderId,
				bookId:order.book.id,
				numOrders: order.numOrders
			})
		});
		return `
			<p>Order geplaatst voor boeken: ${JSON.stringify(orderSummary)}</p>
			<p>Totaal: ${this.calculateTotal(orders).toFixed(2)}</p>
			<h3>Bedankt voor uw bestelling!</h3>
			<h3>TODO: zelf verzenden naar server/database</h3>
			`
	}
}
