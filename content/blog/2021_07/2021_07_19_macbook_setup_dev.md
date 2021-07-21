---
title: 'M1 MacbookAirの初期セットアップ [開発環境編]'
published: '2021-07-19T15:00+09:00'
updated: '2021-07-19T15:00+09:00'
draft: false
tags: ['MacbookAir', 'M1', 'セットアップ']
---

初期セットアップリンク
- [システム環境設定とユーティリティ編]()
- [Homebrew編]()
- [ターミナル編]()
- [開発環境編]()

## 開発用

### Visual Studio Code



### Xcode





# brewでnodebrewをインストール
$ brew install nodebrew
# 最新版のnodejsをインストール
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


brew install yarn