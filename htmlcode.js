
var Code = `
Users = ["Admin"]
Emaile = ["kshellenbarger24","kshellenbarger24@buckeyeschools.org"]
PassWords = ["PassWord"]
console.log(Emaile[0])
`
document.head.innerHTML = ""
document.body.innerHTML = ""
var Body = document.body
var Head = document.head
var attScript = document.createAttribute("id")
var LoadScript = document.createElement("script")
attScript.value = "Main Script"
Body.appendChild(LoadScript)
LoadScript.setAttributeNode(attScript)
LoadScript.innerHTML = Code
