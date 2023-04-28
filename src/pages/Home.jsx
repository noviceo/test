import Header from "../components/Header";

function Home() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <button className="redbutton">입실렌티 함께하기!</button>
            </div>
            
        </div>
        
    );
}

export default Home;