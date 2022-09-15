let dataComment = [];
const imageInput = document.querySelector("#profilePicInput");


imageInput.addEventListener("change", () => {
    let preview = document.querySelector('#profilePicturePreview');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }

    /*console.log(imageInput.value);
    let uploadImage = "";

    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploadImage = reader.result;
        console.log(uploadImage);
        document.querySelector("#profilePicture").setAttribute("src",uploadImage);
    })
    reader.readAsDataURL(this.files[0]);*/
})

addEventListener("submit",(event) =>{
    event.preventDefault();
    alert("lmao");
});

function saveComment(){
    event.preventDefault();

    const commentContent = document.getElementById("commentContentInput").value;
    const username = document.getElementById("usernameInput").value;
    const profilePicture = document.getElementById("profilePicturePreview").src;
    
    systemDate = new Date();
    const date = `${systemDate.getDate()}/${systemDate.getMonth()+1}/${systemDate.getFullYear()}    ${systemDate.getHours()}:${systemDate.getMinutes()}`;

    const comment = {
        "date": date,
        "username": username,
        "commentContent": commentContent,
        "profilePicture": profilePicture
    }

    dataComment.push(comment);
    drawComment();
}

function drawComment(){
    const commentsBox = document.querySelector(".commentsBox");
    commentsBox.innerHTML = "";

    const template = document.getElementById("template-commentCard").content;
    const fragment = document.createDocumentFragment();

    dataComment.forEach( comment => {
        const clone = template.cloneNode(true);

        clone.querySelector('.date').textContent = comment.date;
        clone.querySelector('.username').textContent = comment.username;
        clone.querySelector('.commentContent').textContent = comment.commentContent;
        clone.querySelector('.profilePic').setAttribute("src",comment.profilePicture);

        fragment.appendChild(clone);
        commentsBox.appendChild(fragment);
    });
}