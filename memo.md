# About Chatbot-ui
## サイドバー
どの機能がクリックされたかは検索パラメタで保持しているのでリロードしてもそのまま
サイドバーの表示トグルはローカルストレージに保持している
## profile
初期設定時にユーザのprofileがデータベースに保存されるが，usernameなどのバックで設定する変数に関してはdb dir内のPL/pgSLで設定している
## Input
chat-input内のchat-command-inputでそれぞれのcommand pickerを止めている
## UI
page dir内のUI設定とchat dir内のchat-uiファイルの二つでChatのmain画面のUI構成がされているが，後者はテキスト入力後の設定
現状，両者でhelp機能を止めている
## Workspace
workspace-switcherでworkspaceのadd機能停止