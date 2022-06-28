import { gql } from 'graphql-request';

export const SIGNIN = gql`
	mutation Signin($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			message
			status
			data {
				token
				user {
					id
					name
					email
				}
			}
		}
	}
`;
