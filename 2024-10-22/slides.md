---
# You can also start simply with 'default'
theme: jay-es
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 意外に簡単！ドキュメント翻訳で始める OSS コントリビュート
# info: |
#   ## Slidev Starter Template
#   Presentation slides for developers.

#   Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
# class: text-center
# https://sli.dev/features/drawing
# drawings:
#   persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: view-transition
# enable MDC Syntax: https://sli.dev/features/mdc
# mdc: true
# take snapshot for each slide in the overview
# overviewSnapshots: true
---

# 意外に簡単！<br/>ドキュメント翻訳で始める OSS コントリビュート

2024.10.22 @ UV Study: Vue.js LT 会

---
layout: quote
---

# 初 LT！🥳

---
layout: two-cols-header
---

# 自己紹介

<div class="h-12" />

::left::
<p class="pb-8">
  <span class="text-7xl font-mono font-light">jay-es</span>
  （じぇいえす）
</p>

- フロントエンドエンジニア
- Vue.js & Vite 日本語ドキュメントメンテナー
- Vue.js 日本ユーザーグループスタッフ

::right::
<img src="/js-logo.svg" class="rounded-full size-56" />

---
layout: quote
---

# 誕生日！🥳

---

# コントリビュート略歴

<v-clicks>

- 2018/11 Vuex ドキュメントの誤訳を修正（初めての OSS）
- Vue 3, Nuxt 2, Svelte のドキュメント翻訳
- ライブラリーなどにも PR を送るように
- 2021/03 Vite 日本語ドキュメント → 2021/06 メンテナーに
- Solid ドキュメント全翻訳	
- 2022/01 Vue サイトリニューアル。 メンテナー + プロジェクトリード
- Vue 3 移行ガイド翻訳、React ドキュメントのタイポ修正など

</v-clicks>

<style>
li:nth-child(1), li:nth-child(4), li:nth-child(6) {
  @apply text-accent font-bold;
}
</style>

---
layout: section
---

# ドキュメント翻訳は難しい？

---

# よくある誤解 1

英語がペラペラじゃないといけないのでは...😥

<CommonMisconception
  v-click
  lead="私も英語は話せません...😵"
  text="中学〜高校程度の英文法が分かれば大丈夫！"
/>

---

# よくある誤解 2


技術に精通していないといけないのでは...😰

<CommonMisconception
  v-click
  lead="正直､全部は理解できてない！😵‍💫"
  text="推測で翻訳している箇所もある..."
/>

---
layout: section
---

# ドキュメント翻訳のメリット

---

# ドキュメント翻訳のメリット

<v-clicks depth="2">

- 日本語で PR を出せるのでハードルが低い
  - OSS に慣れることができ、ライブラリーにも気軽に PR 送れるようになる
- もし間違えていても大変なことにはならない
  - ライブラリーのバグとは違い、どこかのサービスに不具合が出たりしない
  - レビューがあるし、すり抜けたとしても誰かが気づいて直してくれる
- たくさんの人に見てもらえる満足感
- 技術知識・英語力が向上する

</v-clicks>

---
layout: section
---

# ドキュメント更新手順の実例
Vue.js, Vite の場合

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
issues 一覧ページに行く

英語版の更新に合わせて  
issue が自動作成されている

::right::
<img src="/screenshot-01.png" class="right-image" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
issue 詳細ページに行く

リンクをクリック

::right::
<img src="/screenshot-02.png" class="right-image" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
英語版の差分が表示される

差分をコピー

::right::
<img src="/screenshot-03.png" class="right-image" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
VS Code を開き、  
該当箇所に貼り付け

::right::
<img src="/screenshot-04.png" class="right-image" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
Google 翻訳と  
DeepL に貼り付け

訳文で全容を把握

::right::
<div class="right-image-light h-64 overflow-clip" >
  <img src="/screenshot-06.png" />
</div>
<div class="right-image-light h-48 overflow-clip absolute top-50 right-20" >
  <img src="/screenshot-05.png" />
</div>


---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
原文の上の行に貼り付け

内容に相違ないか確認
<small class="block">（特に技術用語など）</small>

textlint エラー修正

原文を消す

::right::
<img src="/screenshot-07.png" class="right-image" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
PR 作成

CI 完了後、  
プレビューのリンクをクリック

::right::
<img src="/screenshot-08.png" class="right-image" />
<div class="absolute top-66 right-43 w-75 h-12 border-6 border-violet-500 border-dashed" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
プレビューの表示を確認

::right::
<img src="/screenshot-09.png" class="right-image-light" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例

::left::
レビューして問題なければ  
マージして完了

::right::
<img src="/screenshot-10.png" class="right-image" />

---
layout: two-cols-header
---

# ドキュメント更新手順の実例（番外編）

::left::
翻訳不要な場合も多い  
（手軽に草を生やすチャンス）

::right::
<img src="/screenshot-11.png" class="right-image" />

---
layout: section
---

# まとめ

---

# まとめ

<v-clicks>

- ドキュメント翻訳は難しくない！
  - 高度な英語力や技術力は必要ない
- OSS 貢献してみたい場合は、まずドキュメントがおすすめ！
  - 日本語でやり取りできるので、コントリビュートに慣れるのに最適

</v-clicks>
