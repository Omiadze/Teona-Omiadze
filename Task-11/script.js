document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username === "teoomiadze18@gmail.com" && password === "teo123"){
        const token = Math.random().toString(36).substr(2)
        console.log(token)
        localStorage.setItem("token", token)
        window.location.href = "./home.html"

    }else{
        alert("wrong password or email")
    }
    
    const token = localStorage.getItem("token")
if(token){
    window.location.href = "./home.html"
}
})
