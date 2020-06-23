import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }
// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'This is description',
//     note: 'This is my note',
//     amount: 15000,
//     createdAt: 912391239
// })

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: 'This is my note',
//     amount: 9123,
//     createdAt: 91239123123
// })

// database.ref('expenses').push({
//     description: 'Internet bill',
//     note: 'This is my note',
//     amount: 14111,
//     createdAt: 9123123123
// })

// const firebaseNotes = {
//     notes: {
//         asdasd: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         asdasdassd: {
//             title: 'Second note',
//             body: 'This is my second note'
//         }
//     }
// }



// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((error) => {
//         console.log('Error fetching data: ', error)
//     })

// database.ref().set({
//     name: "Teemu Tannerma",
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'front end dev',
//         company: 'OpenText'
//     },
//     location: {
//         city: 'Tampere',
//         county: 'Finland'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((error) => {
//     console.log('this failed: ', error)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data removed')
// })
// .catch((error) => {console.log('did not remove data: ', error)})
