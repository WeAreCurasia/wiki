//Contains all the extensions used in the editor
import StarterKit from "@tiptap/starter-kit";
import Link from '@tiptap/extension-link'
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Image from "@tiptap/extension-image";
import Collaboration from "@tiptap/extension-collaboration";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Mention from "@tiptap/extension-mention";
import { MentionList } from "./MentionList";
import tippy from "tippy.js";
import { ReactRenderer } from "@tiptap/react";
import { userNames } from "./userNames";
import TextAlign from "@tiptap/extension-text-align"
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'

import OrderedListTt from '@tiptap/extension-ordered-list'
import BulletListTt from '@tiptap/extension-bullet-list'
import ListItemTt from '@tiptap/extension-list-item'
import Placeholder from '@tiptap/extension-placeholder'

// // A new Y document
// const ydoc = new Y.Doc();
// // Registered with a WebRTC provider
// const provider = new WebrtcProvider("example-document", ydoc);

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => {
          return {
            backgroundColor: element.getAttribute("data-background-color"),
          };
        },
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
    };
  },
});

export var extensions = [
  StarterKit,
  Placeholder,
  BulletListTt,
  OrderedListTt,
  ListItemTt,
  Link,
  Highlight,
  Typography,
  TaskList,
  TaskItem,
  Text,
  TextStyle,
  FontFamily,
  Underline,
  Subscript,
  Superscript,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Highlight.configure({ multicolor: true }),
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  
  CustomTableCell,
  Image,
  // Collaboration.configure({
  //   document: ydoc,
  // }),
  // CollaborationCursor.configure({
  //   provider: provider,
  //   name: "Cyndi Lauper",
  //   color: "#f783ac",
  // }),
  Mention.configure({
    HTMLAttributes: {
      class: "mention",
    },
    suggestion: {
      items: (query) => {
        return userNames
          .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
          .slice(0, 5);
      },
      render: () => {
        let reactRenderer;
        let popup;

        return {
          onStart: (props) => {
            reactRenderer = new ReactRenderer(MentionList, {
              props,
              editor: props.editor,
            });

            popup = tippy("body", {
              getReferenceClientRect: props.clientRect,
              appendTo: () => document.body,
              content: reactRenderer.element,
              showOnCreate: true,
              interactive: true,
              trigger: "manual",
              placement: "bottom-start",
            });
          },
          onUpdate(props) {
            reactRenderer.updateProps(props);

            popup[0].setProps({
              getReferenceClientRect: props.clientRect,
            });
          },
          onKeyDown(props) {
            return reactRenderer.ref?.onKeyDown(props);
          },
          onExit() {
            popup[0].destroy();
            reactRenderer.destroy();
          },
        };
      },
    },
  }),
];
