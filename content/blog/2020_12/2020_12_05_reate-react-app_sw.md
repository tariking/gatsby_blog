---
title: 'create-react-app と ServiceWokerで PWA を実装する'
published: '2020-12-05T15:00+09:00'
updated: '2020-12-05T15:00+09:00'
draft: false
tags: ['React', 'sw', 'ServiceWoker']
---

create-react-app には、ServiceWoker を実装できるよう、[workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest) が含まれています。

このおかげで、create-react-app から作ったアプリケーションでは、特に他のツールをインストールすることなく ServiceWoker が作れます。

最初から ServiceWoker を導入予定なら、service-worker.js とその他のモックを作ってくれるテンプレートを使用するのが速いです。

テンプレートは使用せず、あとから追加したくなったときは、自分で service-worker.js 的なファイルを追加すればよいです。

公式ではここに PWA を使いたいときのテンプレート指定の方法があります。ここを読み込めばだいたいわかる感じ。

[Making a Progressive Web App](https://create-react-app.dev/docs/making-a-progressive-web-app/)

## 前提条件

- create-react-app4 以降
- 本番 Web サーバーが HTTPS をサポートしていること

## create-react-app の ServiceWoker を設定する

以下のコマンドで、create-react-app と workbox-webpack-plugin の統合環境が作れます。

JavaScript のとき

```bash
npx create-react-app my-app --template cra-template-pwa
```

TypeScript のとき

```bash
npx create-react-app my-app --template cra-template-pwa-typescript
```

焼きあがったら、カスタマイズ用の`src/service-worker.js`が出来ていることを確認してください。

## ServiceWoker を登録する

ServiceWoker は、登録するまでアクティブにはなりません。登録しないと使えないので[（ServiceWoker のライフサイクルはこちら）](https://developers.google.com/web/fundamentals/primers/service-workers)次の作業をします。

---

### navigator ってなに？

serviceWorker がどう動いてるのかな？と思って見ていたら、唐突に`navigator`とか出てきてなんだこれって思ってしまいました。

[Navigator.serviceWorker](https://developer.mozilla.org/ja/docs/Web/API/Navigator/serviceWorker)

下のコードでは、ブラウザーがサービスワーカーに対応しているかをチェックしているところ。

```JavaScript:title=src\serviceWorkerRegistration.js
…
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) { ←ここ
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }
…
```

### 前は src に serviceWorker.js なかったっけ？

以前 create-react-app から作ったデフォルトには、serviceWorker.js あったような？と思って調べてみました。

git から辿ると、デフォルトでは含まれなくなったらしいです。

[Remove server worker registration from default templates #9349](https://github.com/facebook/create-react-app/pull/9349)

## 参考

- [Setting up a PWA with service workers and create-react-app](https://blog.logrocket.com/setting-up-a-pwa-with-service-workers-and-create-react-app/)
- [workbox + webpack で ServiceWorker を使い PWA 化してみた](https://qiita.com/aaaaayako/items/a4a19dba0b4c9e4b396a)
- [Service Worker の紹介](https://developers.google.com/web/fundamentals/primers/service-workers)
