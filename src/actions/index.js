import jsonPlaceholder from '../apis/jsonPlaceholder';

//ActionCreator inside Actioncreator

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts())
	const userIds = new Set(getState().posts.map(({ userId }) => userId))
	userIds.forEach(id => dispatch(fetchUser(id)))
};

// Normal Syntax
export const fetchPosts =  () => {
	return async (dispatch, getState) =>{
		const response =  await jsonPlaceholder.get('/posts');
		dispatch({type : 'FETCH_POST', payload : response.data})
	};
};

//Shortened Syntax
export const fetchUser  = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({type : 'FETCH_USER', payload : response.data});
};
