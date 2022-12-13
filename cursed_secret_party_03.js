fetch('http://172.17.0.1:8086/prueba.txt', {
    method: 'GET'
})
.then((res) => res.text())
.then((data) => {
});
