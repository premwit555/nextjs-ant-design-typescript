import React from "react"
import { Card, Col, Row } from "antd"
import "./BankHome.less"

const index = () => {
     const bankLists = [
          {
               id: 1,
               bankAccName: "Asdsd SD",
               bankCode: "SCB",
               bankNumber: "1422488977",
               bankBalance: "5000.00",
               useType: "Deposit",
          },
          {
               id: 2,
               bankAccName: "Hon Un",
               bankCode: "SCB",
               bankNumber: "1688454123",
               bankBalance: "12,000.00",
               useType: "Withdraw",
          },
          {
               id: 3,
               bankAccName: "Premwit",
               bankCode: "SCB",
               bankNumber: "54351344123",
               bankBalance: "50,100.00",
               useType: "Deposit",
          },
          {
               id: 3,
               bankAccName: "Premwit",
               bankCode: "SCB",
               bankNumber: "54351344123",
               bankBalance: "50,100.00",
               useType: "Deposit",
          },
     ]

     return (
          <div className='site-card-wrapper'>
               <div className='boxListBank'>
                    {bankLists.map((bank) => {
                         return (
                              <Card
                                   key={bank.id}
                                   title={
                                        <div className='flex'>
                                             <div className='logoBank'>
                                                  <img
                                                       src='https://sb.autoplay.cloud/assets/img/bank/SCB.svg'
                                                       width='40px'
                                                  />
                                             </div>
                                             <div>
                                                  <p>
                                                       {bank.useType} :{" "}
                                                       {bank.bankBalance}
                                                  </p>
                                                  <span>
                                                       {" "}
                                                       ชื่อบัญชี : {bank.bankAccName}
                                                  </span>
                                             </div>
                                        </div>
                                   }
                                   className='banklistitem'
                              >
                                   <p> เลชบัญชี : {bank.bankNumber}</p>
                              </Card>
                         )
                    })}
               </div>
          </div>
     )
}

export default index
