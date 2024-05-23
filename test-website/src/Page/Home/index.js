import React from "react";
import accoun from '../../Image/accounting.jpg'

const Home = () =>{
    return(
        <>
            <section id="home" className="section absolute d-flex flex-column">
                <div className="container d-flex justify-content-end">
                    <div style={{textAlign: 'left'}}>
                        <h1>Halaman Home</h1>
                        <p>Halaman Home disini</p>
                    </div>
                </div>
                <div className="container d-flex align-items-end">
                    <img src={accoun} width={400} height={400}/>
                </div>
            </section>
        </>
    )
}

export default Home