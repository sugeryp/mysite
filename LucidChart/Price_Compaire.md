subject
    大手3社を比較する
        定義：上位3社とは日本のWebショッピングモール売上上位3つである、Amazon.com、楽天、Yahooショッピングを指す。

value
    クリック率
    成約率
    自由時間

benefit
    成約率が高いコンテンツドメイン
 
value is exit
    クリックによるアフィリエイトがある
    成約によるアフィリエイトがある

subject lead to benefit
    claim:大手3社を比較した結果は成約率が高いコンテンツドメインたりえる
    warrant:価格の比較は購入の直前で行い、ネットショップで商品を買う人は大手3社を比較する、価格の比較を終えれば購入先のページに移動し、たどりたいページに移動する、買いたい商品のページで比較的に安いことが分かっていればそのまま購入する。
    data:実際にやっている結果
        hyposesisのそれぞれ

hypothesis
    claim:価格の比較は購入の直前の段階
    warrant:
    data:
    claim:ネットショッピングで商品を買う人は大手3社を比較している
    warrant:
    data:
    claim:3社以外は調べない
    warrant:
    data:
    claim:価格の比較を終えれば購入先のページに移動したい
    warrant:
    data:
    claim:たどりたいページのリンクがあればクリックする
    warrant:
    data:
    claim:一番安いと思っていればそのまま購入する
    warrant:
    data:


-Negative Attack
    hypothesis:たどりたいページのリンクがあればクリックする
        negative_value:安全性
        benefit:危険を冒さずにすむ
        claim:たどりたいページでも、危険そうなサイトはクリックしないしない
        warrant:危険なページは、どんなによく見えてもクリックしない
        data:
            
    solution
        subject:安全そうなサイトにする
        benefit:たどりたいページのリンクがあればクリックする
        subject lead to benefit
            claim:安全そうなサイトなら、たどりたいページのリンクがあればクリックする
            warrant:危険と感じるとクリックしないので、危険と感じなければ、すんなりたどりたページをクリックする。
            data:具体例、hypothesis
            hypothesis
                claim:たどりたいページでも、危険そうなサイトはクリックしないしない
                warrant:危険なページは、どんなによく見えてもクリックしない
                data:
                        

    hypothesis:自分の価格比較サイトに訪れる
        negative_value:
            たどり着きやすさ→自由時間
            評判→安全、自由時間、節約した気分
        benefit:自由時間と安全と節約した気分を確保できる
        claim:価格比較をしたい人は、他のたどり着きやすく評判のいいサイトに行く
        warrant:検索上位かつサイトタイトルが興味を引くサイトから2、3個訪れるので、そこに自分の比較サイトは入らない
        data:自分の行動、hypothesis
        hypothesis
            claim:価格を調べる際、検索上位かつサイト

    solution:
        subject:検索上位かつサイトタイトルが興味を引くサイトの上位3位以内に入るサイトにする
        benefit:自分の価格比較サイトに訪れる
        subject lead to benefit
            claim:検索上位かつサイトタイトルが興味を引くサイトにすれば、自分の価格比較サイトに訪れる
            warrant:検索上位かつサイトタイトルが興味を引くサイトから2、3個訪れる
            data:hypothesis
            hypothesis
                claim:価格を調べる際検索に掛けて上位のサイトをみる
                warrant
                data
                claim:検索上位のサイトのうち興味を引くサイトの2~3サイトを見る
                warrant
                data

plan:大手3社Webモールの検索結果のHTMLを取得する、楽天の検索結果のHTMLを取得する。Yahoosショッピングの検索結果の
    定義：上位3社とは日本のWebショッピングモール売上上位3つである、Amazon.com、楽天、Yahooショッピングを指す。

puppetieerを読み込む
ブラウザを作成する
ページを作成する
------1.以下Amazon、楽天、Yahooを順に実行
URLにアクセスする
検索する
検索結果をパースする
パース結果を保存する
------2.以下繰り返し→ページが終わるまで（様子を見て短くする）
次ページに移動する
検索結果をパースする
パース結果を保存する
------------------2
----------------------1
パース結果を比較する


パース後の状態
    検索対象の商品である
    商品名
    URL
    価格
    取得日
    出品者
    
