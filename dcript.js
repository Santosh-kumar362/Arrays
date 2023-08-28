
    

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
            {name: 'Baba', id: 101, marks : 23 },
            {name: 'yaga', id: 200, marks : 45 },
            {name: 'Wick', id: 115, marks : 75 } ] 
            let sum = 0
            let ans=studentRecords.map((item)=>sum+=item.marks)
            console.log(sum)
   
   
