let data = window.localStorage;

// let notesData = [
//     { //'0x00': 
//         'id':0x01,
//         'title':'title',
//         'text':'text',
//         'favour':true
//     },
// ];

// data.setItem( 'notes', JSON.stringify(notesData));

let note1 = console.log(JSON.parse(data.getItem('notes')));