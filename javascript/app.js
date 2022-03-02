

// function changeTheme(){
//     let colours = ["red", "blue", "green"];
//     // for(i=0; i < colours.length; i++){
//     //     document.body.style.backgroundColor = colours[i];
//     // }

//     x = Math.floor((Math.random() * 3));
//     console.log(colours[x])
//     document.body.style.backgroundColor = colours[x];

// }

function toggleDescription(){
    let briefCollapse = document.getElementById('briefDescription');
    let fullCollapse = document.getElementById('fullDescription');

    let bsCollapseBrief = new bootstrap.Collapse(briefCollapse);
    let bsCollapseFull = new bootstrap.Collapse(fullCollapse);

        bsCollapseBrief.toggle();
        bsCollapseFull.toggle();
}