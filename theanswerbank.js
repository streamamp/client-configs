var streamampConfig = {
	levelTargeting: false,
	gptSingleRequestEnabled: true,
	a9Enabled: true,
	apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	minRefreshTime: 90,
	maxRefreshTime: 120,
	adUnitsToRefresh: [
		"MPU",
		"Sidebar",
		"Category",
		"Question",
		"Banner",
		"TheAnswerBankSticky",
		"TheAnswerBank_MPU2",
		"TheAnswerBank_MPU3",
		"TheAnswerBank_Leaderboard",
		"TheAnswerBank_Mobile",
		"TheAnswerBank_Skyscraper1",
		"TheAnswerBank_Skyscraper2",
		"TheAnswerBank_Skin",
		"TheAnswerBank_Leaderboard2",
		"Skyscraper1new",
		"Skyscraper2new",
		"MPUnew",
		"TheAnswerBank_Billboard"
	],
	hasCollapsedEmptyDivs: false,
	publisher_id: 'StreamAMP/TheAnswerBank',
	token: 'xdIeQ4mrFzDhyjIVbWQ01CR3s6tWaWqeZjAgjypOZccxe9ZxSzbRbUFzObal0y0o',
	currency: {
	enabled: false,
		value: ''
},
	namespace: 'streamamp',
		globalKeyValues: [],
	keyValues: {},
	adUnits: [
		{
			code: 'MPU',
			path: '/15188745/TheAnswerBankMPU',
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
							100
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
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'AnswerBank_MPU_300x250'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: '40575'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						dmxid: 149736,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						dmxid: 149737,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						tagid: '40574'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						tagid: '40575'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 1201090
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 1201090
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						siteId: '196219',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						siteId: '306678',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						publisherId: '1242874',
						adSlot: 'AnswerBank_MPU_300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						publisherId: '1242876',
						adSlot: 'AnswerBank_MPU_300x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 11247629
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 11247653
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'768-991': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'0-767': [
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
			code: 'Banner',
			path: '/15188745/TheAnswerBank_Banner',
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
						'768-991',
						'0-767'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'AnswerBank_Banner_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 167290,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'768-991',
						'0-767'
					],
					params: {
						dmxid: 167292,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '67139'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'768-991',
						'0-767'
					],
					params: {
						tagid: '67138'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 1201094
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'768-991'
					],
					params: {
						placementId: 1201094
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '306681',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'768-991',
						'0-767'
					],
					params: {
						siteId: '306679',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '1242894',
						adSlot: 'AnswerBank_Banner_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'768-991',
						'0-767'
					],
					params: {
						publisherId: '1242892',
						adSlot: 'AnswerBank_Banner_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 11773863
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'768-991',
						'0-767'
					],
					params: {
						placementId: 11773859
					}
				}
			],
			breakpoints: {
				'768-991': [
					[
						320,
						50
					]
				],
				'992-9999': [
					[
						728,
						90
					]
				],
				'0-767': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_MPU2',
			path: '/15188745/TheAnswerBank_MPU2',
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
							100
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
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'AnswerBank_MPU2_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						dmxid: 223101,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 223102,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						tagid: '58253'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '58254'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 1201095
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 1201095
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						siteId: '306682',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '306683',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						publisherId: '1455246',
						adSlot: 'AnswerBank_MPU2_300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '1455247',
						adSlot: 'AnswerBank_MPU2_300x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 13475000
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13475014
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'768-991': [
					[
						300,
						250
					]
				],
				'0-767': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_MPU3',
			path: '/15188745/TheAnswerBank_MPU3',
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
							100
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
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'AnswerBank_MPU3_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						dmxid: 223103,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 223104,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						tagid: '58255'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '58256'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 1201103
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 1201103
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						siteId: '306684',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '306685',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						publisherId: '1455248',
						adSlot: 'AnswerBank_MPU3_300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '1455249',
						adSlot: 'AnswerBank_MPU3_300x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 13475026
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13475032
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'768-991': [
					[
						300,
						250
					]
				],
				'0-767': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_Leaderboard ',
			path: '/15188745/TheAnswerBank_Leaderboard',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
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
						'992-9999'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'AnswerBank_Leaderboard_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 223106,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '67140'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 1201104
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '306687',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '1455251',
						adSlot: 'AnswerBank_Leaderboard_728x90'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13475045
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						728,
						90
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_Skyscraper1',
			path: '/15188745/TheAnswerBank_Skyscraper1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							160,
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
						'992-9999'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'AnswerBank_Skyscrapper1_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 223108,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '58259'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 1201106
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '306689',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '1455254',
						adSlot: 'AnswerBank_Skyscraper1_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13475059
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_Skyscraper2',
			path: '/15188745/TheAnswerBank_Skyscraper2',
			mediaTypes: {
				banner: {
					sizes: [
						[
							160,
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
						'992-9999'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'AnswerBank_Skyscrapper2_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 223109,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '67141'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 1201107
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '306690',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '1455255',
						adSlot: 'AnswerBank_Skyscraper2_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13475064
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_Leaderboard1',
			path: ' /15188745/TheAnswerBank_Leaderboard1',
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'768-991'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'AnswerBank_Leaderboard1_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 333312,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'768-991'
					],
					params: {
						dmxid: 333310,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333313,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333315,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '58262'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'768-991'
					],
					params: {
						tagid: '58263'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58264'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58265'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13309491
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'768-991'
					],
					params: {
						placementId: 13309491
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 13309491
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '351246',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'768-991'
					],
					params: {
						siteId: '351247',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '351248',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '351249',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '2467766',
						adSlot: 'AnswerBank_Leaderboard1_970x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'768-991'
					],
					params: {
						publisherId: '2467760',
						adSlot: 'AnswerBank_Leaderboard1_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '2467753',
						adSlot: 'AnswerBank_Leaderboard1_300x250'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 15073476
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'768-991'
					],
					params: {
						placementId: 15073477
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 15073478
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 15073479
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						970,
						250
					]
				],
				'768-991': [
					[
						728,
						90
					]
				],
				'0-767': [
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
			code: 'TheAnswerBank_Leaderboard2',
			path: '/15188745/TheAnswerBank_Leaderboard2',
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'768-991'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'AnswerBank_Leaderboard2_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999'
					],
					params: {
						dmxid: 333316,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'768-991'
					],
					params: {
						dmxid: 333317,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333318,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333314,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999'
					],
					params: {
						tagid: '58266'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'768-991'
					],
					params: {
						tagid: '58267'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58268'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58269'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 13309492
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'768-991'
					],
					params: {
						placementId: 13309492
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 13309492
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999'
					],
					params: {
						siteId: '351250',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'768-991'
					],
					params: {
						siteId: '351251',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '351252',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '351253',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999'
					],
					params: {
						publisherId: '2467767',
						adSlot: 'AnswerBank_Leaderboard2_970x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'768-991'
					],
					params: {
						publisherId: '2467761',
						adSlot: 'AnswerBank_Leaderboard2_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '2467755',
						adSlot: 'AnswerBank_Leaderboard2_300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '2467756',
						adSlot: 'AnswerBank_Leaderboard2_320X50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999'
					],
					params: {
						placementId: 15073480
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'768-991'
					],
					params: {
						placementId: 15073481
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 15073482
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 15073483
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						970,
						250
					]
				],
				'768-991': [
					[
						728,
						90
					]
				],
				'0-767': [
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
			code: 'Skyscraper1new',
			path: '/15188745/Skyscraper1new',
			mediaTypes: {
				banner: {
					sizes: [
						[
							160,
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
						'992-9999',
						'768-991'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'AnswerBank_Skyscrapper1new_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						dmxid: 333319,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						tagid: '67142'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 13309493
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						siteId: '351254',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						publisherId: '2467762',
						adSlot: 'AnswerBank_Skyscraper1new_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 15073484
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						160,
						600
					]
				],
				'768-991': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'Skyscraper2new',
			path: '/15188745/Skyscraper2new',
			mediaTypes: {
				banner: {
					sizes: [
						[
							160,
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
						'992-9999',
						'768-991'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'AnswerBank_Skyscrapper2new_160x600'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						dmxid: 333320,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						tagid: '67143'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 13309494
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						siteId: '351255',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						publisherId: '2467763',
						adSlot: 'AnswerBank_Skyscraper2new_160x600'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 15073485
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						160,
						600
					]
				],
				'768-991': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'MPUnew',
			path: '/15188745/MPUnew',
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'AnswerBank_MPUnew_300x600'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'AnswerBank_MPUnew_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						dmxid: 333321,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						dmxid: 333322,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						tagid: '67144'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						tagid: '67145'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 13309495
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 13309495
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						siteId: '351256',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						siteId: '351257',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						publisherId: '2467764',
						adSlot: 'AnswerBank_MPUnew_300x600'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						publisherId: '2467757',
						adSlot: 'AnswerBank_MPUnew_300x250'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 15073728
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991',
						'0-767'
					],
					params: {
						placementId: 15073734
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'768-991': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'0-767': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'TheAnswerBank_Billboard',
			path: '/15188745/TheAnswerBank_Billboard',
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'AnswerBank_Billboard_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						dmxid: 333323,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333324,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333325,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						tagid: '58274'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58275'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58276'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 13309499
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 13309499
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						siteId: '351258',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '351259',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '15073738',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						publisherId: '2467765',
						adSlot: 'AnswerBank_Billboard_728x90'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '2467758',
						adSlot: 'AnswerBank_Billboard_300x250'
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '2467759',
						adSlot: 'AnswerBank_Billboard_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'992-9999',
						'768-991'
					],
					params: {
						placementId: 15073736
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 15073737
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 15073738
					}
				}
			],
			breakpoints: {
				'992-9999': [
					[
						728,
						90
					]
				],
				'768-991': [
					[
						728,
						90
					]
				],
				'0-767': [
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
			code: 'TheAnswerBank_Skin',
			path: '/15188745/TheAnswerBank_Skin',
			mediaTypes: {
				banner: {
					sizes: []
				}
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: []
		},
		{
			code: 'TheAnswerBank_Mobile',
			path: '/15188745/TheAnswerBank_Mobile',
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
						'0-767'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'AnswerBank_Mobile_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 223107,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58258'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 1201105
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '306688',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '1455253',
						adSlot: 'AnswerBank_Mobile_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
					placementId: 13475055
					}
				},
			],
			breakpoints: {
				'0-767': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'TheAnswerBankSticky',
			path: '/15188745/TheAnswerBankSticky',
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0-767'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'AnswerBank_Sticky_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-767'
					],
					params: {
						dmxid: 333311,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-767'
					],
					params: {
						tagid: '58261'
					}
				},
				{
					bidder: 'improvedigital',
					labelAny: [
						'0-767'
					],
					params: {
						placementId: 1201108
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-767'
					],
					params: {
						siteId: '306692',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'pubmatic',
					labelAny: [
						'0-767'
					],
					params: {
						publisherId: '2467750',
						adSlot: 'AnswerBank_Sticky_320x50'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-767'
					],
					params: {
					placementId: 15129608
					}
				},
			],
			breakpoints: {
				'0-767': [
					[
						320,
						50
					]
				]
			}
		}
	],
		cmp: {
	isEnabled: false
},
	breakpoints: [
		{
			label: '992-9999',
			minWidth: 992,
			maxWidth: 9999,
			sizesSupported: [
				[
					300,
					250
				],
				[
					300,
					600
				],
				[
					728,
					90
				],
				[
					160,
					600
				],
				[
					970,
					250
				]
			]
		},
		{
			label: '768-991',
			minWidth: 768,
			maxWidth: 991,
			sizesSupported: [
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
					728,
					90
				],
				[
					160,
					600
				]
			]
		},
		{
			label: '0-767',
			minWidth: 0,
			maxWidth: 767,
			sizesSupported: [
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
				]
			]
		}
	]
}
