import axios from 'axios';
// import { LOCALSTORAGE_TOKEN_ID } from './App.js';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/**
 * Yodlr API class contains static methods to help interact with the Yodlr
 * database.
 */
class YodlrApi {
	static async request(endpoint, paramsOrData = {}, verb = 'get') {
		// paramsOrData._token = localStorage.getItem(LOCALSTORAGE_TOKEN_ID);

		console.debug('API Call:', endpoint, paramsOrData, verb);

		try {
			return (await axios({
				method                               : verb,
				url                                  : `${BASE_URL}/${endpoint}`,
				[verb === 'get' ? 'params' : 'data']: paramsOrData
			})).data;
			// axios sends query string data via the "params" key,
			// and request body data via the "data" key,
			// so the key we need depends on the HTTP verb
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.message;
			throw Array.isArray(message) ? message : [ message ];
		}
	}

	/**
     * User Requests
     */

	static async getUsers() {
		console.log('YodlrApi Class getUsers - Start');
		let res = await this.request(`users/`);
		console.log('RES', res);
		return res;
	}
	static async createUser(data) {
		console.log('YodlrApi Class createUser - Start');
		let res = await this.request(`users/`, data, 'post');
		console.log('RES', res);
		return res;
	}
}

export default YodlrApi;
