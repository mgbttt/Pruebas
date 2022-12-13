fetch('http://172.17.0.1:8086/prueba.txt', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "prueba"
    })
})
.then((res) => res.text())
.then((data) => {
});
