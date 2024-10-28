
const handleFormSubmission = async (e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    let response = await sendEstimateRequest();

    if (response && response.status === 200) {
        result.innerHTML = "Estimate request successfully submitted.";
        result.classList.remove('error');
        result.classList.add('success');
    } else {
        result.innerHTML = "Sorry, your request could not be submitted.";
        result.classList.add('error');
    }
};

const sendEstimateRequest = async () => {
    const form = document.getElementById("estimateForm");
    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData);
    const jsonData = JSON.stringify(dataObject);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: jsonData
        });

        return response;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = "Sorry, there was an error submitting your request.";
    }
};

document.getElementById("estimateForm").onsubmit = handleFormSubmission;
