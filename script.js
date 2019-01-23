// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const articleHeader = document.querySelector(".article__header")

articleHeader.textContent = "Welcome to the empty blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const allArticle = document.querySelectorAll(".article__header")

for(let i = 0; i < allArticle.length; i++){
    allArticle[i].classList.add("important")
}

// Obtain a reference the element with a class of dashed and remove it.

document.querySelector("aside").classList.remove("dashed")


// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
document.querySelector(".article__footer").classList.add("goldenrod")