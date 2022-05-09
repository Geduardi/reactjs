import {all} from 'redux-saga/effects'
import {addReplyFromBotWatcher} from "./messages/actions";
import {fetchArticlesWatcher} from "./articles/actions";
import {initSagaProfileTrack} from "./profile/actions";

export const rootSaga = function* () {
    yield all([
        addReplyFromBotWatcher(),
        fetchArticlesWatcher(),
        // initSagaProfileTrack(),
        // stopProfileTrack()
    ])
}





