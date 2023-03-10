// test routes
import Books from './_books.js'
import Todo from './todo.js'
//

import AuthUser from './user/auth.js';
import UserProfiles from './user/user_profiles.js';
import Reminders from './user/reminders.js';
import Notifications from './user/notifications.js';

import Customers from './customer/customers.js';
import CExtraInfos from './customer/extra_infos.js';

import Quotes from './quotes.js';
import Invoices from './invoices.js';
import Jobs from './jobs.js';
import Tasks from './tasks.js';
import TeamMembers from './team_members.js';

import Categories from './price/material/categories.js';
import Materials from './price/material/materials.js';
import Labours from './price/labours.js';
import PriceLists from './price/priceLists.js';

import EmailTemplates from './template/email.js';


export default app => {
	app.use(Todo);
	app.use(Books);
	//
	app.use(AuthUser);
	app.use(UserProfiles);
	app.use(Reminders);
	app.use(Notifications);

	app.use(Customers);
	app.use(CExtraInfos);

	app.use(Quotes);
	app.use(Invoices);
	app.use(Jobs);
	app.use(Tasks);
	app.use(TeamMembers);

	app.use(Categories);
	app.use(Materials);
	app.use(Labours);
	app.use(PriceLists);

	app.use(EmailTemplates);
}