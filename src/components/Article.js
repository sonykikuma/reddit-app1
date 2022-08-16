import React from "react";

function Article(props) {
  /*const thumbnail = () => {
    thumbnail_height: 105,
      (thumbnail_width = 140),
      (_url =
        "https://a.thumbs.redditmedia.com/IbAz2FAPFsPiAAHwLTwZAxileyYZY8T9-OwXRYeO0E4.jpg");
  };*/
  let base_url = "https://reddit.com";
  //let base_url =
  // "http://www.reddit.com/api/info.json?jsonp=foo&url=http://www.reddit.com/buttons";

  return (
    <article>
      <a href={base_url + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
        <thumbnail />
      </a>
    </article>
  );
}

export default Article;
