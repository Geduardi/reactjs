import {articlesReducer} from "../reducer";
import {FETCH_STATUSES} from "../../../utils/constants";
import {getArticlesRequest} from "../actions";

describe('articles reducer', () => {
    it('should set error to null if called with request action', function () {
        const result = articlesReducer({
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: 'some error',
        }, getArticlesRequest())

        expect(result.error).toBeNull()
    });

    it('should have initial state', function () {
        let defaultState;
        const result = articlesReducer(defaultState,{
            type: 'randomType'
        })
        expect(result).toBeDefined();
    });

    it('should return old state when received unexpected action type', function () {
        const someState = {
            data: ['some'],
            status: FETCH_STATUSES.IDLE,
            error: null,
        }
        const result = articlesReducer(someState, {
            type: 'unexpectedActionType'
        })
        expect(result).toEqual(someState)
    });
})