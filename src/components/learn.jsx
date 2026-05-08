import { useState, useEffect } from "react";
function DeveloperCard({ name, role, available }) {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [username]);

  // When the component loads, fetch this URL:
  // https://api.github.com/users/Marvydee
  // Show a loading message while it fetches
  // Display the name, followers, and public_repos when done

  return (
    <>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />

      {loading && <p>Loading.....</p>}

      {profile && (
        <div>
          <h2>{profile.name}</h2>
          <p>Followers: {profile.followers}</p>
          <p>Public Repositories: {profile.public_repos}</p>
        </div>
      )}

      <h1>{name}</h1>
      <p>{role}</p>
      {available ? <p>Open to work</p> : <p>Not open to work</p>}

      <button
        onClick={() => setCount(count + 1)}
        style={count > 10 ? { backgroundColor: "red" } : {}}
      >
        Add
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Remove</button>

      <button onClick={() => setCount(count * 0)}>Reset</button>
    </>
  );
}

export default DeveloperCard;
