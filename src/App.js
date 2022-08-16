import React, { useState, useEffect } from "react";

import Article from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("search...");
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json")
      //fetch(
      //"http://www.reddit.com/api/info.json?jsonp=foo&url=http://www.reddit.com/buttons")
      .then((res) => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then((data) => {
          if (data != null) setArticles(data.data.children);
        });
      });
  }, [subreddit]);

  /* $.getJSON("http://www.reddit.com/r/pics/.json?jsonp=?", function (data) {
    $.each(data.data.children, function (i, item) {
      $("<img/>").attr("src", item.data.url).appendTo("#images");
    });
  });*/
  return (
    <div className="App">
      <header>
        <input
          class="subreddit_input"
          onChange={(e) => setSubreddit(e.target.value)}
          value={subreddit}
        />
      </header>
      <div className="articles">
        {articles != null
          ? articles.map((article, index) => (
              <Article key={index} article={article.data} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
