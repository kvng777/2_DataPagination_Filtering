console.log('JS at work!');

/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// What does it do?
//showPage(data, 1): Displays data list content from the json file, and iserting into DOM with using template literal.
//addPagination(list): Display data list with pagination event listener.


//Display content
const perPage = 9;
function showPage(list, section){
  const startIndex = (section * perPage) - perPage;
  const endIndex = (section * perPage);
  const studentList = document.querySelector(".student-list");
  
  studentList.innerHTML= '';
  for(let i=0; i<list.length; i++){
      if( [i] >= startIndex && [i] < endIndex ){
         var studentItem =`
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${data[i]['picture']['large']}" alt="Profile Picture">
                  <h3>${data[i]['name']['first']+' '+ data[i]['name']['last']}</h3>
                  <span class="email">${data[i]['email']}</span>
               </div>
               <div class="joined-details">
                  <span class="date"> Joined ${data[i]["registered"]['date']}</span>
               </div>
            </li>
            `;
            studentList.insertAdjacentHTML('beforeend', studentItem);                     
      }
  }
}
showPage(data, 1);

//Pagination navigation
function addPagination(list){
   let numOfPages =  Math.ceil(list.length / perPage);
   var linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   
      for(let i=1; i<=numOfPages; i++){
         var button= `
         <li>
            <button type="button">${[i]}</button>
         </li>
         `;
         linkList.insertAdjacentHTML('beforeend',button);
      }

   let activeBtn = document.querySelector('button');
   activeBtn.className +='active';
    
   linkList.addEventListener('click',(e)=>{
     const element = e.target;
      if( element.tagName == 'BUTTON'){
         let removeActive = document.querySelector('.active');
         removeActive.className ='';
         element.className ='active';
         showPage(data, element.textContent);
      }   
   });
}
addPagination(data);

