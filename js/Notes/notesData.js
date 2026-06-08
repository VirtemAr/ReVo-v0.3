import * as render from "./render.js";

let Stor = window.localStorage;
const getNotesData = () => {return JSON.parse(Stor['notesData']);};
const setNotesData = (newVal = Array()) => {Stor['notesData'] = JSON.stringify(newVal);};
//---------//---------//
const deliteNote = (idx) => {
    if (confirm('delite?')) {
        let locNotesData = getNotesData()
        locNotesData.splice(idx, 1);
        setNotesData(locNotesData); render.renderNotes();
    };
};

const clearNotesData = ()=>{
    setNotesData( [ ] ); // {'id':0x00, 'title':'заголавие', 'text':'lorem', 'favour':false} 
    render.renderNotes();
};

const createNotesData = (title = 'Заглавие', text = 'lorem', favour=false) => {
    const tmp = getNotesData();
    tmp.push({
        // 'id' : (tmp[tmp.length - 1]['id'] +1), 
        'id' : Math.floor(Math.random() * 0xfff),
        'title' : title, 'text' : text,
        'favour' : favour, 'time' : new Date().toISOString()
    });
    setNotesData(tmp);
    render.renderNotes();
};

export {
    Stor,
    getNotesData,setNotesData,
    deliteNote, clearNotesData,
    createNotesData
};