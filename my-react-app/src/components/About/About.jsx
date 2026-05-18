import "./About.css"

function About({name, yosh, kasb}) {
    return (
      <>
        <h1 className="bg-red-200">
          salom mening ismim {name} va men hozirda {yosh} yoshdaman. hozirda{" "}
          {kasb} yonalishida ishlamoqdaman{" "}
        </h1>
      </>
    );
}

export default About