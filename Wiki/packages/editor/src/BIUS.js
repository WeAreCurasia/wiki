import React from 'react'
import {BsTypeBold} from "react-icons/bs"
import {GrUnderline} from "react-icons/gr"
import {VscItalic} from "react-icons/vsc"
import {GrStrikeThrough} from "react-icons/gr"
export function BIUS  ({editor}){
    return (
        <>
       <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className="hover:bg-gray-200  p-1 px-2 bg-white border text-gray-500 hover:text-black  border-gray-50  border-opacity-30 border-l-0  border-r-0 editor.isActive('bold') ? 'is-active' : '' "
              >
                <BsTypeBold size="1.5em"/>
              </button>


              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className=" hover:bg-gray-200 hover:text-black p-1 px-2 bg-white text-gray-500 border hover:font-semibold border-gray-100 border-opacity-30 border-r-0 border-l-0   editor.isActive('italic') ? 'is-active' : '' "
              >
                <VscItalic size="1.5em"/>
              </button>


              <button onClick={()=>editor.chain().focus().toggleUnderline().run()} 
              className="hover:bg-gray-200 p-1 px-2 hover:text-black bg-white text-gray-500 hover:font-semibold border border-gray-100 border-opacity-30 border-r-0 border-l-0   editor.isActive('underline')?'is-active': '' ">
              <GrUnderline size="1.5em"/>
            </button>


              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className=" hover:bg-gray-200 p-1 px-2 hover:text-black bg-white text-gray-500 hover:font-semibold border border-gray-50 border-opacity-30   editor.isActive('strike') ? 'is-active' : ''"
              >
                <GrStrikeThrough size="1.5em"/>
              </button>
        </>
    )
}
