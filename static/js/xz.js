
$(function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        console.log("苹果");
    }
    if (isAndroid) {
        console.log("安卓");
    }

});

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);

	if (r != null) {
		return decodeURI(r[2]);
	} else {
		return null;
	}
}
$(".start-btn").click(function(){  
	var cf = function (){
		let param_str = getUrlParam('parent_icode');
		if(param_str){
			let params = param_str.split('&');
			let params_json = {};
			for (const key in params) {
				if (params.hasOwnProperty(key)) {
					const element = params[key];
					let param = element.split('=');
					params_json[param[0]] = param[1];
				}
			}
			const input = document.createElement('input');
			input.setAttribute('readonly', 'readonly');
			input.setAttribute('value', param_str);
			document.body.appendChild(input);
			input.setSelectionRange(0, 9999);
			input.select();
			let s = false;
			if (document.execCommand('copy')) {
				document.execCommand('copy');
				console.log('复制成功');
				s = true;
			}else{
				console.log('复制失败');
			}
			document.body.removeChild(input);
			if(!s){
				setTimeout(function(){
					cf&&cf();
				}, 1000)
			}
			if(!useOpeninstall){
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				if(isAndroid){  
					window.location.href = androidAPK;
				}else if(isiOS){ 
					window.location.href = iosIPA;
				}
			}
			
		}
	}
	cf&&cf();
});

	useOpeninstall = true;

	androidAPK = "";
	iosIPA = "";
	if(useOpeninstall){
		var data = AppInstall.parseUrlParams();
		new AppInstall({
			appKey : "uz5kh4",
			onready : function() {
				var m = this;
				$(".start-btn").click(function () {
					m.install();
					return false;
				});
			}
		}, data);
	}


function tokf() {
	window.location.href = "https://dv26mq7bydjlmb87.yqhost.com/chat/text/chat_0tA09d.html?1=1&skill=6db827117a1a4dbfa94897e92bb54836&access=2c9b0a6b7f91d445017f99ab51ed1bdd";
}
