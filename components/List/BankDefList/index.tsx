import React from "react"
import { Button, Card, Col, Row } from "antd"
import "./BankDefList.less"
import Text from "antd/lib/typography/Text"
const index = () => {
     const bankLists = [
          {
               id: 1,
               Cost: "100.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 2,
               Cost: "200.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 3,
               Cost: "1000.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 4,
               Cost: "500.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 1,
               Cost: "100.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 2,
               Cost: "200.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 3,
               Cost: "1000.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
          {
               id: 4,
               Cost: "500.00",
               useType: "Deposit",
               bankRemark: "กรุงเทพ (BBL) /X481470",
               BankCode: "BBL",
               bankNumber: "1422488977",
          },
     ]

     return (
          <div className='site-card-wrapper'>
               <div className='boxListBankDef'>
                    {bankLists.map((bank) => {
                         return (
                              <div className='banklistitemdef'>
                                   <div className='flex'>
                                        <div className='logoBank'>
                                             <img
                                                  src='https://sb.autoplay.cloud/assets/img/bank/SCB.svg'
                                                  width='30px'
                                             />
                                        </div>
                                        <div className='mt1'>
                                             <Text>
                                                  DEF:{bank.useType} : +
                                                  {bank.Cost}
                                             </Text>{" "}
                                             <br />
                                             <Text
                                                  style={{
                                                       fontSize: "12px",
                                                  }}
                                             >
                                                  {bank.bankRemark}
                                             </Text>
                                             <br />
                                             <Button type='primary' block>
                                                  ใช้ยอด
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         )
                    })}
                   
               </div>
               <h1>DEF BANK : + 4000</h1>
               <h1>DEF CREDIT : - 1000</h1>
               
          </div>
     )
}

export default index
