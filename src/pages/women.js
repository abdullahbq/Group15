import React from "react"
import Layout from "../components/Layout/Layout"

const Women = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center"> Women</h2>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Office on Women's Health
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search For Women's Health"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Women
