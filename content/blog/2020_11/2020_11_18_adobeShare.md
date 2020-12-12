---
title: 'PhotoShopのpsdファイルをGitで管理する'
date: '2020-11-18'
description: 'PhotoShopのpsdファイルをGitで管理する'
draft: false
category: 'datasahare'
tags: ['datasahare', 'adobe', 'git', 'PhotoShop']
---

イラストの「色だけ」変えるアプリを作っていて、PhotoShop でお絵描きをしていたのですが
やり直しが多いのと、一日で進められる作業が結構少ないので
ソースと一緒に psd ファイルをバージョン管理したくなったので調べてみました。

ちなみに、主に線を描くのは iPad の AdobeFresco です。
Adobe の Creative Cloud でわりと勝手に保存してくれてる感じなので、それはそれでいいのかも。

## PhotoShop の psd ファイルを Git で管理することはできるのか？

gitLFS(Git Large File Storage)を使えばできる

## ただし

- 一定以上のストレージと帯域を超えたら料金発生

## gitLFS をざっくり理解

実際の使い方などは参考リンクが詳しいので省く。

概念というか、考え方としては、

gitLFS をインストールすることでリポジトリが Git LFS 形式になり、
バイナリファイルがプロジェクトとは別のストレージ(Git LFS)に管理されるようになり、
リポジトリ内のバイナリファイルは、ストレージ(Git LFS)のポインターファイルに置換される。

ポインタの置換などは gitLFS がやってくれるので、
push/pull/fetch などなど、フロントのコマンドは何も変わらないっぽい。

## 導入のハードル

個人開発なら、最悪個人のリポジトリをぶっ壊すだけで済むのでまあよし（それはなんでもそうだけど）

社内とか、チームで使う場合は、ちゃんとルール決めてやらないと、
帯域を食いつぶして料金請求が大変なことになったり、
特に修正も追加もないバイナリが gitLFS に放置されそうな予感。
（置いておくだけのバイナリなら git に置いておくメリットはなにもない）

ここいらへんは、ビルドツールに任せたりするのがいいのかな？

## 参考

[Git LFS について調べてみた](https://medium.com/nttlabs/enabling-git-lfs-c907ca393ccb)
[Git LFS をちょっと詳しく](https://qiita.com/ikmski/items/5cc8b8832336b8d85429)
[ストレージと帯域の利用について](https://docs.github.com/ja/free-pro-team@latest/github/managing-large-files/about-storage-and-bandwidth-usage)
[小さな画像ファイルは Git LFS で管理しない方がよい理由](https://www.gitlab.jp/blog/2020/07/10/how-to-migrate-git-lfs/)
