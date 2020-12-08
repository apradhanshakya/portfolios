const projects = [
	{
		img: "src/assets/img/img1.jpg",
		alt: 'project one',
		title: 'Movie List',
		content: 'Demonstration of Add and Filter Functionality',
		url: 'movieList.html',

	},
	{
		img: 'src/assets/img/img2.jpg',
		alt: 'project Two',
		title: 'Book List',
		content: 'Demonstration of toggling of Backdrop, modal, deletion of bookList etc ',
		url: 'bookList.html',
	},
	{
		img: 'src/assets/img/img3.jpg',
		alt: 'project three',
		title: 'Project Three',
		content: 'Lorem Ipsum Lorem Ipsum',
		url: 'movieList.html',
	},
	{
		img: 'src/assets/img/img4.jpg',
		alt: 'Project Four',
		title: 'Project Four',
		content: 'Lorem Ipsum Lorem Ipsum',
		url: 'movieList.html',
	},
	{
		img: 'src/assets/img/img5.jpg',
		alt: 'project five',
		title: 'Title One',
		content: 'Lorem Ipsum Lorem Ipsum',
		url: 'movieList.html',
	},
	{
		img: 'src/assets/img/img6.jpg',
		alt: 'project six ',
		title: 'Title One',
		content: 'Lorem Ipsum Lorem Ipsum',
		url: 'Components/movieList.html',
	},
	{
		img: 'src/assets/img/img4.jpg',
		alt: 'project seven ',
		title: 'Title One',
		content: 'Lorem Ipsum Lorem Ipsum',
		url: 'Components/movieList.html',
	},
];


const addProjects = () => {
	const $projectList = document.getElementById('projects-list');
	projects.forEach(project => {
		const { img, title, content, url, alt } = project;
		const $listItem = document.createElement('li');
		$listItem.classList.add('projects__list--item');
		$listItem.innerHTML = `
            <a class="projects__list--link" href='${url}' target="_blank">
                <div class="img-section">
                    <div class="img-container">
                        <img src='${img}' alt='${alt}' />
                    </div>
                </div>
                <div class="content">
                    <h2>${title}</h2>
                    <p>${content}</p>
                </div>
            </a>
        `;
		$projectList.appendChild($listItem);
	});
};


addProjects();


