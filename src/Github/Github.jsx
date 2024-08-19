import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const [user, repos] = data;

  return (
    <div className="text-center m-4 bg-[#0d1117] rounded-lg text-white p-6 flex">
      <div className="w-1/3 flex flex-col items-center justify-center gap-2">
        <div>
          <img
            className="rounded-full"
            src={user.avatar_url}
            alt="Git picture"
            width={300}
          />
        </div>
        <div className="">
          <div className="text-2xl font-medium">
            <h2>{user.name}</h2>
          </div>
          <div className="text-white opacity-50 font-thin text-center">
            {user.login} • followers: {user.followers}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-12 gap-2">
        <div className="font-medium text-xl">Popular repositories</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="border-2 w-full border-[#ffffff55]  rounded-lg p-4 flex flex-col items-start"
            >
              <Link
                to={repo.html_url}
                className="text-lg font-semibold hover:underline"
              >
                {repo.name}
              </Link>
              <div className="text-white opacity-50 font-thin">
                {repo.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const userResponse = await fetch("https://api.github.com/users/nikhil-87");
  const reposResponse = await fetch(
    "https://api.github.com/users/nikhil-87/repos"
  );

  if (!userResponse.ok || !reposResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const userJson = await userResponse.json();
  const reposJson = await reposResponse.json();

  //   const fakeUserJson = {
  //     name: "John Doe",
  //     login: "johndoe",
  //     followers: 100,
  //     avatar_url:
  //       "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f6ed149-c2f1-45b1-876c-0c26ccf7c2e2/dfw4wvo-a3c9af98-a621-4eeb-bffc-5ead4b300254.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmNmVkMTQ5LWMyZjEtNDViMS04NzZjLTBjMjZjY2Y3YzJlMlwvZGZ3NHd2by1hM2M5YWY5OC1hNjIxLTRlZWItYmZmYy01ZWFkNGIzMDAyNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Z5tVVFGh8k7vChBI9p9EbpWD9MKOMLhoaAFmMAzjIEA",
  //   };

  //   const fakeReposJson = [
  //     {
  //       id: 1,
  //       name: "Repo 1",
  //       description: "This is repo 1",
  //       html_url: "https://github.com/nikhil-87/atmosfears",
  //     },
  //     {
  //       id: 2,
  //       name: "Repo 2",
  //       description: "This is repo 2",
  //       html_url: "https://github.com/nikhil-87/atmosfears",
  //     },
  //     {
  //       id: 3,
  //       name: "Repo 3",
  //       description: "This is repo 3",
  //       html_url: "https://github.com/nikhil-87/atmosfears",
  //     },
  //     {
  //       id: 4,
  //       name: "Repo 4",
  //       description: "This is repo 4",
  //       html_url: "https://github.com/nikhil-87/atmosfears",
  //     },
  //     {
  //       id: 5,
  //       name: "Repo 4",
  //       description: "This is repo 4",
  //       html_url: "https://github.com/nikhil-87/atmosfears",
  //     },
  //   ];

  //   const userJson = fakeUserJson;
  //   const reposJson = fakeReposJson;

  return [userJson, reposJson];
};
