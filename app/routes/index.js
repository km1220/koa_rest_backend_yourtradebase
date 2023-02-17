// test routes
import Books from './_books.js'
import Todo from './todo.js'
//

import Customers from './customers.js';
import Quotes from './quotes.js';
import Tasks from './tasks.js';
import Categories from './price/material/categories.js';
import Materials from './price/material/materials.js';
import Labours from './price/labours.js';
import PriceLists from './price/priceLists.js';

export default app => {
	app.use(Todo);
	app.use(Books);
	//
	app.use(Customers);
	app.use(Quotes);
	app.use(Tasks);
	app.use(Categories);
	app.use(Materials);
	app.use(Labours);
	app.use(PriceLists);
}