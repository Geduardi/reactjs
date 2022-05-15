import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {getDatabase, ref} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDoQENnaGGJmLMhOZK_T9b9wYGa9euhjkQ",
    authDomain: "messanger-react-7582a.firebaseapp.com",
    projectId: "messanger-react-7582a",
    storageBucket: "messanger-react-7582a.appspot.com",
    messagingSenderId: "1023653128353",
    appId: "1:1023653128353:web:073ed2199882a7dcfda8e0"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export const auth = getAuth(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass)
}

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass)
}

export const logOut = async () => {
    await signOut(auth)
}

export const userRef = ref(db,"user")
export const userNameRef = ref(db, "user/name")
export const userShowName = ref(db, "user/showName")

export const chatsRef = ref(db, "chats")
export const getChatRefById = (chatId) => ref(db,`chats/${chatId}`)

export const messagesRef = ref(db, "messages")
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`)
export const getMessageListRefByChatId = (chatId) => ref(db, `messages/${chatId}/messageList`)