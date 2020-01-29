var streamampConfig = {
	levelTargeting: true,
	gptSingleRequestEnabled: true,
	a9Enabled: true,
	apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
	bidTimeout: 1.2,
	pbjsPriceGranularity: 'high',
	hasRefreshBids: true,
	minRefreshTime: 90,
	maxRefreshTime: 120,
	hasCollapsedEmptyDivs: false,
	publisher_id: 'Attitude/Attitude',
	token: 'TmfT9D3uv8ivIDYrsdncQo4c3ZY0z8YPS1Akh4M7WRwEERj29LnhDf7IU1OBgvRQ',
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
			path: '/101670530/Attitude/Unit1',
			mediaTypes: {
				banner: {
					sizes: [
						[
							970,
							250
						],
						[
							970,
							90
						],
						[
							468,
							60
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Attitude_Unit1_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'468-728'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Attitude_Unit1_320x50'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999'
				// 	],
				// 	params: {
				// 		placementId: 13296930
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		placementId: 13296930
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		placementId: 13296930
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999'
					],
					params: {
						siteId: '340024',
						size: [
							970,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						siteId: '340164',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						siteId: '340165',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						unit: '540595415',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530421',
				// 		adSlot: 'Attitude_Unit1_970x250@970x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530423',
				// 		adSlot: 'Attitude_Unit1_320x50@320x50'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530422',
				// 		adSlot: 'Attitude_Unit1_728x90@728x90'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999'
					],
					params: {
						placementId: 14876314
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						placementId: 14876315
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						placementId: 14876316
					}
				}
			],
			breakpoints: {
				'1061-9999': [
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
					]
				],
				'729-1060': [
					[
						728,
						90
					],
					[
						468,
						60
					]
				],
				'468-728': [
					[
						320,
						50
					]
				],
				'0-467': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Unit2',
			path: '/101670530/Attitude/Unit2',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'Attitude_Unit2_300x250'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'Attitude_Unit2_300x600'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060',
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		placementId: 13297136
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		placementId: 13297136
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						siteId: '340166',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						siteId: '340167',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						unit: '540595416',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060',
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530424',
				// 		adSlot: 'Attitude_Unit2_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530425',
				// 		adSlot: 'Attitude_Unit2_300x600@300x600'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						placementId: 14876318
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						placementId: 14876319
					}
				}
			],
			breakpoints: {
				'1061-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'729-1060': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'468-728': [
					[
						300,
						250
					]
				],
				'0-467': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit3',
			path: '/101670530/Attitude/Unit3',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'Attitude_Unit3_300x250'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'Attitude_Unit3_300x600'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		placementId: 13297138
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		placementId: 13297138
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						siteId: '340169',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						siteId: '340168',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						unit: '540595417',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060',
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530426',
				// 		adSlot: 'Attitude_Unit3_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530427',
				// 		adSlot: 'Attitude_Unit3_300x600@300x600'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						placementId: 14876321
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						placementId: 14876322
					}
				}
			],
			breakpoints: {
				'1061-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'729-1060': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'468-728': [
					[
						300,
						250
					]
				],
				'0-467': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit4',
			path: '/101670530/Attitude/Unit4',
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
			safeFrame: true,
			outOfPage: false,
			bids: [
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						zoneId: 1382491,
						publisherSubId: 'Attitude_Unit4_300x250'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						zoneId: 1382492,
						publisherSubId: 'Attitude_Unit4_300x600'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060',
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		placementId: 13297139
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		placementId: 13297139
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						siteId: '340170',
						size: [
							300,
							250
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						siteId: '340171',
						size: [
							300,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						unit: '540595418',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060',
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530428',
				// 		adSlot: 'Attitude_Unit4_300x250@300x250'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530429',
				// 		adSlot: 'Attitude_Unit4_300x600@300x600'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						placementId: 14876324
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						placementId: 14876326
					}
				}
			],
			breakpoints: {
				'1061-9999': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'729-1060': [
					[
						300,
						250
					],
					[
						300,
						600
					]
				],
				'468-728': [
					[
						300,
						250
					]
				],
				'0-467': [
					[
						300,
						250
					]
				]
			}
		},
		{
			code: 'Unit5',
			path: '/101670530/Attitude/Unit5',
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
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						zoneId: 1382493,
						publisherSubId: 'Attitude_Unit5_160x600'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		placementId: 13297140
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						siteId: '340172',
						size: [
							160,
							600
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						unit: '540595419',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530430',
				// 		adSlot: 'Attitude_Unit5_160x600@160x600'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						placementId: 14876327
					}
				}
			],
			breakpoints: {
				'1061-9999': [
					[
						160,
						600
					],
					[
						120,
						600
					]
				],
				'729-1060': [
					[
						160,
						600
					]
				]
			}
		},
		{
			code: 'Unit6',
			path: '/101670530/Attitude/Unit6',
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
					bidder: 'criteo',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						zoneId: 1382489,
						publisherSubId: 'Attitude_Unit6_728x90'
					}
				},
				{
					bidder: 'criteo',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Attitude_Unit6_320x50'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		placementId: 13297144
				// 	}
				// },
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		placementId: 13297144
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						siteId: '340173',
						size: [
							728,
							90
						]
					}
				},
				{
					bidder: 'ix',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						siteId: '340174',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'1061-9999',
						'729-1060',
						'468-728',
						'0-467'
					],
					params: {
						unit: '540595420',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'1061-9999',
				// 		'729-1060'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530431',
				// 		adSlot: 'Attitude_Unit6_728x90@728x90'
				// 	}
				// },
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530432',
				// 		adSlot: 'Attitude_Unit6_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'1061-9999',
						'729-1060'
					],
					params: {
						placementId: 14876328
					}
				},
				{
					bidder: 'streamamp',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						placementId: 14876330
					}
				}
			],
			breakpoints: {
				'1061-9999': [
					[
						728,
						90
					]
				],
				'729-1060': [
					[
						728,
						90
					]
				],
				'468-728': [
					[
						320,
						50
					]
				],
				'0-467': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Sticky',
			path: '/101670530/Attitude/Sticky',
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
						'468-728',
						'0-467'
					],
					params: {
						zoneId: 1382490,
						publisherSubId: 'Attitude_Sticky_320x50'
					}
				},
				// {
				// 	bidder: 'improvedigital',
				// 	labelAny: [
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		placementId: 13297146
				// 	}
				// },
				{
					bidder: 'ix',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						siteId: '340175',
						size: [
							320,
							50
						]
					}
				},
				{
					bidder: 'openx',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						unit: '540595421',
						delDomain: 'streamamp-d.openx.net'
					}
				},
				// {
				// 	bidder: 'pubmatic',
				// 	labelAny: [
				// 		'468-728',
				// 		'0-467'
				// 	],
				// 	params: {
				// 		publisherId: '127864',
				// 		pmzoneid: '2530433',
				// 		adSlot: 'Attitude_Sticky_320x50@320x50'
				// 	}
				// },
				{
					bidder: 'streamamp',
					labelAny: [
						'468-728',
						'0-467'
					],
					params: {
						placementId: 14876331
					}
				}
			],
			breakpoints: {
				'468-728': [
					[
						320,
						50
					]
				],
				'0-467': [
					[
						320,
						50
					]
				]
			}
		},
		{
			code: 'Outstream',
			path: '/101670530/Attitude/Outstream',
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
			'Publisher Name': 'Attitude'
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
			label: '1061-9999',
			minWidth: 1061,
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
			label: '729-1060',
			minWidth: 729,
			maxWidth: 1060,
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
				]
			]
		},
		{
			label: '468-728',
			minWidth: 468,
			maxWidth: 728,
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
		},
		{
			label: '0-467',
			minWidth: 0,
			maxWidth: 467,
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
