


function commentNew(comment) {
  let section = document.createElement('section');
  section.id = 'section';
  section.class = 'section';
  let boxBtn = document.createElement('div');
  boxBtn.id = "boxBtn";
  boxBtn.class = "boxBtn";
  let btnp = document.createElement('button');
  btnp.id = "btnP";
  btnp.class = "btnP";
  btnp.innerHTML= "<img id='plus' src='./images/icon-plus.svg'/>";
  let lable = document.createElement('lable');
  lable.id= "lblN";
  lable.class= "lblN";
  lable.innerText = comment.score;
  let btnm = document.createElement('button');
  btnm.id = "btnM";
  btnm.class = "btnM";
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
  img.src=comment.user.image.png;
  img.id = "fotoPerfil";
  img.class = "fotoP";
  
  let labelName = document.createElement('label');
  labelName.id = "userName";
  labelName.class = "userName";
  labelName.innerText = comment.user.username;
  let buttonREply = document.createElement('button');
  buttonREply.id = "btnReply";
  buttonREply.innerText = "Reply";
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
  console.log(r.user.username);
  let section = document.createElement('section');
  section.id = 'section';
  section.class = 'section';

  let boxBtn = document.createElement('div');
  boxBtn.id = "boxBtn";
  boxBtn.class = "boxBtn";
  let btnp = document.createElement('button');
  btnp.id = "btnP";
  btnp.class = "btnP";
  btnp.innerHTML= "<img id='plus' src='./images/icon-plus.svg'/>";
  let lable = document.createElement('lable');
  lable.id= "lblN";
  lable.class= "lblN";
  
  let btnm = document.createElement('button');
  btnm.id = "btnM";
  btnm.class = "btnM";
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
  buttonREply.id = "btnReply";
  buttonREply.innerText = "Reply";
  let span = document.createElement('span');
  span.id = "dataDoMoste";
  span.class = "dataDoMoste";
  let p = document.createElement('p');
  p.id = "text";
  p.class = "text";
  
  lable.innerText = r.score;
  img.src=r.user.image.png;
  labelName.innerText = r.user.username;
  span.innerText = r.createdAt;
  p.innerText = r.replyingTo+' '+r.content;


  console.log(p.innerText);

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
  //= `Nome: ${data.currentUser.username}`;
})
  .catch(error => console.error('Ocorreu um erro ao carregar o arquivo JSON:', error));