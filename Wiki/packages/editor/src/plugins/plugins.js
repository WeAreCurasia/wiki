/* 
same as used in @aeaton/react-prosemirror-config-default repo except for placeholderPlugin
*/

import "prosemirror-gapcursor/style/gapcursor.css";
import "prosemirror-tables/style/tables.css";

import { placeholderPlugin } from "./placeholderPlugin"; //added
export var plugins = [
  placeholderPlugin(), //added
];
