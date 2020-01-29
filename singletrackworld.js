var streamampConfig = {
	levelTargeting: false,
	gptSingleRequestEnabled: false,
	a9Enabled: true,
	apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	minRefreshTime: 90,
	maxRefreshTime: 120,
	hasCollapsedEmptyDivs: false,
	publisher_id: 'singletrackworld.com/SingleTrackWorld',
	token: 'ReMBrEFFCe35owkrtsuU4GWrDp4UaFoX365xJqk32derLV8XM1tdjbK4PB2GHEcj',
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
			path: '/1022864/SingleTrackWorld/Unit1',
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
							100
						],
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
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit1_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281956,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 281965,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281957,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281995,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '67297'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '67298'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74350'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '67299'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204109
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308028',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308030',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308031',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308032',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540173811',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173811',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540173811',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476266',
				// 		adSlot: 'stw_billboard2_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476268',
				// 		adSlot: 'stw_billboard1_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528317',
				// 		adSlot: 'stw_billboard1_320x50@320x50'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476269',
				// 		adSlot: 'stw_billboard1_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13636111
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636108
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768923
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13636109
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit2',
			path: '/1022864/SingleTrackWorld/Unit2',
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
							100
						],
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
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit2_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281958,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 281990,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281959,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281996,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '67300'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '67301'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74351'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '67302'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204110
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308033',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308035',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308036',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308036',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540173812',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173812',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540173812',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476270',
				// 		adSlot: 'stw_billboard2_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476273',
				// 		adSlot: 'stw_billboard2_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476275',
				// 		adSlot: 'stw_billboard2_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528319',
				// 		adSlot: 'stw_billboard2_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13636111
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636113
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768924
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13636114
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit3',
			path: '/1022864/SingleTrackWorld/Unit3',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
						],
						[
							320,
							100
						],
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
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit3_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 281960,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281961,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281962,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '41199'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74352'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '41200'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204111
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308038',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308039',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308040',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173813',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540173813',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476276',
				// 		adSlot: 'stw_leaderboard1_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528320',
				// 		adSlot: 'stw_leaderboard1_320x50@320x50'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476277',
				// 		adSlot: 'stw_leaderboard1_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636115
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768925
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13636117
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit4',
			path: '/1022864/SingleTrackWorld/Unit4',
			mediaTypes: {
				banner: {
					sizes: [
						[
							728,
							90
						],
						[
							320,
							100
						],
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
			},
			isSticky: false,
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit4_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 281963,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281964,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281991,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '41201'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74353'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '41202'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204112
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308041',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308042',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308043',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173814',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540173814',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		pmzoneid: '1476278',
				// 		adSlot: 'stw_leaderboard2_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		pmzoneid: '1528321',
				// 		adSlot: 'stw_leaderboard2_320x50@320x50'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		pmzoneid: '2467834',
				// 		adSlot: 'stw_leaderboard2_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636118
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768926
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13636119
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit5',
			path: '/1022864/SingleTrackWorld/Unit5',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'SingleTrackWorld_Unit5_300x600'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit5_300x250'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '41203'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41204'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74354'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204113
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308044',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308046',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308045',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173815',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						unit: '540173815',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540173815',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476468',
				// 		adSlot: 'stw_halfpage1_300x600@300x600'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476281',
				// 		adSlot: 'stw_halfpage1_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528324',
				// 		adSlot: 'stw_halfpage1_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636120
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13636121
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768927
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'701-970': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'0-700': [
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
			code: 'Unit6',
			path: '/1022864/SingleTrackWorld/Unit6',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'SingleTrackWorld_Unit6_300x600'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit6_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 281966,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281968,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '41205'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41206'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204114
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308047',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308049',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308045',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173828',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						unit: '540173828',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540173815',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476284',
				// 		adSlot: 'stw_halfpage2_300x600@300x600'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476285',
				// 		adSlot: 'stw_halfpage2_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636122
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13636123
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768927
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'701-970': [
					[
						300,
						600
					],
					[
						300,
						250
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit7',
			path: '/1022864/SingleTrackWorld/Unit7',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit7_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281969,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 281970,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281971,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41207'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '41209'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74356'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204116
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308050',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '308052',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308053',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540173818',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540173818',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '1382489',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476287',
				// 		adSlot: 'stw_billboard3_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1476290',
				// 		adSlot: 'stw_billboard3_728x90@728x90'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13636124
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 13636126
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13636128
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit8',
			path: '/1022864/SingleTrackWorld/Unit8',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit8_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281972,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281997,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281973,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41210'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41211'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74357'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204117
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308054',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308056',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308055',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199946',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199946',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540199946',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506533',
				// 		adSlot: 'stw_leaderboard3_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506613',
				// 		adSlot: 'stw_leaderboard3_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528326',
				// 		adSlot: 'stw_leaderboard3_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689947
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689948
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768929
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit9',
			path: '/1022864/SingleTrackWorld/Unit9',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit9_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281988,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281976,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281975,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41220'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41213'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74358'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204118
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308073',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308059',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308058',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199961',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199945',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540199945',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506618',
				// 		adSlot: 'stw_leaderboard4_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528328',
				// 		adSlot: 'stw_leaderboard4_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689961
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689950
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768930
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit10',
			path: '/1022864/SingleTrackWorld/Unit10',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit10_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281977,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281979,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281978,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41214'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41215'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74359'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204119
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308062',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308061',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199943',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199943',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540199943',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506620',
				// 		adSlot: 'stw_leaderboard5_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689951
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689952
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768931
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
			code: 'Unit11',
			path: '/1022864/SingleTrackWorld/Unit11',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit11_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281980,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281998,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281981,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '74360'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '74362'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74361'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204120
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308063',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308065',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308064',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199956',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199956',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540199956',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506621',
				// 		adSlot: 'stw_leaderboard6_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506623',
				// 		adSlot: 'stw_leaderboard6_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528330',
				// 		adSlot: 'stw_leaderboard6_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689953
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689955
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768932
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
			code: 'Unit12',
			path: '/1022864/SingleTrackWorld/Unit12',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit12_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281982,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281984,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281983,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41216'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41217'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74363'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204121
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308066',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308068',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308067',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199958',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199958',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540199958',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506624',
				// 		adSlot: 'stw_leaderboard7_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506625',
				// 		adSlot: 'stw_leaderboard7_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528331',
				// 		adSlot: 'stw_leaderboard6_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689957
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689958
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768933
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
			code: 'Unit13',
			path: '/1022864/SingleTrackWorld/Unit13',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit13_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281985,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281987,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281986,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41218'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '41219'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74364'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204122
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308069',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308072',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308071',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199960',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199960',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540199960',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506627',
				// 		adSlot: 'stw_leaderboard8_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506628',
				// 		adSlot: 'stw_leaderboard8_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528332',
				// 		adSlot: 'stw_leaderboard8_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689959
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689960
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768934
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
		},
		{
			code: 'Unit14',
			path: '/1022864/SingleTrackWorld/Unit14',
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
						'701-970',
						'0-700'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'SingleTrackWorld_Unit14_300x250'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281988,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						dmxid: 281999,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281989,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '41220'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						tagid: '67303'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '74365'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1204123
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '308073',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						siteId: '308075',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '308074',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540199961',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						unit: '540199961',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '1382491',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506629',
				// 		adSlot: 'stw_leaderboard9_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1506634',
				// 		adSlot: 'stw_leaderboard9_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1528335',
				// 		adSlot: 'stw_leaderboard9_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 13689961
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'701-970',
						'0-700'
					],
					params: {
						placementId: 13689962
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 13768936
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						300,
						250
					]
				],
				'0-700': [
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
			code: 'Unit15',
			path: '/1022864/SingleTrackWorld/Unit15',
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
						'971-9999',
						'0-700'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'SingleTrackWorld_Unit15_160x600'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						tagid: '58433'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222243
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						siteId: '317543',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						unit: '540448949',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702500',
				// 		adSlot: 'stw_Unit15_160x600@160x600'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						placementId: 14363710
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						160,
						600
					]
				],
				'0-700': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'Unit16',
			path: '/1022864/SingleTrackWorld/Unit16',
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
						'971-9999',
						'0-700'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'SingleTrackWorld_Unit16_160x600'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						tagid: '58435'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222244
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						siteId: '317546',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						unit: '540448951',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702502',
				// 		adSlot: 'stw_Unit16_160x600@160x600'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'0-700'
					],
					params: {
						placementId: 14363720
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						160,
						600
					]
				],
				'0-700': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'Unit17',
			path: '/1022864/SingleTrackWorld/Unit17',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit17_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281992,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 282000,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 281993,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '58437'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '58438'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '58439'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222245
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '317551',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '317554',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '317557',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540448952',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540448952',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540448952',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702505',
				// 		adSlot: 'stw_Unit17_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702506',
				// 		adSlot: 'stw_Unit17_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702507',
				// 		adSlot: 'stw_Unit17_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 14363730
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 14363733
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 14363737
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit18',
			path: '/1022864/SingleTrackWorld/Unit18',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit18_728x90'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999'
					],
					params: {
						dmxid: 281994,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 282002,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 282862,
						memberid: 100615
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '58441'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '58442'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '58443'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222256
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '317567',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '317569',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '317570',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540448953',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540448953',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540448953',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702534',
				// 		adSlot: 'stw_Unit18_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702555',
				// 		adSlot: 'stw_Unit18_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702566',
				// 		adSlot: 'stw_Unit18_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 14363749
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 14363781
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 14363783
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit19',
			path: '/1022864/SingleTrackWorld/Unit19',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit19_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '58445'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '58446'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '58447'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222260
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '317575',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '317576',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '317572',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540448954',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540448954',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540448954',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702568',
				// 		adSlot: 'stw_Unit19_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702569',
				// 		adSlot: 'stw_Unit19_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702570',
				// 		adSlot: 'stw_Unit19_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 14363789
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 14363793
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 14363794
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit20',
			path: '/1022864/SingleTrackWorld/Unit20',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit20_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '58449'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '58450'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '58451'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222262
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '317578',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '317577',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '317579',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540448955',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540448955',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540448955',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702572',
				// 		adSlot: 'stw_Unit20_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702573',
				// 		adSlot: 'stw_Unit20_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702574',
				// 		adSlot: 'stw_Unit20_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 14363801
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 14363803
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 14363806
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit21',
			path: '/1022864/SingleTrackWorld/Unit21',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Unit21_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999'
					],
					params: {
						tagid: '58453'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						tagid: '58454'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0-700'
					],
					params: {
						tagid: '58455'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 1222274
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999'
					],
					params: {
						siteId: '317584',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '317583',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '317582',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999'
					],
					params: {
						unit: '540448956',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540448956',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540448956',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702576',
				// 		adSlot: 'stw_Unit21_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702577',
				// 		adSlot: 'stw_Unit21_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '1702578',
				// 		adSlot: 'stw_Unit21_300x250@300x250'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999'
					],
					params: {
						placementId: 14363811
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 14363815
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 14363819
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						970,
						250
					],
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Sticky',
			path: '/1022864/SingleTrackWorld/Sticky',
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
						'971-9999',
						'701-970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'SingleTrackWorld_Sticky_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'0-700'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'SingleTrackWorld_Sticky_320x50'
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						dmxid: 282003,
						memberid: 100615
					}
				},
				{
					bidder: 'districtmDMX',
					labelAny: [
						'0-700'
					],
					params: {
						dmxid: 282003,
						memberid: 100615
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970',
				// 		'0-700'
				// 	],
				// 	params: {
				// 		placementId: 22157834
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						siteId: '422835',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0-700'
					],
					params: {
						siteId: '422834',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						unit: '540888407',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'0-700'
					],
					params: {
						unit: '540888407',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'971-9999',
				// 		'701-970'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2467830',
				// 		adSlot: 'stw_Sticky_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'0-700'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2467829',
				// 		adSlot: 'stw_Sticky_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'971-9999',
						'701-970'
					],
					params: {
						placementId: 17466042
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0-700'
					],
					params: {
						placementId: 17466041
					}
				}
			],
			breakpoints: {
				'971-9999': [
					[
						728,
						90
					]
				],
				'701-970': [
					[
						728,
						90
					]
				],
				'0-700': [
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
			'Publisher Logo': 'https://static.amp.services/logos/singletrack.png',
			'Publisher Name': 'Single Track World'
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
			label: '971-9999',
			minWidth: 971,
			maxWidth: 9999,
			sizesSupported: [
				[
					728,
					90
				],
				[
					300,
					600
				],
				[
					300,
					250
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
			label: '701-970',
			minWidth: 701,
			maxWidth: 970,
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
				]
			]
		},
		{
			label: '0-700',
			minWidth: 0,
			maxWidth: 700,
			sizesSupported: [
				[
					300,
					250
				],
				[
					320,
					50
				],
				[
					160,
					600
				]
			]
		}
	]
};
