import Header from '../components/Header';

function WikiViewer() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div>
                <h1>입실렌티</h1>
                <div className='index'>
                    <p><a href="/입실렌티">1.</a> 일번항목</p>
                    <p><a href="/입실렌티">2.</a> 이번항목</p>
                    <p><a href="/입실렌티">3.</a> 삼번항목</p>
                    <p><a href="/입실렌티">4.</a> 사번항목</p>
                </div>
                <div className="indexcontents">
                    
                </div>
            </div>
        </div>
        

    )
}

export default WikiViewer;