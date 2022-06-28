import { SIGNIN } from '../../graphql/queries';
import client from '../../graphql/client';
client;

export const signin = async ({ email, password }) => {
	const { signin } = await client.request(SIGNIN, {
		email: 'thokk@mail.com',
		password: 'password'
	});
	return signin;
};
