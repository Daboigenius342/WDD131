// This array stands in for a database. Each object is one blog post.
// The property names match the assignment's array. On this blog:
//   ages  = the log number shown on the left ("Log 1")
//   genre = the category ("Projects")
//   stars = optional rating, leave '' to hide it
// Lines starting with ✏️ are prompts: replace them with your own writing.
// Each '\n' starts a new paragraph.
const articles = [
	{
		id: 1,
		title: 'First Proxmox server',
		date: 'October 17, 2026',
		description:
			'Took some time making this server the other day, I had an extra. think pad lying around and thought to myself "what would happen if I made my own server?" Well to my suprise a lot. When you figure out that you may need an ethernet cord to keep your crap together, and prevent your first pihole from dropping everything that comes through your DNS just because; then this is the starting place that I will be at for a week or maybe a month figuring out how to prevent that issue from ever happening again.',
		imgSrc: 'images/proxmox-sm.jpg',
		imgAlt: 'Proxmox server',
		ages: 'Log 1',
		genre: 'Projects',
		stars: ''
	},
	{
		id: 2,
		title: 'Whonix on Proxmox',
		date: 'October 25, 2026',
		description:
			'Worked with whonix on proxmox to have secure browsing through a Ghost VM, basically Im connected to the tor network and its hard for ISP or bad actors to view or trace me back to my server or home IP',
		imgSrc: 'images/whonix.webp',
		imgAlt: 'Whonix Workstation desktop running in the Proxmox console',
		ages: 'Log 2',
		genre: 'Projects',
		stars: ''
	},
	{
		id: 3,
		title: 'Setting up an nginx container',
		date: 'October 24, 2026',
		description:
			'Setting up nginx to make my server more secure and give it a certificate through cloudflare after.',
		imgSrc: 'images/nginx.webp',
		imgAlt: 'Proxmox summary page for the nginx container',
		ages: 'Log 3',
		genre: 'Projects',
		stars: ''
	},
	{
		id: 4,
		title: 'Getting into MeshCore',
		date: 'October 25, 2026',
		description:
			' Worked on my meshcore radios the other day and started links, want to some how connect it to my proxmox server\n',
			
		imgSrc: 'images/meshcore.webp',
		imgAlt: 'MeshCore radio with an antenna standing on a desk',
		ages: 'Log 4',
		genre: 'Projects',
		stars: ''
	}

	// ✏️ NEW POST: put a comma after the } above, then paste this in.
	//
	// {
	// 	id: 5,
	// 	title: '✏️ Post title',
	// 	date: '✏️ Date',
	// 	description:
	// 		'✏️ First paragraph.\n' +
	// 		'✏️ Second paragraph.',
	// 	imgSrc: 'images/✏️ your-photo.jpg',
	// 	imgAlt: '✏️ Describe the picture',
	// 	ages: 'Log 5',
	// 	genre: 'Projects',
	// 	stars: ''
	// }
];

// Turns a description into <p> tags. Each "\n" in the text starts a new paragraph.
function paragraphs(text) {
	return text
		.split('\n')
		.map((line) => `<p>${line}</p>`)
		.join('');
}

// Builds the HTML for one post using a template literal.
// The ? : checks skip the stars and the picture when they are left empty.
function articleTemplate(article) {
	return `<article class="post">
		<div class="details">
			<p class="date">${article.date}</p>
			<p>${article.ages}</p>
			<p>${article.genre}</p>
			${article.stars ? `<p>${article.stars}</p>` : ''}
		</div>
		<div class="content">
			<h2>${article.title}</h2>
			${article.imgSrc ? `<img src="${article.imgSrc}" alt="${article.imgAlt}">` : ''}
			${paragraphs(article.description)}
		</div>
	</article>`;
}

const postsContainer = document.getElementById('posts');

articles.forEach((article) => {
	postsContainer.innerHTML += articleTemplate(article);
});
