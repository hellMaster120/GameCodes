Pass = "ewrwe"
var Code = `
  console.log(Pass)
`
function LoadHtml(){
  
}
function CheckEmail(){}
document.head.innerHTML = ""
document.body.innerHTML = ""
var Body = document.body
var Head = document.head
var attScript = document.createAttribute("id")
var LoadScript = document.createElement("script")
attScript.value = "Main Script"
LoadEmailes()
LoadScript.innerHTML = Code
Body.appendChild(LoadScript)
LoadScript.setAttributeNode(attScript)
