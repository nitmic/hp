var dataInfo={
    name: '爆転ずし',
    id: 'bakutenzushi'
};

var dataContents = {
    name:dataInfo.name,
    id:dataInfo.id,
    release: 2013,
    genre: 'アクション',
    player: '2~4人(対戦)',
    time: '3~5',
    headline: 'ド迫力の寿司バトル！！',
    description: '寿司を操作して相手を場外に飛ばすんだ！ 10点とったら勝利だ！ ○ボタンを押すとスピンができる！ 相手を遠くに飛ばせるぞ！ アイテムをとると何かが起こる…?! 効果は自分の目で確かめろ！ ステージから飛び出してもあきらめるな！ ふんばりで上手くいけば復帰出来るぞ！<br/>新感覚のアクションゲーム！ ライバルたちをはじき飛ばせ！！'
};

var dataStaff = {
    staff1 : {name:'isk',year:2011,job:'プログラマー'},
    staff2 : {name:'manjiro',year:2011,job:'絵師'},
    staff3 : {name:'popo',year:2011,job:'音屋'}
};

// テンプレートが定義されたscript要素を探し、そこからテンプレートオブジェクトを作成
var template0 = $.templates("#templateTitle");
var template1 = $.templates("#templatePass");
var template2 = $.templates("#templateContents");
var template3 = $.templates("#templateStaff");

// テンプレートとデータモデルを組み合わせてテキストを生成
var result0 = template0.render(dataInfo);
var result1 = template1.render(dataInfo);
var result2 = template2.render(dataContents);
var result3 = template3.render(dataStaff);

// 描画
document.getElementById('resultTitle').innerHTML = result0;
document.getElementById('resultPass').innerHTML = result1;
document.getElementById('resultContents').innerHTML = result2;
document.getElementById('resultStaff').innerHTML = result3;
