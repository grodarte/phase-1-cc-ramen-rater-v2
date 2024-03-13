// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const display = document.getElementById("ramen-detail")
  display.querySelector(".detail-image").src = `${ramen.image}`
  display.querySelector("h2").textContent = ramen.name
  display.querySelector("h3").textContent = ramen.restaurant
  document.getElementById("rating-display").textContent = ramen.rating
  document.getElementById("comment-display").textContent = ramen.comment
};

const addSubmitListener = () => {
  // Add code
  document.getElementById("new-ramen").addEventListener("submit", e=>{
    e.preventDefault()
    const ramen = {
      name: e.target["new-name"].value,
      restaurant: e.target["new-restaurant"].value,
      image: e.target["new-image"].value,
      rating: parseInt(e.target["new-rating"].value),
      comment: e.target["new-comment"].value
    }
    const ramenPic = document.createElement("img")
    ramenPic.src = `${ramen.image}`
    ramenPic.addEventListener("click", () => {
      handleClick(ramen)
    })
    document.getElementById("ramen-menu").appendChild(ramenPic)

  })
}

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then(res=>res.json())
  .then(ramenData=>{
    ramenData.forEach(ramen=>{
      const ramenPic = document.createElement("img")
      ramenPic.id = ramen.id
      ramenPic.setAttribute("src", `${ramen.image}`)
      // ramenPic.setAttribute("name", `${ramen.name}`)
      // ramenPic.setAttribute("restaurant", `${ramen.restaurant}`)
      // ramenPic.setAttribute("rating", `${ramen.rating}`)
      // ramenPic.setAttribute("comment", `${ramen.comment}`)
      ramenPic.addEventListener("click", () => {
        handleClick(ramen)
      })
      document.getElementById("ramen-menu").appendChild(ramenPic)
    })
  })
};

const main = () => {
  // Invoke displayRamens here
document.addEventListener("DOMContentLoaded", ()=>{
  displayRamens()
  addSubmitListener()
})
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
