# LANDFALLのwebサイトについて

## LANDFALLとは

LANDFALLは東京工業大学生協学生委員会の一つで、東京工業大学の研究室をして制作している研究室紹介冊子/・LANDFALL誌を制作しています。そのほか毎年新入生に配布しているTOKOWALKER誌の制作も担当しています。


## 使用しているライブラリ

本サイトはGatsby.jsにより制作されています。具体的な使用しているライブラリについてはpackage.jsonをご覧ください。

## 本サイトについて

ここではgatsby.jsの簡単な説明と、本サイト特有の設定について説明します。具体的なgatsby.jsの説明については公式サイトや本、他の技術系サイトなどをご参照ください。

### 環境構築

記事の追加とプレビューに最低限必要な環境構築を記述します。

まず初めに`git`をinstallしましょう。`git お使いのos名`で検索すればインストールの方法が分かるでしょう。

```[]
$git --version
git version *.**.*.? (私の環境だとgit version 2.28.0.windows.1)
```

のように表示されたのならば大丈夫です。

次に`node.js`をパソコンにインストールします。こちらもご自身のos名とnode.jsと検索すればnode.jsのインストール方法が分かるかと思います。

コマンドプロンプトやターミナルに

```[]
$node -v
v**.**.* (私の環境だとv14.15.1)
$npm -v
*.**.* (私の環境だと6.14.8)
```

と表示されればインストールがうまくいっていると思います。

またyarnも入れてしまいましょう。yarnはnpmに代わるパッケージ管理ソフトです。同様に`yarn install お使いのos名`などで検索すれば出てくると思います。将来的にnpm管理が主流になったのならば切り替えていただいて構いません。

```[]
$yarn -v
*.**.* (私の環境だと1.22.10)
```

と表示されれば問題ないでしょう。

ここまできたら`gatsby`

```[]
$yarn global add gatsby-cli
```

と入力しましょう。そうすると`gatsby`が入ります。

```[]
$gatsby -v
```

にて結果が帰ってくることを確認しましょう。

次にgithubからlandfallのサイトをcloneしましょう。ご自身のパソコンの好きなディレクトリまでコマンドで移動して、

```[]
$git clone https://github.com/landfallers/landfaller-com.git
```

を入力するとdownloadが開始されます。終了するとgithubにあったファイルと同様のものがあなたのローカル環境に入ったことになります。

```[]
$cd landfaller-com
```

と移動して、このディレクトリで

```[]
$yarn install
```

と入力しましょう。すると起動に必要なライブラリがインストールされます。終了したら

```[]
$gatsby develop
```

を入力しましょう。すると`success`という文字が出力され始めて、最後に`success Building development bundle - ???s`と出力されると思います。ここまできたらお使いのブラウザから[http://loalhost:8000](http://localhost:8000)を入力してみましょう。

アクセスするといつものlandfaller.comと同じような画面になっているともいます。

これにて環境構築は完了です。しかし環境構築は意外に難しく、私の想定を超える問題があるでしょう。問題が発生したときの対策集を作る必要があるかもしれません。これは今後の課題としておきます。

### 主要なディレクトリの構成とその説明

```[]
├ publication :LANDFALL特有のディレクトリでここに公開する記事の情報が入れるとそれに対応するページが生成されます。普段はこちらのディレクトリのみを操作します。
    ├ blogs :LANDFALLの本誌以外に出版する文章についてをまとめてある。
    ├ magazines :LANDFALL本誌についてが入っている。
    ├ siteInfo :サイトに必要な固定ページについての情報が入っている。
├ src :サイトの見た目に関することを設定しています。
    ├ components　:ページに共通する部品(headerだったりfooterだったり)を記述しています。
    ├ images :固定ページで使う画像が入っています。
    ├ pages :固定ページの見た目に関する設定がされています。ここのディレクトリにjsファイルを作るとそのファイル名に対応するページが生成されるようになっています。
    ├ templates :記事の一覧ページや記事ページといったpubliationディレクトリのデータをもとに複数生成されることになるページの見た目に関する設定が入っています。
├ static :生成するとstaticをrootとして絶対パスでstaticフォルダ内に入れたコンテンツにアクセスできます。
├ gatsby-config :どのようなpluginを使うのか、サイトのメタ情報が記述されています。
├ gatsby-node :複数ページを生成するための設定が入っています。
```
