var streamampConfig = {
    levelTargeting: false,
    gptSingleRequestEnabled: false,
    a9Enabled: true,
    apsPubID: '16268e26-dabe-4bf4-a28f-b8f4ee192ed3',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    adUnitsToRefresh: ["Sidebar", "Category", "Question", "TheAnswerBankSticky", "TheAnswerBank_MPU3", "TheAnswerBank_Leaderboard", "TheAnswerBank_Leaderboard2", "Skyscraper1new", "Skyscraper2new", "MPUnew", "TheAnswerBank_Billboard"],
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
    adUnits: [{
        code: 'TheAnswerBank_MPU3',
        path: '/15188745/TheAnswerBank_MPU3',
        mediaTypes: {
            banner: {
                sizes: [[300, 250], [300, 600], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                zoneId: 1382491,
                publisherSubId: 'AnswerBank_MPU3_300x250'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                dmxid: 149736,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: '11226092'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                tagid: '58255'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999'],
            params: {
                tagid: '58256'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                siteId: '306684',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999'],
            params: {
                siteId: '306685',
                size: [300, 600]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: 13475026
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999'],
            params: {
                placementId: 13475032
            }
        }],
        breakpoints: {
            '992-9999': [[300, 250], [300, 600]],
            '768-991': [[300, 250]],
            '0-767': [[300, 250]]
        }
    }, {
        code: 'TheAnswerBank_Leaderboard ',
        path: '/15188745/TheAnswerBank_Leaderboard',
        mediaTypes: {
            banner: {
                sizes: [[728, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['992-9999'],
            params: {
                zoneId: 1382489,
                publisherSubId: 'AnswerBank_Leaderboard_728x90'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999'],
            params: {
                dmxid: 498116,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999'],
            params: {
                placementId: '18649866'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999'],
            params: {
                tagid: '67140'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999'],
            params: {
                siteId: '306687',
                size: [728, 90]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999'],
            params: {
                placementId: 13475045
            }
        }],
        breakpoints: {
            '992-9999': [[728, 90]]
        }
    }, {
        code: 'TheAnswerBank_Leaderboard1',
        path: '/15188745/TheAnswerBank_Leaderboard1',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [300, 250], [320, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['768-991'],
            params: {
                zoneId: 1382489,
                publisherSubId: 'AnswerBank_Leaderboard1_728x90'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                dmxid: 498110,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: '18649847'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999'],
            params: {
                tagid: '58262'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['768-991'],
            params: {
                tagid: '58263'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58264'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58265'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999'],
            params: {
                siteId: '351246',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['768-991'],
            params: {
                siteId: '351247',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '351248',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '351249',
                size: [320, 50]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999'],
            params: {
                placementId: 15073476
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['768-991'],
            params: {
                placementId: 15073477
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15073478
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15073479
            }
        }],
        breakpoints: {
            '992-9999': [[970, 250]],
            '768-991': [[728, 90]],
            '0-767': [[300, 250], [320, 50]]
        }
    }, {
        code: 'TheAnswerBank_Leaderboard2',
        path: '/15188745/TheAnswerBank_Leaderboard2',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [300, 250], [320, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['768-991'],
            params: {
                zoneId: 1382489,
                publisherSubId: 'AnswerBank_Leaderboard2_728x90'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                dmxid: 498111,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: '18649849'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999'],
            params: {
                tagid: '58266'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['768-991'],
            params: {
                tagid: '58267'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58268'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58269'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999'],
            params: {
                siteId: '351250',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['768-991'],
            params: {
                siteId: '351251',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '351252',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '351253',
                size: [320, 50]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999'],
            params: {
                placementId: 15073480
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['768-991'],
            params: {
                placementId: 15073481
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15073482
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15073483
            }
        }],
        breakpoints: {
            '992-9999': [[970, 250]],
            '768-991': [[728, 90]],
            '0-767': [[300, 250], [320, 50]]
        }
    }, {
        code: 'Skyscraper1new',
        path: '/15188745/Skyscraper1new',
        mediaTypes: {
            banner: {
                sizes: [[160, 600]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['992-9999', '768-991'],
            params: {
                zoneId: 1382493,
                publisherSubId: 'AnswerBank_Skyscrapper1new_160x600'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991'],
            params: {
                dmxid: 498114,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991'],
            params: {
                placementId: '18649862'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999', '768-991'],
            params: {
                tagid: '67142'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999', '768-991'],
            params: {
                siteId: '351254',
                size: [160, 600]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999', '768-991'],
            params: {
                placementId: 15073484
            }
        }],
        breakpoints: {
            '992-9999': [[160, 600]],
            '768-991': [[160, 600]]
        }
    }, {
        code: 'Skyscraper2new',
        path: '/15188745/Skyscraper2new',
        mediaTypes: {
            banner: {
                sizes: [[160, 600]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['992-9999', '768-991'],
            params: {
                zoneId: 1382493,
                publisherSubId: 'AnswerBank_Skyscrapper2new_160x600'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991'],
            params: {
                dmxid: 498115,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991'],
            params: {
                placementId: '18649863'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999', '768-991'],
            params: {
                tagid: '67143'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999', '768-991'],
            params: {
                siteId: '351255',
                size: [160, 600]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999', '768-991'],
            params: {
                placementId: 15073485
            }
        }],
        breakpoints: {
            '992-9999': [[160, 600]],
            '768-991': [[160, 600]]
        }
    }, {
        code: 'MPUnew',
        path: '/15188745/MPUnew',
        mediaTypes: {
            banner: {
                sizes: [[300, 600], [300, 250]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['992-9999', '768-991'],
            params: {
                zoneId: 1382492,
                publisherSubId: 'AnswerBank_MPUnew_300x600'
            }
        }, {
            bidder: 'criteo',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                zoneId: 1382491,
                publisherSubId: 'AnswerBank_MPUnew_300x250'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                dmxid: 498112,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: '18649854'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999', '768-991'],
            params: {
                tagid: '67144'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                tagid: '67145'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999', '768-991'],
            params: {
                siteId: '351256',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                siteId: '351257',
                size: [300, 250]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999', '768-991'],
            params: {
                placementId: 15073728
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: 15073734
            }
        }],
        breakpoints: {
            '992-9999': [[300, 600], [300, 250]],
            '768-991': [[300, 600], [300, 250]],
            '0-767': [[300, 250]]
        }
    }, {
        code: 'TheAnswerBank_Billboard',
        path: '/15188745/TheAnswerBank_Billboard',
        mediaTypes: {
            banner: {
                sizes: [[728, 90], [300, 250], [320, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['992-9999', '768-991'],
            params: {
                zoneId: 1382489,
                publisherSubId: 'AnswerBank_Billboard_728x90'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                dmxid: 498113,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['992-9999', '768-991', '0-767'],
            params: {
                placementId: '18649861'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['992-9999', '768-991'],
            params: {
                tagid: '58274'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58275'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58276'
            }
        }, {
            bidder: 'ix',
            labelAny: ['992-9999', '768-991'],
            params: {
                siteId: '351258',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '351259',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '15073738',
                size: [320, 50]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['992-9999', '768-991'],
            params: {
                placementId: 15073736
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15073737
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15073738
            }
        }],
        breakpoints: {
            '992-9999': [[728, 90]],
            '768-991': [[728, 90]],
            '0-767': [[300, 250], [320, 50]]
        }
    }, {
        code: 'TheAnswerBankSticky',
        path: '/15188745/TheAnswerBankSticky',
        mediaTypes: {
            banner: {
                sizes: [[320, 50]]
            }
        },
        isSticky: true,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'criteo',
            labelAny: ['0-767'],
            params: {
                zoneId: 1382490,
                publisherSubId: 'AnswerBank_Sticky_320x50'
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0-767'],
            params: {
                dmxid: 149737,
                memberid: 100615
            }
        }, {
            bidder: 'districtm',
            labelAny: ['0-767'],
            params: {
                placementId: '11226093'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0-767'],
            params: {
                tagid: '58261'
            }
        }, {
            bidder: 'ix',
            labelAny: ['0-767'],
            params: {
                siteId: '306692',
                size: [320, 50]
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0-767'],
            params: {
                placementId: 15129608
            }
        }, ],
        breakpoints: {
            '0-767': [[320, 50]]
        }
    }],
    cmp: {
        isEnabled: false
    },
    breakpoints: [{
        label: '992-9999',
        minWidth: 992,
        maxWidth: 9999,
        sizesSupported: [[300, 250], [300, 600], [728, 90], [160, 600], [970, 250]]
    }, {
        label: '768-991',
        minWidth: 768,
        maxWidth: 991,
        sizesSupported: [[300, 250], [300, 600], [320, 50], [728, 90], [160, 600]]
    }, {
        label: '0-767',
        minWidth: 0,
        maxWidth: 767,
        sizesSupported: [[300, 250], [300, 600], [320, 50]]
    }]
};