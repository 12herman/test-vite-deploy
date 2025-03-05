import React, { useCallback, useEffect, useRef, useState } from "react";

export default function FilterCalendar() {
  
//   // calendar element reference
//   const calendarRef = useRef(null);
  
//   // date changes
//   const [selectedDate, setSelectedDate] = useState("");



//   // change the formate of the date
//   const formatDate = useCallback((date) => date ? new Date(date).toLocaleDateString("en-GB").replace(/\//g, "-") : "",[]);

//   // method
//   useEffect(() => {
//     const calendar = calendarRef.current;
//     if (!calendar) return;
//     const updateDate = () => setSelectedDate(formatDate(calendar.value));
//     const observer = new MutationObserver(() => {
//       if (calendar.value) {
//         updateDate();
//         observer.disconnect();
//       }
//     });
//     observer.observe(calendar, { attributes: true, attributeFilter: ["value"] });
//     const today = new Date().toISOString().split("T")[0];
//     calendar.value = today;
//     updateDate();
//     calendar.addEventListener("change", updateDate);

//     return () => {
//       calendar.removeEventListener("change", updateDate);
//       observer.disconnect();
//     };
//   }, []);




//     if(selectedFilter === "Select two days"){
     
//     }

 // select the radio button
 const [selectedFilter, setSelectedFilter] = useState("Day");
 const handleFilterChange =(e)=> setSelectedFilter(e.target.value);

 const [multiDate,setMultiDate] = useState({dayone:"",daytwo:"",isfirstdate:false,isseconddate:false});


 useEffect(()=>{
   setMultiDate(pre=>({...pre,dayone:"",daytwo:""}));
   return setMultiDate({dayone:"",daytwo:"",isfirstdate:false,isseconddate:false});
 },[selectedFilter]);

  return (
    <div >

   <section>
   <ul className="flex gap-x-3">
        <li>
            <input value="Day" checked={selectedFilter === "Day"} onChange={handleFilterChange} type="radio" name="radio-4" className="radio radio-primary radio-sm" />
            <label className="text-xs font-medium text-gray-500 ml-1">Day</label>
        </li>
        <li>
            <input  value="Month" checked={selectedFilter === "Month"} onChange={handleFilterChange} type="radio" name="radio-4" className="radio radio-primary radio-sm" />
            <label className="text-xs font-medium text-gray-500 ml-1">Month</label>
        </li>
        <li>
            <input value="Select two days" checked={selectedFilter === "Select two days"} onChange={handleFilterChange} type="radio" name="radio-4" className="radio radio-primary radio-sm" />
            <label className="text-xs font-medium text-gray-500 ml-1">Select two days</label>
        </li>
    </ul>
    
    <div className="w-full flex gap-x-5 mt-2">
    <input type="date" className="input input-sm" onChange={(e)=>setMultiDate(pre => ({...pre,dayone:e.target.value}))} value={multiDate.dayone}/>
    <input type="date" className="input input-sm" onChange={(e)=>setMultiDate(pre => ({...pre,daytwo:e.target.value}))} value={multiDate.daytwo} disabled={selectedFilter !== "Select two days"}/>
    </div>


    {/* {(selectedDate && selectedFilter !== "Select two days") && <p className="mt-2 text-xs font-medium text-gray-500 ml-1">Date: <span className="text-primary">{selectedDate}</span></p>}

    {selectedFilter === "Select two days" && <div className="flex gap-x-12">
    <p className="mt-2 text-xs font-medium text-gray-500 ml-1">Date: <span className="text-primary">{multiDate.dayone}</span></p>
    <p className="mt-2 text-xs font-medium text-gray-500 ml-1">Date: <span className="text-primary">{multiDate.daytwo}</span></p>
    </div>}

      <calendar-date ref={calendarRef} className="cally mt-2 bg-base-100 border border-base-300 shadow-lg">
        <svg aria-label="Previous" className="size-4" slot="previous" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
        <svg aria-label="Next" className="size-4" slot="next" viewBox="0 0 24 24">
          <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
        <calendar-month></calendar-month>
      </calendar-date> */}
   </section>

      
    </div>
  );
}
