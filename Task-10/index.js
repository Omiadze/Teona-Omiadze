let user = [
    {
        username: "teoomiadze18@gmail.com",
        password: "nanami1"
    },
    {
        username: "teona.omiadze.1@iliauni.edu.ge",
        password: "nanami2"
    },
    {
        username: "luka.1@iliauni.edu.ge",
        password: "nanami3"
    },
    {
        username: "gio4.1@iliauni.edu.ge",
        password: "nanami4"
    }
    ]
    

    document.getElementById("loginForm").addEventListener("submit", function(e){
        e.preventDefault()
        
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        
        let found = false

        for(let i = 0; i < user.length; i++){
            if(username === user[i]["username"] && password === user[i]["password"] ){
                const token = Math.random().toString(36).substr(2)
                console.log(token)
                localStorage.setItem("token", token)
                window.location.href = "./home.html"
                found = true
                break;
            }
        }
        if(!found){
            alert("wrong username or password")
        }
        const token = localStorage.getItem("token")
        if(token){
             window.location.href = "./home.html"
        }
    })