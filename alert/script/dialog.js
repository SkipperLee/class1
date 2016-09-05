window.alert=function(opt){
	var dialog01=new Dialog(opt);
		dialog01._create();
}
function Dialog(opt){
	this.config={
		width:300,
		height:200,
		top:50,
		left:100,
		text:"",
		closeCallBack:function(){}
	};
	for(var i in opt){
		this.config[i]=opt[i];
	}
	this.body=document.getElementsByTagName("body")[0];
	this.dialog=null;
}

Dialog.prototype={
	_create:function(){
		var that=this;
		var dialog=document.createElement("div");
		var btn=document.createElement("span");
		dialog.style.cssText="width:"+
			this.config.width+"px;height:"+
			this.config.height+"px; position: absolute;top:"+
			this.config.top+"px;left:"+
			this.config.left+"px; background: #ccc; border: 1px solid #666;";
		btn.style.cssText="position: absolute; right:-10px;top:-10px; width:20px; height: 20px; background:#999;color:#fff; font-size: 18px;";
		btn.innerHTML="X";
		dialog.innerHTML=this.config.text;
		dialog.appendChild(btn);
		this.body.appendChild(dialog);
		this.dialog=dialog;
		
		btn.onclick=function(){
			that._delete();
			that.config.closeCallBack(that);
		}
	},
	_delete:function(){
		this.body.removeChild(this.dialog);
	}
}
