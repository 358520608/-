window.onload = function(){
//轮播图
var myul = document.getElementById('img_star');
var point = document.getElementById('list_point').children;
//console.log(myul);
var n = 0;
var mytime = setInterval(run,3000);
function run(){
	for(var i=0;i<point.length;i++){
        myul.style.transform = 'translateX(0rem)';
        point[i].className = '';
	}
	p = -n*10;
	myul.style.transform = 'translateX('+p+'rem)';
    point[n].className = 'on';
    n++;
    if(n>=point.length){
    	n = 0;
    }
}
//头条
var toutiao = document.getElementById('run_con').children;
var mytime2 = setInterval(run2,2000);
var m =0;
function run2(){
	for(var i=0;i<toutiao.length;i++){
		toutiao[i].style.display = 'none';
	}
	toutiao[m].style.display = 'block';
	m++;
	if(m>=toutiao.length){
    	m = 0;
    }
}
//秒杀
var hou = document.getElementsByClassName('hou')[0];
var min = document.getElementsByClassName('min')[0];
var sec = document.getElementsByClassName('sec')[0];
function GetRTime(){
    var EndTime= Date.parse(new Date("2017-08-15 18:20:00"));
    var NowTime = Date.parse(new Date());
    var t =EndTime - NowTime;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
     } 
     if(h<10){
      h = '0'+h;
     }
     if(m<10){
      m = '0'+m;
     }
     if(s<10){
      s = '0'+s;
     }
   hou.innerHTML = h;
   min.innerHTML = m;
   sec.innerHTML = s;
}
setInterval(GetRTime,0);

//回顶部
var top = document.getElementsByClassName('top1')[0];
top.onclick = function(){
	var y = window.scrollY;
    var time = setInterval(function(){
    	y-=20;
    	window.scrollTo(0,y);
    	if(y<=0){
       clearInterval(time);
       }
    },10);
}
window.onscroll = function(){
var top3 = document.getElementsByClassName('top')[0];
var end = window.scrollY;
//console.log(end);
if(end>=200){
	top3.style.display = 'block';
	}else{
		top3.style.display = 'none';
	}
}



}