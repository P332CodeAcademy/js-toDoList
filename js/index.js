const input = document.querySelector('input');
const ul = document.querySelector('ul');
const allowedCharacters = /^[0-9a-zA-Z]$/;

function keyBoardEvents() {
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const code = event.code;
        if (allowedCharacters.test(key) || key === 'Backspace' || key === 'Delete' || key === 'Enter' || code === 'Space') {
            if (key === 'Backspace') {
                event.preventDefault();
                const currentValue = input.value;
                input.value = currentValue.substring(0, currentValue.length - 1);
            } else if (key === 'Delete') {
                event.preventDefault();
                input.value = '';
            }
            else if (key === 'Enter') {
                console.log("salam");
                if (input.value.trim() != 0) {
                    const newLi = document.createElement('li')
                    newLi.innerHTML = `${input.value} <div class="icons"><i class="fa-solid fa-eraser"></i><i class="fa-solid fa-check"><i class="fa-solid fa-pen"></i></i>
                    </div>`;
                    ul.appendChild(newLi);

                    const eraser = newLi.querySelector('.fa-eraser');
                    eraser.addEventListener('click', () => {
                        ul.removeChild(newLi);

                    });

                    const done = newLi.querySelector('.fa-check');
                    done.addEventListener('click', () => {
                        newLi.classList.add('done')

                    })

                    const edit = newLi.querySelector('.fa-pen');
                    edit.addEventListener('click', () => {
                        input.value = newLi.innerText;
                        ul.removeChild(newLi);
                    })

                }
            }
            else if (code === 'Space') {
                input.value += ' ';
            }
            else {
                input.value += key;
            }
        }

    }, false);

}


keyBoardEvents();
