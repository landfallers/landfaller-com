# LANDFALLのwebサイトについて

## LANDFALLとは

LANDFALLは東京工業大学生協学生委員会の一つで、東京工業大学の研究室をして制作している研究室紹介冊子/・LANDFALL誌を制作しています。そのほか毎年新入生に配布しているTOKOWALKER誌の制作も担当しています。

## サイト制作の目的

LANDFALL誌は執筆時点(2021年)に至るまで92号まで制作してきました。これらのバックナンバーを公開できる基盤がほしいとLANDFALLは考えており、本サイトを制作しています。

また雑誌制作という分野に興味を持っていただける新入生が少ないことも事実であり、出来る限り私たちがどのような組織であるのかといったことを分かりやすく説明することも心がけています。

## 本READMEの対象

本READMEは主に3種類の読者を想定しております。LANDFALLのサイトを管理することになった担当者、LANDFALLのサイトを良くしていただける貢献者、LANDFALLについて興味をお持ちの方です。できる限り開発を担当した者としてどのようにサイトが機能しているのかを初めての人でも分かるようにおそらく一般的なgithubにあるREADMEに比べてずいぶん丁寧に書いています。またこういった文章は内部資料となるため、公の場所に公開するべきではないかもしれません。しかしここにあればきっと失われることはないでしょう。それは重要なことだと思うのでひとまずここに置いておきます。また私はgithubにこういった記載をするのは初めてのことですし、そもそも説明書を作成するのは初めてのことです。分かりにくいところや冗長なところがあると思います。予めご了承ください。

またweb技術は興隆が激しい分野であることから、もしかしたら数年後にはgatsby.jsはもっと人気のあるものにその地位を奪われているかもしれません。またその他の本サイトに依存関係のあるパッケージについても変化があるかもしれません。そのときは大幅な変更をしていただけるとありがたいです。

## 使用しているライブラリ

本サイトはGatsby.jsにより制作されています。Gatsby.jsはreactを用いた静的サイトジェネレータで、事前にサイトを表示させるのに必要なデータを生成しておき、配布するといった形式です。具体的な使用しているライブラリについてはpackage.jsonをご覧ください。

## どうしてGatsby.jsなのか

数あるフレームワークや方法の中でgatsby.jsをサイトの制作に選定した理由について説明します。

選定した者としての一番の理由は永続性が非常に高いことです。実は過去にもLANDFALLはwebサイトを持っていたのですが、残念なことに詳しい事情は知りませんが、支払いが滞った関係でサーバーの情報が飛んでしまったそうです。

gatsby.jsを用いた当サイトはドメインの料金はかかるものの基本的に無料枠で運営することが可能なライブラリであり、ドメイン料金さえきちんと支払いを続けていれば、ずっと更新することがなくなっても残り続けるサイトになります。

それでもドメインの支払いに失敗するといったことは組織の力がずいぶんと弱くなってしまった現在のLANDFALLでは今後、容易に起こりうることだと思います。仮にwordpressといったサーバーサイドレンダリングのフレームワークを使うとバックアップをし忘れるといったことやバックアップを削除するといったことでデータが無くなってしまいます。(実際にこれが起きてしまい、私たちは非常に大変な目に会いました。

ですがgatsbyベースですと常にgithubに情報が無料で保管することができ、さらには各個人のコンピュータにはサイト情報が残ることになります。また、sqlの情報がzip化されたwordpress等のバックアップとは異なり、フォルダ構造で残るためフレームワークに関する深い知識がなくてもサイトの情報を抜き取ることができます。だから様々な事情により、LANDFALLのサイトが失われてしまう事態に至ったとしてもデータが手元にあることで、その時代にあったフレームワークにあったものでサイトを作り直したり、暫定的にフレームワークを全く使わず、html-cssだけで構成されているようなサイトをその時代に広く知られているプログラミング言語を駆使して適当に作ることができます。

また拡張性やデザインの変更可能が容易であることがあります。たとえばトップページのデザインは年月がたてば内側のhero画像はおそらく変更するべきときがくるでしょうし、もっとアニメーションを活用したサイトに作り変える余地があっていいと考えます。

そういったことにやる気を持っていただける人が現れたとき、gatsby.jsであればおそらくcssとhtmlと少しのjsxの知識さえあれば、容易にデザインを変更することができ、さらにはその場で変更の様子を確認することができます。これはwordpressの子テーマ作成といったことよりずっと簡単でしょうし、記事の投稿の延長線上にできるためもはや新しく環境構築をする必要がありません。

またおそらくですが将来的にご自身の簡易なサイトが必要になる方が現れるでしょう。きっとそのような方にとって華美なシステムである必要はないけどある程度は自分でいじる必要があるといった需要はあると思います。そういった方がモチベーションを持っていただくにはgatsbyはもってこいのものでしょう。

最後に静的サイトジェネレータの中でどうしてgatsby.jsを選択したかに答えます。その理由は単純で本サイトを初めて制作したときの静的サイトジェネレータのうちもっとも人気のあるものの一つだったからです。別のものでもよかったと思います。ただしwebでしたらjsは必須となるのでjsを使っているライブラリがいいでしょうし、nextやnuxtといったSSRやSPAもできてしまうものは情報を集めるのが難しいだろうという懸念点があったため、gatsby.jsに絞りました。

SSGしかできないことが仇となることが今後あるかもしれませんが、きっとこういったことを課題に感じているのならばあなたはきっといろいろなことを知っていると思います。技術負債を増やさない形でどんどん作り変えていただいて構いません。あなたの活躍に期待しております。よろしくお願いします。

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

とうって結果が帰ってくることを確認しましょう。

ここまできたらgithubからlandfallのサイトをcloneしましょう。ご自身のパソコンの好きなディレクトリまでコマンドで移動して、

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

を入力しましょう。すると`success`という文字が永遠と出力され始めて、最後に`success Building development bundle - ???s`と出力されると思います。ここまできたらお使いのブラウザから[http://loalhost:8000](http://localhost:8000)を入力してみましょう。

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

## 記事の投稿の仕方

LANDFALLは研究室紹介冊子LANDFALLとその他といった枠組みを設けています。
LANDFALL誌はmagazinesと呼び、その他のほうをblogsとしています。ここではBLOGの投稿方法について記載しておきます。blogsのディレクトリを開くといくつかのフォルダがあると思います。ここに作成したコンテンツの名前を入れたフォルダを作ります。

さらにそのフォルダ内に`index.mdx`と名前を付けたものを作成します。実はここに付けられているフォルダ名がフォルダ内のコンテンツのurlに対応しています。またmdxといったファイルはあまりなじみのないものかもしれません。これはmarkdownにjsxの記法を取り入れたものです。ひとまず単なるmarkdownと理解してもらって大きな問題はないと思います。

作成したファイルをvscodenなどのエディタで開き、上部に次のようなメタデータを入力します。

```mdx
---
title: "LANDFALLとは"
date: "2021-03-16"
tags: ["LANDFALL", "新歓"]
category: "新歓"
preface: "landfallのあれこれについてQ＆A方式でまとめてみました。landfallに入部しようか迷っている皆さん、ぜひこれを読んでlandfallの雰囲気をつかみましょう！"
---
```

これらの情報を入力するときに注意しないとならないのは「:」の後に***半角の空白が必要である***ことです。ここで書いた情報はサイトの裏の部分活用されるため重要になります。

”---”以下のところに記事を書きます。ここではmarkdown記法が使えます。

また`gatsby develop`を入力してlocalサーバーを起動させて変更を確認しながらやると分かりやすいと思います。変更を確認するには上記のメタ情報を入力したうえで保存すると反映されるようになっています。反映はlocalサーバーが起動しているのならば自動的になされます。

作業が完了したら保存しましょう。次に変更をgithubに反映させる作業に移ります。ここではコマンドプロンプトを用いたやり方を説明しますが、詳細については他のドキュメントを参照ください。またvscodeの拡張機能git historyやGUIソフトのsourcetreeを用いて同様のことをやっても構いません。やり方については各種ドキュメントが参考になるでしょう。

```[]
$git branch <あなたと認識できる名前(本名は避けた方がいいかもしれません。)>
$git checkout <上のブランチ名>
$git add -A
$git commit -m "コミット内容"
$git push -u origin <上のブランチ名>
```

としてください。さらにgithubのlandfallers/landfaller-comにいき、pull requestの項目を開きます。そこで右側にある「New pull　request」を選択します。するとbaseとcompareの二つが選択できるページになると思います。そこでcompare側を開くとあなたが先ほど指定したブランチ名があるのでそれを選択するとcreate pull requestのボタンが出てきます。そちらをクリックするとコメントがかけるページに飛びます。そこで簡単な説明をかきpull requestを完了します。ここから先は管理者の仕事です。あなたがもし管理者ならばこの変更を承認する作業があります。

コンフリクトのない場合は記事に問題が見つからない限り、そのままmainブランチにmergeしましょう。するとnetlifyのほうでコミットを検知して自動で更新してくれます。

時間にゆとりがありましたらnetlifyのほうでbuildが完了しているかを確認しましょう。