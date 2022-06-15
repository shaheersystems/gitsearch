import "./App.css";
import SearchBar from "./components/SearchBar";
import Container from "./components/Container";
import Profile from "./components/Profile";
import RepoCard from "./components/RepoCard";
import ReposContainer from "./components/ReopsContainer";
import { useState } from "react";
function App() {
  const githubUsers = [
    {
      firstName: "Muhammad",
      lastName: "Shaheer",
      link: "https://google.com",
      bio: "I drink coffee, mash my keyboard and sometimes some useable code comes out.",
      repos: [
        {
          repoName: "process",
          repoDesc: "My personal website. Used for experiments and learnings",
          repoLink: "https://github-search-youtube-demo.netlify.app/",
          numWatchers: 5,
        },
        {
          repoName: "process",
          repoDesc: "My personal website. Used for experiments and learnings",
          repoLink: "https://github-search-youtube-demo.netlify.app/",
          numWatchers: 5,
        },
        {
          repoName: "process",
          repoDesc: "My personal website. Used for experiments and learnings",
          repoLink: "https://github-search-youtube-demo.netlify.app/",
          numWatchers: 5,
        },
        {
          repoName: "process",
          repoDesc: "My personal website. Used for experiments and learnings",
          repoLink: "https://github-search-youtube-demo.netlify.app/",
          numWatchers: 5,
        },
      ],
    },
  ];
  const [user, setUser] = useState(githubUsers[0]);
  const [repos, setRepos] = useState(githubUsers[0].repos);
  return (
    <div className="App">
      <SearchBar />
      <Container>
        <Profile
          name={user.firstName + " " + user.lastName}
          desc={user.bio}
          link={user.link}
        />
        <ReposContainer>
          {repos.map((item) => {
            return (
              <RepoCard
                repoName={item.repoName}
                repoDesc={item.repoDesc}
                repoLink={item.repoLink}
                repoWatchers={item.numWatchers}
              />
            );
          })}
        </ReposContainer>
      </Container>
    </div>
  );
}

export default App;
