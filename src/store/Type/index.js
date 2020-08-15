// FIREBASE
const NAME_COLLECTION_ID = 'id';
const NAME_COLLECTION_PROFILE_ADMIN = 'profiles-admin';
const NAME_COLLECTION_CATEGORY = 'all-category-items';
const NAME_DOC_ID = 'id-1';
const FOLDER_NAME_STORAGE = 'products';
// GETTERS
const GET_ALL_CATEGORY = 'Admin/GET_ALL_CATEGORY';
const GET_ALL_ITEMS = 'Admin/GET_ALL_ITEMS';
// MUTATIONS
const SET_ALL_CATEGORY = 'Admin/SET_ALL_CATEGORY';
const CHANGE_STATUS_ASIDE = 'Admin/CHANGE_STATUS_ASIDE';
const SET_ALL_ITEMS = 'Admin/SET_ALL_ITEMS';
// ACTIONS
const ADD_AND_UPDATE_CATEGORY = 'Admin/ADD_AND_UPDATE_CATEGORY';
const GET_ALL_CATEGORY_FROM_DATABASE = 'Admin/GET_ALL_CATEGORY_FROM_DATABASE';
const ADD_PRODUCT_IN_CATEGORY = 'Admin/ADD_PRODUCT_IN_CATEGORY';
const PREVIEW_IMAGE_PRODUCT = 'Admin/PREVIEW_IMAGE_PRODUCT';
const EXIT_SIGN_OUT = 'Shared/EXIT_SIGN_OUT';
const ENTER_SIGN_IN = 'Shared/ENTER_SIGN_IN';
const GET_DATA_USER = 'Shared/GET_DATA_USER';
const CHECK_INFO = 'Shared/CHECK_INFO';
const CREATE_NEW_ACCOUNT = 'Shared/CREATE_NEW_ACCOUNT';
const CREATE_PROFILE_USER = 'Shared/CREATE_PROFILE_USER';
const DELETE_IMAGE = 'Admin/DELETE_IMAGE';
const GET_ALL_ITEMS_CATEGORY = 'Admin/GET_ALL_ITEMS_CATEGORY';
const GET_PRODUCTS_WITH_NAME_CATEGORY = 'Admin/GET_PRODUCTS_WITH_NAME_CATEGORY';
const CREATE_NEW_DOC = 'Admin/CREATE_NEW_DOC';
const DELETE_DOC = 'Admin/DELETE_DOC';

// ALL EXPORTS
export {
  NAME_COLLECTION_ID,
  NAME_COLLECTION_PROFILE_ADMIN,
  NAME_DOC_ID,
  NAME_COLLECTION_CATEGORY,
  ////////////////////////////
  EXIT_SIGN_OUT,
  ENTER_SIGN_IN,
  GET_DATA_USER,
  CHECK_INFO,
  CREATE_NEW_ACCOUNT,
  CREATE_PROFILE_USER,
  ////////////////////////////
  SET_ALL_CATEGORY,
  CHANGE_STATUS_ASIDE,
  SET_ALL_ITEMS,
  ////////////////////////////
  ADD_AND_UPDATE_CATEGORY,
  GET_ALL_CATEGORY_FROM_DATABASE,
  ADD_PRODUCT_IN_CATEGORY,
  PREVIEW_IMAGE_PRODUCT,
  FOLDER_NAME_STORAGE,
  DELETE_IMAGE,
  GET_ALL_ITEMS_CATEGORY,
  GET_PRODUCTS_WITH_NAME_CATEGORY,
  CREATE_NEW_DOC,
  DELETE_DOC,
  ////////////////////////////
  GET_ALL_CATEGORY,
  GET_ALL_ITEMS
};
