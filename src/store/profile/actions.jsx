import {put, call, takeLatest, take, cancelled} from "redux-saga/effects";
import {onValue} from "firebase/database"
import {userNameRef, userShowName} from "../../services/firebase";
import {eventChannel} from "redux-saga";
import {selectName, selectShowName} from "./selectors";

export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX';
export const SET_NAME = 'PROFILE::SET_NAME';
export const INIT_TRACK = 'PROFILE::INIT_TRACK';
export const STOP_TRACK = 'PROFILE::STOP_TRACK';

export const toggleCheckBox = {
    type: TOGGLE_CHECKBOX,
}

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
})

let unsubscribe;

// const someChannel = () => {
//     return eventChannel(emitter => {
//         console.log(`initTrackWorker st`)
//         unsubscribe = onValue(userNameRef, (snapshot) => {
//             emitter(setName(snapshot.val()))
//             console.log(`Put in store ${snapshot.val()}`)
//         })
//         console.log(`initTrackWorker end`)
//         return () => {
//             unsubscribe()
//         }
//
//     })
//
// }
//
// const someSagaWithChannel = function* () {
//     const chan = call(someChannel)
//     while (true) {
//         let data = yield take(chan)
//     }
//     if (yield cancelled()) {
//         chan.close()
//     }
// }


const initTrackWorker = function* () {
    yield console.log(`initTrackWorker st`)
    onValue(userNameRef, (snapshot) => {
        put(setName(snapshot.val()))
        console.log(`Put in store ${snapshot.val()}`)
    })
    yield console.log(`initTrackWorker end`)
}

// export const stopSagaProfileTrack = function* () {
//     yield takeLatest(STOP_TRACK, stopTrackWorker)
// }

export const initSagaProfileTrack = function* () {
    yield takeLatest(INIT_TRACK, initTrackWorker)
    // yield takeLatest(INIT_TRACK, someSagaWithChannel)
}

export const initProfileTrack = () => (dispatch) => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => dispatch(selectName(snapshot.val())))
    const unsubscribeShowName = onValue(userShowName, snapshot => dispatch(selectShowName(snapshot.val())))
    unsubscribe = () => {
        unsubscribeName();
        unsubscribeShowName();
    }
}

export const stopProfileTrack = () => () => unsubscribe();

