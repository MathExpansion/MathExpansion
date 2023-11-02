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
ScriptID =  
`1DbavNp1b_wXRyII-Q1Hsxa1RoHDOSBJmRPDH_PRbfe1-BSv0K-6boWWc`  
[DiscordURL](https://discord.gg/tKj4anHgu8)

  
# 開発環境  
GithubのブランチとGASの連携をする  
以下URLを参照  
- https://pineplanter.moo.jp/non-it-salaryman/2022/12/22/gas-github/  
sourcetreeがあると楽  
- https://mteam.jp/column/10210/  

  
# branch
## ブランチ運用について
基本的には `develop` から `feature/{issue番号}` で作ってほしい  
例: `feature/1`, `feature/5`  
`main` はリリースするときに `develop` からMergeする予定 

  
### 既に同じブランチ名が存在する場合  
`feature/1_` のように `_` を付けて都度対応してほしい 

  
## コミットメッセージについて
`#{issue番号} 内容` のようなメッセージにしてもらえると、issueとの紐づけができるのでありがたい  
例: `#1 ReadMe更新`  

  
# その他  
手が空いた時に各々がやる感じなので、そこまで使命感みたいなのは持たなくて大丈夫だと思っている  

# 定数及びカスタム関数リファレンス

$k_b = 1.380649^{-23}$  
$n_a = 6.02214076^{23}$  
$h = 6.62607015^{-34}$ `Planck constant , const h_Planck`  