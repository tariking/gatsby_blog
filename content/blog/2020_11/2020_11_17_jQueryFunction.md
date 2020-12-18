---
title: 'function() と $(function(){})が混在する時の読み方'
published: '2020-11-17T15:00+09:00'
updated: '2020-11-17T15:00+09:00'
draft: false
tags: ['jQuery', 'HTML', 'JavaScript']
---

HTML ファイルを触っていたときに、JavaScript に

- function()
- \$(function(){...})

が混在していて、？となったのでメモ。

## こんな感じ

```JavaScript
  function addressSearchReset() {
      $("input[id='iccid']").val("");
      if (addressTable) {
          $('#table').bootstrapTable('removeAll');
      }
  }

  $(function () {
      $("#addressSearchReset").on('click', function () {
          addressSearchReset();
      });
  });

```

実行タイミングの違いかな？と思ったらその通りでした。

（引用）
**ページのドキュメントオブジェクトモデル（DOM）が安全に操作できるようになるとすぐに、JavaScript コードを実行する方法を提供します。**

まだ生成されてない DOM にアクセスしてほしくない時に使えばいいっぽい。

以下の 2 つのコードは同じ意味。

```JavaScript
$( document ).ready(function() {
  // Handler for .ready() called.
});
```

```JavaScript
$(function() {
  // Handler for .ready() called.
});
```

## 参考

- [jQuery Api Doc #ready-handler](https://api.jquery.com/ready/#ready-handler)
