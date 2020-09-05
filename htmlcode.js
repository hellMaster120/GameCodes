javascript: 
var Code = `
var Users = ["Admin"]
var Emailes = ["kshellenbarger24"]
var PassWords = ["PassWord"]
var PassWord
var User
var Emaile
*/for (UI = 0; UI < PassWords.length; UI++) {
	User = Users[UI]
}
for (PI = 0; PI < Users.length; PI++) {
	PassWord = PassWords[PI]
}
if()*/
`
function LoadHTML(){
	document.head.innerHTML = ""
	document.body.innerHTML = ""
	var Body = document.body
	var Head = document.head
	//------------------------------------Mainscript------------------------------------
	var attScript = document.createAttribute("id")
	var LoadScript = document.createElement("script")
	//------------------------------------Form/PassWorld/UserName/Email------------------------------------
	//---Form--
	var FormBody = document.createElement("form")
	var attFormBody = document.createAttribute("onsubmit")
	//---UserName--
	var UserNameBody = document.createElement("input")
	var UserNameType = document.createAttribute("type")
	var UserNameId = document.createAttribute("id")
	//---PassWord--
	var PassWordBody = document.createElement("input")
	var PassWordType = document.createAttribute("type")
	var PassWordId = document.createAttribute("id")
	//------------------------------------Adding_Mainscript------------------------------------
	attScript.value = "Main Script"
	Body.appendChild(LoadScript)
	LoadScript.setAttributeNode(attScript)
	LoadScript.innerHTML = Code
	//------------------------------------Adding_Form/PassWorld/UserName/Email------------------------------------
	//---Form--
	attFormBody.value = "CheckLogIn()"
	FormBody.setAttributeNode(attFormBody)
	Body.appendChild(FormBody)
	//---UserName--
	UserNameType.value = "text"
	UserNameBody.setAttributeNode(UserNameType)
	UserNameId.value = "UserName"
	UserNameBody.setAttributeNode(UserNameId)
	FormBody.appendChild(UserNameBody)
	//---PassWord--
	PassWordType.value = "password"
	PassWordBody.setAttributeNode(PassWordType)
	PassWordId.value = "PassWorld"
	PassWordBody.setAttributeNode(PassWordId)
	FormBody.appendChild(PassWordBody)
}
LoadHTML()
