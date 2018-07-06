import { 
    INIT_PROFILE,
    GET_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL
} from './types';
import { sbGetCurrentInfo, sbUpdateProfile } from '../sendbirdActions/index';

export const initProfile = () => {
    return { type: INIT_PROFILE }
}

export const getCurrentUserInfo = () => {
    return {
        type: GET_PROFILE_SUCCESS,
        userInfo: sbGetCurrentInfo()
    }
}

export const updateProfile = (nickname) => {
    return (dispatch) => {
        sbUpdateProfile(nickname)
        .then((user) => updateSuccess(dispatch, user))
        .catch((error) => updateFail(dispatch, error))
    }
}

const updateFail = (dispatch, error) => {
    dispatch({ 
        type: UPDATE_PROFILE_FAIL,
        error: error
    });
}

const updateSuccess = (dispatch, user) => {
    dispatch({ 
        type: UPDATE_PROFILE_SUCCESS,
        userInfo: sbGetCurrentInfo()
    });
}
