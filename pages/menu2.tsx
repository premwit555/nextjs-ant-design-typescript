import React, { useState } from "react"
import AddCostTable from "../components/Table/AddCostTable"

export default function App() {
     return (
          <div>
               <AddCostTable />
          </div>
     )
}

export async function getServerSideProps({ req }) {
     const headers = req ? req.headers : {}
     return { props: { headers } }
}
