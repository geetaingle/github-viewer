import React, { useState } from "react";
import Display from "./display";
import "./profile.css";
// import header from "./Github-Logo.png";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);

    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div>
        <div>
          <nav className="navbar navbar-light ">
            <div className="container-fluid row">
              <div className="col-3">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                  className="logo"
                  alt="logo"
                />
              </div>

              <div className="col-9 text-left">
                <h1 className="display-4">Github Viewer</h1>
                <p className="lead mb-0">
                  Enter the github username to get insights on profile and
                  repositeries of the user.
                </p>
              </div>
            </div>
          </nav>
          <div className="container py-5">
            <div className="row text-center text-white">
              <div className="col-lg-8 mx-auto">
                <form className="d-flex">
                  <input
                    className=" m-2 size"
                    type="search"
                    placeholder="Type username"
                    aria-label="Search"
                    value={username}
                    onChange={onChangeHandler}
                  />
                  <button
                    className="btn btn-primary m-2"
                    type="submit"
                    onClick={submitHandler}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

          <Display data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Profile;
