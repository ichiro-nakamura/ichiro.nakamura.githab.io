$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });



  
// 非公式ファンクラブパスワード
function gate(){
   // ▼ユーザの入力を求める
  var  UserInput = prompt("パスワードを入力して下さい:","");
   // ▼入力内容をチェック
   if( /\W+/g.test(UserInput) ) {
      // ▼半角英数字以外の文字が存在したらエラー
      alert("半角英数字のみを入力して下さい。");
   }
   // ▼キャンセルをチェック
   else if( UserInput != null ) {
      // ▼入力内容からファイル名を生成して移動
      location.href = UserInput + ".html";
   }
}
