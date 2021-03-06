var streamampConfig = {
	gptSingleRequestEnabled: false,
	levelTargeting: false,
	a9Enabled: true,
	apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	adUnitsToRefresh: [
		"F1fanatic-Unit2",
		"F1fanatic-Unit3",
		"F1fanatic-Unit4",
		"F1fanatic-Unit5",
		"F1fanatic-Unit6",
		"F1fanatic-Unit7",
		"F1fanatic-Sticky",
		"F1fanatic/Unit9",
		"F1fanatic/Unit10",
		"F1fanatic/Unit14",
		"F1fanatic/Unit15",
		"F1fanatic/Unit16",
		"F1fanatic/Unit22"
	],
	minRefreshTime: 90,
	maxRefreshTime: 120,
	hasCollapsedEmptyDivs: false,
	publisher_id: 'StreamAMP/F1Fanatic',
	token: '4rI8hfYLZc6Ebat2m1X2la4VFLYHmNzhYn2kZ6UAv3SET7yeS3bEz35IE3Ky3hQk',
	currency: {
		enabled: false,
		value: ''
	},
	namespace: 'streamamp',
	globalKeyValues: [],
	keyValues: {},
	adUnits: [
		{
			code: 'F1fanatic-Unit1',
			path: '/15188745/f1fanatic-unit1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
						],
						[
							970,
							250
						],
						[
							320,
							50
						],
						[
							460,
							60
						],
						[
							970,
							90
						],
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
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'RaceFans_Unit1_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Unit1_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						dmxid: 136723,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						dmxid: 136725,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 136722,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						tagid: '40535'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						tagid: '67120'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40536'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186878
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						siteId: '179845',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						siteId: '182268',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						siteId: '182266',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'justpremium',
					labelAny: [
						'1667-9999'
					],
					params: {
						zone: '79427',
						allow: [
							'pu',
							'pa',
							'ci',
							'as',
							'cf',
							'hv',
							'wv',
							'wp'
						]
					}
				},
				{
					bidder: 'justpremium',
					labelAny: [
						'0-415'
					],
					params: {
						zone: '79427',
						allow: [
							'mt',
							'is',
							'mo',
							'ms'
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '538773842',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						publisherId: '643842',
						adSlot: 'F1Fanatic_Unit1_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '643843',
						adSlot: 'F1Fanatic_Unit1_970x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-415'
					],
					params: {
						publisherId: '643840',
						adSlot: 'F1Fanatic_Unit1_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 6096875
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 6096888
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 6096766
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 17071421
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17071423
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071409
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						728,
						90
					],
					[
						970,
						250
					],
					[
						970,
						90
					],
					[
						1,
						1
					]
				],
				'957-1666': [
					[
						728,
						90
					],
					[
						970,
						250
					],
					[
						970,
						90
					]
				],
				'416-956': [
					[
						728,
						90
					],
					[
						320,
						50
					],
					[
						460,
						60
					]
				],
				'0-415': [
					[
						320,
						50
					],
					[
						1,
						1
					]
				]
			}
		},
		{
			code: 'F1fanatic-Unit2',
			path: '/15188745/f1fanatic-unit2',
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
						],
						[
							320,
							50
						],
						[
							320,
							100
						]
					]
				}
			},
			isSticky: false,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'RaceFans_Unit2_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 136726,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						dmxid: 136727,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'416-956'
					],
					params: {
						dmxid: 234692,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '67121'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						tagid: '67123'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'416-956'
					],
					params: {
						tagid: '67122'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186879
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '182270',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						siteId: '182271',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'416-956'
					],
					params: {
						siteId: '306050',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '538773843',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						publisherId: '643845',
						adSlot: 'F1Fanatic_Unit2_300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						publisherId: '643846',
						adSlot: 'F1Fanatic_Unit2_300x600'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-415'
					],
					params: {
						publisherId: '1521788',
						adSlot: 'F1Fanatic_Unit2_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 6096904
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 6096905
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'416-956'
					],
					params: {
						placementId: 13756716
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071428
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 17071430
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'416-956'
					],
					params: {
						placementId: 17071429
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'957-1666': [
					[
						300,
						250
					],
					[
						300,
						600
					],
					[
						320,
						100
					]
				],
				'416-956': [
					[
						300,
						250
					],
					[
						300,
						600
					],
					[
						320,
						50
					],
					[
						320,
						100
					]
				],
				'0-415': [
					[
						300,
						250
					],
					[
						320,
						100
					]
				]
			}
		},
		{
			code: 'F1fanatic-Unit3',
			path: '/15188745/f1fanatic-unit3',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'RaceFans_Unit3_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						dmxid: 136729,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						tagid: '67124'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956'
				// 	],
				// 	params: {
				// 		placementId: 1186880
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						siteId: '182272',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						unit: '538773847',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						publisherId: '643847',
						adSlot: 'F1Fanatic_Unit3_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 6096933
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 17071431
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'957-1666': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'416-956': [
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
		{
			code: 'F1fanatic-Unit4',
			path: '/15188745/f1fanatic-unit4',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Unit4_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						dmxid: 136732,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 136730,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						tagid: '40534'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40530'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186881
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						siteId: '182276',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						siteId: '182274',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '538773848',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						publisherId: '643851',
						adSlot: 'F1Fanatic_Unit4_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						publisherId: '643849',
						adSlot: 'F1Fanatic_Unit4_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 6096939
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 6096937
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 17071433
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071432
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						728,
						90
					]
				],
				'957-1666': [
					[
						728,
						90
					]
				],
				'416-956': [
					[
						728,
						90
					],
					[
						320,
						50
					]
				],
				'0-415': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'F1fanatic-Unit5',
			path: '/15188745/F1fanatic//Unit5',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'RaceFans_Unit5_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Unit5_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						dmxid: 368602,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 136724,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						tagid: '40538'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						tagid: '67125'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186882
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						siteId: '306052',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						siteId: '244258',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '539716074',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						publisherId: '1257998',
						adSlot: 'f1fanatic_unit5_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						publisherId: '1257996',
						adSlot: 'f1fanatic_unit5_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 12705356
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 12705353
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 17071440
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071434
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						728,
						90
					]
				],
				'957-1666': [
					[
						728,
						90
					]
				],
				'416-956': [
					[
						728,
						90
					],
					[
						320,
						50
					]
				],
				'0-415': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'F1fanatic-Unit6',
			path: '/15188745/F1fanatic//Unit6',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'RaceFans_Unit6_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Unit6_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						dmxid: 368604,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 368603,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						tagid: '40541'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						tagid: '67126'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186883
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						siteId: '306055',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306053',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '539716076',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						publisherId: '1258002',
						adSlot: 'f1fanatic_unit6_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						publisherId: '1258000',
						adSlot: 'f1fanatic_unit6_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 12705361
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 12705359
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956'
					],
					params: {
						placementId: 17071442
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071441
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						728,
						90
					]
				],
				'957-1666': [
					[
						728,
						90
					]
				],
				'416-956': [
					[
						728,
						90
					],
					[
						320,
						50
					]
				],
				'0-415': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'F1fanatic-Unit7',
			path: '/15188745/F1Fanatic//Unit8',
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
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'RaceFans_Unit8_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 368607,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40543'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186885
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306059',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '540001451',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 13216897
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071446
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						300,
						250
					]
				],
				'957-1666': [
					[
						300,
						250
					]
				],
				'416-956': [
					[
						300,
						250
					]
				],
				'0-415': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'F1fanatic/Unit9',
			path: '/15188745/F1fanatic//Unit9',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							320,
							50
						],
						[
							320,
							100
						]
					]
				}
			},
			isSticky: false,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'RaceFans_Unit9_300x250'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Unit10_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 368609,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 368610,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40545'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40546'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186886
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306061',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306062',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '540084472',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 13403722
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 13410731
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071450
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						300,
						250
					],
					[
						320,
						50
					]
				],
				'957-1666': [
					[
						300,
						250
					],
					[
						320,
						50
					]
				],
				'416-956': [
					[
						300,
						250
					],
					[
						320,
						50
					],
					[
						320,
						100
					]
				],
				'0-415': [
					[
						300,
						250
					],
					[
						320,
						50
					],
					[
						320,
						100
					]
				]
			}
		},
		{
			code: 'F1fanatic/Unit10',
			path: '/15188745/F1fanatic//Unit10',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							320,
							50
						],
						[
							320,
							100
						]
					]
				}
			},
			isSticky: false,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'RaceFans_Unit10_300x250'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Unit10_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 368611,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 368612,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40547'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40548'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186887
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306063',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306064',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '540084473',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 13403733
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 13410732
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071451
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071452
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						300,
						250
					],
					[
						320,
						50
					]
				],
				'957-1666': [
					[
						300,
						250
					],
					[
						320,
						50
					]
				],
				'416-956': [
					[
						300,
						250
					],
					[
						320,
						50
					],
					[
						320,
						100
					]
				],
				'0-415': [
					[
						300,
						250
					],
					[
						320,
						50
					],
					[
						320,
						100
					]
				]
			}
		},
		{
			code: 'F1fanatic/Unit14',
			path: '/15188745/F1fanatic//Unit14',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
						],
						[
							970,
							250
						],
						[
							320,
							50
						],
						[
							460,
							60
						],
						[
							970,
							90
						]
					]
				}
			},
			isSticky: false,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						tagid: '40556'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186894
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						siteId: '405097',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						siteId: '405099',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						siteId: '306071',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '540084477',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '2468649',
						adSlot: 'f1fanatic_unit14_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '2468650',
						adSlot: 'f1fanatic_unit14_970x250'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 16821293
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 16821298
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 13410737
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17071484
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17071485
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071483
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						728,
						90
					],
					[
						970,
						250
					],
					[
						970,
						90
					]
				],
				'957-1666': [
					[
						728,
						90
					],
					[
						970,
						250
					],
					[
						460,
						60
					],
					[
						970,
						90
					]
				],
				'416-956': [
					[
						320,
						50
					],
					[
						460,
						60
					]
				],
				'0-415': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'F1fanatic/Unit15',
			path: '/15188745/F1fanatic//Unit15',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'RaceFans_Unit15_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						dmxid: 413767,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						tagid: '80023'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666'
				// 	],
				// 	params: {
				// 		placementId: 22122200
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						siteId: '411462',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						unit: '540855952',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '2468651',
						adSlot: 'f1fanatic_unit15_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17048843
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17084955
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'957-1666': [
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
		{
			code: 'F1fanatic/Unit16',
			path: '/15188745/F1fanatic//Unit16',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'RaceFans_Unit16_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						dmxid: 413768,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						tagid: '80026'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666'
				// 	],
				// 	params: {
				// 		placementId: 22122201
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						siteId: '411463',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						unit: '540855954',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '2468652',
						adSlot: 'f1fanatic_unit16_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17048844
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						placementId: 17084955
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'957-1666': [
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
		{
			code: 'F1fanatic/Unit22',
			path: '/15188745/F1fanatic//Unit22',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							600
						],
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
					bidder: 'conversant',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'RaceFans_Unit22_300x600'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'RaceFans_Unit22_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 272488,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						dmxid: 272489,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '58247'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						tagid: '58248'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1667-9999',
				// 		'957-1666',
				// 		'416-956',
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 12048471
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '327251',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						siteId: '327250',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						unit: '540496507',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '2468653',
						adSlot: 'f1fanatic_unit22_300x600'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'1667-9999',
						'957-1666'
					],
					params: {
						publisherId: '2468648',
						adSlot: 'f1fanatic_unit22_300x250'
					}
				},
				{
					
					bidder: 'pubmatic',
					labelAny: [
						'416-956',
						'0-415'
					],
					params: {
						publisherId: '2468648',
						adSlot: 'f1fanatic_unit22_300x250'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 14476247
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 14476360
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071488
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'1667-9999',
						'957-1666',
						'416-956',
						'0-415'
					],
					params: {
						placementId: 17071489
					}
				}
			],
			breakpoints: {
				'1667-9999': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'957-1666': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'416-956': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'0-415': [
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
		{
			code: 'F1fanatic-Sticky',
			path: '/15188745/F1fanatic//Sticky',
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
			isSticky: true,
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'conversant',
					labelAny: [
						'0-415'
					],
					params: {
						site_id: '200211'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'0-415'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'RaceFans_Sticky_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-415'
					],
					params: {
						dmxid: 368619,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-415'
					],
					params: {
						tagid: '67129'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'0-415'
				// 	],
				// 	params: {
				// 		placementId: 1186895
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'0-415'
					],
					params: {
						siteId: '306072',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-415'
					],
					params: {
						unit: '540001453',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-415'
					],
					params: {
						placementId: 13216896
					}
				},
				{
					bidder: 'totaljobs',
					labelAny: [
						'0-415'
					],
					params: {
						placementId: 17071487
					}
				}
			],
			breakpoints: {
				'0-415': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'div-gpt-ad-1531839440830-0',
			path: '/15188745/F1fanatic//1x1-interscroller',
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
			bids: [],
			breakpoints: {}
		}
	],
	cmp: {
		isEnabled: true,
		config: {
			'UI Layout': 'popup',
			'Language': 'en',
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
			'Initial Screen Accept Button Text': 'I agree',
			'Initial Screen Reject Button Text': 'I do not accept',
			'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
			'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
			'Vendor Screen Accept All Button Text': 'Accept all',
			'Vendor Screen Reject All Button Text': 'Reject all',
			'Publisher Logo': 'https://static.amp.services/logos/racefans.png',
			'Publisher Name': 'RaceFans',
			'Initial Screen Title Text': 'We value your privacy',
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
			label: '1667-9999',
			minWidth: 1667,
			maxWidth: 9999,
			sizesSupported: [
				[
					728,
					90
				],
				[
					970,
					250
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
				],
				[
					320,
					50
				],
				[
					1,
					1
				]
			]
		},
		{
			label: '957-1666',
			minWidth: 957,
			maxWidth: 1666,
			sizesSupported: [
				[
					728,
					90
				],
				[
					970,
					250
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
				],
				[
					320,
					50
				]
			]
		},
		{
			label: '416-956',
			minWidth: 416,
			maxWidth: 956,
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
			label: '0-415',
			minWidth: 0,
			maxWidth: 415,
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
					300,
					600
				],
				[
					1,
					1
				]
			]
		}
	]
};
