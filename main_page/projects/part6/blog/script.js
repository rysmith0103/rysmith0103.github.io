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
    // Create the <li> element
    const li = document.createElement("li");
    // Create the first div with the class "qaBucket" for the question
    const questionDiv = document.createElement("div");
    questionDiv.className = "qaBucket";
    questionDiv.textContent = question; // Set the question text content
  
    // Create the second div with the class "hidden" for the answer
    const answerDiv = document.createElement("div");
    answerDiv.className = "hidden";
    answerDiv.textContent = answer; // Set the answer text content
    
    questionDiv.addEventListener("click", () => {
        answerDiv.classList.toggle("hidden"); // Toggle answer visibility on click
    });
    // Append the question and answer divs to the <li>
    li.appendChild(questionDiv);
    li.appendChild(answerDiv);
  
    // Return the constructed <li> element
    return li;
  };
  

window.onload = () => showBlog();