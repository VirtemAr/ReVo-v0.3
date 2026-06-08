import * as locStor from "./notesData.js";
import * as render from "./render.js";


let doc = document;

if (!locStor.Stor['notesData']) {locStor.clearNotesData()};

render.renderNotes();

let createNoteForm = doc.querySelector('.main_note_right_redact');

createNoteForm.addEventListener('submit',
    (event) => {
        event.preventDefault();                                           
        locStor.createNotesData(/*title =*/ createNoteForm.title.value, /*text =*/ createNoteForm.text.value);
    }
);