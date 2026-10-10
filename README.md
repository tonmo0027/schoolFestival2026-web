# 遊技広場 / GitHub Pages用サイト

商品画像付き、スマートフォン対応の静的サイトです。ビルド・npm・サーバー処理は不要です。

## まず見る

ZIPを展開して `index.html` をブラウザで開いてください。`style.css`、`script.js`、`assets`フォルダは同じフォルダに置きます。

## GitHub Pagesで公開

1. GitHubで公開用のリポジトリを作成します（例：`yugi-hiroba`）。
2. ZIP内の `index.html`、`style.css`、`script.js`、`assets`フォルダ、`.nojekyll` をリポジトリの一番上にアップロードし、mainブランチにコミットします。フォルダごと入れてindex.htmlが下の階層にならないよう注意してください。
3. リポジトリの **Settings → Pages** を開きます。
4. **Source: Deploy from a branch**、**Branch: main**、**フォルダ: /(root)** を選び、Saveを押します。
5. 公開処理後、Pages設定画面に表示されるURLを開きます。通常のプロジェクトサイトのURLは `https://ユーザー名.github.io/リポジトリ名/` です。

公式手順：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

このファイル一式は作成済みですが、GitHubへのアップロード・公開はまだ行っていません。公開URLが確定したら、そのURLをQRコードにしてください。

## 内容の編集

- `index.html`：企画名・開催場所・ゲーム名・紹介文
- `style.css`：色・余白・文字の大きさ・スマートフォン表示
- `script.js`：ゲーム名検索とランダム選択

JavaScriptが無効でも、全ゲームと会場案内を読むことができます。外部フォント・CDN・アクセス解析は使用していません。商品画像はassetsフォルダに同梱しています。検索はブラウザ内で処理します。「遊び方を検索」のリンクはGoogle検索を別タブで開きます。

## 掲載内容

企画名：遊技広場 ～麻雀・カタン・etc...～
場所：1号館11階 1113教室
出入り自由、大会なし、開催日時の表記なし。
麻雀卓4台と、指定された12種類のテーブルゲームを掲載しています。

人数・所要時間・対象年齢は記載していません。「リバース」は指定された商品ページで「本格リバーシ」と確認できたため、「リバーシ」に修正しています。ゲーム紹介の参照リンクはサイト下部にあります。

## 確認範囲

HTML構造、ローカルファイル参照、12品目の掲載、検索・ランダム選択の処理を確認しています。この環境ではブラウザによる描画確認は実施していません。公開前にスマートフォンで表示をご確認ください。

## 画像について

12商品の画像を同梱し、各画像から指定されたAmazon商品ページに移動できます。各商品の画像とURLの対応はIMAGE_SOURCES.mdを参照してください。
"# schoolFestival2026-web" 
