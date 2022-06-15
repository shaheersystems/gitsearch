import React from "react";

function RepoCard(props) {
  return (
    <div className="repo-card">
      <div className="repo">
        <h2>{props.repoName}</h2>
        <div className="desc">{props.repoDesc}</div>
      </div>
      <div className="links">
        <a href={props.repoLink}>View repo</a>
        <span>👀 {props.repoWatchers} watchers</span>
      </div>
    </div>
  );
}

export default RepoCard;
