var streamampConfig = {
	levelTargeting: true,
	gptSingleRequestEnabled: true,
	a9Enabled: true,
	apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	refreshBidsTimeout: 90,
	hasCollapsedEmptyDivs: false,
	publisher_id: 'BritishComedyGuide/BritishComedyGuide',
	token: 'L7KBVbLylqvMApDHR1ughDHnU0qw8jnzpdHvkigEYZ7cTSwnuVISAVrobChsX8z4',
	currency: {
		enabled: true,
		value: 'GBP'
	},
	namespace: 'streamamp',
	globalKeyValues: [],
	keyValues: {},
	adUnits: [
		{
			code: 'Unit1',
			path: '/11915656/BritishComedyguide/Unit1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							970,
							250
						],
						[
							728,
							90
						],
						[
							300,
							250
						],
						[
							320,
							50
						]
					]
				}
			},
			isSticky: false,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'BritishComedyGuide_Unit1_728x90'
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
						publisherSubId: 'BritishComedyGuide_Unit1_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'979-9999'
					],
					params: {
						dmxid: 363259,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						dmxid: 363260,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 363262,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-468'
					],
					params: {
						dmxid: 363261,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'979-9999'
					],
					params: {
						tagid: '69874'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						tagid: '69875'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						tagid: '69877'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-468'
					],
					params: {
						tagid: '69876'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'979-9999'
					],
					params: {
						placementId: 22025967
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						placementId: 22025967
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						placementId: 22025967
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-468'
					],
					params: {
						placementId: 22025967
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'979-9999'
					],
					params: {
						siteId: '367688',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						siteId: '368178',
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
						siteId: '368180',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-468'
					],
					params: {
						siteId: '368179',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'979-9999'
					],
					params: {
						unit: '540736029',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						unit: '540736029',
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
						unit: '540736029',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-468'
					],
					params: {
						unit: '540736029',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'979-9999'
					],
					params: {
						placementId: 15887493
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						placementId: 15887494
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						placementId: 15887496
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-468'
					],
					params: {
						placementId: 15887495
					}
				}
			],
			breakpoints: {
				'979-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'729-978': [
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
						300,
						250
					]
				],
				'0-468': [
					[
						300,
						250
					],
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit2',
			path: '/11915656/BritishComedyguide/Unit2',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'BritishComedyGuide_Unit2_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 363264,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						tagid: '69878'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						placementId: 22025968
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						siteId: '368181',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						unit: '540736031',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 15887497
					}
				}
			],
			breakpoints: {
				'979-9999': [
					[
						300,
						250
					]
				],
				'729-978': [
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
			path: '/11915656/BritishComedyguide/Unit3',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0-468'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'BritishComedyGuide_Unit3_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 363265,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						tagid: '69879'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 22025969
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						siteId: '368182',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						unit: '540736032',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 15887498
					}
				}
			],
			breakpoints: {
				'979-9999': [
					[
						300,
						250
					]
				],
				'729-978': [
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
			code: 'Unit4',
			path: '/11915656/BritishComedyguide/Unit4',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
						],
						[
							300,
							250
						],
						[
							320,
							50
						]
					]
				}
			},
			isSticky: false,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'BritishComedyGuide_Unit4_728x90'
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
						publisherSubId: 'BritishComedyGuide_Unit4_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						dmxid: 363266,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 363268,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-468'
					],
					params: {
						dmxid: 363267,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						tagid: '69880'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						tagid: '69882'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-468'
					],
					params: {
						tagid: '69881'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						placementId: 22025970
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						placementId: 22025970
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-468'
					],
					params: {
						placementId: 22025970
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						siteId: '368183',
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
						siteId: '368185',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-468'
					],
					params: {
						siteId: '368184',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						unit: '540736033',
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
						unit: '540736033',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-468'
					],
					params: {
						unit: '540736033',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						placementId: 15887499
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'469-728',
						'0-468'
					],
					params: {
						placementId: 15887502
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-468'
					],
					params: {
						placementId: 15887500
					}
				}
			],
			breakpoints: {
				'979-9999': [
					[
						728,
						90
					]
				],
				'729-978': [
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
						300,
						250
					]
				],
				'0-468': [
					[
						300,
						250
					],
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit5',
			path: '/11915656/BritishComedyguide/Unit5',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'BritishComedyGuide_Unit5_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						dmxid: 366701,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						tagid: '70294'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728'
					],
					params: {
						placementId: 22028056
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						siteId: '370808',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						unit: '540745341',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'979-9999',
						'729-978',
						'469-728',
						'0-468'
					],
					params: {
						placementId: 15973400
					}
				}
			],
			breakpoints: {
				'979-9999': [
					[
						300,
						250
					]
				],
				'729-978': [
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
		}
	],
	cmp: {
		isEnabled: true,
		config: {
			'UI Layout': 'banner',
			Language: 'en',
			'Display Persistent Consent Link': false,
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
			'Initial Screen Accept Button Text': 'I accept',
			'Initial Screen Reject Button Text': 'I do not accept',
			'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
			'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
			'Vendor Screen Accept All Button Text': 'Accept all',
			'Vendor Screen Reject All Button Text': 'Reject all',
			'Publisher Name': 'British Comedy Guide',
			'Publisher Logo': 'https://www.comedy.co.uk/images/design/british_comedy_guide_long.png',
			'Initial Screen Title Text': 'Help us show you better content'
		},
		hasCustomStyles: true,
		styles: {
			ui: {
				textColor: '#ffffff'
			},
			link: {
				textColor: '#fffff'
			},
			primaryButton: {
				backgroundColor: '#efcc38',
				borderColor: '#efcc38',
				textColor: '#2e1313'
			},
			primaryButtonHover: {
				backgroundColor: '#f5de80',
				borderColor: '#f5de80',
				textColor: '#fffff'
			},
			isSecondaryButtonHidden: true,
			secondaryButton: {},
			secondaryButtonHover: {},
			tableHeader: {
				textColor: '#ffffff'
			},
			tableRow: {
				textColor: '#ffffff'
			},
			toggleOn: {},
			toggleOff: {},
			additionalStyles: '\'@media screen and (min-width: 550px)\' + {\' + \'.qc-cmp-ui-content\' + \'{\' + \'padding:\' + \'30px 60px!important;\' + \'}\' + \'}\'',
			toggleStatusTextColor: '#ffffff'
		}
	},
	breakpoints: [
		{
			label: '979-9999',
			minWidth: 979,
			maxWidth: 9999,
			sizesSupported: [
				[
					970,
					250
				],
				[
					728,
					90
				],
				[
					300,
					250
				]
			]
		},
		{
			label: '729-978',
			minWidth: 729,
			maxWidth: 978,
			sizesSupported: [
				[
					728,
					90
				],
				[
					300,
					250
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
					300,
					250
				]
			]
		},
		{
			label: '0-468',
			minWidth: 0,
			maxWidth: 468,
			sizesSupported: [
				[
					300,
					250
				],
				[
					320,
					50
				]
			]
		}
	]
}
