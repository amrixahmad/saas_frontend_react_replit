import React from 'react'
import { LineChartComponent, StatCardSection, Calendar, TableComponent,
       BrowserUsage, RealTime, MonthlySales, TradingCalendar, CalendarCard} from '../../components/component-services'

const Admin = () => {


  return ( 
    
     <main className="content">
       
       <div className="container-fluid p-0">
         <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

         <div className="row">
           
           <StatCardSection />
           <LineChartComponent />
           
         </div>

         <div className="row">
           
           {/* <BrowserUsage />                        */}
           <CalendarCard />                       
           {/* <Calendar />                      */}
           
         </div>

         <div className="row">
           
           <TableComponent />
           <MonthlySales />
           
         </div>

       </div>
     </main>            

  )
}

export default Admin