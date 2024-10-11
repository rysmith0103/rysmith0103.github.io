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
    blogPost.forEach((blogPost) => {
        console.log(blogPost)
    });
}


window.onload = () => showBlog();