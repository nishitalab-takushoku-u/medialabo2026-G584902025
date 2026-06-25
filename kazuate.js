// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let kaisuhyouji = document.querySelector('span#kaisu');
let r = document.querySelector('p#result');

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  if(kaisu < 3){
    kaisu++;
    kaisuhyouji.textContent = kaisu; 
  }else{
    kaisu++;
  }
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let n = document.querySelector('input[name="number"]'); 
  let n2 = n.value;
  let yoso = Number(n2);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(kaisu > 3){
    r.textContent="答えは" + kotae + "でした。すでにゲームは終わっています。" 
  }else if(kaisu == 3 && yoso != kotae){
    r.textContent="まちがい.残念でした答えは" + kotae +"です．" 
  }else if(yoso == kotae){
    r.textContent = "正解です.おめでとう!";
  }else if(yoso < kotae){
    r.textContent = "まちがい.答えはもっと大きいですよ.";
  }else if(yoso > kotae){
    r.textContent = "まちがい.答えはもっと小さいですよ.";
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let d = document.querySelector('button#guess');
d.addEventListener('click',hantei); 
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
