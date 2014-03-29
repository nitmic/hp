var dataInfo={
    name: '爆転ずし',
    id: 'bakutenzushi'
};

var templateText =
    '<meta name="keywords" content="NITMic,名古屋工業大学,コンピュータ倶楽部,ゲーム,プログラミング,作曲,絵,プログラマー,絵師,音屋"/>' +
    '<meta name="description" content="コンピュータ倶楽部(NITMic)はプログラマー、音屋、絵師の3つの役職に分かれてゲーム制作を行う部活です。"/>';

// テンプレートが定義されたscript要素を探し、そこからテンプレートオブジェクトを作成
var template = $.templates(templateText);

// テンプレートとデータモデルを組み合わせてテキストを生成
var result = template.render(dataInfo);

// 描画
document.getElementById('resultMeta').innerHTML = result;
