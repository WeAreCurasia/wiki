//Initialising  the Floating menu: appears on entering a new line

import React, { Fragment } from "react";

import { Menu,Transition } from '@headlessui/react';
import { dropDownMenu } from "../dropDownMenu";
import { icons } from "../Icons";
 

export var FloatingMenuBar = ({ editor,status }) => {
    
 if (!editor) {
    return null;
 }
  
/*
listen to mouseover events to update the review box on hover of items in dropDownMneu
*/
  document.addEventListener('mouseover', (event) => {
    var review = document.getElementById("review");
    if (event.target.closest("#dropDownItem")) {

     /*
     set the y coordinate of the review box same as that of the item of the dropDownMneu
     */
      var itemOffset = event.target.closest("#parentDropDownItem").offsetTop;
       var reviewOffest = review.offsetTop;
      var finalOffset = itemOffset - reviewOffest;
      // make sure that the revivew box is not placed below the drop down menu(height:288px) 

      if (finalOffset + review.offsetHeight > 280) finalOffset = 280 - review.offsetHeight;
      review.style.transform="translateY("+(finalOffset)+"px)"
      var description = event.target.closest("#dropDownItem").querySelector("#itemDescription").textContent;
      review.querySelector("#reviewName").innerHTML = description;
      review.style.display = "flex";
      

    }
    else {
      if(review!=null)
        review.style.display = "none";
      
    }
      
      
  })

  
  var dropDownMenuItems = dropDownMenu(editor);
   
  return (
    <>
       
    <Menu as="div" className="relative "  >
              {({ open }) => {
                
          
          return (
            <Fragment className="relative m-0 " >

              <Menu.Button className=" absolute -left-10 -top-3  inline-flex items-center justify-center content-center align-middle rounded-md w-6 h-6  border-none bg-transparent  active:bg-hover-plus  active:bg-opacity-20 hover:bg-opacity-10 hover:bg-hover-plus     cursor-pointer focus:outline-none" ><div className="font-serif font-light text-2xl text-plus">+</div></Menu.Button>
              <Transition
                show={open}
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-75 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div className="flex  flex-row  items-start origin-top-left absolute left-0 mt-2   ">
                  <Menu.Items className="flex flex-col   w-80 max-h-72 divide-solid  divide-y-1 divide-x-0 divide-warmGray-100  rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5  focus:outline-none overflow-y-auto    " static>
              
              
                 
                    {dropDownMenuItems.map((section) => {
                      return (
                        <div className="py-1 flex flex-col" >
                          <p className=" text-trueGray-500 text-xs px-4 mt-2 mb-2  ">{section.sectionName}</p>
           
           
                          {section.features.map((item) => {
                            //console.log(item);
                            var id = item.id;
                            return (
                              <Menu.Item as="div">

                                {({ active, disabled, hover }) => {
                      
                                  // if (active) setActiveItem(item);
                        
                        
                                  return (
                                    <div id="parentDropDownItem" className="relative ">
                                      <div id='dropDownItem' className={` flex  group gap-4  justify-centre items-center px-4 py-1 text-item-name hover:bg-hover-list cursor-pointer
                                        ${active ? "bg-hover-list " : ""}`} onClick={() => item.action(status)} >
                                        <div className="text-warmGray-600  p-4 w-4 h-4 border-1 border-solid  border-gray-200 group-hover:bg-white group-hover:text-item-name rounded-md">{icons[id]()}</div>
                                        <div className="flex  flex-col gap-1">
                                          <div className="flex-nowrap overflow-ellipsis">{item.name}</div>
                                          <div id="itemDescription" className="text-xs text-trueGray-400 ">{item.description}</div>
                                        </div>
                      
                                      </div>
                        
                                    </div>
                      
                                  )
                    
                
                                }}
             
                              </Menu.Item>
                            )

                          })}
              
                        </div>




                    
                      )
                    })}
                 
            
              
                  </Menu.Items>
                  {/* /reviewBox on hover */}
                  <div id="review" className={`hidden  transition delay-100  z-100 p-2 gap-1   bg-black w-32 h-max opacity-80 rounded-md flex-col justify-center`}>
                    <div className="bg-white w-full h-24 m-auto rounded-sm opacity-100 "></div>
                    <div id="reviewName" className="  overflow-auto break-words text-xs text-white font-medium"></div>
                  </div>


                </div>
           
              </Transition>

            </Fragment>
          )
        }}
      </Menu>

      

      </>
  );
};
