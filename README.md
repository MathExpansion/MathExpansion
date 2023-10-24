# MathExpansion
Google Spreadsheetsで数式モデルを実装したりするプロジェクト  
# MathExpansion
A project that implements a mathematical model with Google Spreadsheets

  
# 開発環境
GithubのブランチとGASの連携をする  
以下URLを参照  
- https://pineplanter.moo.jp/non-it-salaryman/2022/12/22/gas-github/  
sourcetreeがあると楽
- https://mteam.jp/column/10210/
# Development environment
Link Github branch with GAS
See URL below
- https://pineplanter.moo.jp/non-it-salaryman/2022/12/22/gas-github/  
It's easier with sourcetree
- https://mteam.jp/column/10210/

  
# branch
## ブランチ運用について
基本的には `develop` から `feature/{issue番号}` で作ってほしい  
例: `feature/1`, `feature/5`  
`main` はリリースするときに `develop` からMergeする予定 
## About branch operation
Basically, I want you to create it from `develop` with `feature/{issue number}`
Example: `feature/1`, `feature/5`
`main` is planned to be merged from `develop` when released.
 
  
### 既に同じブランチ名が存在する場合
`feature/1_` のように `_` を付けて都度対応してほしい 
### If the same branch name already exists
I would like you to add `_` and respond each time like `feature/1_`
 
  
## コミットメッセージについて
`#{issue番号} 内容` のようなメッセージにしてもらえると、issueとの紐づけができるのでありがたい  
例: `#1 ReadMe更新`  
## About commit messages
I would appreciate it if you could write a message like `#{issue number} content` so that I can link it to the issue.
Example: `#1 ReadMe update`

  
# その他
手が空いた時に各々がやる感じなので、そこまで使命感みたいなのは持たなくて大丈夫だと思っている  
# others
I feel like everyone does it when they have free time, so I don't think it's okay to have that much of a sense of mission.

# 定数及びカスタム関数リファレンス
# Constants and custom functions reference

$k_b = 1.380649^(-23)$