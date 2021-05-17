$(function() {
	/*로그인 버튼*/
	$(".login_wrap>a").on("click", function() {
		$("#login_f").animate({ top: "20px" }, 500);  // 로그인버튼 클릭시 폼이 내려옴
		return false;
	});

	$(".login_close_btn").on("click", function() {
		$("#login_f").animate({ top: "-500px" }, 500);  // 로그인의 닫기버튼 클릭시 폼이 올라감
		return false;
	});

	$("#user_id, #user_pw").on("focus", function() {  // placeholder 기능 사용하면 이미지 필요X
		$(this).prev().css("left", "-9999px");  // 아이디 입력란에 포커스 되면 이미지가 지워짐
	});

	$("#user_id, #user_pw").on("blur", function() {
		if ($(this).val() == "")  // 값이 입력 안되면 이미지가 다시 생김
			$(this).prev().css("left", "2px");
	});

	$("#user_id, #user_pw").on("blur", function() {
		if ($(this).val() == "") $(this).prev().css("left", "2px");
	});

	/*zoom 버튼*/
	var base = 100;
	var mybody = $("body");

	$("#zoom a").on("click", function() {  // zoom 밑의 <a> 클릭
		var zNum = $("#zoom a").index(this);   //클릭한 <a>의 인덱스 반환
		if (zNum == 0) {  //확대
			base += 10;
		} else if (zNum == 1) {  //100%
			base = 100;
		} else {  //축소
			base -= 10;
		}
		mybody
			.css("overflow-x", "auto")
			.css("transform-origin", "0 0")
			.css("transform", "scale(" + base / 100 + ")")
			.css("zoom", base + "%");

		return false;
	});

	/*인쇄 버튼*/
	$(".print_btn").on("click", function() {
		window.print();
		return false;
	})

	/*검색 창 안내 가이드*/
	$("#keyword").on("focus", function() {  // 검색창에 포커스 되면 이미지가 지워짐 
		$(this).css("background-position", "0 -500px");
	})
		.on("blur", function() {  //포커스 해제 되면 이미지가 다시 생김
			if ($(this).val() == "")
				$(this).css("background-position", "0 0");
		});

	/*GNB 메뉴*/
	var beforeEl;
	$("#gnb>li>a").on("mouseover focus", function() {
		if (beforeEl) beforeEl.children("img").attr("src",
			beforeEl.children("img").attr("src").replace("over.gif", "out.gif"));
		$("#gnb ul:visible").slideUp("fast");

		$("img", this).attr("src", $("img", this).attr("src").replace("out.gif", "over.gif"));

		$(this).next().stop().slideDown("normal");
		beforeEl = $(this);
	});
	$("#gnb").on("mouseleave", function() {
		$("#gnb ul:visible").slideUp("fast");

		if (beforeEl) beforeEl.children("img").attr("src", beforeEl
			.children("img").attr("src").replace("over.gif", "out.gif"));
	});

	/*전체메뉴*/
	$("#total_btn a").on("click", function() {
		$("#total_menu").slideDown("normal");

		$("img", this).attr("src", $("img", this).attr("src").replace("out.gif", "over.gif"));
		return false;
	});

	/*전체 메뉴 닫기 버튼*/
	$("#total_close a").on("click", function() {
		$("#total_menu").slideUp("fast");

		$("#total_btn a img")
			.attr("src", $("#total_btn a img").attr("src").replace("over.gif", "out.gif"));
		return false;
	});

	/*날짜 표기*/
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();

	$("#date_wrap .year").text(y);
	$("#date_wrap .month").text(m + 1);
	$("#date_wrap .date").text(d);

	/*관련 사이트 이동*/
	$("form[name=rel_f]").on("submit", function() {
		var url = $("select", this).val();

		window.open(url);
		return false;
	});

	/*퀵 메뉴*/
	var defaultTop = parseInt($("#quick_menu").css("top"));  // "100px" -> "100" 문자열을 숫자로
	$(window).on("scroll", function() {
		var scv = $(window).scrollTop();

		$("#quick_menu").stop().animate({ top: scv + defaultTop + "px" }, 1000);
	});
});