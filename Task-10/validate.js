const token = localStorage.getItem("token")

if(token){
    window.location.href = "./home.html"
    return
} else  {
    window.location.href = "./index.html"
    return
}