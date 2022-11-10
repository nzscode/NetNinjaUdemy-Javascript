//!----------------------------- Getting Documents from a database -----------------------------
const list = document.querySelector('ul');

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
    <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;

    // console.log(html);
    list.innerHTML += html;
}
//^For real time listener, this section is closed
/*
db.collection('recipes').get().then(snapshot =>{
    //when we have the data 
    //console.log(snapshot.docs[0].data());
snapshot.docs.forEach(doc => {
    // console.log(doc.data());
    addRecipe(doc.data(), doc.id);
});
}).catch((err) => {
    console.log(err);
});
*/

db.collection('recipes').onSnapshot(snapshot => {
    console.log(snapshot.docChanges());
});



//!----------------------------- Adding Documents to a database -----------------------------
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    });
});

//!----------------------------- Deleting Documents from a database -----------------------------
list.addEventListener('click', e => {
    // console.log(e);
    if(e.target.tagName === 'BUTTON'){
        // console.log('button clicked');
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(id);
        db.collection('recipes').doc(id).delete().then(()=>{
            console.log('recipe deleted');
        });
    }
});

//!----------------------------- Real Time Listeners -----------------------------