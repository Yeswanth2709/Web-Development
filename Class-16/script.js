const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector(".textArea-cont");
const mainCont = document.querySelector('.main-cont');
const priorityElement=document.querySelectorAll('.priority-color');
const toolBoxPriorityColors=document.querySelectorAll('.color');

const colors=['lightpink','lightgreen','lightblue','black'];
let addBtnFlag=false;
const lockClass='fa-lock';
const unlockClass='fa-lock-open';
addBtn.addEventListener('click',function(){
    addBtnFlag=!addBtnFlag;
    if(addBtnFlag){
        modalCont.style.display='flex';
    }else{
         modalCont.style.display='none';
    }
});

modalCont.addEventListener('keydown',function(e){
    if(e.key=="Shift"){
        let id = shortid()
        // console.log(id)
        let task = taskArea.value;
        let priorityColor=document.querySelector('.active').classList[0];
        createTicket(task , id,priorityColor);
        taskArea.value="";
        modalCont.style.display='none';
        addBtnFlag=false;
    }
});

function createTicket(ticketTask,ticketID,priority) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${priority};" ></div>
             <div class="ticket-id">${ticketID}</div>
             <div class="task-area">${ticketTask}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div>
    `;

    mainCont.appendChild(ticketCont);

    handleLock(ticketCont);

    handleColor(ticketCont);
};

for(let i=0;i<priorityElement.length;i++){
    priorityElement[i].addEventListener('click',()=>{
        priorityElement.forEach(b=>b.classList.remove('active'));
        priorityElement[i].classList.add('active');
    })
}


//locking mechanism

function handleLock(ticket){
    let ticketLockCont=ticket.querySelector('.ticket-lock');
    let ticketLockIcon=ticketLockCont.children[0];
    let ticketTaskArea=ticket.querySelector('.task-area');
    ticketLockIcon.addEventListener('click',function(){
        if(ticketLockIcon.classList.contains(lockClass)){
            ticketLockIcon.classList.remove(lockClass);
            ticketLockIcon.classList.add(unlockClass);

            ticketTaskArea.setAttribute('contenteditable','true');
        }else{
            ticketLockIcon.classList.remove(unlockClass);
            ticketLockIcon.classList.add(lockClass);
            ticketTaskArea.setAttribute('contenteditable','false');

        }
        
    })
}


function handleColor(ticket){
    let ticketColorCont=ticket.querySelector('.ticket-color');
    ticketColorCont.addEventListener('click',function(){
        let currentColor=ticketColorCont.style.backgroundColor;
        let currColorInd=colors.findIndex(function(color){
            return color===currentColor;
        });
        currColorInd++;
        currColorInd=currColorInd % colors.length;
        
        ticketColorCont.style.backgroundColor=colors[currColorInd];
       
    })
}

toolBoxPriorityColors.forEach(function(color){
    color.addEventListener('click',function(){
        let allTickets=document.querySelectorAll('.ticket-cont');
        let selectedColor=color.classList[0];
        allTickets.forEach(function(ticket){
            let ticketColor=ticket.querySelector('.ticket-color').style.backgroundColor;
            if(ticketColor===selectedColor){
                ticket.style.display='block';
            }else{
                ticket.style.display='none';
            }
        })
    })
})

