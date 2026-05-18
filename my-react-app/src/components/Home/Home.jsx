import "./Home.css"

function Home({name, yosh, kasb}) {
  return (
    <>
      <h1 className="bg-cyan-500 rounded-3xl">hello my name is {name} and i am {yosh} y.o. Right now i am a {kasb} developer</h1>;
    </>
  );
}

export default Home;