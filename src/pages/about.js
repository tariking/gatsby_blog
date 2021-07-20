import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import LayoutPage from '../components/layout-page'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author.name

  return (
    <div>
      <LayoutPage location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1 itemProp="headline" className="pagetitle">
          About
        </h1>
        <Image
          fixed={data.about.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 300,
          }}
        />
        <div
          style={{
            ...scale(-1 / 5),
          }}
        >
          <div style={{ paddingTop: 20 }}>
            調べたことの技術メモです。
            <br />
            Webフロント業界の人。業界内の尖った人は怖いなーとか思ってます。
            <br />
            アウトプットに興味がなさすぎるので、鍛錬のためにこのページを書いています。
            <br />
            <br />
            お問い合わせはこちらから(s45.rita★gmail.com)
          </div>
          <div style={{ paddingTop: 20 }}>
            <h3>作ったものリスト</h3>
            <div>
              <a href="https://color-changer.gg-box.com/">
                アイコンの色違いつくるよ！
              </a>
            </div>
            自分用アイコンの色違い作成のためのもの。
            <br />
            色違いって可愛いよね！（色違いで同じ服を買うタイプです）
            <br />
            Youtubeチャンネル、Twitterで使うアイコンのいい感じの色合いが決まらなくて、
            移動中とか寝る前とかに、リッチなアプリを使わずにいじれるようにしたもの。
            <br />
            プログラムっていうか、イラスト書くのに時間かかった（　＾ω＾）・・・
          </div>
        </div>
      </LayoutPage>
    </div>
  )
}

export default Aboutpage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    about: file(absolutePath: { regex: "/about.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
