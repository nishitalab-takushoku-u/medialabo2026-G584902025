
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let y = 1
  for(let x of data.results.shop){
    console.log('検索結果' + y + '件目')
    console.log('店名:' +x.name) 
    console.log('アクセス:' + x.access) 
    console.log('住所:' + x.address) 
    console.log('予算:' + x.budget.name) 
    console.log('ジャンル:' + x.genre.name)
    console.log('営業時間:' + x.open) 
    console.log('最寄駅:' + x.station_name) 
    console.log('サブジャンル:' + x.sub_genre.name) 
    y++
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
let kaisu = 0;
function printDom(data) {
  if(kaisu === 1){
    let sakujo = document.querySelector('div')
    sakujo.remove()
  }
  let body = document.querySelector('body') 
  let div = document.createElement('div') 
  div.setAttribute('id','result') 
  body.insertAdjacentElement('beforeend',div) 
  let num = 0;
  for(let i of data.results.shop){
    num++
  }
  if(num == 0){
    let non = document.createElement('h1')
    non.textContent = 'グルメ情報(検索結果は0件)'
    div.insertAdjacentElement('beforeend',non)

  }else{ 
  let table = document.createElement('table') 
  div.insertAdjacentElement('beforeend',table) 
  let caption = document.createElement('caption') 
  let h1 = document.createElement('h1') 
  h1.textContent = "グルメ情報(検索結果は"+num+"件)" 
  table.insertAdjacentElement('beforeend',caption)
  caption.insertAdjacentElement('beforeend',h1) 
  let thead = document.createElement('thead') 
  table.insertAdjacentElement('beforeend',thead) 
  let tr = document.createElement('tr') 
  thead.insertAdjacentElement('beforeend',tr) 
  let td = document.createElement('td') 
  td.textcontent = "件数"; 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "名前" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "アクセス" 
  tr.insertAdjacentElement('beforeend',td) 
  td.setAttribute('scope','col')
  td = document.createElement('td') 
  td.textContent = "住所" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "予算" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "キャッチコピー" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "ジャンル" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "営業時間" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "最寄駅" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 
  td = document.createElement('td') 
  td.textContent = "サブジャンル" 
  td.setAttribute('scope','col') 
  tr.insertAdjacentElement('beforeend',td) 

  let tbody = document.createElement('tbody') 
  table.insertAdjacentElement('beforeend',tbody) 
  let kensu = 1
  for(let s of data.results.shop){
    tr = document.createElement('tr') 
    tbody.insertAdjacentElement('beforeend',tr) 
    th = document.createElement('th') 
    th.textContent = kensu
    tr.insertAdjacentElement('beforeend',th) 
    th.setAttribute('scope','row') 
    th = document.createElement('th') 
    th.textContent = s.name 
    tr.insertAdjacentElement('beforeend',th) 
  th.setAttribute('scope','row') 
  th = document.createElement('th')
  th.textContent = s.access 
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th) 
  th = document.createElement('th') 
  th.textContent = s.address 
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th) 
  //予算
  th = document.createElement('th') 
  if(s.budget.name == ""){
    th.textContent = '情報なし'
  }
  else{
    th.textContent = s.budget.name 
  }
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th)
  //キャッチコピー
  th = document.createElement('th')
  if(s.catch  == ""){
    th.textContent = 'なし'
  }
  else{
    th.textContent = s.catch 
  }
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th) 
  th = document.createElement('th') 
  th.textContent = s.genre.name 
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th)
  th = document.createElement('th') 
  th.textContent = s.open 
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th) 
  th = document.createElement('th') 
  th.textContent = s.station_name 
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th) 
  const example = s
  if(example.hasOwnProperty('sub_genre')){
  th = document.createElement('th')
  th.textContent = s.sub_genre.name 
  th.setAttribute('scope','row') 
  tr.insertAdjacentElement('beforeend',th)
  }else{
    th =document.createElement('th')
    th.textContent = 'なし'
    th.setAttribute('scope','row')
    tr.insertAdjacentElement('beforeend',th)
  }
  kensu++
  }
}
kaisu = 1

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#kensaku');
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let ganre = document.querySelector('select#search')
  let idx = ganre.selectedIndex
  let os = ganre.querySelectorAll('option')
  let o = os.item(idx)
  let ganreid = o.getAttribute('value')
  //let ganre = document.querySelector('#search')
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + ganreid + '.json';

    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


