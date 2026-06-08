import * as locStor from "./notesData.js";

let doc = document;

const renderNotes = () => {
    let locNotesData = ( locStor.getNotesData() );
    let docEl = doc.querySelector('.main_note_ls');
    docEl.innerHTML = '';
    locNotesData.forEach(
        (el, idx)=>{
        
            let li = doc.createElement('li'); li.classList.add('main_note_ls-item');
             let bg = doc.createElement('div'); bg.classList.add('main_note_ls-item_bg');
            
              let title = doc.createElement('h4'); title.classList.add('main_note_ls-item_title');
              title.textContent = el['title'];
              bg.appendChild(title);

              let text = doc.createElement('p'); text.classList.add('main_note_ls-item_text');
              text.textContent = el['text'];
              bg.appendChild(text);

              let time = doc.createElement('time'); text.classList.add('main_note_ls-item_time');
              time.textContent = el['time'];
              bg.appendChild(time);

              let btns = doc.createElement('div'); btns.classList.add('main_note_ls-item_btns');

               let btnDel = doc.createElement('button'); btnDel.classList.add('main_note_ls-item_btns_del');
               btnDel.addEventListener('click',
                   () => {
                       if ( confirm('delite?') ) {
                           locNotesData.splice(idx, 1);
                           locStor.setNotesData(locNotesData); renderNotes();
                       };
                   }
               );
               btns.appendChild(btnDel);

               let btnFavour = doc.createElement('button');
               if (el['favour']) {btnFavour.classList.add('main_note_ls-item_btns_favour-1');}
               else {btnFavour.classList.add('main_note_ls-item_btns_favour-0');}
               btnFavour.addEventListener('click',
                   () => {
                       locNotesData[idx]['favour'] = !el['favour'];
                       locStor.setNotesData(locNotesData)
                       renderNotes();
                    }
               );
             btns.appendChild(btnFavour);
            
             bg.appendChild(btns);
        
            li.appendChild(bg); docEl.appendChild(li);
        },
    );   
};

export {renderNotes};