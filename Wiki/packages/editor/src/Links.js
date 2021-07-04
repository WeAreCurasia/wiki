import React from 'react'
import {CgLink} from "react-icons/cg"

export function Link  ({editor})  {
    const setLink=()=> {
        const url = window.prompt('URL')
      
        editor.chain().focus().setLink({ href: url }).run()
      }
    return (
        <>
            <button onClick={() => setLink()} 
                className=" hover:bg-gray-200 p-1 px-3 bg-white text-gray-500  border border-b-0.5 border-opacity-30 hover:text-blue-500 border-grey-100  inline-flex">
                  <CgLink className="hover:fill-white" color="grey" size="1.5em" title="link" /> <div className="pt-0.5 pl-1 pr-1 "><u>Link</u></div> 
                  </button>    
                  {/* hover:fill-white => this is not working */}

            {/* <button onClick={()=>editor.chain().focus().unsetLink().run()} className={editor.isActive('link')? 'is-active' : ''}>
            remove
            </button> */}
        </>
    )
}
