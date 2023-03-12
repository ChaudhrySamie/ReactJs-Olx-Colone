import { initializeApp } from "firebase/app";
import {
    getFirestore, collection,
    addDoc, doc, getDoc, query,
    where, getDocs, updateDoc
} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import swal from "sweetalert";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHbildM5o0m3LPFZMSTqNmXOFgDUvM3yI",
  authDomain: "reactjsolx.firebaseapp.com",
  projectId: "reactjsolx",
  storageBucket: "reactjsolx.appspot.com",
  messagingSenderId: "672666245768",
  appId: "1:672666245768:web:92185048f71119b3739d3d",
  measurementId: "G-Y24E1QQRS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// SignUp Function

async function signUp(formData, profilePic) {
    const { email, password ,name} = formData

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password,name)
        // console.log(res.user.uid)
        const uid = res.user.uid
        const docRef = await addDoc(collection(db, "users"), {
            name:name,
            email: email,
            password: password,
            uid: uid,
            profilePic: profilePic
        });
        console.log("User created")
        console.log("Document written with ID: ", docRef.id);
        return { error: false, message: "user created" }
    }
    catch (error) {
        console.log(error.message)
        return { error: true, message: "user not created" }
    }
}



// SignIn Function

async function signIn(formData) {
    const { email, password } = formData
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log("fb res", res)
        return { error: false, message: "User logged in" }
    }
    catch (error) {
        return { error: true, message: error.message }

    }
}

async function getCurrentUserData() {
    console.log("getCurrentUserData")
    const uid = getAuth().currentUser.uid
    const q = query(collection(db, "users"), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    console.log("querySnapshot", querySnapshot)

    let copyArray = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        copyArray.push(doc.data())
    });
    console.log("copyArray==>", copyArray)

    return copyArray[0]
}


// Creat Add Function


async function createAd(formData, image) {
    const { title, descryption, price } = formData
    const uid = getAuth().currentUser.uid
    try {
        const docRef = await addDoc(collection(db, "ads"), {
            title, descryption, price, image: image,
            uid: uid
        });
        swal("Add created successfully!");
        console.log("Posted", docRef.id)
        const updateDocRef = doc(db, "ads", docRef.id);
        await updateDoc(updateDocRef, {
            docId: docRef.id
        });
    }
    catch (error) {
        console.log(error.message)
    }
}

async function uploadImage(imageData) {
    console.log("Image data is", imageData)
    console.log("Image data Name", imageData[0])
    try {
        const imageRef = ref(storage, "ads/" + imageData[0].name)
        const res = await uploadBytes(imageRef, imageData[0])
        console.log("Result==>", res)
        const url = await getDownloadURL(res.ref)
        console.log("URL is", url)
        return url
    }
    catch (error) {
        console.log(error.message)
    }
}


// Get all Ads Function
async function getAllAds() {
    try {
        const q = query(collection(db, "ads"));

        const querySnapshot = await getDocs(q);
        let array = []
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        return { error: false, message: "success", data: array }
    }
    catch (error) {
        return { error: true, message: error.message, data: [] }
    }

}

async function getAdsDetail(adId) {

    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);
    try {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    catch (error) {
        console.log(error.message)
    }


}


async function getCurrentUserAds() {
    const uid = getAuth().currentUser.uid
    try {
        const q = query(collection(db, "ads"),
            where("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        let array = []
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        return { error: false, message: "success", data: array }
    }
    catch (error) {
        return { error: true, message: error.message, data: [] }
    }
}




export {
    auth,
    signUp,
    signIn,
    createAd,
    getAllAds,
    getAdsDetail,
    getCurrentUserData,
    getCurrentUserAds,
    uploadImage
}