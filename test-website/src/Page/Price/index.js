import React from "react";

const PricePage = () => {
    return (
        <>
            <section id="price" className="section">
                <div className="container">
                    <h1>Halaman Price</h1>
                    <p>Ini adalah Halaman Price</p>

                    <div className="container text-center">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
                                    <div className="card-header">BASIC</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title">$6</h5>
                                        <p className="card-text" style={{textAlign: "left"}}>
                                            <ul>
                                                <li>Mencatat Barang Masuk</li>
                                                <li>Mencatat Barang Keluar</li>
                                                <li>Mencatat Keuntungan</li>
                                            </ul>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
                                    <div className="card-header">BUSINESS</div>
                                    <div className="card-body text-warning">
                                        <h5 className="card-title">$15</h5>
                                        <p className="card-text" style={{textAlign: "left"}}>
                                            <ul>
                                                <li>Mencatat Barang Masuk dan Keluar</li>
                                                <li>Mencatat Keuntungan</li>
                                                <li>Dapat Menganalisa hasil penjualan dengan CHART</li>
                                                <li>Support 7x24 Jam</li>
                                            </ul>
                                        </p>
                                    </div>
                                    </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
                                    <div className="card-header">ENTREPRENEUR</div>
                                    <div className="card-body text-danger">
                                        <h5 className="card-title">$30</h5>
                                        <p className="card-text" style={{textAlign: "left"}}>
                                            <ul>
                                                <li>Mencatat Barang Masuk dan Keluar</li>
                                                <li>Mencatat Keuntungan</li>
                                                <li>Dapat Menganalisa hasil penjualan dengan CHART</li>
                                                <li>Support 7x24 Jam</li>
                                                <li>Export data ke Excel</li>
                                                <li>AI Prediksi Penghasilan</li>
                                            </ul>
                                        </p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricePage