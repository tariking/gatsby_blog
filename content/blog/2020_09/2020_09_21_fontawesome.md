---
title: 'GatsbyでFont Awesomeを使いたい'
published: '2020-09-21T15:00+09:00'
updated: '2020-09-21T15:00+09:00'
draft: false
tags: ['Gatsby', 'Font Awesome']
---

タグにアイコンつけたり、なんか可愛くしたいので Font Awesome を入れることにしました。
(2020/10/10 現在、初回表示が重すぎたので外しています)

## インストール

インストールするのは以下の 3 つ。

- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome

```console
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

## js ファイルで import する

タグの文字列にアイコンをつけたいので、ここでは src\components\tag.js で import してみます。  
使いたいアイコンは[fontawesome のギャラリー](https://fontawesome.com/icons?d=gallery)を眺めたらいいかも。

ここではアイコンを単独でピックアップする方法で、タグアイコンのみを使います。

```javascript:title=src\components\tag.js
...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTag } from '@fortawesome/free-solid-svg-icons' // free-solid-svg-iconsからfaTagをピックアップ
...
```

## js 内で使用する

アイコン定義の登録のために library.add()してから使います。

```javascript:title=src\components\tag.js
library.add(faTag)
<FontAwesomeIcon icon={faTag} />
```

ファイルの全体はこんな感じ。タグの文字列の前に、タグアイコンがつきました。やったね！

```javascript:title=src\components\tag.js
import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const Tag = props => {
  library.add(faTag)

  return (
    <div className="tag">
      {props.tags.map((tag, index) => {
        return (
          <Link
            to={`/tags/${_.kebabCase(tag)}/`}
            key={index}
            className="tag__list"
          >
            <FontAwesomeIcon icon={faTag} />
            {tag}
          </Link>
        )
      })}
    </div>
  )
}

export default Tag
```

## ブランドアイコンを追加するには

ブランド（企業系）のアイコンは別パッケージなので、追加が必要です。

```
yarn add @fortawesome/free-brands-svg-icons
```

js ファイル内での import はこんな感じ。

```javascript:title=javascript
...
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook)

<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faFacebook} />
...
```

## アイコンセットをまとめて呼び出す使い方

例として全てのブランドアイコンを import します。

```javascript:title=javascript
import { fab } from '@fortawesome/free-brands-svg-icons'
```

library.add()の使い方は同じ。

```javascript:title=javascript
library.add(fab)

...
  <FontAwesomeIcon icon={['fab', 'apple']} />
  <FontAwesomeIcon icon={['fab', 'microsoft']} />
  <FontAwesomeIcon icon={['fab', 'google']} />
...
```

使いどころはわからないけど、[動物アイコン](https://fontawesome.com/icons?c=animals)が可愛いので使いたい・・

## 参考

- https://github.com/FortAwesome/react-fontawesome
