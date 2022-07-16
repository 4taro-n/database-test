import {collection, addDoc, serverTimestamp, getFirestore, query, getDocs, orderBy, doc, deleteDoc, limit, getDoc} from "firebase/firestore";

const db = getFirestore();
// import db from './server';

// データベースに要素を送信
//add data into database
export const addNews = async(test) => {
    await addDoc(collection(db, 'database-test'), {
        test: test,
    })
};

export const getNews = async() => {

    const q = query(collection(db, 'database-test'));

    const querySnapshot = await getDocs(q);

    let list = [];
    querySnapshot.forEach((doc) => {
        console.log(
            doc.data().test,
        );
        list.push({
            test: doc.data().test,
    
        });
    });
    return list;
}