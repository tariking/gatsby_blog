---
title: 'MacBookでsimplenoteをSafariで使う'
published: '2020-10-29T15:00+09:00'
updated: '2020-10-29T15:00+09:00'
draft: false
tags: ['simplenote', 'blog']
---

## simplenote を App でなくブラウザから使う

業務で使っている借り物 Mac と、自分の Windows で最低限テキストのやり取りをしたかったので（そしてマークダウンが使えたらなおよい）、simplenote を使ってみることにしました。  
Mac アプリケーションの simplenote は AppleID がないとインストール出来ないので、Mac 側はブラウザに限って使うものとする。

## simplenote は Safari で使おう

ServiceWoker を使用して通信しているので、解放しないと使えない。

Chrome で使えないときは
コンソールに「Active service worker found, no need to register」と出た場合は以下

`chrome://flags/#enable-experimental-web-platform-features を有効にする`

（が、これを触らなくても WindowsPC は問題なく動いたので、複数条件があるのかも？）

Firefox は使えるけど日本語変換時に変換文字列と変換後文字列がダブってしまうので使いにくい。

safari はデフォルトで使用できた。

## bag に気をつける

というか、気をつけようがないけど、あまり安定したサービスではないようなので。
simplenote で検索すると、「同期しなくなった」とか「新規作成できなくなった」とかが多い。  
同期されないとかはどこかの端末にはあるんだろうからいいけど、削除された（アクセスできなくなった？）とかはまずい。  
長年のメモを蓄積するより、アウトプットの素材として消費していく使い方のほうがいいんだろうか・・？

## 最終的な環境

simplenote でソースを共有するのはこちらのリストです。これでブログの更新頻度が上がるかも！！

- Mac from Safari
- Windows from Chrome(or App)
- iPhone8
- iPhone7+
- iPad

## 参考

- [Service worker の使用](https://developer.mozilla.org/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
