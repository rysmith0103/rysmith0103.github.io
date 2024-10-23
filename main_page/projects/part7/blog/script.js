 // Get the elements
 const hamburgerMenu = document.getElementById('hamburger-menu');
 const navContainer = document.getElementById('main-nav-container');

 // Toggle the menu when the hamburger icon is clicked
 hamburgerMenu.onclick = () => {
     navContainer.classList.toggle('show');
 };

const getBlog = async () => {
    const url = "https://rysmith0103.github.io/faq.json"

    try{
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

const showBlog = async () => {
    let blogPost = await getBlog();
    blogPost.faq.forEach((blogPost) => {
        getBlogQuestion(blogPost);
    });
}

const getBlogQuestion = (blogPost) => {
    let ul = document.getElementById("eachFaq");
    ul.append(getLi(blogPost.question, blogPost.answer));
}
const getLi = (question, answer) => {
    //<li> element
    const li = document.createElement("li");
    // first div with the class "qaBucket" for the question
    const questionDiv = document.createElement("div");
    questionDiv.className = "qaBucket";
    questionDiv.textContent = question; 
  
    // second div with the class hidden
    const answerDiv = document.createElement("div");
    answerDiv.className = "hidden";
    answerDiv.textContent = answer; 

    questionDiv.addEventListener("click", () => {
        answerDiv.classList.toggle("hidden");
    });
    // Append the question and answer
    li.appendChild(questionDiv);
    li.appendChild(answerDiv);
  
    return li;
  };
  

window.onload = () => showBlog();