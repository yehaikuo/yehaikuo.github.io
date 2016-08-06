
function a(x,y){
	var div=document.getElementsByClassName(x)[0];
	var oA=div.getElementsByTagName('a')[0];
	var ul=document.getElementsByClassName(y)[0];
	var aLi=ul.getElementsByTagName('li');	
	var aA=ul.getElementsByTagName('a');
	var oSp=document.getElementById('hd-sp');
	div.onmouseover=function(){
		div.style.border='1px solid #ddd';
		div.style.borderBottom='0';
		oA.style.background='#fff';
		ul.style.display='block';	
	};
	div.onmouseout=function(){
		div.style.border='';
		ul.style.display='none';
		div.style.background='';
		oA.style.background='';	
	};
}

function b(x,y){
	var div=document.getElementById(x);
	var ul=document.getElementsByClassName(y)[0];
	var aLi=ul.getElementsByTagName('li');	
	var aA=ul.getElementsByTagName('a');
	var oSp=document.getElementById('hd-sp');
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0; i<aLi.length; i++){
				aA[i].style.background='#fff';
				aA[i].style.color='#666';	
			}
			aA[this.index].style.background='#ccc';
			aA[this.index].style.color='#fff';
			oSp.innerHTML=aA[this.index].innerHTML;	
			ul.style.display='none';
		};
	}	
}


function c(x,y,z){
	var ul=document.getElementsByClassName(x)[0];
	var aLi=ul.getElementsByTagName(z);
	var aA=ul.getElementsByTagName('a');
	var div=document.getElementsByClassName(y)[0];
	var aUl=div.getElementsByTagName('ul');
	for(var i=0; i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0; i<aLi.length; i++){
				aA[i].className='c4-a';	
				aUl[i].className='';
			}
			aA[this.index].className='c4-a1';
			aUl[this.index].className='show';
		};
		
	}
}
 function d(x,y,z){
	var ul=document.getElementsByClassName(x)[0];
	var aLi=ul.getElementsByClassName(y);
	var aDiv=ul.getElementsByClassName(z);
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			aDiv[this.index].style.display='block';
			this.className='li3';	
		};
		aLi[i].onmouseout=function(){
			aDiv[this.index].style.display='';
			this.className='li1';	
		};	
	}	 
 };
 
 	
function e(x,y,z,h){
	var ul=document.getElementsByClassName(x)[0];
	var aLi=ul.getElementsByTagName(h);
	var aA=ul.getElementsByTagName('a');
	var div=document.getElementsByClassName(y)[0];
	var aUl=div.getElementsByClassName(z);
	for(var i=0; i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0; i<aLi.length; i++){
				aA[i].className='c4-a';	
				//aUl[i].style.display='none';
				aLi[i].style.borderBottom='1px solid #e4e4e4';
				aUl[i].className=z;
			}
			aA[this.index].className='c4-a1';
			aLi[this.index].style.borderBottom='0';
			//aUl[this.index].style.display='block';
			aUl[this.index].className=z+' '+'show';
		};
		
	}
}

function color(){
	var aA=document.getElementsByTagName('a');
	for(var i=0;i<aA.length; i++){
		aA[i].onmouseover=function(){
			this.style.color='red';	
		};
		aA[i].onmouseout=function(){
			this.style.color='';	
		};	
	}	
}


function img(){
	var aA=document.getElementsByTagName('img');
	for(var i=0;i<aA.length; i++){
		aA[i].onmouseover=function(){
			this.style.boxShadow='0px 3px 3px 1px #369';
			this.style.transform='translate(0,-5px)';
		};
		aA[i].onmouseout=function(){
			this.style.boxShadow='';	
			this.style.transform='';
		};	
	}	
}

function fix(){
	var oDiv=document.getElementsByClassName('fix')[0];
	var aA=oDiv.getElementsByTagName('a');
	var array=['服装鞋包','个户美妆','电子产品','家用电器','电脑数码','运动健身','居家生活','母婴玩具','食品保健','图书阅读','生活服务'];
	var array1=['1F','2F','3F','4F','5F','6F','7F','8F','9F','10F','11F'];
	for(var i=0; i<aA.length; i++){
		aA[i].index=i;
		aA[i].onmouseover=function(){
			this.style.background='red';
			this.style.color='#fff';
			this.innerHTML=array[this.index];	
		};
		aA[i].onmouseout=function(){
			this.style.background='';
			this.style.color='#';
			this.innerHTML=array1[this.index];
		};	
	}	
}

window.onload=function(){
	/*上边导航显示*/
	a('header-l','header-l-div1')
	a('li5','hd-div2');
	a('li7','li7-box');
	a('li8','li8-box');
	a('li9','li9-box');
	/*地区获取及显示*/
	b('li5','header-l-div1');
	/*楼层显示*/
	c('c4-r-ul1','c4-r-div2','li');
	c('c7-r-ul1','c7-r-div2','li');
	c('c8-r-ul1','c8-r-div2','li');
	c('c9-r-ul1','c9-r-div2','li');
	c('c10-r-ul1','c10-r-div2','li');
	c('c12-r-ul1','c12-r-div2','li');
	c('c13-r-ul1','c13-r-div2','li');
	c('c14-r-ul1','c14-r-div2','li');
	c('c15-r-ul1','c15-r-div2','li');
	
	
	
	//左侧导航栏显示
	d('ct-div3-ul1','li1','ct-div3-li1-div');
	e('c16-r-ul1','c16-r-div2','c16','li');
	e('select','select','st-box1','input');
	//图片轮播
	lunbo('ct-div3-box1');
	lunbo('c17-r-box1');
	lunbo('c17-r-box2');
	color();
	img();
	fix();
};

//图片轮播图
function lunbo(x){
	var oDiv=document.getElementsByClassName(x)[0];
	var aLi=oDiv.getElementsByTagName('li');
	var aSpan=	oDiv.getElementsByTagName('span');
	for(var i=0; i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function(){
			for(var i=0; i<aSpan.length;i++){
				aSpan[i].className='';
				aLi[i].className='';
			}
		this.className='span1';
		aLi[this.index].className='show';	
		}
	}
}
