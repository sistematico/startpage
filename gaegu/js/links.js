var footer = document.querySelector('footer');

const divs = [
    {nome: 'devel', links: [
        {nome: 'Google', link: 'www.google.com'}
    ]},
    {nome: 'info', links: [
        {nome: 'Google', link: 'www.google.com'}
    ]},
    {nome: 'video', links: [
        {nome: 'Google', link: 'www.google.com'}
    ]},
    {nome: 'social', links: [
        {nome: 'Google', link: 'www.google.com'}
    ]}
];

for (let item of divs) {
    let newDiv = document.createElement('div');
    newDiv.classList.add("cat");

    let newUl = document.createElement('ul');
    
    let newLi = document.createElement('li');
    newLi.innerHTML = '<h4>' + item.nome + '</h4>';
    newUl.appendChild(newLi);

    for (let subitem of item.links) {
        let newSubItem = document.createElement('li');
        newSubItem.innerHTML = '<h4><a class="effect" href="' + subitem.link + '">' + subitem.nome + '</a></h4>';    
        newUl.appendChild(newSubItem);
    }    
    newDiv.appendChild(newUl);
    footer.appendChild(newDiv);
}