import React,{ useEffect } from "react";
export function IframelyLink(props) {
    useEffect(() => {
        if (window && window.iframely) {
          window.iframely.load();
        }
      }, []);
  return (
    <>
      <div className="iframely-embed">
        <div
          className="iframely-responsive"
          style={{ height: 140, paddingBottom: 0 }}
        >
          <a href={props.href} data-iframely-url={props.iframely} />
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}></div>
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
    </>
  );
}