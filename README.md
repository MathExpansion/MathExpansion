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
# MathExpansion
Google Spreadsheetsで数式モデルを実装したりするプロジェクト  
A project that implements a mathematical model with Google Spreadsheets  
ScriptID =  
`1DbavNp1b_wXRyII-Q1Hsxa1RoHDOSBJmRPDH_PRbfe1-BSv0K-6boWWc`  
[DiscordURL](https://discord.gg/tKj4anHgu8)  
[日本語ReadMe](docs/README_JA.md)
  
# 開発環境(Development environment)
## Gitの管理ツールについて
基本的にはSourcetreeでもGitBashでも何でもいいです  
使い慣れている方を使ってください  
  
### Sourcetree
- 導入方法
  - https://mteam.jp/column/10210/
- DL先
  - https://www.sourcetreeapp.com/

### GitBash
- 導入方法
  - https://www.sejuku.net/blog/72673
- DL先
  - https://gitforwindows.org/
    
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
- https://kinsta.com/jp/blog/how-to-install-node-js/
  
### 手順
基本的には下記サイトを参考にしています
- https://dev.classmethod.jp/articles/gas-aside/
  
  
1. GoogleAppsScriptAPIの有効化
GoogleAppsScriptAPIの設定画面からAPIを有効化  
- https://script.google.com/home/usersettings
  

2. asideを用いたプロジェクト作成
下記コマンドをコマンドプロンプトで実行
```
$ npx @google/aside init
```
  

3. デプロイ環境
テスト用のスプレッドシートを各自で作成します  
作成したスプレッドシートからApps Scriptに移動し、プロジェクトの設定から `スクリプト ID`をコピーします  
  

コピーしたスクリプトIDをclasp-dev.jsonに入力します  
```
{"scriptId":"{ここにスクリプトIDを入力してください}","rootDir":"./src"}

例:
{"scriptId":"111122223333-4444","rootDir":"./src"}
```
  

4. デプロイテスト
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
  
  
# branch
## ブランチ運用について
基本的には `develop` から `feature/{issue番号}` で作ってほしい  
例: `feature/1`, `feature/5`  
`main` はリリースするときに `develop` からMergeする予定  

## About branch operation
Basically, I want you to create it from `develop` with `feature/{issue number}`  
Example: `feature/1`, `feature/5`  
`main` is planned to be merged from `develop` when released.  
 
  
### 既に同じブランチ名が存在する場合(If the same branch name already exists)
`feature/1_` のように `_` を付けて都度対応してほしい  
I would like you to add `_` and respond each time like `feature/1_`  
  
## コミットメッセージについて(About commit messages)
`#{issue番号} 内容` のようなメッセージにしてもらえると、issueとの紐づけができるのでありがたい  
例: `#1 ReadMe更新`  
I would appreciate it if you could write a message like `#{issue number} content` so that I can link it to the issue.  
Example: `#1 ReadMe update`  
  
# その他(others)
手が空いた時に各々がやる感じなので、そこまで使命感みたいなのは持たなくて大丈夫だと思っている  
I feel like everyone does it when they have free time, so I don't think it's okay to have that much of a sense of mission.  
  
# 定数及びカスタム関数リファレンス(Constants and custom functions reference)

$k_b = 1.380649^{-23}$  
$n_a = 6.02214076^{23}$  
$h = 6.62607015^{-34}$ `Planck constant , const h_Planck`  
