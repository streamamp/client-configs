var streamampConfig = {
	gptSingleRequestEnabled: true,
	levelTargeting: false,
	a9Enabled: true,
	apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	minRefreshTime: 90,
	maxRefreshTime: 120,
	hasCollapsedEmptyDivs: true,
	publisher_id: 'PaulSorene/Flashbak',
	token: 'TrJrV1p3SaNSv9kmfGg1MDqHgUQ5E9oXUrzK7MVhDes2ereStNdNNWxH5LEFuFPQ',
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
			path: '/109048388/Flashbak/Unit1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							320,
							50
						],
						[
							728,
							90
						],
						[
							468,
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit1_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit1_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93436'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93437'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347916',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347916',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540630608',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389540
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389547
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit2',
			path: '/109048388/Flashbak/Unit2',
			mediaTypes: {
				banner: {
					sizes: [
						[
							320,
							50
						],
						[
							728,
							90
						],
						[
							468,
							60
						],
						[
							970,
							90
						],
						[
							970,
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
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit2_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit2_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382488,
						publisherSubId: 'Flashbak_Unit2_970x250'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93438'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93439'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93440'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347915',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347915',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347915',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632088',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389549
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389554
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389557
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					],
					[
						970,
						250
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit3',
			path: '/109048388/Flashbak/Unit3',
			mediaTypes: {
				banner: {
					sizes: [
						[
							320,
							50
						],
						[
							728,
							90
						],
						[
							468,
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit3_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit3_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93441'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93442'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347223',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347223',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632091',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389560
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389561
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit4',
			path: '/109048388/Flashbak/Unit4',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							728,
							90
						],
						[
							468,
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit4_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit4_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93444'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93445'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347917',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347917',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632092',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389564
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389567
					}
				},
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit5',
			path: '/109048388/Flashbak/Unit5',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							728,
							90
						],
						[
							468,
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit5_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit5_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93447'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93448'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347918',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347918',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632092',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389568
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389570
					}
				},
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit6',
			path: '/109048388/Flashbak/Unit6',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							728,
							90
						],
						[
							468,
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit6_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit6_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93450'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93451'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347929',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347929',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632094',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389573
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18390008
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit7',
			path: '/109048388/Flashbak/Unit7',
			mediaTypes: {
				banner: {
					sizes: [
						[
							300,
							250
						],
						[
							728,
							90
						],
						[
							468,
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
			safeFrame: false,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Unit7_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Unit7_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93453'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						tagid: '93454'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '347927',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970',
					],
					params: {
						siteId: '347927',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632095',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389648
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389963
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					],
					[
						970,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'0 - 728': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit10',
			path: '/109048388/Flashbak/Unit10',
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
						'971 - 9999'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'Flashbak_Unit10_300x600'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'Flashbak_Unit10_300x250'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999'
					],
					params: {
						tagid: '93460'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999'
					],
					params: {
						tagid: '93461'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999'
					],
					params: {
						siteId: '457904',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999'
					],
					params: {
						siteId: '457904',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999'
					],
					params: {
						unit: '540632100',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999'
					],
					params: {
						placementId: 18389981
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999'
					],
					params: {
						placementId: 18389984
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
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
			code: 'Sticky',
			path: '/109048388/Flashbak/Sticky',
			mediaTypes: {
				banner: {
					sizes: [
						[
							320,
							50
						],
						[
							728,
							90
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
						'0 - 728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Flashbak_Sticky_320x50'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Flashbak_Sticky_728x90'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'0 - 728'
					],
					params: {
						tagid: '93462'
					}
				},
				{
					bidder: 'emx_digital',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						tagid: '93463'
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'0 - 728'
					],
					params: {
						siteId: '457905',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						siteId: '457905',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'971 - 9999',
						'729 - 970',
						'0 - 728'
					],
					params: {
						unit: '540632103',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'0 - 728'
					],
					params: {
						placementId: 18389986
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'971 - 9999',
						'729 - 970'
					],
					params: {
						placementId: 18389988
					}
				}
			],
			breakpoints: {
				'971 - 9999': [
					[
						728,
						90
					]
				],
				'729 - 970': [
					[
						728,
						90
					]
				],
				'0 - 728': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Skin',
			path: '/109048388/Flashbak/Skin',
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
			breakpoints: {
				'971 - 9999': [
					[
						1,
						1
					]
				],
				'729 - 970': [
					[
						1,
						1
					]
				],
				'0 - 728': [
					[
						1,
						1
					]
				]
			}
		},
	],
	cmp: {
		isEnabled: false,
		config: {
			'UI Layout': 'popup',
			'Language': 'en',
			'No Option': false,
			'Non-Consent Display Frequency': 7,
			'Initial Screen Body Text Option': 1,
			'Vendor Screen Accept All Button Text': 'Accept all',
			'Vendor Screen Reject All Button Text': 'Reject all',
			'Publisher Name': 'Flashbak',
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
			label: '971 - 9999',
			minWidth: 971,
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
					970,
					250
				],
				[
					970,
					90
				],
				[
					728,
					90
				],
				[
					1,
					1
				]
			]
		},
		{
			label: '729 - 970',
			minWidth: 729,
			maxWidth: 970,
			sizesSupported: [
				[
					728,
					90
				],
				[
					468,
					60
				],
				[
					1,
					1
				]
			]
		},
		{
			label: '0 - 728',
			minWidth: 0,
			maxWidth: 728,
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
					1,
					1
				]
			]
		}
	]
};