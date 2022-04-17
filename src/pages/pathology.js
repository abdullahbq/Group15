import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"

const Pathology = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Pathology</h2>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search for a Test , Lab Address"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            Book Lab for Tests
          </button>
        </div>
        <div class="row mb-2">
          <div className="justify-content-centre py-5">
            <div className="card shadow">
              <div className="card-body">
                {/* <GeoAltFill size="30" /> */}
                <h2>View All Your Test Reports</h2>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">
                    Lab/Visit ID
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Lab / Visit ID"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">
                    Password
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Password"
                  />
                </div>
                {/* <div class="input-group mb-3"> */}
                {/* <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              /> */}
                {/* <button class="btn btn-primary" type="button" id="button-addon2">
                Check Report
              </button> */}
                {/* </div> */}
                <button className="btn btn-primary mt-4">
                  <a href="certificate5.pdf" target="_blank">
                    Download Report
                  </a>
                </button>
              </div>{" "}
            </div>
          </div>
          <h2 className="pb-2 border-bottom text-center">
            {" "}
            Tests By Conditions
          </h2>
          <div className="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="covid.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Covid 19 RTPCR With Home Collection</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">3 tests included</h6>
                  <p class="card-text">
                    <b>₹ 750</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="cbc3.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Complete Blood Count(CBC)</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">13 tests included</h6>
                  <p class="card-text">
                    <b>₹ 1350</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="diabetes.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Diabetes and Lipid Profile</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">12 tests included</h6>
                  <p class="card-text">MRP ₹ 1850 56% off</p>
                  <p>
                    <b> ₹ 822</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="haemoglobin.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Hemoglobin</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">1 test included</h6>
                  <p class="card-text">
                    <b> ₹ 220</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="wellness.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Women Wellness Advance</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">36 tests included</h6>
                  <p class="card-text">MRP ₹ 5115 30% Off</p>
                  <p>
                    <b>₹ 3587 </b> savings ₹ 1528
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card border-primary mb-3">
                {" "}
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename="senior citizen.jpg"
                  alt="1"
                />{" "}
                <div class="card-header">
                  <b>Comprehensive Package- Senior Citizen</b>
                </div>
                <div class="card-body">
                  <h6 class="card-title">67 tests included</h6>
                  <p class="card-text">
                    <b>MRP ₹ 4705</b>
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pathology
