import React from 'react'
import {ImSubscript2} from "react-icons/im"
import {ImSuperscript2} from "react-icons/im"

export const SubSuper = ({editor}) => {
    return (
        <>
            <button onClick={()=>editor.chain().focus().toggleSubscript().run()} 
          className="hover:bg-gray-200 p-1 px-3 hover:text-black bg-white text-gray-500 hover:font-semibold border border-gray-50 border-opacity-30 border-r-0 border-l-0    editor.isActive('subscript') ?'is-active':'' ">
            <ImSubscript2 size="1.5em"/>
            </button>
            <button onClick={()=>editor.chain().focus().toggleSuperscript().run()}
             className="hover:bg-gray-200 p-1 px-3 hover:text-black bg-white text-gray-500 hover:font-semibold border border-gray-50 border-opacity-30 border-l-0   editor.isActive('superscript') ?'is-active':'' ">
            <ImSuperscript2 size="1.5em" />
          </button>
        </>
    )
}

