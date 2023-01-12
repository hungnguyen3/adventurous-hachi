export const works = [
	{
		id: '0',
		name: 'Copperleaf Technologies Inc',
		positionName: 'Software Developer',
		startDate: new Date(2022, 1 - 1),
		endDate: new Date(2022, 8 - 1),
		imageUrl:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kmu112bbotnbapfd3z7m',
		description:
			'Copperleaf works with asset-intensive companies to redefine asset management planning and provide decision analytics for critical infrastructure.',
		website: 'https://www.copperleaf.com/',
		duties: [
			'Developed new features in Angular to showcase breakdowns of costs, spending, and assets for end-users.',
			'Built a new workflow automation page in the existing enterprise product to help users automate their investments.',
			'Used NgRx and RxJS libraries to manage the application’s data flow.',
			'Worked in Angular, HTML, and Sass to develop the UI of the new page.',
			'Designed and implemented web services using C#, .NET, and Oracle for the workflow automation page.',
			'Performed data schema changes through SQL migration scripts on existing database.',
			'Built new endpoints to allow users to make modifications to workflows and save newly updated versions.',
			'Wrote unit and integration tests for new features in Jasmine test and MSTest frameworks.',
		],
		techStack: ['Angular', 'Typescript', 'SCSS', 'C#', '.NET', 'SQL', 'Oracle'],
	},
	{
		id: '1',
		name: 'Vecima Networks Inc',
		positionName: 'Software Quality Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: new Date(2021, 12 - 1),
		imageUrl: '/works/Nero.png',
		description:
			"Nero Global's secure GPS fleet tracking management software for mobile service vehicles will reduce your costs and increase productivity.",
		website: 'https://neroglobal.com/',
		duties: [
			'Performed manual and automated tests on software and hardware products.',
			'Developed test plans and wrote test suites in Javascript and Sahi software throughout the Agile development cycle.',
			'Reduced errors and failures of the existing test scripts up to 90 percent.',
			'Executed automated test scripts and reported bugs and errors upon daily staging updates and bi-weekly production updates.',
		],
		techStack: ['Sahi - test automation software', 'Javascript'],
	},
	{
		id: '2',
		name: 'Dyne Technologies Inc',
		positionName: 'Software Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: new Date(2022, 2 - 1),
		imageUrl: 'https://dyneapp.files.wordpress.com/2021/09/frame-7167.png',
		description:
			'DYNE is a user-based application aimed to help you connect with people from your community over food. Meet old friends, make new ones, or grow your network with us.',
		website: 'https://dyneapp.ca',
		duties: [
			'Productionized a managing dashboard web app in React for restaurants to monitor meetups, coupons, promotions, etc.',
			'Built, revamped, and added new features to the web dashboard through several quality assurance iterations.',
			'Developed and fixed back-end services using Node.js, Express.js, and MongoDB.',
			'Designed and implemented endpoints to analyze restaurants’ data from MongoDB for front-end visualization.',
			'Maintained and fixed existing endpoints based on bugs/needs reported from the QA team or end users.',
		],
		techStack: [
			'React (Next.js)',
			'Javascript',
			'Node.js',
			'MongoDB',
			'Web services',
		],
	},
	{
		id: '3',
		name: 'UBC Launch Pad',
		positionName: 'Software Developer',
		startDate: new Date(2021, 9 - 1),
		endDate: null,
		imageUrl: 'https://ubclaunchpad.com/img/landing.77f06a83.png',
		description:
			'A leading student-run software club based in the University of British Columbia devoted to building applications in a collaborative and professional environment.',
		website: 'https://ubclaunchpad.com/',
		duties: [
			'Developed and deployed a Node.js back-end server for a project called Euphony to communicate with front-end app, web services, and machine learning server.',
			'Integrated Node.js server with different APIs, including Spotify, OpenWeatherMap, and Mapbox.',
			'Filtered, formatted, and processed data between different APIs, front-end inputs, and machine learning server',
		],
		techStack: ['Node.js', 'Typescript', 'React Native', 'Web services'],
	},
];

export type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Work = ElementType<typeof works>;
