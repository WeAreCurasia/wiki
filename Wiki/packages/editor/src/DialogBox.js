/* 
dialog blox that appears when image upload option of drop down menu is clicked.
provides options to uplod or embed image
*/

import { useState } from 'react'
import { Dialog,Transition } from '@headlessui/react'
import { imageUpload } from './ImageUpload'

export function MyDialog({ editor, status}) {
    let [isOpen, setIsOpen] = useState(true)
    
    function asyncImageUpload()
    {
        imageUpload(editor);
        onDialogBoxClose();
    


    }
    function onDialogBoxClose(){
        status(false);
        setIsOpen(false);

    }
    function embedImage()
    {
        var url = document.getElementById("inputUrl").value;
       if (url) {
           editor.chain().focus().setImage({ src: url }).run();
       }
         onDialogBoxClose();

    }
    function switchBetweenUploadAndEmbed(clickedItem)
    {
        var embedDiv = document.getElementById("embedDiv");
        var uploadDiv = document.getElementById("uploadDiv");
    if (clickedItem==="embed") {
        embedDiv.style.display = "flex";
        uploadDiv.style.display = "none";
         document.getElementById("nav-embed").style.borderBottomWidth = "2px";
         document.getElementById("nav-upload").style.borderBottomWidth = "0";
    }
    else {
         embedDiv.style.display = "none";
         uploadDiv.style.display = "flex";
          document.getElementById("nav-embed").style.borderBottomWidth = "0";
         document.getElementById("nav-upload").style.borderBottomWidth = "2px";
        
    }
        
       
       

    }
    


    return (
        <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog open={isOpen} onClose={() => onDialogBoxClose()}
          className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
      <Dialog.Overlay />
              <div className=" flex flex-col gap-5 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5  focus:outline-none w-500 h-52   mx-auto">
                  
     
                         <div  className="flex p-2 flex-row justify-start gap-1" >
                            <button id="nav-upload" className="p-2  border-solid border-0 border-b-2 border-black text-sm bg-white  active:bg-hover-plus  active:bg-opacity-20 hover:bg-opacity-10 hover:bg-hover-plus     cursor-pointer focus:outline-none" onClick={() => switchBetweenUploadAndEmbed("upload")}>Upload</button>
                             <button id="nav-embed" className="p-2 border-solid  border-0  border-black text-sm bg-white   active:bg-hover-plus  active:bg-opacity-20 hover:bg-opacity-10 hover:bg-hover-plus     cursor-pointer focus:outline-none" onClick={() =>switchBetweenUploadAndEmbed("embed") }>Embed link</button>
                            
                          </div>
                    <div>

                        <div id="embedDiv" className="hidden flex-col gap-4 justify-center items-center">
                            
                            <input className="border-none w-450 ring-1 rounded-md text-sm p-1  " id="inputUrl" type="text" required/>
                              <button className="  w-56 border-none text-sm p-1 px-2 flex items-center justify-center rounded-md bg-black text-white cursor-pointer" onClick={() =>embedImage() }>Embed image</button>
                        </div>

                        <div id="uploadDiv" className="flex flex-row justify-center items-center">
                            <button className=" w-56 border-none text-sm p-1 px-2 flex items-center justify-center rounded-md bg-black text-white cursor-pointer" onClick={() => asyncImageUpload()}>Choose an image</button>
                        </div>
                        <div className="flex mt-3  justify-center items-center">

                          <button className=" w-56 border-none ring-1 ring-gray-300 text-sm p-1 px-2 flex items-center justify-center rounded-md bg-white text-black active:bg-hover-plus  active:bg-opacity-20 hover:bg-opacity-10 hover:bg-hover-plus  cursor-pointer"   onClick={() => onDialogBoxClose()}>Cancel</button>
                        </div>

                        </div>
                     </div>
              </div>
            </Dialog>
            </Transition>
  )
}