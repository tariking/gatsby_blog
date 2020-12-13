---
title: 'Gatsby.jsにiPhoneホーム画面アイコンを設定する'
date: '2020-11-24'
description: 'Gatsby.jsにiPhoneホーム画面アイコンを設定する'
draft: false
category: 'Gatsby'
tags: ['Gatsby', 'favicon', 'iPhone']
---

gatsby-plugin-manifest に icons を追加して、
iPhone の「ホーム画面に追加」に対応します。

ここでは、iPhone8 と、iPhone7Plus で動作確認するので、アイコンは 180px x 180px のものを用意します。
背景が透明のものを使用すると、黒い四角がホーム画面に出てしまうので、背景色は何かしら設定しておきます。

基本的なことは[gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)を読む。

## gatsby-plugin-manifest に追記する

```javascript{12-18}:title=gatsby-config.js
...
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gg-box Blog`,
        short_name: `gg-box`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff6588`,
        display: `minimal-ui`,
        icon: `content/assets/gg-box.png`,
        icons: [
          {
            src: `/favicons/gg-box180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
...
```

## 作ったファビコンファイルを置く

static 以下に置かないと読んでくれないので、なければ作って下に置く。

```
static\favicons\gg-box180.png
```

## 参考

- [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)
- [様々なファビコンを一括生成。favicon generator](https://ao-system.net/favicongenerator/)
- [gatsby の gatsby-plugin-manifest プラグインを使って webmanifest を自動生成する](https://qiita.com/github0013@github/items/90fd3f03c678ba36f016)
