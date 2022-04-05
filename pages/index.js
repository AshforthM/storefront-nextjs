import { useState, useEffect } from "react";

import Button from "../components/Button/Button";
import PageTitle from "../components/PageTitle/PageTitle";
import User from "../components/User/User";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    async function loadData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUserData(data);
    }
    loadData();
  },[]);

  return (
    <>
      <PageTitle title="VHS StoreFront" tagline="Featured Products" />

      <div style={{ textAlign: "center" }}>
        <Button
          style={{ margin: "2rem 0 0" }}
          onClick={() => setIsLoading(!isLoading)}
        >
          Get Products
        </Button>
        {isLoading && <p style={{ padding: "1rem" }}>This Is My Output</p>}
      </div>
      <main>
        {
          userData.map(({id, name, email, username}) => <User key={id} name={name} email={email} username={username} />)
        }
      </main>
    </>
  );
}
