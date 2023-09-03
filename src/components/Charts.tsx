import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { CovidData, } from '../type'

import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

import ClipLoader from "react-spinners/ClipLoader";
import { LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);





Chart.register(CategoryScale);
const Charts = () => {
  const covidQuery = useQuery({
    queryKey: ['covid-19'],
    queryFn: async () => {
      const res = await fetch('https://disease.sh/v3/covid-19/all');
      return res.json();
    },
    // onSuccess callback to set the state
    onSuccess: (data) => {
      setLineChartData({
        labels: ['Cases', 'Deaths', 'Recovered', 'Active'],
        datasets: [
          {
            label: 'Covid -19 Data',
            data: [
              data?.cases,
              data?.deaths,
              data?.recovered,
              data?.active,
            ],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              '#ecf0f1',
              '#50AF95',
              '#f3ba2f',
              '#2a71d0',
            ],
            borderColor: 'black',
            borderWidth: 2,
          },
        ],
      });
    },
  });
  
 

   const  totalCovidCases:CovidData = covidQuery?.data

   
   
    
  const [lineChartData,setLineChartData] = React.useState({
    labels:['cases','deaths','recovered','active'],
    datasets:[
      {
        label:"Data",
        data :[totalCovidCases?.cases,totalCovidCases?.deaths,totalCovidCases?.recovered,totalCovidCases?.active],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      }
    ]

  }
  )    
  

  if(covidQuery?.isLoading){
    return   <div className='fixed inset-0 flex items-center justify-center'>
    <ClipLoader
   color='black'
   
   
   size={30}
   aria-label="Loading Spinner"
   data-testid="loader"
 />
  </div>
  }
  if (covidQuery.isError) {
    return   <div className='fixed inset-0 flex items-center justify-center'>
    <ClipLoader
   color='black'
   
   
   size={30}
   aria-label="Loading Spinner"
   data-testid="loader"
 />
  </div>
  }
  return (
    <>
     <section className=' mt-[5rem] '>
     <h2 className='font-bold  text-xl  text-center'>Total covid-19 Cases across the World</h2>
 
  <div className='m-auto w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] mt-5  '>
     
     <Bar  data={lineChartData}  options={{
    maintainAspectRatio: true, // Allows the chart to resize
    responsive: true, // Makes the chart responsive
  }}   />
      </div>
     
  </section>
    
   
   
   
   
 
 

    </>

  )
}

export default Charts