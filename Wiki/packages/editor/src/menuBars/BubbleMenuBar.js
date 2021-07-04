//Initialising  the Bubble menu: appears on selecting text

import React from "react";
import { Menu,Transition } from '@headlessui/react';
import {Link} from "../Links"
import {BIUS} from "../BIUS"
import {SubSuper} from "../SubSuper"
import {VscChevronDown} from "react-icons/vsc"
import {Icons} from "../Icons2"
import {customDropDownMenu} from "../customDropDownMenu"

{/* <IconContext.Provider value={{color:" " , size:" "}}></IconContext.Provider> */}


export var BubbleMenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  




  var customDropDownMenuItems = customDropDownMenu({editor});
  
  return (
    <>
    
     <div className="inline-flex shadow-4xl" >
       
     <Menu as="div" className="relative ">
       <Menu.Button className="font-serif inline-flex border-b-1 hover:text-black hover:bg-gray-200 py-2 pt-2 px-3 text-gray-500   bg-white border  border-grey-50 border-opacity-30">
       Custom
     <VscChevronDown className="-mr-1 m1-2 h-4 w-5 " aria-hidden="true"/>
       </Menu.Button>

       <Transition
            // show={open}
            enter="transform transition duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-200 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">


     <Menu.Items className=" py-1 pb-2  origin-top-right absolute -right-10 translate-x-4 mt-2 w-44 rounded shadow-2xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">

     <div className="whitespace-no-wrap overflow-hidden text-sm pl-4 py-1 text-gray-400 overflow-ellipsis">Turn Into</div>
            { customDropDownMenuItems.map((item)=>{
                return(

                    <div  onClick={()=>item.action()}  className="flex items-center w-full select-none text-sm leading-5 min-h-30px hover:bg-gray-300">
                        <div className="flex items-center justify-center ml-3 ">
                            <div className="w-full h-full pl-1">
                              <Icons name={item.name}/>
                              {console.log(item.name)}
                            </div>
                        </div>
                        <div className=" ml-2 mr-3 min-w-0 flex-auto">
                            <div className=" whitespace-no-wrap overflow-hidden overflow-ellipsis">
                                <div className="flex items-center">
                                    <span className="mr-1">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  )
                  }
                    )
                }   

          </Menu.Items>

        </Transition>

     </Menu>
     

     <Link editor={editor}/>
          
     <BIUS editor={editor}/> 

    <SubSuper editor={editor}/>

    </div>
    </>
  );
};
