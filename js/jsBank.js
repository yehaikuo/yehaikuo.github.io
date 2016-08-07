
function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn&&fn();
		},false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			fn&&fn();
		});
	}
}

function getStyle(obj, attr)
{
	if(obj.currentStyle)	//IE
	{
		return obj.currentStyle[attr];
	}
	else	//FF、chrome
	{
		return document.defaultView.getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, target, fnCallBack)
{
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	
	obj.timer=setInterval(function (){
		doMove(obj, target, fnCallBack);
	}, 14);
}

function doMove(obj, target, fnCallBack)
{
	var current=0;
	var attr='';
	var iSpeed=0;
	
	var bStop=true;	//假设这一次运动就会停止
	
	for(attr in target)
	{
		current=parseFloat(getStyle(obj, attr));
		
		//if(current!=target[attr])	//没有到达目标
		if(Math.abs(current-target[attr])>1/100)
		{
			bStop=false;
			
			iSpeed=(target[attr]-current)/4;
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(current+iSpeed)*100+')';
				obj.style.opacity=current+iSpeed;
			}
			else
			{
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				obj.style[attr]=current+iSpeed+'px';
			}
		}
	}
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		if(fnCallBack)
		{
			fnCallBack();
		}
	}
}

function time(obj1,obj2,s,x){	//时间盒子  ，盒子每一面的集合 ， 时、分、秒 ， 个位还是十位
	obj1.style.transition='0.5s all ease';
	obj1.style.transform='rotateX(-90deg)';
	obj1.addEventListener('transitionend',function(){
		obj1.style.transition='none';
		obj1.style.transform='rotateX(0deg)';
		switch(x){
			case 's1':		//秒个位
				obj2[0].innerHTML=s%10;		//前
				obj2[2].innerHTML=(parseInt(obj2[0].innerHTML)+1)%10;	//上
				obj2[1].innerHTML=(parseInt(obj2[0].innerHTML)+2)%10;
				obj2[3].innerHTML=(parseInt(obj2[0].innerHTML)+3)%10;	
				break;
			case 's2':	//秒十位
				obj2[0].innerHTML=parseInt(s/10);
				obj2[2].innerHTML=(parseInt(obj2[0].innerHTML)+1)%6;	
				obj2[1].innerHTML=(parseInt(obj2[0].innerHTML)+2)%6;
				obj2[3].innerHTML=(parseInt(obj2[0].innerHTML)+3)%6;	
				break;
			case 'h1':
				if(s>20){
					obj2[0].innerHTML=s%10;		//前
					obj2[2].innerHTML=(parseInt(obj2[0].innerHTML)+1)%4;	//上
					obj2[1].innerHTML=(parseInt(obj2[0].innerHTML)+2)%4;
					obj2[3].innerHTML=(parseInt(obj2[0].innerHTML)+3)%4;	
				}else{
					obj2[0].innerHTML=s%10;		//前
					obj2[2].innerHTML=(parseInt(obj2[0].innerHTML)+1)%10;	//上
					obj2[1].innerHTML=(parseInt(obj2[0].innerHTML)+2)%10;
					obj2[3].innerHTML=(parseInt(obj2[0].innerHTML)+3)%10;
				}
				break;
			case 'h2':
				obj2[0].innerHTML=parseInt(s/10);
				obj2[2].innerHTML=(parseInt(obj2[0].innerHTML)+1)%3;	
				obj2[1].innerHTML=(parseInt(obj2[0].innerHTML)+2)%3;
				obj2[3].innerHTML=(parseInt(obj2[0].innerHTML)+3)%3;
				break;
		}
		
	},false);
}
function rotate(id){
	var oDiv=document.querySelector(id);
	var oTimeBox=oDiv.children[0];
	var aTimeBox=oTimeBox.children;
	var timer=null;
	var x=0;
	var s1=aTimeBox[7].getElementsByTagName('span');	//秒个位
	var s2=aTimeBox[6].getElementsByTagName('span');	//秒十位
	var m1=aTimeBox[4].getElementsByTagName('span');	//分个位
	var m2=aTimeBox[3].getElementsByTagName('span');	//分十位
	var h1=aTimeBox[1].getElementsByTagName('span');	//时个位
	var h2=aTimeBox[0].getElementsByTagName('span');	//时十位
	var sbox1=aTimeBox[7].children[0];					//秒个位盒子
	var sbox2=aTimeBox[6].children[0];					//秒十位盒子
	var mbox1=aTimeBox[4].children[0];					//分个位盒子
	var mbox2=aTimeBox[3].children[0];					//分十位盒子
	var hbox1=aTimeBox[1].children[0];					//时个位盒子
	var hbox2=aTimeBox[0].children[0];					//时十位盒子
	var flag=1;
	function clock(){
		var oDate=new Date();
		var s=oDate.getSeconds();
		var m=oDate.getMinutes();
		var h=oDate.getHours();	
		if(flag){
			time(sbox1,s1,s,'s1');
			time(sbox2,s2,s,'s2');
			time(mbox1,m1,m,'s1');
			time(mbox2,m2,m,'s2');
			time(hbox1,h1,h,'h1');
			time(hbox2,h2,h,'h2');
			flag=0;
		}
		time(sbox1,s1,s,'s1');
		if(s%10==0){
			time(sbox2,s2,s,'s2');			
		}
		
		if(s==0){
			time(mbox1,m1,m,'s1');
			if(m%10==0){
				time(mbox2,m2,m,'s2');
			}
		}	
		
		
		if(m==0&&s==0){
			time(hbox1,h1,h,'h1');
			if(h%10==0){
				time(hbox2,h2,h,'h2');
			}
		}
		/*sbox.style.transition='0.5s all ease';
		sbox.style.transform='rotateX(-90deg)';
		sbox.addEventListener('transitionend',function(){
			sbox.style.transition='none';
			sbox.style.transform='rotateX(0deg)';
			s1[0].innerHTML=s%10;		//前
			s1[2].innerHTML=(parseInt(s1[0].innerHTML)+1)%10;	//上
			s1[1].innerHTML=(parseInt(s1[0].innerHTML)+2)%10;
			s1[3].innerHTML=(parseInt(s1[0].innerHTML)+3)%10;	
		},false);*/
	}
	timer=setInterval(function(){
		clock();
	},1000);
}



