import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:4069/graphql';

const token = () => {
	return 'Bearer ajkskjskasajk';
};

const client = new GraphQLClient(endpoint, {
	headers: () => ({ authorization: token() })
});

export default client;
