import { Divider } from "antd"
import React, { useState } from "react"
import BankDefList from "../components/List/BankDefList"
import BankHome from "../components/List/BankHome"
import { CreditTableHome } from "../components/Table/CreditTableHome"

export default function App() {
     return (
          <div>
               <BankHome />
               <Divider />
               <BankDefList/>
               <Divider />
               <CreditTableHome  />
          </div>
     )
}

export async function getServerSideProps({ req }) {
     const headers = req ? req.headers : {}
     return { props: { headers } }
}
