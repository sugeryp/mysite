const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");
// コマンドライン引数をパースする
program.parse(process.argv);
// オプションのパース結果をオブジェクトとして取得する
const options = program.opts();
console.log(options.gfm);