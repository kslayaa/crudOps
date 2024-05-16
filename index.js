function getUser(){
    let id=document.getElementById("gid").value 
    let result = document.getElementById("all");
    
    fetch(`http://localhost:3000/userDetails/${id}`,{method:"GET"})
    .then(res=>res.json())
    .then(data=>{
        result.textContent=""
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=data.id;
        let td2=document.createElement("td");
        td2.textContent=data.name;
        let td3=document.createElement("td");
        td3.textContent=data.email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        result.appendChild(tr);
    })
    // let s=`hi<br>you<br>${id}`
    // document.write(s)
}

function getAllUsers(){
    let re=document.getElementById("all");
    re.textContent=""
    
    fetch("http://localhost:3000/userDetails/",{method:"GET"})
    .then(res=>res.json())
    .then(dataall=>dataall.forEach(data=>{
        
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=data.id;
        let td2=document.createElement("td");
        td2.textContent=data.name;
        let td3=document.createElement("td");
        td3.textContent=data.email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        re.appendChild(tr);
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
    //.then(data=>)
    
 
}

function deleteUser(){
    let id=document.getElementById("did").value 
    //let result = document.getElementById("result");
    fetch(`http://localhost:3000/userDetails/${id}`,{method:"DELETE"})
    .then(res=>res.json())
    .then(data=>console.log(data))
}