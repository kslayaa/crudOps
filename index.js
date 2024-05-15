function getUser(){
    let id=document.getElementById("gid").value 
    let result = document.getElementById("result");
    result.textContent=""
    fetch(`http://localhost:3000/userDetails/${id}`,{method:"GET"})
    .then(res=>res.json())
    .then(data=>result.insertAdjacentHTML('beforeEnd',`name:${data.name}<br>
        email:${data.email}`))
    // let s=`hi<br>you<br>${id}`
    // document.write(s)
}

function getAllUsers(){
    let res=document.getElementById("all");
    res.textContent=""
    
    fetch("http://localhost:3000/userDetails/",{method:"GET"})
    .then(res=>res.json())
    .then(data=>data.forEach(ele=>{
        let s=`id:${ele.id}<br>name:${ele.name}<br>email:${ele.email}<br><br>`
        res.insertAdjacentHTML('beforeEnd',s)
    }))
    //res.textContent=s;
    
}

function postUser(){
    let id=document.getElementById("pid").value 
    let name=document.getElementById("pname").value 
    let email=document.getElementById("pemail").value 
    let newUser={
        "id":id,
        "name":name,
        "email":email

    }
    fetch(`http://localhost:3000/userDetails`,{
        method:"POST",
        body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}

function putUser(){
    let id=document.getElementById("uid").value 
    let name=document.getElementById("uname").value 
    let email=document.getElementById("uemail").value 

    let newUser={
        "id":id,
        "name":name,
        "email":email

    }
    if(name==='') newUser={
        "id":id,
        "email":email,
        
    }
    if(email=='') newUser={
        "id":id,
        "name":name,
        
    } 
    fetch(`http://localhost:3000/userDetails/${id}`,{
        method:"PATCH",
        body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    //getAllUsers()
    
 
}

function deleteUser(){
    let id=document.getElementById("did").value 
    //let result = document.getElementById("result");
    fetch(`http://localhost:3000/userDetails/${id}`,{method:"DELETE"})
    .then(res=>res.json())
    .then(data=>console.log(data))
}