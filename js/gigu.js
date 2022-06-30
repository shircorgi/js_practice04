$(document).ready(function(){
    //지구 이미지 웹요소(노드)를 찾아서 저장
    var $gigu = $("#gigu");

    //버튼의 이벤트를 등록 (3초만에 left값 480px으로 설정하는 것이 애니메이션 형태가 된다)
    $("#btnStart").click(function(){
        $gigu.animate({left : "480px"},3000);
    })
})