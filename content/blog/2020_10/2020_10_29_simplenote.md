---
title: 'MacBookでsimplenoteをSafariで使う'
published: '2020-10-29T15:00+09:00'
updated: '2020-12-19T15:00+09:00'
draft: false
tags: ['simplenote', 'blog']
---

## simplenote を App でなくブラウザから使う

業務で使っている借り物 Mac と、自分の Windows で最低限テキストのやり取りをしたかったので（そしてマークダウンが使えたらなおよい）、simplenote を使ってみることにしました。  
Mac では、アプリインストールはせず、ブラウザで使うことを考えてみます。（と言いつつ、アプリは PWA なのでブラウザを使っている）

## simplenote をブラウザで使う場合の設定

simplenote は ServiceWoker で処理しているので、ブラウザ側で使えるように設定する必要があります。
ほとんどデフォルトで使えると思うけど、動かない場合は以下のフラグをチェック。

- Chrome

  chrome://flags の画面で experimental-web-platform-features を有効にし、ブラウザーを再起動

- Firefox

  about:config の画面で dom.serviceWorkers.enabled を true に設定し、ブラウザーを再起動

  ※動作はするけど、入力文字変換で文字がダブってしまう。調査はしてない。

- Edge

  about:flags の画面で Enable service workers にチェックを入れ、ブラウザーを再起動

- safari

  (確認中)

## simplenote は bag が多い？

simplenote で検索すると、「同期しなくなった」とか「新規作成できなくなった」とかが目につく・・ように見える。  
同期されないとかはどこかの端末にはあるんだろうからいいけど、削除された（アクセスできなくなった？）とかはまずい。

長年のメモを蓄積するより、アウトプットの素材を消化していく使い方（アイデアのメモを取って、貯めない）とかになるんだろうか？

## 最終的な環境

simplenote でソースを共有するのはこちらのリストです。これでブログの更新頻度が上がるかも！！

- Mac from Safari
- Windows from Chrome(or App)
- iPhone8
- iPhone
- iPad

## 参考

- [Service worker の使用](https://developer.mozilla.org/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
