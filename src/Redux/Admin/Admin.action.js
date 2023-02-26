import {
  deleteAdminKidsdataAPI,
  deleteAdminMensdataAPI,
  deleteAdminWomensdataAPI,
  deleteUsersListdataAPI,
  getAdminDataAPI,
  getAdminKidsdataAPI,
  getAdminMensdataAPI,
  getAdminWomensdataAPI,
  getCurrentUserAPI,
  getUsersListAPI,
  postAdminKidsdataAPI,
  postAdminMensdataAPI,
  postAdminWomensdataAPI,
  postCurrentUserAPI,
  postUsersListAPI,
  updateAdminContactAPI,
  updateAdminEmailAPI,
  updateAdminKidsdataAPI,
  updateAdminMensdataAPI,
  updateAdminNameAPI,
  updateAdminPasswordAPI,
  updateAdminWomensdataAPI,
  updateCurrentUserAPI,
  updateUsersListAPI,
} from "./Admin.api";
import {
  ADD_ADMIN_CONTACT,
  ADD_ADMIN_EMAIL,
  ADD_ADMIN_NAME,
  ADD_ADMIN_PASSWORD,
  ADD_CURRENT_USER,
  ADD_KIDS_SUCCESS,
  ADD_MENS_SUCCESS,
  ADD_USERSLIST_DATA,
  ADD_WOMENS_SUCCESS,
  DELETE_PRODUCT_KIDS,
  DELETE_PRODUCT_MENS,
  DELETE_PRODUCT_WOMENS,
  DELETE_USERSLIST_DATA,
  GET_ADMINDATA_SUCCESS,
  GET_CURRENT_USER,
  GET_KIDS_SUCCESS,
  GET_MENS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_USERSLIST_SUCCESS,
  GET_WOMENS_SUCCESS,
  UPDATE_CURRENT_USER,
  UPDATE_PRODUCT_KIDS,
  UPDATE_PRODUCT_MENS,
  UPDATE_PRODUCT_WOMENS,
  UPDATE_USERSLIST_DATA,
} from "./Admin.type";

//POST_FUNCTION
export const postMensData = (mensProduct) => async (dispatch) => {
  console.log("Men", mensProduct);
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await postAdminMensdataAPI(mensProduct);
    dispatch({ type: ADD_MENS_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const postWomensData = (womensProduct) => async (dispatch) => {
  console.log("Women", womensProduct);
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await postAdminWomensdataAPI(womensProduct);
    dispatch({ type: ADD_WOMENS_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const postKidsData = (kidsProduct) => async (dispatch) => {
  console.log("Kid", kidsProduct);
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await postAdminKidsdataAPI(kidsProduct);
    dispatch({ type: ADD_KIDS_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const postUsersListData=(User)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING})
 try {
  await postUsersListAPI(User);
  dispatch({type:ADD_USERSLIST_DATA})
 } catch (error) {
   dispatch({type:GET_PRODUCTS_ERROR})
 }
}

export const postCurrentUserData=(currentUser)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING})
 try {
  await postCurrentUserAPI(currentUser);
  dispatch({type:ADD_CURRENT_USER})
 } catch (error) {
   dispatch({type:GET_PRODUCTS_ERROR})
 }
}


// GET-FUNCTION
export const getMensData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getAdminMensdataAPI();
    dispatch({ type: GET_MENS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getWomensData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getAdminWomensdataAPI();
    dispatch({ type: GET_WOMENS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getKidsData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getAdminKidsdataAPI();
    dispatch({ type: GET_KIDS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getUsersListData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getUsersListAPI();
    dispatch({ type: GET_USERSLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getAdminData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getAdminDataAPI();
    dispatch({ type: GET_ADMINDATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getCurrentUserData=()=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING})
 try {
  let data = await getCurrentUserAPI();
  dispatch({type:GET_CURRENT_USER,payload:data})
 } catch (error) {
   dispatch({type:GET_PRODUCTS_ERROR})
 }
}


//DELETE-FUNCTION
export const deleteMensData = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await deleteAdminMensdataAPI(id);
    dispatch({ type: DELETE_PRODUCT_MENS });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const deleteWomensData = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await deleteAdminWomensdataAPI(id);
    dispatch({ type: DELETE_PRODUCT_WOMENS });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const deleteUsersListData = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await deleteUsersListdataAPI(id);
    dispatch({ type: DELETE_USERSLIST_DATA });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const deleteKidsData = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await deleteAdminKidsdataAPI(id);
    dispatch({ type: DELETE_PRODUCT_KIDS });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

//UPDATE-FUNCTION
export const updateMensData =
  (id, newPrice, newDiscount, newSrikePrice) => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      await updateAdminMensdataAPI(id, newPrice, newDiscount, newSrikePrice);
      dispatch({ type: UPDATE_PRODUCT_MENS });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

export const updateWomensData =
  (id, newPrice, newDiscount, newSrikePrice) => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      await updateAdminWomensdataAPI(id, newPrice, newDiscount, newSrikePrice);
      dispatch({ type: UPDATE_PRODUCT_WOMENS });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

export const updateKidsData =
  (id, newPrice, newDiscount, newSrikePrice) => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      await updateAdminKidsdataAPI(id, newPrice, newDiscount, newSrikePrice);
      dispatch({ type: UPDATE_PRODUCT_KIDS });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

export const updateAdminName = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await updateAdminNameAPI(data);
    dispatch({ type: ADD_ADMIN_NAME });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const updateAdminEmail = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await updateAdminEmailAPI(data);
    dispatch({ type: ADD_ADMIN_EMAIL });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const updateAdminContact = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await updateAdminContactAPI(data);
    dispatch({ type: ADD_ADMIN_CONTACT });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const updateAdminPassword = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await updateAdminPasswordAPI(data);
    dispatch({ type: ADD_ADMIN_PASSWORD });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const updateUsersListData = (id,state) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    await updateUsersListAPI(id,state);
    dispatch({ type: UPDATE_USERSLIST_DATA});
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const updateCurrentUserData=(state)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
   try {
    await updateCurrentUserAPI(state);
    dispatch({type:UPDATE_CURRENT_USER})
   } catch (error) {
     dispatch({type:GET_PRODUCTS_ERROR})
   }
}
