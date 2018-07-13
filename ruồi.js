function Fly(fid, type, color, sh, sw, x, y, fly_img, name) {

		  if (typeof fly_img == "undefined" || fly_img == '') {
		    var fly_img = "https://storage.fshare.vn/web/flies.png";
		  }

		  if (typeof sh == "undefined" || sh == 0 || typeof sw == "undefined" || sw == 0) {
		    if (typeof(window.innerWidth) == 'number') {
		      var sw = window.innerWidth;
		      var sh = window.innerHeight;
		    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		      var sw = document.documentElement.clientWidth;
		      var sh = document.documentElement.clientHeight;
		    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
		      var sw = document.body.clientWidth;
		      var sh = document.body.clientHeight;
		    };
		  }
		  var f = document.createElement("DIV");
		  var offset = 200;
		  var offsetb = 250;
		  var caminando = true;

		  if (typeof x == "undefined" || x == 0 || typeof y == "undefined" || y == 0) {
		    var x = 0;
		    var y = 0;
		    if (Math.random() < 0.5) {
		      if (Math.random() < 0.5) {
		        var x = 5;
		      } else {
		        var x = (sw - 50);
		      }
		      var y = Math.round(Math.random() * (sh - 50));
		    } else {
		      if (Math.random() < 0.5) {
		        var y = 5;
		      } else {
		        var y = (sh - 50);
		      }
		      var x = Math.round(Math.random() * (sw - 50));
		    }

		  }

		  if (typeof xx == "undefined" || xx == 0) {
		    var xx = 3;
		  }
		  if (typeof yy == "undefined" || yy == 0) {
		    var yy = 3;
		  }
		  this.movestep = 30;
		  this.type = type;
		  this.name = name;
		  this.color = color;
		  this.fid = fid;
		  this.move_strange = false;
		  if (Math.random() < 0.5) {
		    this.gender = "Đực";
		  } else {
		    this.gender = "Cái";
		  }



		  f.title = this.name + "\nLoại: " + this.type + "\nMàu sắc: " + this.color + "\nGiới tính: " + this.gender;
		  f.id = fid;
		  f.style.width = "50px";
		  f.style.height = "50px";
		  f.style.backgroundImage = "url(" + fly_img + ")";
		  f.style.backgroundPosition = "0px -" + offset + "px";
		  f.style.position = "absolute"; //"absolute";
		  f.style.left = Math.round(x) + "px";
		  f.style.top = Math.round(y) + "px";
		  f.style.zIndex = 9999;
		  f.style.cursor = "pointer";
		  f.style.cursor = "url(https://storage.fshare.vn/web/xit_muoi.png), auto;";

		  f.className = 'ruoi';
		  var parent = this;
		  f.addEventListener('click', function() {
		    parent.flying();
		  }, false);
		  document.body.appendChild(f);



		  this.setmove = function(id) {

		    var parent = this;
		    if (!parent.move_strange) {
		      if (y >= (sh - 50) || Math.random() < 0.005) {
		        yy = -yy;
		        c();
		      } else if (y <= 1 || Math.random() < 0.005) {
		        yy = -yy;
		        c();
		      }
		      if (x >= (sw - 50) || Math.random() < 0.005) {
		        xx = -xx;
		        c();
		      } else if (x <= 1 || Math.random() < 0.005) {
		        xx = -xx;
		        c();
		      }
		    }
		    x = x + xx;
		    y = y + yy;

		    f.style.left = Math.round(x) + "px";
		    f.style.top = Math.round(y) + "px";



		    if (Math.random() < 0.05) {
		      clearInterval(id);
		      id = setInterval(function() {
		        parent.p(id)
		      }, this.movestep);
		      caminando = false;
		      showOffset(offset);
		    } else {
		      if (caminando) {
		        caminando = false;
		        showOffset(offset);
		      } else {
		        caminando = true;
		        showOffset(offsetb);
		      }
		    }

		  };
		  this.p = function(id, movestep) {
		    var parent = this;
		    if (Math.random() < 0.075) {
		      clearInterval(id);
		      id = setInterval(function() {
		        parent.setmove(id)
		      }, parent.movestep);
		    }
		  };

		  function c() {
		    if (yy < 0) {
		      if (xx < 0) {
		        offset = 100;
		        offsetb = 150;
		      } else {
		        offset = 0;
		        offsetb = 50;
		      }
		    } else if (xx < 0) {
		      offset = 300;
		      offsetb = 350;
		    } else {
		      offset = 200;
		      offsetb = 250;
		    }
		  };

		  function showOffset(o) {
		    f.style.backgroundPosition = "0px -" + o + "px";
		  }
		  this.move = function() {
		    var parent = this;
		    var id = setInterval(function() {
		      parent.setmove(id);
		    }, parent.movestep);
		  }
		  this.flying = function() {

		    this.movestep = 0;
		    var parent = this;
		    timeout = Math.random() * (5000 - 2500) + 2500;

		    setTimeout(function() {
		      parent.movestep = 30;
		    }, timeout);

		  }
		  this.moveout = function() {
		    var parent = this;
		    var outw = 0;
		    var outh = 0;
		    if (typeof(window.innerWidth) == 'number') {
		      var outw = window.innerWidth;
		      var outh = window.innerHeight;
		    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		      var outw = document.documentElement.clientWidth;
		      var outh = document.documentElement.clientHeight;
		    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
		      var outw = document.body.clientWidth;
		      var outh = document.body.clientHeight;
		    };
		    parent.move_strange = true;
		    var hide = setInterval(function() {
		      if (y >= outh - 50 || x >= outw - 50 || y <= 0 || x <= 0) {
		        $("#" + parent.fid).hide();
		        parent.move_strange = false;
		        clearInterval(hide);
		      }
		    }, 30);
		  }
		  this.goback = function() {
		    var parent = this;
		    var outw = 0;
		    var outh = 0;
		    if (typeof(window.innerWidth) == 'number') {
		      var outw = window.innerWidth;
		      var outh = window.innerHeight;
		    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		      var outw = document.documentElement.clientWidth;
		      var outh = document.documentElement.clientHeight;
		    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
		      var outw = document.body.clientWidth;
		      var outh = document.body.clientHeight;
		    };
		    parent.move_strange = true;
		    var show = setInterval(function() {
		      if (y >= outh - 50 || x >= outw - 50 || y <= 0 || x <= 0) {
		        $("#" + parent.fid).show();
		        parent.move_strange = false;
		        clearInterval(show);
		      }
		    }, 30);
		  }
		}

		var w = window,
		  d = document,
		  e = d.documentElement,
		  g = d.getElementsByTagName('body')[0],
		  x = w.innerWidth || e.clientWidth || g.clientWidth,
		  y = w.innerHeight || e.clientHeight || g.clientHeight;
		// alert(x + ' × ' + y);

		var height_fly = y;
		var width_fly = x;

		// 12 con ruồi
		for (var i = 3; i >= 0; i--) {

		  var fly1 = new Fly("fly1", "Nhặng", "Đen", height_fly, width_fly, 0, 0, "https://storage.fshare.vn/web/flies.png", "Long ruồi").move();

		  var fly2 = new Fly("fly2", "Nhặng", "Xanh", height_fly, width_fly, 0, 0, "https://storage.fshare.vn/web/style_1.png", "King ruồi").move();

		  var fly3 = new Fly("fly3", "Nhặng", "Tuyệt sắc", height_fly, width_fly, 0, 0, "https://storage.fshare.vn/web/style_2.png", "Tom ruồi").move();

		  var fly4 = new Fly("fly4", "Nhặng", "Hồng", height_fly, width_fly, 0, 0, "https://storage.fshare.vn/web/style_3.png", "Queen ruồi").move();

		};