// JavaScript Document


window.onload=function ()
{
	var obj = document.getElementById("box");

	var personLi = document.getElementById("personalC").getElementsByTagName("li");
	var personalR = document.getElementById("personalR");
	var Woenr = document.getElementById("woenr");
	var WoenrUl = Woenr.getElementsByTagName("ul")[0];
	var aWoenrLi = WoenrUl.getElementsByTagName("li");
	var reveal = document.getElementById("reveal");
	var revealLeft = document.getElementById("revealLeft");
	var revealRight = document.getElementById("revealRight");
	var revealUl = reveal.getElementsByTagName("ul")[0];
	var arevealLi = revealUl.getElementsByTagName("li");
	var matter = document.getElementById("matter");
	var shut = document.getElementById("shut");
	var matterDiv = document.getElementsByTagName("*");
	var oLoad=document.getElementById('load');
	var attrDiv = [];
	var attrShut = [];
	var attrShutA = [];
	var attrAmong = [];
	var personalCWidth = 0;
	var t = null;
	var time = null;
	var i = 0; 
	var speed = 2;
	
	
	
	var oBtn=document.getElementById('personalL');
	var oLeft=document.getElementById('mo');
	var oRight=document.getElementById('qi');
	var oRight1=document.getElementById('personalC');
	var sUl=oRight1.getElementsByTagName('ul')[0];
	
	setTimeout(function(){
		oLoad.className='animated zoomOut';
		oLoad.addEventListener('webkitAnimationEnd',function(){
			oLoad.style.display='none';
		});
	},1500);
	
	sUl.onmouseover=function(ev)
	{
		
		var Ev=ev||event;
		doMove(oLeft, -110);
		doMove(oRight, 350);
		Ev.cancelBubble=true;
	};
	
	sUl.onmouseout=function(ev)
	{
		
		var Ev=ev||event;
		doMove(oLeft, -110);
		doMove(oRight, 350);
		Ev.cancelBubble=true;
	};
	var flag=1;
	oBtn.onclick=function(ev)
	{
		if(flag==1){
			flag=0;
			var Ev=ev||event;
			oBtn.style.background='url(./img/left.png) no-repeat 36px 8px';
			doMove(oLeft, -110);
			//doMove(oSwf, -110);
			doMove(oRight, 350);
			Ev.cancelBubble=true;
		}else{
			flag=1;
			var Ev=ev||event;
			oBtn.style.background='url(./img/right.png) no-repeat 36px 8px';
			doMove(oLeft, 0);
			//doMove(oSwf, 0);
			doMove(oRight, 214);
			Ev.cancelBubble=true;
		}
		
	};
	
	/*oRight1.onmouseout=function(ev)
	{
		var Ev=ev||event;
		oBtn.style.background='url(./img/right.png) no-repeat 36px 8px';
		doMove(oLeft, 0);
		doMove(oSwf, 0);
		doMove(oRight, 214);
		Ev.cancelBubble=true;
	};*/
	
	function doMove(obj, iTarget)
	{
		clearInterval(obj.iTime);
		obj.iTime=setInterval(function(){
			
			if(obj.offsetLeft==iTarget)
			{
				clearInterval(obj.iTime);
			}
			else
			{
				var iSpeed=(iTarget-obj.offsetLeft)/8;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				
				obj.style.left=obj.offsetLeft+iSpeed+'px';
			}
		}, 14);
		
	}

	
	for (i=0;i<personLi.length;i++)
	{
		personLi[i].onmouseover=zhong;
		personLi[i].onmouseout=chu;
	}
	function zhong()
	{
		for (i=0;i<personLi.length;i++)
		{
			this.style.background='#332d24 no-repeat 8px center';
		}
	}
	function chu()
	{
		for (i=0;i<personLi.length;i++)
		{
			this.style.background='#1c1913 no-repeat 8px center';
		}
	}
	
	for (i=0;i<arevealLi.length;i++)
	{
		arevealLi[i].onmouseover=over;
		arevealLi[i].onmouseout=nai;
	}
	function over()
	{
		for (i=0;i<arevealLi.length;i++)
		{
			this.style.background='#453d31';
		}
	}
	function nai()
	{
		for (i=0;i<arevealLi.length;i++)
		{
			this.style.background='#3b342a';
		}
	}
	for (i=0;i<aWoenrLi.length;i++)
	{
		aWoenrLi[i].onmouseover=ku;
		aWoenrLi[i].onmouseout=out;
	}
	function ku()
	{
		for (i=0;i<aWoenrLi.length;i++)
		{
			this.style.background='#453d31';
		}
	}
	function out()
	{
		for (i=0;i<aWoenrLi.length;i++)
		{
			this.style.background='#231f19';
		}
	}
	for(i = 0; i < matterDiv.length; i++)
	{
		if(matterDiv[i].className == "among")
		{
			attrAmong.push(matterDiv[i]);
		}	
	}
	for(i = 0; i < matterDiv.length; i++)
	{
		if(matterDiv[i].className == "shutA")
		{
			attrShutA.push(matterDiv[i]);
		}	
	}
	for(i = 0; i < personLi.length; i++)
	{
		personLi[i].index = i;
		personLi[i].onclick=function ()
		{
			matter.style.display = "block";
			attrAmong[this.index].style.display = "block";
			attrAmong[this.index].style.height = 0 + "px";
			startMove(attrAmong[this.index], {height: 500,marginTop: -250});
		};
	}
	for(i = 0; i < attrShutA.length; i++)
	{
		attrShutA[i].index = i;
		attrShutA[i].onclick=function ()
		{
			var weniw = this.index;
			startMove(attrAmong[this.index], {height: 0,marginTop: 0},function ()
				{
					matter.style.display = "none";
					attrAmong[weniw].style.display = "none";	
				});
		};
	}
	for(i = 0; i < matterDiv.length; i++)
	{
		if(matterDiv[i].className == "matterCont")
		{
			attrDiv.push(matterDiv[i]);
		}	
	}
	for(i = 0; i < matterDiv.length; i++)
	{
		if(matterDiv[i].className == "shut")
		{
			attrShut.push(matterDiv[i]);
		}	
	}
	for(i = 0; i < arevealLi.length; i++)
	{
		arevealLi[i].index = i;
		arevealLi[i].onclick=function ()
		{
			attrDiv[this.index].style.display = "block";
			attrDiv[this.index].style.height = 0 + "px";
			startMove(attrDiv[this.index], {height: 500,marginTop: -250});
		};
	}
	for(i = 0; i < attrShut.length; i++)
	{
		attrShut[i].index = i;
		attrShut[i].onclick=function ()
		{
			var weniw = this.index;
			startMove(attrDiv[this.index], {height: 0,marginTop: 0},function ()
				{
					matter.style.display = "none";
					attrDiv[weniw].style.display = "none";	
				});
		};
	}
	
	
	

	
	
	
	for(i = 0; i < aWoenrLi.length; i++)
	{
		aWoenrLi[i].index = i;
		aWoenrLi[i].onclick=function ()
		{
			speed = this.index;
			show(speed);
		};
	}
	
	revealLeft.onclick=function ()
	{
		speed+=1;
		if(speed >= aWoenrLi.length)
		{
			speed = aWoenrLi.length-1;
		};
		show(speed);
	};
	revealRight.onclick=function ()
	{
		speed-=1;
		if(speed <= 0)
		{
			speed = 0;
		};
		show(speed);
	};
	function show(speed)
	{
		for(i = 0; i < aWoenrLi.length; i++)
		{
			aWoenrLi[i].className = "";
		}
		aWoenrLi[speed].className = "active";
		startMove(WoenrUl, {top: -aWoenrLi[0].offsetHeight * (speed-2)});
		startMove(revealUl, {top: -arevealLi[0].offsetHeight * speed});
	}
	rotate('#clock_3d');
};