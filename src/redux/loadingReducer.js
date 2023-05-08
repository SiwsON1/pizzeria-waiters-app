
//selectors
export const getLoading = (state) => state.loading.isLoading;


const createActionName = actionName => `app/tables/${actionName}`;
const SET_LOADING = createActionName('SET_LOADING');

export const setLoading = (payload) => ({ type: SET_LOADING, payload });



const loadingReducer = (statePart = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return statePart;
  }
};

export default loadingReducer;