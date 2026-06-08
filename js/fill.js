function fill(forFiil = document.querySelector('body') ) {
    if (forFiil.classList.contains('main_cart_ls-item')) {
        // Парсер ----------------
        let write = 0;
        let key=0;
        let ret = [];
        for (let i = 0; i < forFiil.dataset['ofcart'].length; i++){
            if (forFiil.dataset['ofcart'][i] === '[') {write = 1; ret.push(''); continue}
            else if (forFiil.dataset['ofcart'][i] === ']') {write = 0; key++; continue}
            else {
                if (write) {ret[key] += forFiil.dataset['ofcart'][i]}
            };
        };
        write = null; key = null;
        // Парсер ----------------

        // filler ----------------
        let img = document.createElement('img');
        img.classList.add('main_cart_ls-item_img');
        img.src = ret[0]; img.alt = ret[1]; img.width = '200';

        let name = document.createElement('h6');
        name.classList.add('main_cart_ls-item_name');
        name.textContent = ret[2];
        
        let desc = document.createElement('p');
        desc.classList.add('main_cart_ls-item_desc');
        desc.textContent = ret[3];

        forFiil.appendChild(img);
        forFiil.appendChild(name);
        forFiil.appendChild(desc);
    }
    else if(forFiil.classList.contains('main_node_ls-item')){
        // Парсер? ----------------
        // Парсер ----------------

        // filler ----------------
        let bg = document.createElement('div');
        bg.classList.add('main_node_ls-item_bg');

        let title = document.createElement('h4');
        title.textContent = forFiil.dataset['titleofnode'];
        title.classList.add('main_node_ls-item_title');
        bg.appendChild(title);

        let text = document.createElement('p');
        text.textContent = forFiil.dataset['textofnode'];
        text.classList.add('main_node_ls-item_text');
        bg.appendChild(text);

        let btns = document.createElement('div');
        btns.classList.add('main_node_ls-item_btns');

        let btnDel = document.createElement('button');
        btnDel.classList.add('main_node_ls-item_btns_del');
        btns.appendChild(btnDel);
        let btnSpecal = document.createElement('button');
        btnSpecal.classList.add('main_node_ls-item_btns_specal');
        btns.appendChild(btnSpecal);

        bg.appendChild(btns);

        forFiil.appendChild(bg);
    }

    else if(forFiil.classList.contains('main_node_right_menu_btnLs-item')){
        // Парсер? ----------------
        // Парсер ----------------

        // filler ----------------
        let btn = document.createElement('button');
        btn.classList.add('main_node_right_menu_btnLs-item-btn');

        if (forFiil.dataset['typeofbtn'] == 'new'){
            btn.style['backgroundImage'] = 'url("imgs/pluss.svg")'; btn.style['marginLeft'] = '24px'
        } else if(forFiil.dataset['typeofbtn'] == 'clouse') {
            btn.style['backgroundImage'] = 'url("imgs/pluss.svg")'; btn.style['transform'] = 'Rotate(45deg)'
        } else if(forFiil.dataset['typeofbtn'] == 'specal') {
            btn.style['backgroundImage'] = 'url("imgs/specalBtn.svg")';
        } else if(forFiil.dataset['typeofbtn'] == 'search') {
            btn.style['backgroundImage'] = 'url("imgs/search.svg")';
        };

        forFiil.appendChild(btn);
    }
};

let teg = document.querySelector('.main_node_ls');
for (child of teg.children){
    fill(child);
};

let teg2 = document.querySelector('.main_node_right_menu_btnLs');
for (child of teg2.children){
    fill(child);
};