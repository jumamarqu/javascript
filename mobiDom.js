function addField(){
window.location.href ="https://www.mobiwork.com/user/settings/forms/21970/field/add.html";
window.addEventListener("load", function(){
      document.querySelector("#type").value=2
      document.querySelector("#name").value="CANT";
      document.querySelector("#btnSave").click();    
})
}
