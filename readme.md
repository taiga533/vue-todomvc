# このリポジトリについて

>  [TodoMVC](http://todomvc.com) アプリを作るためのテンプレートです。

![](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)


## Getting started

- テンプレートに触れる前に[機能要件](##機能要件)を見てください。

- このリポジトリをクローンしてください。

## 機能要件
### Todoがないとき
Todoがないときは`#main`と`#fotter`は見えないようにします。

### Todoの追加
新しいTodoはTodoMVCアプリの上部にあるinput要素に入力します。  
このinput要素はページが読み込まれたときに、フォーカスされた状態にします。
（できれば`autofocus`属性をinput要素に使用する）  
エンターキーを押すと新しいTodoがTodoリストに追加され、input要素は空になります。  
新しいTodoがリストに追加される前に、`.trim()`メソッドを使ってinput要素への入力が空でないか念の為確認してください。

### すべてを`完了`としてマークするボタン
TodoMVCアプリ上部の入力欄左にあるチェックボックス（ボックスというよりチェックマーク）は、リスト上に存在するすべてのTodoアイテムをチェック済みにします。  
すべてのtodoアイテムがチェック済みの場合はチェックボックス自身もチェックが付きます。  
そしてチェックを外すと、すべてのTodoアイテムのチェックを解除します。

### Todoアイテム
Todoアイテムは3つの操作が可能です。
1. Todoアイテム左のチェックボックスマークをクリックしたとき、completedの値が更新され、  
todoアイテムの`<li>`にcompletedクラスが付くことによって、完了としてマークされます。
1. todoアイテムの`<label>`要素をダブルクリックするとTodoアイテムの`<li>`にeditingクラスが付き、  
Todoアイテムの編集モードが有効になります。
1. todoアイテムにマウスをかざすと削除ボタンが表示されます。

### 編集
編集モードが有効なとき、編集モードが有効なTodoアイテムに対する他の操作が非表示になり、  
todoアイテムの内容がすでに入力された状態の入力欄にフォーカスします。  
編集モードでは入力欄からフォーカスが外れるか、入力欄でエンターキーが押されたときに、  
todoアイテムの`<li>`についたeditingクラスが外れて、編集内容が保存されます。  
年のため`.trim()`メソッドを使って入力欄が空でないか確認しましょう。  
もし入力欄が空欄のときは、todoを削除するようにします。  
もし編集中にESCキーを押された場合は、編集状態を破棄します。

### todoアイテムカウンター
未完了のtodoアイテムの数を表示しましょう。  
その数は`<strong>`タグで囲ってください。  

### 完了状態のtodoを削除するボタン
クリックされたら、完了状態のtodoを削除するようにします。  
完了状態todoが存在しないときは、完了状態のtodoを削除するボタンを非表示にしてください。  

### 永続化
localStorageを使ってtodoリストを永続化するべきです。  
フレームワークがデータを永続化する機能を提供している場合はそれを使ってください。提供していない場合はバニラのlocalStorageを使用してください。  
localStorageが使えるのであれば、保存するtodoアイテムそれぞれに __id__ 、 __title__ 、 __completed__ キーを付与してください。  
また、編集状態のtodoアイテムは保存しないでください。

### ルーティング
ルーティングはすべての実装に必要とされます。  
もし、フレームワーク側がルーティング機能を提供している場合はそれをつかってください。  
提供していない場合は[Flatiron Director](https://github.com/flatiron/director)を`/assets`フォルダに入れて使用してください。  
ルートが変更されたら、そのルートに対応するtodoアイテムのみ表示するようにリストをフィルタリングし、  
todoリスト下部のAll, Active, Completedリンクもルートに対応するものにのみ`selected`クラスを付与します。  
例）todoリスト下部のActiveが選択されていた場合は、チェック済みのtodoアイテムは非表示となります。  
この状態はページをリロードした後も持続するようにします。

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://sindresorhus.com" property="cc:attributionName" rel="cc:attributionURL">TasteJS</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US">Creative Commons Attribution 4.0 International License</a>.
