<!--
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# 概要
## Google Spreadsheets で数値計算を行う OSS

# メッセージ
組み込み Rust を使って Web から産業機械を動かすフロントエンド部分を TypeScript で開発しています．  
文書化，コミュニティの維持，開発，普及には多くの課題があります．  
そこで，協力者・貢献者を募集しております．皆様を歓迎いたします．
製造業をデジタル化し，より持続可能なものにするためには，より多くの人々の協力を得る必要があります．  
私たちは日本人なので，英語圏の人の助けを借りて英文を作らなければなりません．  
実際，この投稿は Google 翻訳を使用して作成されました．  
ソフトウェア技術で製造業を良くしてみませんか？  

 - [貢献方法について](docs/Contributing_JA.md)

ScriptID =  
```
1DbavNp1b_wXRyII-Q1Hsxa1RoHDOSBJmRPDH_PRbfe1-BSv0K-6boWWc
```  
[DiscordURL](https://discord.gg/tKj4anHgu8)  
[English](docs/README_ENG.md)

# 開発環境

## Gitの管理ツールについて

基本的にはSourcetreeでもGitBashでも何でもいいです  
使い慣れている方を使ってください

[最近は VSCode 上で Git 操作が完結するようになってきました](https://zenn.dev/praha/articles/db1c4bcc4ef48c)  

### Sourcetree

- [導入方法](https://mteam.jp/column/10210/)
- [DL先](https://www.sourcetreeapp.com/)

### GitBash

- [導入方法](https://www.sejuku.net/blog/72673)
- [DL先](https://gitforwindows.org/)

## ローカルからGASの環境構築をする

### 前提

- 当プロジェクトディレクトリ `MathExpansion\MathExpansion` (cloneしたディレクトリ直下) 以下で作業するのを前提とする
- コマンドプロンプトで `npm`, `node` コマンドが使用できる

※下記コマンドでバージョンが表示されること

```
Node --version
npm --version
```

表示されない場合は下記手順を参考にインストール

- <https://kinsta.com/jp/blog/how-to-install-node-js/>

### 手順

基本的には下記サイトを参考にしています

- <https://dev.classmethod.jp/articles/gas-aside/>

#### GoogleAppsScriptAPIの有効化

GoogleAppsScriptAPIの設定画面からAPIを有効化

- <https://script.google.com/home/usersettings>

#### asideを用いたプロジェクト作成

下記コマンドをコマンドプロンプトで実行

```
npx @google/aside init
```

#### デプロイ環境

テスト用のスプレッドシートを各自で作成します  
作成したスプレッドシートからApps Scriptに移動し、プロジェクトの設定から `スクリプト ID`をコピーします

コピーしたスクリプトIDをclasp-dev.jsonに入力します

```
{"scriptId":"{ここにスクリプトIDを入力してください}","rootDir":"./src"}

例:
{"scriptId":"111122223333-4444","rootDir":"./src"}
```

#### デプロイテスト

下記コマンドで上記で作成したスプレッドシートにデプロイします

```
# 開発環境にデプロイ
$ npm run deploy
```

コマンド実行後、Apps Script にコードが反映されていれば成功です

また、下記コマンドはMathExpanisonの共有プロジェクト宛てに設定しています  
こちらは原則 `develop` ブランチでのみ実行お願いします

```
# 本番環境にデプロイ
$ npm run deploy:prod
```

# Branch

## ブランチ運用について

基本的には `develop` から `feature/{issue番号}` で作ってほしい  
例: `feature/1`, `feature/5`  
`main` はリリースするときに `develop` からMergeする予定

### 既に同じブランチ名が存在する場合

`feature/1_` のように `_` を付けて都度対応してほしい

## コミットメッセージについて

`#{issue番号} 内容` のようなメッセージにしてもらえると、issueとの紐づけができるのでありがたい  
例: `#1 ReadMe更新`

# その他(others)


# 定数及びカスタム関数リファレンス

$k_b = 1.380649^{-23}$  
$n_a = 6.02214076^{23}$  
$h = 6.62607015^{-34}$
