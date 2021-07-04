/* contains all the features of the drop down menu*/
export function dropDownMenu(editor) {
    return [
        {
            sectionName: "BASIC BLOCKS",
            features: [
                {   id:"Para",
                    name: "Paragraph",
                    description: "Just start with plain text",
                    action: () => {
                        //console.log(document.querySelector(".ProseMirror p.is-empty").getAttribute("data-placeholder"))
                    
                        editor.chain().focus().setParagraph().run();
                        // document.querySelector('.ProseMirror p.is-empty').classList.add("content-paragraph");
                        // document.querySelector('.ProseMirror p.is-empty').classList.remove("is-empty");
                       // editor.commands.focus();
                       
                        }
                
                  
                
                },
                {   id:"Heading1",
                    name: "Heading1",
                    description: "Big section heading",
                    action: () => {
                        editor.chain().focus().toggleHeading({ level: 1 }).run();
                            editor.commands.focus();
                    }
                    
                
                },
                {   id:"ToDo",
                    name: "To-do List",
                    description: "Track tasks with a to-do list",
                    action: () => editor.chain().focus().toggleTaskList().run(),
                
                }

    

            ]
        },
        {
            sectionName: "INLINE",
            features: [
                {   id:"Mention",
                    name: "Mention person",
                    description: "Ping someone so thy get a notification",
                    action: () =>
                        editor.chain().focus().command(({ tr }) => {
                            // manipulate the transaction
                            tr.insertText('@')

                            return true
                        }).run()
                
                  
                
                },
            
            

    

            ]
        
        },
        {
            sectionName: "MEDIA",
            features:   [
            {   id:"Image",
                name: "Image Upload",
                description: "Upload or embed with a link",
                action: (status) => status(true)
                         
                
             }
             ]
        },
        {
            sectionName: "DATABASE",
            features: [
             {    id:"Table",
                  name: "Table - Inline",
                   description: "Create a table inline in this page",
                   action: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
             }
                        ]
        }




    ]
}