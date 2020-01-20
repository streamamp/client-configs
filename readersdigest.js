var streamampConfig = {
	levelTargeting: true,
	gptSingleRequestEnabled: false,
	a9Enabled: true,
	apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	minRefreshTime: 90,
	maxRefreshTime: 120,
	hasCollapsedEmptyDivs: false,
	publisher_id: 'ReadersDigest/ReadersDigest',
	token: 'qOCszbiBONlf1bFb18jRBeoGNuJhuCmLWDwKcMmco4m0GekzC0LtAihpYrzFKoRl',
	currency: {
	enabled: true,
		value: 'GBP'
},
	namespace: 'streamamp',
	globalKeyValues: [],
	keyValues: {},
	adUnits: [
		{
			code: 'TopBanner',
			path: '/172785704/StreamAMP/TopBanner',
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
						'1051-9999',
						'741-1050'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'ReadersDigest_TopBanner_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'0-741'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'ReadersDigest_TopBanner_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999'
					],
					params: {
						dmxid: 181839,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						dmxid: 181841,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 181843,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999'
					],
					params: {
						tagid: '67199'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						tagid: '67200'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '67201'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999'
				// 	],
				// 	params: {
				// 		placementId: 540046196
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999',
				// 		'741-1050'
				// 	],
				// 	params: {
				// 		placementId: 1203481
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203481
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999'
					],
					params: {
						siteId: '307447',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						siteId: '307449',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307452',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999'
					],
					params: {
						unit: '540046196',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						unit: '540046196',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540046196',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242247',
						adSlot: 'RDigest_TopBanner_970x250@970x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242249',
						adSlot: 'RDigest_TopBanner_728x90@728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242251',
						adSlot: 'RDigest_TopBanner_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999'
					],
					params: {
						placementId: 12274387
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						placementId: 12274398
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 12274403
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'741-1050': [
					[
						728,
						90
					]
				],
				'0-741': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'BottomBanner',
			path: '/172785704/StreamAMP/BottomBanner',
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
						'1051-9999',
						'741-1050'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'ReadersDigest_BottomBanner_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'0-741'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'ReadersDigest_BottomBanner_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						dmxid: 181846,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999'
					],
					params: {
						dmxid: 181844,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 181848,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						tagid: '40781'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999'
					],
					params: {
						tagid: '40781'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '40781'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999',
				// 		'741-1050'
				// 	],
				// 	params: {
				// 		placementId: 1203482
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999'
				// 	],
				// 	params: {
				// 		placementId: 1203482
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203482
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						siteId: '307459',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999'
					],
					params: {
						siteId: '307454',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307463',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						unit: '540046199',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999'
					],
					params: {
						unit: '540046199',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540046199',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242254',
						adSlot: 'RDigest_BottomBanner_728x90@728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242252',
						adSlot: 'RDigest_BottomBanner_970x250@970x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242256',
						adSlot: 'RDigest_BottomBanner_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						placementId: 12274411
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999'
					],
					params: {
						placementId: 12274409
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 12274413
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						728,
						90
					],
					[
						970,
						250
					]
				],
				'741-1050': [
					[
						728,
						90
					]
				],
				'0-741': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'IncontentBanner',
			path: '/172785704/StreamAMP/IncontentBanner',
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
						'1051-9999',
						'741-1050'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'ReadersDigest_IncontentBanner_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						dmxid: 181854,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 181856,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						tagid: '67202'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '67203'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999',
				// 		'741-1050'
				// 	],
				// 	params: {
				// 		placementId: 1203483
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203483
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						siteId: '307465',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307471',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						unit: '540046200',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540046200',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242262',
						adSlot: 'RDigest_Incontent_728x90@728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242265',
						adSlot: 'RDigest_Incontent_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999',
						'741-1050'
					],
					params: {
						placementId: 12274427
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 12274429
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						728,
						90
					]
				],
				'741-1050': [
					[
						728,
						90
					]
				],
				'0-741': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'MPU1',
			path: '/172785704/StreamAMP/MPU1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							320,
							100
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
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'ReadersDigest_MPU1_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						dmxid: 181857,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 181857,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						tagid: '40784'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '40786'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999',
				// 		'741-1050',
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203484
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203484
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						siteId: '307474',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307476',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						unit: '540046203',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540046203',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242267',
						adSlot: 'RDigest_MPU1_300x250@300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1513827',
						adSlot: 'RDigest_MPU1_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						placementId: 12274431
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 13705047
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						300,
						250
					]
				],
				'741-1050': [
					[
						300,
						250
					]
				],
				'0-741': [
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
			code: 'MPU2',
			path: '/172785704/StreamAMP/MPU2',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							320,
							100
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
					bidder: 'appnexus',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 13705052
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'ReadersDigest_MPU2_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						dmxid: 181858,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 181858,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						tagid: '40785'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '40787'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999',
				// 		'741-1050',
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203485
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203485
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						siteId: '307478',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307479',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						unit: '40786',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540046204',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242268',
						adSlot: 'RDigest_MPU2_300x250@300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1513828',
						adSlot: 'RDigest_MPU2_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						placementId: 12274432
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						300,
						250
					]
				],
				'741-1050': [
					[
						300,
						250
					]
				],
				'0-741': [
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
			code: 'MPU3',
			path: '/172785704/StreamAMP/MPU3',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							320,
							100
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
						'1051-9999',
						'741-1050'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'ReadersDigest_MPU3_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						dmxid: 181859,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 181859,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						tagid: '40788'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '40788'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999',
				// 		'741-1050',
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203486
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203486
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						siteId: '307480',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307481',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						unit: '540046205',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540046205',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242269',
						adSlot: 'RDigest_MPU3_300x250@300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1513829',
						adSlot: 'RDigest_MPU3_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999',
						'741-1050',
						'0-741'
					],
					params: {
						placementId: 12274433
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 13705059
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						300,
						250
					]
				],
				'741-1050': [
					[
						300,
						250
					]
				],
				'0-741': [
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
			code: 'DMPU',
			path: '/172785704/StreamAMP/DMPU',
			mediaTypes: {
				banner: {
					sizes: [
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
						'1051-9999'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'ReadersDigest_DMPU_NEW_300x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1051-9999'
					],
					params: {
						dmxid: 378597,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1051-9999'
					],
					params: {
						tagid: '67204'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1051-9999'
				// 	],
				// 	params: {
				// 		placementId: 1203487
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1051-9999'
					],
					params: {
						siteId: '307482',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1051-9999'
					],
					params: {
						unit: '540046206',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1051-9999'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1242270',
						adSlot: 'RDigest_DMPU_300x600@300x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1051-9999'
					],
					params: {
						placementId: 12314098
					}
				}
			],
			breakpoints: {
				'1051-9999': [
					[
						300,
						600
					]
				]
			}
		},
		{
			code: '1x1',
			path: '/172785704/StreamAMP/1x1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							1,
							1
						]
					]
				}
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: []
		},
		{
			code: 'StickyMobile',
			path: '/172785704/StreamAMP/StickyMobile',
			mediaTypes: {
				banner: {
					sizes: [
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
						'0-741'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'ReadersDigest_StickyMobile_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-741'
					],
					params: {
						dmxid: 229420,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-741'
					],
					params: {
						tagid: '67205'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-741'
				// 	],
				// 	params: {
				// 		placementId: 1203488
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'0-741'
					],
					params: {
						siteId: '307483',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-741'
					],
					params: {
						unit: '540181484',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-741'
					],
					params: {
						publisherId: '127864',
						pmzoneid: '1499521',
						adSlot: 'RDigest_StickyMobile_320x50@320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-741'
					],
					params: {
						placementId: 13650038
					}
				}
			],
			breakpoints: {
				'0-741': [
					[
						320,
						50
					]
				]
			}
		}
	],
		cmp: {
	isEnabled: true,
		config: {
		'UI Layout': 'popup',
			Language: 'en',
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
			'Publisher Logo': 'https://static.amp.services/logos/readersdigest.png',
			'Publisher Name': 'Readers Digest'
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
			label: '1051-9999',
			minWidth: 1051,
			maxWidth: 9999,
			sizesSupported: [
				[
					300,
					600
				],
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
			label: '741-1050',
			minWidth: 741,
			maxWidth: 1050,
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
			label: '0-741',
			minWidth: 0,
			maxWidth: 741,
			sizesSupported: [
				[
					320,
					50
				],
				[
					300,
					250
				]
			]
		}
	]
}
