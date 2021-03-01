import React from "react";
import "./display.css";
import logo from "./git.png";

const Display = ({ data, repositories }) => {
  return (
    <div className="profile">
      <div class="container">
        <div class="row text-center">
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src={data.avatar_url}
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <p>
                <a href={data.html_url}>
                  <h5 class="mb-0 name">{data.name}</h5>
                </a>
              </p>
              <p class="small text-uppercase text-muted bio">{data.bio}</p>
              <a className="blog" href="{data.blog}">
                {data.blog}
              </a>
              <p className="location">{data.location}</p>
              <div className="row ">
                <div className="col">
                  <a href={data.followers_url} className="foll">
                    Follwers: {data.followers}
                  </a>
                </div>
                <div className="col">
                  <a href={data.following_url} className="foll">
                    Follwing: {data.following}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" col text-left bg-white rounded shadow-sm">
            <p className="m-2">Total repositories: {data.public_repos}</p>
            {repositories.map((repo) => (
              <div className="repos" key={repo.stargazers_count}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item m-10">
                    <a href={repo.html_url} className="header" target="_blank">
                      <i>
                        <img src={logo} class="icon" />
                      </i>
                      {repo.name}
                    </a>

                    <img
                      src="https://i.pinimg.com/originals/f4/f3/ba/f4f3ba94175a02c9e5a016dbaa8ae21f.png"
                      class="icon"
                    />
                    <a href={repo.stargazers_url}>{repo.stargazers_count}</a>

                    <p>{repo.description}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
