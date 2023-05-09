const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ecd9f4b8fmsh62d56d262ae453ap1f8948jsn6629c66692e1',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
 fetch('https://dummyjson.com/products')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    products = data.products;
    console.log(products);
    products.forEach(product => { 
      document.querySelector('body').innerHTML += `<div id="API"> id:${product.id}</br> Titre:${product.title}</br> Description:${product.description} </br> <img src="${product.thumbnail}" alt="${product.title} thumbnail"></div>`;
    });
})
  .catch(function(error) {
      console.error('Erreur');
  });
  const form=document.getElementById('form');
  const username=document.getElementById('Username');
  const email=document.getElementById('email');
  const password=document.getElementById('password');
  const password2=document.getElementById('password2');
  
  form.addEventListener('sumit',() => {
    form.preventDefault();
  })
  
