import Embed from "react-embed"
//ここにblogで使うショートコードをあげていきます。
// react-embed : https://github.com/streamich/react-embed
// に使い方があります。
export { Embed }

// iframely: https://iframely.com/embed
// 上のサイトで埋め込みたいサイトのembedを受け取り、<IframelyLink href="サイトのurl" iflamely="data-iflamely-urlの値"/>でiflamelyの埋め込みができます。
export * from "./iframely";
// 数式を入れ込むことができます。<m l="x^3"/>と入力するとx^3がinlineの表式で表示されます。<m d="x^3"/>と入力するとx-4がdisplayの表式で表示されます。
export * from "./math";