import React from "react";
import DashboardStart from "../components/DashboardStart";
import CommanTable from "../components/CommanTable";
import Chartboard from "../components/Chartboard";
import BottomTimeLine from "../components/BottomTimeLine";
import FilterCalendar from "../components/FilterCalendar";
import OfflineMap from "../components/OfflineMap";

export default function Dashboard() {

  let testContent = [];
  for (let i = 0; i < 3; i++) {
    testContent.push({
      id: i,
      content:`Floor ${i}`
    })
  };

  return (
    <div>
      <DashboardStart />

    <CommanTable/>

    <div className="grid xl:grid-cols-5 gap-x-2">
    <span className="col-span-1 xl:col-span-3 3xl:col-span-4 bg-accent rounded-md mt-2 py-5"><Chartboard/></span>
    <span className="col-span-1 xl:col-span-2 3xl:col-span-1  bg-accent rounded-md mt-2 p-5 "><BottomTimeLine/></span>
    </div>

    

      <div className="join join-vertical bg-base-100 ">
        <div className="collapse collapse-arrow join-item border-base-300 border ">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box max-w-full lg:max-w-[75%] xl:max-w-[60%]">
          <h3 className="font-bold text-lg text-center">Filter <p className="text-xs font-medium text-gray-500">Building with date wise filtering</p> </h3>
          
          <div className="mt-5">
          <FilterCalendar/>
          </div>

          <section className="w-full flex justify-end gap-x-2">
          

          <div className="modal-action">
            <form  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary w-fit">Apply</button>
            </form>
          </div>

          <div className="modal-action">
            <form  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-fit">Close</button>
            </form>
          </div>
          </section>

        </div>
      </dialog>
      




     
      {/* <div className="avatar">
        <div className="mask mask-squircle w-10">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}


      {/* <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger"
          />
        </div>
      </div>
      <div className="inline-grid *:[grid-area:1/1]">
        <div className="status status-error animate-ping"></div>
        <div className="status status-error"></div>
      </div> */}
      Server is down
      
      



      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Item 2
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Item 1
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Item 3
          </a>
        </li>
      </ul>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 1"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 3
        </div>
      </div>
      <div
        className="radial-progress"
        style={
          {
            "--value": "75",
            "--size": "12rem",
            "--thickness": "2rem",
          } /* as React.CSSProperties */
        }
        aria-valuenow={75}
        role="progressbar"
      >
        75%
      </div>
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div role="alert" className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>New software update available.</span>
      </div>
      <progress className="progress w-56"></progress>
      <div className="toast">
        <div className="alert alert-info">
          <span>New message arrived.</span>
        </div>
      </div>
      <input type="date" className="input" />
      <input type="checkbox" defaultChecked className="toggle" />
      <select className="select select-sm ">
        <option>Small</option>
        <option>Small Apple</option>
        <option>Small Orange</option>
        <option>Small Tomato</option>
      </select>
      <input
        type="input"
        className="input validator rounded-md"
        required
        placeholder="Username"
        pattern="[A-Za-z][A-Za-z0-9\-]*"
        // minlength="3"
        // maxlength="30"
        title="Only letters, numbers or dash"
      />
      <p className="validator-hint">
        Must be 3 to 30 characters
        <br />
        containing only letters, numbers or dash
      </p>
      <input
        type="password"
        className="input validator"
        required
        placeholder="Password"
        // minlength="8"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
      />
      <p className="validator-hint">
        Must be more than 8 characters, including
        <br />
        At least one number
        <br />
        At least one lowercase letter
        <br />
        At least one uppercase letter
      </p>
      <div className="divider divider-start"></div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Dasboard</a>
              <div className="block divider divider-start">start</div>
            </li>

            <li>
              <a>3D view</a>
              <div className="block divider divider-start">start</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="indicator">
        <span className="indicator-item status status-success"></span>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">
          content
        </div>
      </div>
      <ul className="steps">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>

      {/* name of each tab group should be unique */}


 
  <div className="join">
  {
    testContent.map((data,i)=>{
     
    return (
      <div key={i}>
      <button className="join-item btn"  >{data.id + 1}</button>
  {/* <input checked={data.i === 1 ? "checked" : undefined} className="join-item btn btn-square" type="radio" name="options" aria-label={`${i}`} /> */}
      </div>
    )
  
  })
  }
  </div>

  <OfflineMap/>
 
  <div className="join">
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>

    </div>
  );
}
