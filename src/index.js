
const projects = [
    {
        img: "src/assets/img/img1.jpg",
        title: 'Add and Filter Movie',
        content: 'Lorem Ipsum',
        url: 'movieList.html'
    },
    {
        img: 'src/assets/img/img2.jpg',
        title: 'Title One',
        content: 'Lorem Ipsum Lorem Ipsum',
        url: 'movieList.html'
    },
    {
        img: 'src/assets/img/img3.jpg',
        title: 'Title One',
        content: 'Lorem Ipsum Lorem Ipsum',
        url: 'movieList.html'
    },
    {
        img: 'src/assets/img/img4.jpg',
        title: 'Title One',
        content: 'Lorem Ipsum Lorem Ipsum',
        url: 'movieList.html'
    },
    {
        img: 'src/assets/img/img5.jpg',
        title: 'Title One',
        content: 'Lorem Ipsum Lorem Ipsum',
        url: 'movieList.html'
    },
    {
        img: 'src/assets/img/img6.jpg',
        title: 'Title One',
        content: 'Lorem Ipsum Lorem Ipsum',
        url: 'Components/movieList.html'
    },
    {
        img: 'src/assets/img/img4.jpg',
        title: 'Title One',
        content: 'Lorem Ipsum Lorem Ipsum',
        url: 'Components/movieList.html'
    }
]

const addProjects = () => {
    const $projectList = document.getElementById('projects-list');
    console.log('project list is ',$projectList);
    projects.forEach(project=>{
        const { img, title, content, url } = project;
        const $listItem = document.createElement('li');
        $listItem.classList.add('projects__list--item');
        $listItem.innerHTML = `
            <a class="projects__list--link" href='${url}' onClick="()=>{handleClick}">
                <div class="img-section">
                    <div class="img-container">
                        <img src='${img}' alt="" />
                    </div>
                </div>
                <div class="content">
                    <h2>${title}</h2>
                    <p>${content}</p>
                </div>
            </a>
        `
        $projectList.appendChild($listItem);
    })
}


addProjects();



