$(document).ready(function(){
	$("nav .menu li .subHome").hide()
	$("nav .menu li .subMenu").hide()
	$("nav .menu li").hover(function(){
		
		$(this).children("nav .menu li .subHome").stop(true,false).slideDown()
		$(this).children("nav .menu li .subMenu").stop(true,false).slideDown()
	},function(){
		$(this).children("nav .menu li .subHome").stop(true,false).slideUp(200)
		$(this).children("nav .menu li .subMenu").stop(true,false).slideUp()

	})
	//点击搜索图标时弹出搜索框
	
	$(".iconMenu img.search").click(function(){
		$(".searchBox p").animate({"font-size":"25px"})
		$(".searchBox a").animate({"width":"22px","height":"22px"})
		$(".searchBox input").animate({"width":"80%","height":"100px"})
		$(".searchBox").animate({"width":"100%","height":"100%","top":"0","left":"0"})
	})
	$(".searchBox a").click(function(){
		$(".searchBox").animate({"width":"0","height":"0","top":"50%","left":"50%"})
		$(".searchBox a").animate({"width":"0","height":"0"})
		$(".searchBox p").animate({"font-size":"0"})
		$(".searchBox input").animate({"width":"0","height":"0"})
	})
	//点击菜单按钮式时弹出侧滑菜单
	
	$(".menuButton").click(function(){
		$(".slideBox").animate({"right":"0"})
		$(".iconMenu").animate({"right":"320px"})
		$("a.close").animate({"width":"22px","height":"24px","right":"378px"})
	})
	$("a.close").click(function(){
		$(".slideBox").animate({"right":"-278px"})
		$(".iconMenu").animate({"right":"40px"})
		$("a.close").animate({"width":"0","height":"0"})
	})
})