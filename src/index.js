const ramenDiv = document.querySelector("#ramen-menu")
const allRamenImg = document.querySelector("#detail-image")
const ramName = document.querySelector("#ramenname")
const ramRes = document.querySelector("#restaurant")
const rating = document.querySelector("#rating-display")
const comment = document.querySelector("#comment-display")
const form = document.querySelector("#new-ramen")





fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(data => {

    data.forEach(ramen => {

        const ramenImg = document.createElement("img")
        ramenImg.src = ramen.image
        ramenDiv.append(ramenImg)

        ramenImg.addEventListener("click", e => {
            addRamenMenu(ramen)

        })
    })
    addRamenMenu(data[0])
})


function addRamenMenu(ram) {
    allRamenImg.src = ram.image;
    ramName.textContent = ram.name;
    comment.textContent = ram.comment;
    rating.textContent = ram.rating;
    ramRes.textContent = ram.restaurant;
}




const newRamenName = document.querySelector("#new-name")
const newRamenRes = document.querySelector("#new-restaurant")
const newImg = document.querySelector("#new-image")
const newRating = document.querySelector("#new-rating")
const newComment = document.querySelector("#new-comment")

form.addEventListener("submit", e => {
    e.preventDefault();

    console.log("submit")
    const newImgone = document.createElement("img")
        newImgone.src = newImg.value
        ramenDiv.append(newImgone)

    newImg.addEventListener("click", e => {
        addRamenMenu(newRamen)
    })


    const newRamen = {};
        newRamen["name"] = newRamenName.value;
        newRamen["restaurant"] = newRamenRes.value;
        newRamen["image"] = newImg.value;
        newRamen["rating"] = newRating.value;
        newRamen["comment"] = newComment.value;


    addRamenMenu(newRamen)

})


