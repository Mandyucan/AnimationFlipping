var oLi = Array.prototype.slice.call(document.getElementsByTagName('li'));
oLi.forEach(function (ele,index) {
	ele.addEventListener('mouseenter',function (e) {
		addClass(this,e,'in'); //e是事件，this触发的事件
		// console.log(oLi);
	})
	ele.addEventListener('mouseleave',function (e) {
		addClass(this,e,'out');
	})	
})

function addClass(ele,e,state) {
	var d = getDirection(ele,e),
		direction;
	// console.log(d);
	switch(d) {
		case 0 :
			direction = '-bottom';
			break;
		case 1 :
			direction = '-left';
			break;
		case 2 :
			direction = '-top';
			break;
		case 3 :
			direction = '-right';	
	}
	ele.className = state + direction;
}
//鼠标位置判断
function getDirection(ele,e) {
	var x = e.offsetX - ele.offsetWidth/2;//x方向上的值减掉二分之一宽 ， 中心点挪到中心 
	var y = e.offsetY - ele.offsetHeight/2;

	// return d =  Math.atan2(y,x); //得到的是弧度制
	// return d =  Math.atan2(y,x) * (180 / Math.PI);//转成角度制
	 return d = ((Math.round((Math.atan2(y,x) * (180 / Math.PI))/90))+3)%4;
}

