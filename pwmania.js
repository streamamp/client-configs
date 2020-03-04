var streamampConfig = {
	levelTargeting: false,
	gptSingleRequestEnabled: false,
	a9Enabled: true,
	apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	minRefreshTime: 90,
	maxRefreshTime: 90,
	hasCollapsedEmptyDivs: true,
	publisher_id: 'StreamAMP/PWMania',
	token: 'jCwT0d5rTbEgVo3fQWqyebVepvORjN9domMGNGCMLIM1luI7Ium7dpyiBOqHhk37',
	currency: {
	enabled: false,
		value: ''
},
	namespace: 'streamamp',
		globalKeyValues: [],
	keyValues: {},
	adUnits: [
		{
			code: 'Unit1',
			path: '/15188745/PWMania/Unit1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
						],
						[
							320,
							50
						]
					]
				}
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'PWMania_Unit1_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'PWMania_Unit1_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 498048,
						memberid: 100615
					}
				},
				{
					bidder: 'districtm',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: '18637549'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						siteId: '308222',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						siteId: '308224',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						unit: '540312294',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						unit: '540312294',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						placementId: 13948564
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						placementId: 13948566
					}
				}
			],
			breakpoints: {
				'729-9999': [
					[
						728,
						90
					]
				],
				'469-728': [
					[
						728,
						90
					],
					[
						320,
						50
					]
				],
				'0-468': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit2',
			path: '/15188745/PWMania/Unit2',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						]
					]
				}
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'PWMania_unit2_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 202632,
						memberid: 100615
					}
				},
				{
					bidder: 'districtm',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: '13011907'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						siteId: '308225',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						unit: '540312295',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 13948568
					}
				}
			],
			breakpoints: {
				'729-9999': [
					[
						300,
						250
					]
				],
				'469-728': [
					[
						300,
						250
					]
				],
				'0-468': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit3',
			path: '/15188745/PWMania/Unit3',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							300,
							600
						]
					]
				}
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'PWMania_Unit3_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 202633,
						memberid: 100615
					}
				},
				{
					bidder: 'districtm',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: '13011908'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						siteId: '308226',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						siteId: '308227',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						unit: '540312297',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						unit: '540312297',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 13948569
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'729-9999',
						'469-728'
					],
					params: {
						placementId: 13948572
					}
				}
			],
			breakpoints: {
				'729-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'469-728': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'0-468': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit4',
			path: '/15188745/PWMania/Unit4',
			mediaTypes: {
				banner: {
					sizes: [
						[
							160,
							600
						],
						[
							120,
							600
						]
					]
				}
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'PWMania_Unit4_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 202634,
						memberid: 100615
					}
				},
				{
					bidder: 'districtm',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: '13011909'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						siteId: '308228',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						unit: '540312298',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'729-9999',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 13948573
					}
				}
			],
			breakpoints: {
				'729-9999': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'469-728': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'0-468': [
					[
						160,
						600
					]
				]
			}
		}
	],
		cmp: {
	isEnabled: true,
		config: {
		'UI Layout': 'popup',
			'Language': 'en',
			'Display Persistent Consent Link': true,
			'No Option': false,
			'Non-Consent Display Frequency': 7,
			'Publisher Purpose IDs': [
			1,
			2,
			3,
			4,
			5
		],
			'Initial Screen Body Text Option': 1,
			'Initial Screen Accept Button Text': 'I agree',
			'Initial Screen Reject Button Text': 'I do not accept',
			'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
			'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
			'Vendor Screen Accept All Button Text': 'Accept all',
			'Vendor Screen Reject All Button Text': 'Reject all',
			'Publisher Logo': 'https://static.amp.services/logos/pwmania.png',
			'Publisher Name': 'PWMania'
	},
	hasCustomStyles: false,
		styles: {
		ui: {},
		link: {},
		primaryButton: {},
		primaryButtonHover: {},
		isSecondaryButtonHidden: false,
			secondaryButton: {},
		secondaryButtonHover: {},
		tableHeader: {},
		tableRow: {},
		toggleOn: {},
		toggleOff: {},
		additionalStyles: ''
	}
},
	breakpoints: [
		{
			label: '729-9999',
			minWidth: 729,
			maxWidth: 9999,
			sizesSupported: [
				[
					728,
					90
				],
				[
					300,
					250
				],
				[
					300,
					600
				],
				[
					160,
					600
				]
			]
		},
		{
			label: '469-728',
			minWidth: 469,
			maxWidth: 728,
			sizesSupported: [
				[
					728,
					90
				],
				[
					320,
					50
				],
				[
					300,
					250
				],
				[
					300,
					600
				],
				[
					160,
					600
				]
			]
		},
		{
			label: '0-468',
			minWidth: 0,
			maxWidth: 468,
			sizesSupported: [
				[
					320,
					50
				],
				[
					300,
					250
				],
				[
					160,
					600
				]
			]
		}
	]
};
