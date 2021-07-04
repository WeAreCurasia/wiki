/* contains all the features of the drop down menu*/
export function customDropDownMenu({editor}) {
    var features;
    return (
           // sectionName: "BASIC BLOCKS",
            features= [
                
                {
                    name: "Heading1",
                    action: () =>
                        {
                            editor.chain().focus().toggleHeading({ level: 1 }).run();
                            editor.commands.focus();}
                    
                },

                {
                    name: "Heading2",
                    action: () =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run(),
                        
                
            
                },
                
                {
                    name: "Heading3",
                    action: () =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run(),
                
            
                },

                // {
                //     name: "Paragraph",
                //     description: "Just start with plain text",
                //     action: () =>
                //         editor.chain().focus().setParagraph().run(),
                
                  
                
                // },
                {
                    name: "To-do List",
                    action: () => editor.chain().focus().toggleTaskList().run(),
                
                },

                {
                    name: "Ordered List",
                    action: () => editor.chain().focus().toggleOrderedList().run(),
                
                },

                {
                    name: "Cursive",
                    action: () =>
                    editor.chain().focus().setFontFamily('cursive').run(),
                
            
                },

                {
                    name: "Monospace",
                    action: () =>
                    editor.chain().focus().setFontFamily('monospace').run(),
                
            
                },

                {
                    name: "Serif",
                    action: () =>
                    editor.chain().focus().setFontFamily('serif').run(),
                
            
                },

    

        //     ]
        // },
        // {
        //   //  sectionName: "INLINE",
        //     features: [
                // {
                //     name: "Mention person",
                //     description: "Ping someone so thy get a notification",
                //     action: () =>
                //         editor.chain().focus().command(({ tr }) => {
                //             // manipulate the transaction
                //             tr.insertText('@')

                //             return true
                //         }).run()
                
                  
                
                // },
            
            

    

        //     ]
        
        // },
        // {
        //  //   sectionName: "MEDIA",
        //     features:   [
        //     {
        //         name: "Image Upload",
        //         description: "Upload or embed with a link",
        //         action: (status) => status(true)
                         
                
        //      }
        //      ]
        // },
        // {
        //   //  sectionName: "DATABASE",
        //     features: [
        //      {
        //           name: "Table - Inline",
        //            description: "Create a table inline in this page",
        //            action: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        //      }
        //                 ]
        // }

        ]

    )
}