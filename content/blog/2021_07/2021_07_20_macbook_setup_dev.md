---
title: 'M1 MacbookAirの初期セットアップ [開発環境編]'
published: '2021-07-20T15:00+09:00'
updated: '2021-07-20T15:00+09:00'
draft: false
tags: ['MacbookAir', 'M1', 'セットアップ']
---

初期セットアップリンク
- [システム環境設定とユーティリティ編](https://gg-box.com/2021_07/2021_07_11_macbook_setup_init/)
- [Homebrew編](https://gg-box.com/2021_07/2021_07_12_macbook_setup_homebrew/)
- [ターミナル編](https://gg-box.com/2021_07/2021_07_18_macbook_setup_tarminal/)
- 開発環境編 ← いまここ

開発環境といってもそんなに最初からいろいろ入れたいわけではなく、

フロントの開発と、iosアプリの開発さえできればいい、という前提です。

## フロント開発用

### Visual Studio Code

[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)からダウンロードしてインストールします。


その後、必要な拡張をインストールしていきます。
アンインストールも簡単なので、良さそうなものやテーマなんかは好きに入れています。

絶対必要だと思っているのは以下
 - Bracket Pair Colorizer
 - ESLint
 - Prettier
 - Project Manager

テーマ関係で好きなのは以下
 - vscode-icons
 - Material Icon Thema
 - Github Thema

### Node

nodeは以下のように入れます。

（nodebrewのインストールコマンドは、homebrew編でも記載しています）

#### brewでnodebrewをインストール

```
$ brew install nodebrew
```

#### 最新版のnodejsをインストール

```
$ nodebrew install-binary latest


> nodebrew install stable
Fetching: https://nodejs.org/dist/v16.5.0/node-v16.5.0-darwin-x64.tar.gz
Warning: Failed to create the file                                             
Warning: /Users/aritakayo/.nodebrew/src/v16.5.0/node-v16.5.0-darwin-x64.tar.gz:
Warning:  No such file or directory

curl: (23) Failed writing body (0 != 1119)
download failed: https://nodejs.org/dist/v16.5.0/node-v16.5.0-darwin-x64.tar.gz


mkdir -p ~/.nodebrew/src


> nodebrew install stable     
Fetching: https://nodejs.org/dist/v16.5.0/node-v16.5.0-darwin-x64.tar.gz
######################################################################### 100.0%
Installed successfully

# yarn を使う場合
brew install yarn
```

## iosアプリ開発用

### Xcode

App Storeからインストールします。めっちゃ時間かかるので、びっくりしないで待ちましょう。
インストールはこれだけで終わります。

ios環境はこれで終わりです。