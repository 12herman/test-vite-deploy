import React, { useMemo } from 'react'

export default function DashboardStart() {
  
  const startData =useMemo(()=>{
    return [
      {
        heading:"Electricity",
        value:"2.6Kwh",
        color:"text-blue-500",
        logo:<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>,
        footer:"current month"
      },
      {
        heading:"Tickets",
        value:"86",
        color:"text-primary",
        logo:<svg 
        className="cursor-pointer stroke-primary h-8 w-8 stroke-2"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" ></g>
        <g id="SVGRepo_tracerCarrier"  ></g>
        <g id="SVGRepo_iconCarrier"> 
        <path d="M17.5 19.0052V4.99481C17.5 4.35586 16.7879 3.97474 16.2562 4.32917L14.9867 5.17551C14.6969 5.36876 14.3153 5.3522 14.0432 5.13457L12.4998 3.8998C12.2076 3.66606 11.7924 3.66607 11.5002 3.89981L9.95679 5.13457C9.68475 5.3522 9.30314 5.36876 9.01327 5.17551L7.74376 4.32917C7.21212 3.97474 6.5 4.35586 6.5 4.99481V19.0052C6.5 19.6441 7.21212 20.0253 7.74376 19.6708L9.01327 18.8245C9.30314 18.6312 9.68475 18.6478 9.95679 18.8654L11.5002 20.1002C11.7924 20.3339 12.2076 20.3339 12.4998 20.1002L14.0432 18.8654C14.3153 18.6478 14.6969 18.6312 14.9867 18.8245L16.2562 19.6708C16.7879 20.0253 17.5 19.6441 17.5 19.0052Z" ></path> 
        <path d="M9.5 9.5H14.5"  ></path> <path d="M9.5 12H14.5"  ></path> 
        <path d="M9.5 14.5H14.5"  ></path> 
        </g>
        </svg>,
        footer:"tasks remaining"
      },
      {
        heading:"Pending",
        value:"86",
        color:"text-secondary",
        logo:<svg 
        className="cursor-pointer stroke-secondary h-8 w-8 stroke-2"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" ></g>
        <g id="SVGRepo_tracerCarrier"  ></g>
        <g id="SVGRepo_iconCarrier"> 
        <path d="M17.5 19.0052V4.99481C17.5 4.35586 16.7879 3.97474 16.2562 4.32917L14.9867 5.17551C14.6969 5.36876 14.3153 5.3522 14.0432 5.13457L12.4998 3.8998C12.2076 3.66606 11.7924 3.66607 11.5002 3.89981L9.95679 5.13457C9.68475 5.3522 9.30314 5.36876 9.01327 5.17551L7.74376 4.32917C7.21212 3.97474 6.5 4.35586 6.5 4.99481V19.0052C6.5 19.6441 7.21212 20.0253 7.74376 19.6708L9.01327 18.8245C9.30314 18.6312 9.68475 18.6478 9.95679 18.8654L11.5002 20.1002C11.7924 20.3339 12.2076 20.3339 12.4998 20.1002L14.0432 18.8654C14.3153 18.6478 14.6969 18.6312 14.9867 18.8245L16.2562 19.6708C16.7879 20.0253 17.5 19.6441 17.5 19.0052Z" ></path> 
        <path d="M9.5 9.5H14.5"  ></path> <path d="M9.5 12H14.5"  ></path> 
        <path d="M9.5 14.5H14.5"  ></path> 
        </g>
        </svg>,
        footer:"tasks processing"
      },
      {
        heading:"Cleared Tickets",
        value:"25",
        color:"text-green-500",
        logo:<svg 
        className="swap-off h-8 w-8 fill-current"
       viewBox="0 0 24 24" 
       fill="none" 
       xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" ></g>
       <g id="SVGRepo_tracerCarrier"  ></g>
       <g id="SVGRepo_iconCarrier"> 
       <path d="M19.5479 7.26651C20.2474 6.41162 20.1214 5.15157 19.2665 4.45212C18.4116 3.75266 17.1515 3.87866 16.4521 4.73355L8.66618 14.2497L6.2 12.4C5.31634 11.7373 4.06274 11.9164 3.4 12.8C2.73726 13.6837 2.91635 14.9373 3.8 15.6L7.03309 18.0248C8.31916 18.9894 10.137 18.7688 11.155 17.5246L19.5479 7.26651Z" ></path> 
       </g>
       </svg>,
        footer:"is completed"
      },
    ]
  },[]);


  return (
    <div className="shadow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 bg-accent rounded-md">
    {
      startData.map((data,i) =>{
         return <div className="stat" key={i}>
      <div className={`stat-figure ${data.color}`}>
       {data.logo}
      </div>
      <div className={`stat-title`}>{data.heading}</div>
      <div className={`stat-value ${data.color}`}>{data.value}</div>
      <div className="stat-desc">{data.footer}</div>
    </div>
      })
    }
  </div>
  )
}
