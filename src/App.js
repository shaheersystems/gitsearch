import "./App.css";
import SearchBar from "./components/SearchBar";
import Container from "./components/Container";
import Profile from "./components/Profile";
import RepoCard from "./components/RepoCard";
import ReposContainer from "./components/ReopsContainer";
import { useState, useEffect } from "react";
function App() {
  const [username, setUsername] = useState("shaheersystems");
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const url1 = `https://api.github.com/users/${username}`;
    const url2 = `https://api.github.com/users/${username}/repos`;
    fetch(url1)
      .then((res) => res.json())
      .then((data) => setUser(data));
    fetch(url2)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, [username]);
  const handleSearchItem = (event) => {
    setUsername(event.target.value);
  };
  const renderData = () => {
    if (repos.message === "Not Found" || !user) {
      return <p>Sorry there was an error</p>;
    } else {
      return (
        <Container>
          <Profile avatar={user.avatar_url} name={user.login} desc={user.bio} />
          <ReposContainer>
            {repos.map((item) => {
              return (
                <RepoCard
                  repoName={item.name}
                  repoDesc={
                    item.description === ""
                      ? "No discription"
                      : item.description
                  }
                  repoLink={item.html_url}
                  repoWatchers={item.watchers === 0 ? "No" : item.watchers}
                />
              );
            })}
          </ReposContainer>
        </Container>
      );
    }
  };

  return (
    <div className="App">
      <SearchBar handleSearchItem={handleSearchItem} />
      {renderData()}
    </div>
  );
}

export default App;
