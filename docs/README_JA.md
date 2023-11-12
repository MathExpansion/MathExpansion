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

Google Spreadsheetsで数式モデルを実装したりするプロジェクト   
  
ScriptID =  
`1DbavNp1b_wXRyII-Q1Hsxa1RoHDOSBJmRPDH_PRbfe1-BSv0K-6boWWc`  
[DiscordURL](https://discord.gg/tKj4anHgu8)  
[English](docs/README_ENG.md)
  
# 開発環境

## Gitの管理ツールについて

基本的にはSourcetreeでもGitBashでも何でもいいです  
使い慣れている方を使ってください  
  
### Sourcetree

- 導入方法
  - <https://mteam.jp/column/10210/>
- DL先
  - <https://www.sourcetreeapp.com/>

### GitBash

- 導入方法
  - <https://www.sejuku.net/blog/72673>
- DL先
  - <https://gitforwindows.org/>

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
  
#### 開発に役立つ参考リンク集
[ArrowFunction](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  

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

手が空いた時に各々がやる感じなので、そこまで使命感みたいなのは持たなくて大丈夫だと思っている  
  
参照する画像は `Organization_profile` リポジトリ 直下 `img` に投入して絶対パスで参照してくれると助かる  
  
`feature/repair` 等々整備諸々終了後統合予定  
当組織独自のものに関しては都度 `Copyright 2023 MathExpansion` 追記予定  
  
# 定数及びカスタム関数リファレンス

$k_b = 1.380649^{-23}$  
$n_a = 6.02214076^{23}$  
$h = 6.62607015^{-34}$
