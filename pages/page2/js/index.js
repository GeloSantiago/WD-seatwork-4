const ThumbRight = document.querySelector('#ThumbRight');
const ThumbLeft = document.querySelector('#ThumbLeft');
const contentLeft = document.querySelector('#slide-bg-left');
const contentRight = document.querySelector('#slide-bg-right');

let IsOpen = false;

ThumbLeft.addEventListener('click', (e) => {
  if(IsOpen){
      CloseLeft();

      
  } else if( CloseRight()){
    OpenLeft();
    CloseRight();
}
  else{
      OpenLeft();
       
     
  }
  
});

ThumbRight.addEventListener('click', (e) => {
  if(IsOpen){
    CloseRight();
    

  } else if(CloseLeft()){
  OpenRight();
  CloseLeft();
}
  else{
    OpenRight();

  } 
});

function OpenLeft(){
      contentLeft.style.left = '0%';
      IsOpen = true;
      ThumbLeft.style.left =  '90%';
}

function OpenRight(){
    contentRight.style.right = '0%';
    IsOpen = true;
    ThumbRight.style.right =  '90%';
}

function CloseLeft(){
      contentLeft.style.left = '-100%';
      ThumbLeft.style.left =  '2rem';
      IsOpen = false;;
}

function CloseRight(){
  contentRight.style.right = '-100%';
    ThumbRight.style.right =  '2rem';
    IsOpen = false;
}

