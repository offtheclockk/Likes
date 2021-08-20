var like = 3
var likeCount = document.querySelector(".like")

function addLike() {
    like++;
    likeCount.innerText = like + " like(s)"
}
