(()=>{
	var form=document.getElementById("js-modal");
	var btns=form.querySelector("div:nth-child(6) div:nth-child(1)>button");
	//console.log(btns);
	btns.onclick=function(){
		ajax({
			type:"post",
			url:"data/logins/login.php",
			data:`uname=${form.uname.value}&upwd=${form.upwd.value}`,
			dataType:"json"
		}).then(data=>{
			if(data.ok==0){
				//console.log(data);
				alert(data.msg);
			}else{
				location="my_home.html";
			}
		})
	}
})();