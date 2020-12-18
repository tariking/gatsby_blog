---
title: 'Lintにいろいろ怒られたので修正したときのメモ'
published: '2020-10-19T15:00+09:00'
updated: '2020-10-19T15:00+09:00'
draft: false
tags: ['Gatsby', 'lint']
---

Dark Mode を入れたときに、Lint にいろいろ怒られたのでメモします。  
Warning なのでしばらくほっといたんだけど、いい加減うざくなった・・・。

## 怒られた箇所

ナビゲーションバーの右端に Dark Mode のトグルを置いたので、ファイルはその場所です。

```JavaScript:title=src\components\navbar.js
  return (
    <div
      style={{ cursor: `pointer` }}
      onClick={() =>
        toggleTheme(theme === 'dark' ? 'light' : 'dark')
      }
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </div>
  )
```

## Warning その 1

warning Visible, non-interactive elements with click handlers must have at least one keyboard listener

私訳：キーボードでも発火できるようにしてね！

ほほう・・

## Warning その 2

warning Static HTML elements with event handlers require a role

私訳：role を使え！（役割はちゃんと指定しろや）

## Warning その 3

warning Elements with the 'button' interactive role must be tabbable

role をとりあえず突っ込んだ後に指摘されたのがこれ。

私訳：tabbable もよろ

## 最終的にこうなった

とてもやっつけ仕事感あふれるアフター。疲れたので寝ます。

```JavaScript:title=src\components\navbar.js
...
  return (
    <div
      role="button"
      tabIndex={0}
      style={{ cursor: `pointer` }}
      onClick={() =>
        toggleTheme(theme === 'dark' ? 'light' : 'dark')
      }
      onKeyDown={() =>
        toggleTheme(theme === 'dark' ? 'light' : 'dark')
      }
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </div>
  )
...
```

## 参考

[my first gatsby 警告たくさん出てチッチチッチ言いながら直したメモ](https://hirokonakahara.com/blog/?p=4570)
