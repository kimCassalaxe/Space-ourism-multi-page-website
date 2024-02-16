


function commentNew(comment) {
  const idCommnent = comment.id;
  let section = document.createElement('section');
  section.setAttribute("id",'section'+idCommnent);
  section.setAttribute("class",'section');

  let boxBtn = document.createElement('div');
  boxBtn.setAttribute("id","boxBtn");
  boxBtn.setAttribute("class","boxBtn");

  let btnp = document.createElement('button');
  btnp.setAttribute("id","btnP"+idCommnent);
  btnp.setAttribute("class","btn btnP");
  btnp.innerHTML= "<img id='plus' src='./images/icon-plus.svg'/>";

  let lable = document.createElement('lable');
  lable.setAttribute("id","lblN");
  lable.setAttribute("class","lblN");
  lable.innerText = comment.score;
  let btnm = document.createElement('button');
  btnm.setAttribute("id","btnM"+idCommnent);
  btnm.setAttribute("class","btn btnM");
  btnm.innerHTML= "<img id='minus' src='./images/icon-minus.svg'/>";
  boxBtn.appendChild(btnp);
  boxBtn.appendChild(lable);
  boxBtn.appendChild(btnm);

  let idCommnentText = document.createElement('label');
  idCommnentText.innerText = idCommnent;
  idCommnentText.setAttribute("class","idoculto");
  idCommnentText.setAttribute("id",idCommnent);

  section.appendChild(idCommnentText);
  section.appendChild(boxBtn);

  let article = document.createElement('article');
  article.id = "article";
  article.class ="article";
  let header = document.createElement('header');
  header.id = "header";
  header.class = "header";
  let img = document.createElement('img');
  img.src=comment.user.image.png;
  img.id = "fotoPerfil";
  img.class = "fotoP";
  
  let labelName = document.createElement('label');
  labelName.id = "userName";
  labelName.class = "userName";
  labelName.innerText = comment.user.username;
  let buttonREply = document.createElement('button');
  buttonREply.setAttribute("id", "Reply"+idCommnent);
  buttonREply.setAttribute("class", "reply btn "+section.id);
  buttonREply.innerHTML = "<img src='images/icon-reply.svg' id='back' class='back'> Reply";
  let span = document.createElement('span');
  span.id = "dataDoMoste";
  span.class = "dataDoMoste";
  span.innerText = comment.createdAt;
  let p = document.createElement('p');
  p.id = "text";
  p.class = "text";
  p.innerText = comment.content;



  header.innerHTML = "<div id='inbox' class='inbox'></div>";
  console.log(header.querySelector('#inbox'));
  header.querySelector('#inbox').appendChild(img);
  header.querySelector('#inbox').appendChild(labelName);
  header.querySelector('#inbox').appendChild(span);
  header.appendChild(buttonREply);
  article.appendChild(header);
  section.appendChild(article);

  let main = document.createElement('main');
  main.appendChild(p);
  article.appendChild(main);
  
  return section;
}

function boxSubcomment(r){
  const id = r.id;
  let section = document.createElement('section');
  section.setAttribute("id",'section'+id);
  section.setAttribute("class",'section');

  let idCommnentText = document.createElement('label');
  idCommnentText.innerText = id;
  idCommnentText.setAttribute("class","idoculto");
  idCommnentText.setAttribute("id",id);
  section.appendChild(idCommnentText);

  let boxBtn = document.createElement('div');
  boxBtn.setAttribute("id","boxBtn");
  boxBtn.setAttribute("class","boxBtn");
  let btnp = document.createElement('button');
  btnp.setAttribute("id","btnP"+id);
  btnp.setAttribute("class","btn btnP");
  btnp.innerHTML= "<img id='plus' src='./images/icon-plus.svg'/>";
  let lable = document.createElement('lable');
  lable.id= "lblN";
  lable.class= "lblN";
  
  let btnm = document.createElement('button');
  btnm.setAttribute("id","btnM"+id);
  btnm.setAttribute("class","btn btnM");
  btnm.innerHTML= "<img id='minus' src='./images/icon-minus.svg'/>";
  boxBtn.appendChild(btnp);
  boxBtn.appendChild(lable);
  boxBtn.appendChild(btnm);
  section.appendChild(boxBtn);

  let article = document.createElement('article');
  article.id = "article";
  article.class ="article";
  let header = document.createElement('header');
  header.id = "header";
  header.class = "header";
  let img = document.createElement('img');
  img.id = "fotoPerfil";
  img.class = "fotoP";
  
  let labelName = document.createElement('label');
  labelName.id = "userName";
  labelName.class = "userName";
  let buttonREply = document.createElement('button');
  buttonREply.setAttribute("id","Reply"+id);
  buttonREply.setAttribute("class","reply btn "+section.id);
  buttonREply.innerHTML= "<img src='images/icon-reply.svg' id='back' class='back'> Reply";
  let span = document.createElement('span');
  span.setAttribute("id","dataDoMoste");
  span.setAttribute("class","dataDoMoste");
  let p = document.createElement('p');
  p.id = "text";
  p.class = "text";
  
  lable.innerText = r.score;
  img.src=r.user.image.png;
  labelName.innerText = r.user.username;
  span.innerText = r.createdAt;
  p.innerHTML ="<span class='remetente'>@" +r.replyingTo+"</span> "+r.content;

  header.innerHTML = "<div id='inbox' class='inbox'></div>";

  header.querySelector('#inbox').appendChild(img);
  header.querySelector('#inbox').appendChild(labelName);
  header.querySelector('#inbox').appendChild(span);
  header.appendChild(buttonREply);
  article.appendChild(header);
  section.appendChild(article);

  let main = document.createElement('main');
  main.appendChild(p);
  article.appendChild(main);

  return section;
}
function inpuntCommentBox(r){
  let section = document.createElement('section');
  section.setAttribute("id","comment-write");
  section.setAttribute("class","section comment-write");

  let boximg = document.createElement("div");
  boximg.setAttribute("id","fotoPerfilbox");
  boximg.setAttribute("class","fotoPerfilbox fotoPerfil");

  section.appendChild(boximg);

  let imgP = document.createElement('img');
  imgP.setAttribute("id", "fotoPerfil");
  imgP.setAttribute("class", "fotoPerfil");
  imgP.src = r;

  boximg.appendChild(imgP);

  let form = document.createElement('form');
  form.setAttribute("class","comment-input");
  form.setAttribute("action","");
  form.setAttribute("method","post");

  section.appendChild(form);
  
  let textinput = document.createElement('textarea');
  textinput.setAttribute("class","txtMessage");
  textinput.setAttribute("id","txtMessage");
  textinput.setAttribute("name","txtMessage");
  textinput.setAttribute("cals","30");
  textinput.setAttribute("rows","4");
  textinput.setAttribute("placeholder","Add comment...");
  
  form.appendChild(textinput);

  let sendBtn = document.createElement('button');
  sendBtn.setAttribute('class',"btn send");
  sendBtn.setAttribute('id',"send");
  sendBtn.innerText = "send";

  section.appendChild(sendBtn);
  return section;
}


function comentar(){

}
  
fetch('data.json').then(response => response.json()).then(data => {
  // Carregar e usar o arquivo JSON
  // Manipular os dados JSON
  let container = document.querySelector('#container');

  data['comments'].forEach(element => {
    container.appendChild(commentNew(element));
    
    if(element.replies.length != 0){
      let boxSubComment = document.createElement('div');
      boxSubComment.setAttribute("class","box-subcomment");
      boxSubComment.setAttribute("id","box-subcomment");
      element.replies.forEach(item =>{
        boxSubComment.appendChild(boxSubcomment(item));
      });
        container.appendChild(boxSubComment);
    } 
    

  });

  document.addEventListener('click',(element)=>{
    if(element.target.nodeName == "BUTTON" && element.target.classList[0]== "reply"){
      //&& element.target.classList[0] == "reply"
      let ant = document.getElementById(element.target.classList[2]);
      ant.parentNode.insertBefore(inpuntCommentBox(data['currentUser'].image.png),ant.nextSibling);
      console.log();
      console.log('funcionando');
    }

  
  });

})
  .catch(error => console.error('Ocorreu um erro ao carregar o arquivo JSON:', error));