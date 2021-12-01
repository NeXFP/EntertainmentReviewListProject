async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();

    if (email && password) {
        const response = await fetch("/api/users", {
            method: "post",
            body: JSON.stringify({
                email,
                password
            }),
            headers: { "Content-Type": "application/json" }
        });
        
        if (response.ok) {
            document.location.replace("/main");
        }
        else {
            alert(response.statusText);
        }
    }
    console.log("test")
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);