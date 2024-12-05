# ディスクゴルフ規則プロジェクト

これは,
ディスクゴルフ競技を愛する全てのディスクゴルフ・プレーヤーに贈る,
ディスクゴルフ公式規則アプリのための公開プロジェクトです.

## テキスト本文

ウェブサイトのテキスト本文はマークダウン形式で書かれ,
下表の通り配置されています.

| ディレクトリ           |　用途
|----------------------|---
| [prefaces](prefaces) | はじめに部
| [rules](rules)       | 公式規則 本文
| [appendix](appendix) | 公式規則 附則
| [qas](qas)           | 公式規則 Q&A
| [miscs](miscs)       | まとめ、あとがき部

## テキストからHTMLへの変換

上記テキストは[tools/md2html](tools/md2html)によりHTMLに変換されます.

## プロジェクトの更新

更新内容を
[https://jpdga-shizuoka.github.io/rules](https://jpdga-shizuoka.github.io/rules)
に公開するためには,
以下のコマンドを実行してください.

```
$ ./deploy
```

## License

MIT except under [rules](rules) which is reserved by [PDGA](https://www.pdga.com).

## Copyright

The original copyright under [rules](rules) is reserved by [PDGA](https://www.pdga.com).
