import {
    INIT_BLOCK_USER,
    BLOCK_LIST_SUCCESS,
    BLOCK_LIST_FAIL,
    USER_UNBLOCK_SUCCESS,
    USER_UNBLOCK_FAIL
} from './types';
import { sbGetBlockUserList, sbUserUnblock } from '../sendbirdActions/index';

export const initBlockUser = () => {
    return { type: INIT_BLOCK_USER }
}

export const getBlockUserList = (blockedUserListQuery) => {
    return (dispatch) => {
        if (blockedUserListQuery.hasNext) {
            sbGetBlockUserList(blockedUserListQuery)
            .then((blockedUsers) => dispatch({ type: BLOCK_LIST_SUCCESS, list: blockedUsers }))
            .catch((error) => dispatch({ type: BLOCK_LIST_FAIL, list: [] }))
        } else {
            dispatch({ type: BLOCK_LIST_FAIL, list: [] })
        }
    }
}

export const onUnblockUserPress = (unblockedUserId) => {
    return (dispatch) => {
        sbUserUnblock(unblockedUserId)
        .then((user) => {
            dispatch({ type: USER_UNBLOCK_SUCCESS, unblockedUserId: unblockedUserId })
        })
        .catch((error) => dispatch({ type: USER_UNBLOCK_FAIL }))
    }
}

