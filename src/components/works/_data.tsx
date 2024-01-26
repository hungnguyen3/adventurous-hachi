export const works = [
	{
		id: '0',
		name: 'SAP Software Solutions',
		positionName: 'Software Engineer Intern',
		startDate: new Date(2023, 8 - 1),
		endDate: new Date(2024, 4 - 1),
		imageUrl: '/works/SAP.png',
		description: 'SAP is a multinational software corporation specializing in enterprise software and services.',
		website: 'https://www.concur.ca/',
		duties: [
      'Engineered full-stack services for the SAP Concur App Center and Homepage, supporting 66 million global users',
      'Added steps in Shell and Python to CI/CD pipelines to build, tag and promote container images through AWS',
      'Updated Helm Charts for K8s clusters to add antivirus and integration test sidecars ensuring system reliability',
      'Enhanced deployment and monitoring by reducing CI steps, dependencies, and adding in-depth logging'
    ],
		techStack: ['Go', 'AWS', 'K8s', 'Bash', 'Docker', 'Helm', 'Kibana', 'React'],
	},
	{
		id: '1',
		name: 'Copperleaf Technologies Inc',
		positionName: 'Software Engineer Intern',
		startDate: new Date(2022, 1 - 1),
		endDate: new Date(2022, 8 - 1),
		imageUrl: '/works/Copperleaf.png',
		description:
			'Copperleaf works with asset-intensive companies to redefine asset management planning and provide decision analytics for critical infrastructure.',
		website: 'https://www.copperleaf.com/',
		duties: [
      'Designed robust fullstack services for investment workflow automation, catering to over 20 major corporations',
      'Performed schema migrations on Oracle database like modifying columns, adding constraints and creating tables',
      'Built a user interface for investment workflow, improving user experiences by eliminating hundreds of clicks',
      'Modified and optimized SQL queries for backend services, resulting in 15% increase in workflow retrieval time'
		],
		techStack: ['C#', '.NET', 'SQL', 'Oracle', 'Jenkins', 'Angular', 'Typescript', 'HTML', 'CSS'],
	},
	{
		id: '2',
		name: 'Dyne Technologies Inc',
		positionName: 'Software Engineer Intern',
		startDate: new Date(2021, 9 - 1),
		endDate: new Date(2021, 12 - 1),
		imageUrl: '/works/Dyne.png',
		description:
			'DYNE is a user-based application aimed to help you connect with people from your community over food. Meet old friends, make new ones, or grow your network with us.',
		website: 'https://dyneapp.ca',
		duties: [
      'Implemented a restaurant management dashboard, supporting over 750 local restaurants',
      'Developed back-end services for user analytics, promotions, ratings, etc., managing thousands of daily requests',
      'Analyzed business data converting raw data into insightful analyses to enhance restaurant profitability',
      'Refined services based on end-user and QA feedback, leading to performance enhancements and bug eradication'
		],
		techStack: ['React (Next.js)', 'Javascript', 'Node.js', 'MongoDB', 'Web services'],
	},
	{
		id: '3',
		name: 'Vecima Networks Inc',
		positionName: 'Software QA Engineer Intern',
		startDate: new Date(2021, 1 - 1),
		endDate: new Date(2021, 8 - 1),
		imageUrl: '/works/Nero.png',
		description:
			"Nero Global's secure GPS fleet tracking management software for mobile service vehicles will reduce your costs and increase productivity.",
		website: 'https://neroglobal.com/',
		duties: [
      'Improved automated tests on products by discovering and resolving 80% of errors and failures in test scripts',
      'Streamlined testing by integrating automated tests using a CI pipeline, saving 10 hours of manual testing weekly',
      'Designed test plans, tracked and documented bugs for daily and weekly releases to ensure product reliability'
		],
		techStack: ['Sahi - test automation software', 'Javascript'],
	},
	{
		id: '4',
		name: 'UBC Launch Pad',
		positionName: 'Software Engineer Intern',
		startDate: new Date(2021, 9 - 1),
		endDate: new Date(2023, 4 - 1),
		imageUrl: '/works/LaunchPad.png',
		description:
			'A leading student-run software club based in the University of British Columbia devoted to building applications in a collaborative and professional environment.',
		website: 'https://ubclaunchpad.com/',
		duties: [
      'Developed a cross-platform music recommendation mobile app with over 500 downloads on the App Store',
      'Managed the app’s CI pipeline with AWS for two years, efficiently managing a significant 250% growth in usage'
		],
		techStack: ['Node.js', 'Typescript', 'React Native', 'Web services'],
	},
];

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
	? ElementType
	: never;

export type Work = ElementType<typeof works>;
