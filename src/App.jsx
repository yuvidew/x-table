import React, { useState } from 'react'
import { Button } from './components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const App = () => {
    const [list, setList] = useState([
      { date: "2022-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-02", views: 150, article: "Article 2" },
      { date: "2023-09-02", views: 120, article: "Article 3" },
      { date: "2020-09-03", views: 200, article: "Article 4" }
    ])

    const onDateSort = () => {
      const sortData = [...list].sort((a , b) => {
        const dateA = Date.parse(a.date);
        const dateB = Date.parse(b.date);

        if(dateA == dateB){
          return b.views - a.views
        }

        return dateB - dateA
      })

      setList(sortData)
    }

    const onViewSort = () => {
      const sortView = [...list].sort((a , b) => {
        if(a.views === b.views){
          return Date.parse(b.date) - Date.parse(atob.date)
        }

        return b.views - a.views
      })

      setList(sortView)
    }

    return (
      <div className=' flex items-center justify-center text-white ' >
          <article className=' p-5 bg-stone-700 mt-[5rem] w-[30rem] rounded-lg shadow-md'>
            <h1 className=' text-center text-[1.4rem]'>
              Date and Views Table
            </h1>
            <div className=' flex items-center gap-2 justify-center mt-[2rem]'>
              <Button 
                variant = "secondary" 
                className = "w-full" 
                onClick = {onDateSort}
              >
                Sort by Date
              </Button>
              <Button 
                variant = "secondary" 
                className = "w-full" 
                onClick = {onViewSort}
              >
                Sort by View
              </Button>
            </div>
            <Table className = "mt-[2rem]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Date</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead className="text-right">Article</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  {list.map((item , index) => (
                    <TableRow key={index} >
                        <TableCell className="font-medium">{item.date}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell className="text-right">{item.article}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </article>
      </div>
    )
}

export default App