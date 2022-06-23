import Footer from "./Footer";
import data from "./data"
import Card from "./Card";

function App() {
  
  return (
    <>
      <main className="main">
        <div className="cards">
          {data.map(data => {
            return  <Card 
              key={data.id} 
              image={data.image}
              backgroundColor={data.backgroundColor}
              carType={data.carType}
              about={data.about}
            />
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
