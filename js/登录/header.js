(()=>{
	$.ajax({
		type:"get",
		url:"header.html"
	}).then(function(html){
		$(".header").html(html);
		window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var header=document.getElementsByClassName("header");
		}
//------------------------登录------------------------------------
		var loginList=  document.getElementById("loginList");
		var welcomeList=document.getElementById("welcomeList");
		var uname=document.getElementById("uname");
		var mmc=document.getElementById("my_music");
		var dl=document.getElementById("jq22-container");
		$.ajax({
			type:"get",
			url:"data/logins/isLogin.php",
			dataType:"json"
		}).then(data=>{
			//ok:1 uname="husifan"
			//ok:0
			if(data.ok==0){
				loginList.style.display="block";
				welcomeList.style.display="none";
				dl.style.visibility="visibile";				
			}else{
				loginList.style.display="none";
				welcomeList.style.display="block";
				dl.style.visibility="hidden";
				uname.innerHTML=data.name;
				location="my_home.html";
			}
		})
//	document.getElementById("btnLogin").onclick=e=>{
//		e.preventDefault();
//		location="login.html?back="+location.href;
//	};
//------------------------注销------------------------------------
	document.getElementById("btnLogout").onclick=e=>{
		e.preventDefault();
		ajax({
		  type:"get",
		  url:"data/logins/logout.php"
		}).then(()=>location="index.html");
	  }
//------------------------判断是否登录----------------------------


	});
})();	
