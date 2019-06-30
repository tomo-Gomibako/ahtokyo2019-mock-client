// const baseURL = "https://ahtokyo2019.mybluemix.net"
const baseURL = "http://localhost:3000"

async function send() {
	const res = (await axios.post(baseURL + "/survivors", [
		generator()
	])).data
	const disp = document.querySelector("#display")
	disp.innerText = res.error || res.status
	disp.style.setProperty("color", randomColor())
	document.querySelector("#count").innerText = (await axios.get(baseURL + "/survivors")).data.length
}

function generator() {
	const id = ("000000" + Math.floor(Math.random() * 78364164096).toString(36)).slice(-7)
	const time = (Math.floor(Math.random() * 161804157160) + 1400000000000) / 1000 | 0
	const lat = 35.684420 + (Math.random() - 0.5) * 2
	const lon = 139.753046 + (Math.random() - 0.5) * 2
	return { id, time, lat, lon }
}

function randomColor() {
	return "#" + ("00000" + Math.floor(Math.random() * 16777216).toString(16)).slice(-6)
}
