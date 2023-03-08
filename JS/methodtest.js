
function post(){
    let postMethod = document.getElementsByName('postMethod');
    console.log(postMethod);

    if(postMethod[0].checked){
        postWithXML();
    } else if(postMethod[1].checked){
        postWithFetch();
    } else{
        document.getElementById('response').innerText = "Please select a POST method";
    }
}

function postWithXML(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://httpbin.org/post");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        }
    };

    let name = document.getElementById('articleNameInput').value;
    let body = document.getElementById('articleBodyInput').value;
    let date = new Date();

    let data = `{
        "article-name": ${name},
        "article-body": ${body},
        "date": ${date}
    }`;

    xhr.send(data);
}

async function postWithFetch(){
    let name = document.getElementById('articleNameInput').value;
    let body = document.getElementById('articleBodyInput').value;
    let date = new Date();

    const response = await fetch("https://httpbin.org/post", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: `{
        "article-name": ${name},
        "article-body": ${body},
        "date": ${date}
        }`,
    });

    response.json().then(data => {
    console.log(JSON.stringify(data));
    });
}



function get(){
    let getMethod = document.getElementsByName('getMethod');

    if(getMethod[0].checked){
        getWithXML();
    } else if(getMethod[1].checked){
        getWithFetch();
    } else{
        document.getElementById('response').innerText = "Please select a GET method";
    }
}

function getWithXML(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://httpbin.org/get");

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4){
            document.getElementById('response').innerText = xhr.responseText;
        }
    };

    xhr.send();
}

function getWithFetch(){
    fetch("https://httpbin.org/get", {
        headers:{
            'Accept': 'application/json'
        }
    })
    .then(response => response.text())
    .then(text => {
        document.getElementById('response').innerText = text;
    });
}



function put(){
    let putMethod = document.getElementsByName('putMethod');

    if(putMethod[0].checked){
        putWithXML();
    } else if(putMethod[1].checked){
        putWithFetch();
    } else{
        document.getElementById('response').innerText = "Please select a PUT method";
    }
}

function putWithXML(){
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://httpbin.org/put");
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4){
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    let name = document.getElementById('articleNameInput').value;
    let body = document.getElementById('articleBodyInput').value;
    let date = new Date();

    data = `{
        "article-name": ${name},
        "article-body": ${body},
        "date": ${date}
    }`;

    xhr.send(JSON.stringify(data));
}

async function putWithFetch(){
    let name = document.getElementById('articleNameInput').value;
    let body = document.getElementById('articleBodyInput').value;
    let date = new Date();

    let data = `{
        "article-name": ${name},
        "article-body": ${body},
        "date": ${date}
    }`;

    fetch("https://httpbin.org/put", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {console.log(JSON.stringify(data))});

}





function deleteRequest(){
    let deleteMethod = document.getElementsByName('deleteMethod');

    if(deleteMethod[0].checked){
        deleteWithXML();
    } else if(deleteMethod[1].checked){
        deleteWithFetch();
    } else{
        document.getElementById('response').innerText = "Please select a DELETE method";
    }
}

function deleteWithXML(){
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', "https://httpbin.org/delete");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4){
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    xhr.send();
}

function deleteWithFetch(){
    alert("in deleteWithFetch");
    fetch("https://httpbin.org/delete", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
    
}