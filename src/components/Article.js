import React from "react";

function Article(props) {
  let base_url = "https://reddit.com";
  //let base_url =
  // "http://www.reddit.com/api/info.json?jsonp=foo&url=http://www.reddit.com/buttons";

  return (
    <article>
      <a href={base_url + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}

export default Article;
