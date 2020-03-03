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
    hasCollapsedEmptyDivs: true,
    publisher_id: 'FinancialExpress/trustnet',
    token: 'WC7NUoj63OPzlcDxBxgzOyelPd9drZORlK2b0VDUdz56lW6RQVfLUuPu0IbDwxSK',
    currency: {
        enabled: true,
        value: 'AUD'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    preventInit: true,
    beforeInit: function() {
        // if (window.streamampClientConfig && window.streamampClientConfig.targets) {
        //     var investorType = window.streamampClientConfig.targets.InvestorType || '';
        //     if (investorType.toLowerCase() != 'investor') {
        //         window.streamampConfig.adUnits.forEach(function(adUnit) {
        //             adUnit.bids = [];
        //         });
        //     }
        // }
    },
    adUnits: [{
        code: 'Bottom1',
        path: '/21769104128/Trustnet/Bottom1',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [600, 200], [728, 90], [320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443670,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                dmxid: 443670,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443670,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67093'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                tagid: '67082'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40493'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67083'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201883
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '306992',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                siteId: '306991',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '306990',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '306989',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '539863752',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249592',
                adSlot: 'tn_bottom1_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249593',
                adSlot: 'tn_bottom1_728x90'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517788',
                adSlot: 'tn_bottom1_320x50'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1249594',
                adSlot: 'tn_bottom1_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759820
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 12759825
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13721929
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 12759827
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078279
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 17078287
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078290
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078292
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [600, 200]],
            '980 - 1279': [[970, 250], [728, 90], [600, 200]],
            '768 - 979': [[728, 90], [600, 200]],
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }, {
        code: 'Position1',
        path: '/21769104128/Trustnet/Position1',
        mediaTypes: {
            banner: {
                sizes: [[300, 250], [320, 50], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443672,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443672,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '40484'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67086'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201884
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '306993',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '306994',
                size: [320, 50]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '539863753',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1249595',
                adSlot: 'tn_position1_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '2473251',
                adSlot: 'tn_position1_320x50'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 11321134
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 16237729
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078296
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078302
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 250]],
            '980 - 1279': [[300, 250]],
            '768 - 979': [[300, 250]],
            '0 - 767': [[300, 250], [320, 50], [320, 100]]
        }
    }, {
        code: 'Position2',
        path: '/21769104128/Trustnet/Position2',
        mediaTypes: {
            banner: {
                sizes: [[300, 250], [300, 600]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443673,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443673,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '67087'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67088'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201885
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '306995',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '306996',
                size: [300, 600]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '539863754',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1249596',
                adSlot: 'tn_position2_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249597',
                adSlot: 'tn_position2_300x600'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 12759837
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 12759853
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078303
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078308
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 250], [300, 600]],
            '980 - 1279': [[300, 250], [300, 600]],
            '768 - 979': [[300, 250], [300, 600]],
            '0 - 767': [[300, 250]]
        }
    }, {
        code: 'Top',
        path: '/21769104128/Trustnet/Top',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [970, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443679,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443679,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '40486'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '40488'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979'
        //     ],
        //     params: {
        //         placementId: 1201888
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '306998',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307000',
                size: [728, 90]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                unit: '539863756',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249599',
                adSlot: 'tn_top_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249601',
                adSlot: 'tn_top_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 11321130
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 11321133
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078312
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078317
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [970, 90]],
            '980 - 1279': [[970, 250], [728, 90], [970, 90]],
            '768 - 979': [[728, 90]]
        }
    }, {
        code: 'Right',
        path: '/21769104128/Trustnet/Right',
        mediaTypes: {
            banner: {
                sizes: [[120, 600]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[120, 600]]
        }
    }, {
        code: 'TopLeft',
        path: '/21769104128/Trustnet/TopLeft',
        mediaTypes: {
            banner: {
                sizes: [[300, 600], [300, 250], [300, 1050]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999'],
            params: {
                dmxid: 443682,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '40490'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '40489'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999'
        //     ],
        //     params: {
        //         placementId: 1201889
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307003',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307002',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999'],
            params: {
                unit: '539863757',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1249602',
                adSlot: 'tn_topleft_300x600'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1249604',
                adSlot: 'tn_topleft_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 11321139
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 11321140
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078321
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078330
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 600], [300, 250], [300, 1050]]
        }
    }, {
        code: 'TopRight',
        path: '/21769104128/Trustnet/TopRight',
        mediaTypes: {
            banner: {
                sizes: [[300, 600], [300, 250], [300, 1050]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443680,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '40491'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '40492'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979'
        //     ],
        //     params: {
        //         placementId: 1201890
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307003',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307004',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                unit: '539863758',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249605',
                adSlot: 'tn_topright_300x600'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249603',
                adSlot: 'tn_topright_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 11321137
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 11321138
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078334
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078341
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 600], [300, 250], [300, 1050]],
            '980 - 1279': [[300, 600], [300, 250]],
            '768 - 979': [[300, 600], [300, 250]]
        }
    }, {
        code: 'Top1',
        path: '/21769104128/Trustnet/Top1',
        mediaTypes: {
            banner: {
                sizes: [[185, 80]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[185, 80]],
            '980 - 1279': [[185, 80]],
            '768 - 979': [[185, 80]]
        }
    }, {
        code: 'Top2',
        path: '/21769104128/Trustnet/Top2',
        mediaTypes: {
            banner: {
                sizes: [[150, 30]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[150, 30]],
            '980 - 1279': [[150, 30]],
            '768 - 979': [[150, 30]]
        }
    }, {
        code: 'Top3',
        path: '/21769104128/Trustnet/Top3',
        mediaTypes: {
            banner: {
                sizes: [[300, 40]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[300, 40]],
            '980 - 1279': [[300, 40]],
            '768 - 979': [[300, 40]]
        }
    }, {
        code: 'Top_footer',
        path: '/21769104128/Trustnet/Top_footer',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [970, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443681,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67089'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67090'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279'
        //     ],
        //     params: {
        //         placementId: 1201892
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '307005',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '307007',
                size: [728, 90]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                unit: '539863762',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249606',
                adSlot: 'tn_topfooter_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249608',
                adSlot: 'tn_topfooter_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759865
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759874
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078345
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078351
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [970, 90]],
            '980 - 1279': [[970, 250], [728, 90], [970, 90]]
        }
    }, {
        code: 'Top2_footer',
        path: '/21769104128/Trustnet/Top2_footer',
        mediaTypes: {
            banner: {
                sizes: [[150, 30]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[150, 30]],
            '980 - 1279': [[150, 30]],
            '768 - 979': [[150, 30]]
        }
    }, {
        code: 'Top_Middle',
        path: '/21769104128/Trustnet/Top_Middle',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [970, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443683,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443683,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67091'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67092'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979'
        //     ],
        //     params: {
        //         placementId: 1201915
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '307008',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307010',
                size: [728, 90]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                unit: '539863763',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249609',
                adSlot: 'tn_topmiddle_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249611',
                adSlot: 'tn_topmiddle_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759878
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 12759886
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078356
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078367
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [970, 90]],
            '980 - 1279': [[970, 250], [728, 90], [970, 90]],
            '768 - 979': [[728, 90]]
        }
    }, {
        code: 'NewsNative',
        path: '/21769104128/Trustnet/NewsNative',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [300, 250], [728, 90], [320, 50], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999'],
            params: {
                dmxid: 443677,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443677,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                dmxid: 443677,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '67101'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '67103'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                tagid: '67102'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201920
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307018',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '307020',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                siteId: '307019',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '432070',
                size: [320, 50]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '540784128',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1361195',
                adSlot: 'tn_newsnative_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1361198',
                adSlot: 'tn_newsnative_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                publisherId: '1361197',
                adSlot: 'tn_newsnative_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 13206163
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 13206209
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 13206194
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17859793
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078446
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078452
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 17078446
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [300, 250]],
            '980 - 1279': [[300, 250], [728, 90]],
            '768 - 979': [[300, 250], [728, 90]],
            '0 - 767': [[300, 250], [320, 50], [320, 100]]
        }
    }, {
        code: 'pdfAd',
        path: '/21769104128/Trustnet/pdfAd',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [300, 600], [500, 500], [400, 400], [760, 500], [300, 250], [320, 50], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '67104'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67105'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67106'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '40495'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67107'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201921
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307021',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307022',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307023',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '307025',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307024',
                size: [320, 50]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '540210007',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1361199',
                adSlot: 'tn_pdfAd_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1361200',
                adSlot: 'tn_pdfAd_728x90'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1361201',
                adSlot: 'tn_pdfAd_300x600'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1361202',
                adSlot: 'tn_pdfAd_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517797',
                adSlot: 'tn_pdfAd_320x50'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 13206220
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 13206221
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 13206222
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 13206224
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722161
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078454
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078475
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078504
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078510
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078507
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [300, 600], [300, 250], [500, 500], [400, 400], [760, 500], ],
            '980 - 1279': [[500, 500], [400, 400], [760, 500], [728, 90], [300, 600], [300, 250]],
            '768 - 979': [[500, 500], [400, 400], [760, 500], [300, 250], [728, 90], [300, 600]],
            '0 - 767': [[300, 250], [320, 50], [320, 100]]
        }
    }, {
        code: 'Sponsorshipbanner',
        path: '/21769104128/Trustnet/Sponsorshipbanner',
        mediaTypes: {
            banner: {
                sizes: [[970, 150], [728, 90], [320, 50], [300, 250], [300, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[970, 150], [728, 90]],
            '980 - 1279': [[728, 90]],
            '768 - 979': [[728, 90]],
            '0 - 767': [[320, 50], [300, 250], [300, 50]]
        }
    }, {
        code: 'IndexSpon',
        path: '/21769104128/Trustnet/IndexSpon',
        mediaTypes: {
            banner: {
                sizes: [[215, 40]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[215, 40]],
            '980 - 1279': [[215, 40]],
            '768 - 979': [[215, 40]]
        }
    }, {
        code: 'SponsoredContent',
        path: '/21769104128/Trustnet/SponsoredContent',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [320, 50], [300, 250], [300, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[970, 250]],
            '980 - 1279': [[728, 90]],
            '768 - 979': [[728, 90]],
            '0 - 767': [[320, 50], [300, 250], [300, 50]]
        }
    }, {
        code: 'SectorSponsor',
        path: '/21769104128/Trustnet/SectorSponsor',
        mediaTypes: {
            banner: {
                sizes: [[200, 80]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[200, 80]],
            '980 - 1279': [[200, 80]],
            '768 - 979': [[200, 80]],
            '0 - 767': [[200, 80]]
        }
    }, {
        code: 'Position1_Footer',
        path: '/21769104128/Trustnet/Position1_Footer',
        mediaTypes: {
            banner: {
                sizes: [[320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443675,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40496'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201918
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307014',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '427151',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['0 - 767'],
            params: {
                unit: '539863765',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517791',
                adSlot: 'tn_position1_footer_320x50'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722129
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722135
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078399
            }
        }],
        breakpoints: {
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }, {
        code: 'Position2_Footer',
        path: '/21769104128/Trustnet/Position2_Footer',
        mediaTypes: {
            banner: {
                sizes: [[320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443674,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40497'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67370'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201916
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307012',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307013',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['0 - 767'],
            params: {
                unit: '539863764',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517790',
                adSlot: 'tn_position2_footer_320x50'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1249617',
                adSlot: 'tn_position2_footer_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722126
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 12759897
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078372
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078378
            }
        }],
        breakpoints: {
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }, {
        code: 'Mobile_Position',
        path: '/21769104128/Trustnet/Mobile_Position',
        mediaTypes: {
            banner: {
                sizes: [[320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443676,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40498'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67100'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201919
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307016',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307017',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['0 - 767'],
            params: {
                unit: '539863766',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517793',
                adSlot: 'tn_mobile_position_320x50'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1249615',
                adSlot: 'tn_mobile_position_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722135
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 12759934
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078420
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078429
            }
        }],
        breakpoints: {
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
            'Display Persistent Consent Link': true,
            'No Option': false,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [1, 2, 3, 4, 5],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Logo': 'https://static.amp.services/logos/trustnet-logo.jpg',
            'Publisher Name': 'Trustnet',
            'Consent Scope': 'service',
            'Initial Screen Title Text': 'Cookies and Advertising',
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000'
            },
            link: {
                textColor: '#000000'
            },
            primaryButton: {
                backgroundColor: '#00A499',
                borderColor: '#00A499',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#007169',
                borderColor: '#007169',
                textColor: '#FFFFFF'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: '#00A499',
                textColor: '#00A499'
            },
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {
                backgroundColor: '#00A499',
                borderColor: '#00A499'
            },
            toggleOff: {
                backgroundColor: '#FFFFFF',
                borderColor: '#00A499'
            },
            additionalStyles: '',
            toggleSwitchBorderColor: '#00A499',
            toggleStatusTextColor: '#FFFFFF'
        }
    },
    breakpoints: [{
        label: '1280 - 9999',
        minWidth: 1280,
        maxWidth: 9999,
        sizesSupported: [[970, 250], [300, 250], [300, 600], [728, 90]]
    }, {
        label: '980 - 1279',
        minWidth: 980,
        maxWidth: 1279,
        sizesSupported: [[970, 250], [728, 90], [300, 250], [300, 600]]
    }, {
        label: '768 - 979',
        minWidth: 768,
        maxWidth: 979,
        sizesSupported: [[728, 90], [300, 250], [300, 600]]
    }, {
        label: '0 - 767',
        minWidth: 0,
        maxWidth: 767,
        sizesSupported: [[320, 50], [300, 250]]
    }]
}

var streamampUtils = {
    isStreamampDebugMode: function() {
        var url = window.location.href;
        var name = 'streamamp_debug';
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) {
            return false;
        }
        if (!results[2]) {
            return false;
        }
        return (decodeURIComponent(results[2].replace(/\+/g, ' ')).toUpperCase() === 'TRUE');
    },
    getBrowserWidth: function() {
        var width;
        var topWindow = window.top || window;
        var outerWidth = topWindow.outerWidth || 10000;
        if (topWindow.innerWidth !== undefined) {
            width = topWindow.innerWidth;
        } else if (topWindow.document.documentElement !== undefined && topWindow.document.documentElement.clientWidth !== undefined && topWindow.document.documentElement.clientWidth != 0) {
            width = topWindow.document.documentElement.clientWidth;
        } else {
            width = topWindow.document.body.clientWidth;
        }
        var minWidth = Math.min(width, outerWidth)
        streamampUtils.log('Getting browser width', minWidth);
        return minWidth;
    },
    loadScript: function(url) {
        var scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.src = url;
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(scriptEl, node);
    },
    normalizeKeyValue: function(keyValue) {
        if (keyValue && keyValue.keyValueType === 'variable') {
            keyValue.value = window[keyValue.value];
            if (keyValue.value === '') {
                keyValue.value = undefined;
            }
        }
        return keyValue;
    },
    styleDebugLog: function(type, arguments) {
        arguments = Array.from(arguments)
        var typeTextColor
        switch (type) {
        case 'pbjs':
            typeTextColor = '#3B88C3;';
            break;
        case 'gpt':
            typeTextColor = '#1E8E3E;';
            break;
        case 'aps':
            typeTextColor = '#FF9900;';
            break;
        default:
            typeTextColor = '';
        }
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: ' + typeTextColor + '; padding: 1px 0;')
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: #FFF; background: #2F0D00; padding: 1px 3px; margin: 2px 0; border-radius: 3px;')
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: #2F0D00; padding: 1px 0; margin: 2px')
        arguments.unshift('%cSTREAM%cAMP' + '%c  ' + type.toUpperCase() + ': ')
        return arguments
    },
    log: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('debug', arguments));
        }
    },
    logPbjs: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('pbjs', arguments));
        }
    },
    logGpt: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('gpt', arguments));
        }
    },
    logAps: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('aps', arguments));
        }
    },
    logError: function() {
        if (streamampDebugMode) {
            console.error.apply(this, streamampUtils.styleDebugLog('error', arguments));
        } else {
            console.error.apply(this, arguments);
        }
    },
    stickyAd: function(adUnits) {
        var stickyAdUnits = adUnits.filter(function(adUnit) {
            return adUnit.isSticky === true;
        });
        if (stickyAdUnits.length === 0) {
            return;
        }
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener('slotRenderEnded', function(e) {
                if (!e.isEmpty) {
                    stickyAdUnits.filter(function(adUnit) {
                        return adUnit.code === e.slot.getSlotElementId();
                    }).map(function(adUnit) {
                        streamampUtils.applyStyle(adUnit);
                    });
                }
            });
        });
    },
    applyStyle: function(adUnit) {
        var adUnitCode = adUnit.code;
        var stickyAdPosition = adUnit.stickyAdPosition;
        var adContainer = document.getElementById(adUnitCode);
        if (adContainer) {
            adContainer.style.backgroundColor = 'rgba(237, 237, 237, 0.82)';
            adContainer.style.position = 'fixed';
            adContainer.style.bottom = '0px';
            adContainer.style.padding = '4px 0 0 0';
            adContainer.style.zIndex = '9999';
            adContainer.style.width = '100%';
            adContainer.style.textAlign = 'center';
            if (stickyAdPosition === 'bl') {
                streamampUtils.log('Applying styles for sticky ad unit', {
                    code: adUnitCode,
                    position: 'bottom left'
                });
                adContainer.style.left = '0px';
            } else if (stickyAdPosition === 'br') {
                streamampUtils.log('Applying styles for sticky ad unit', {
                    code: adUnitCode,
                    position: 'bottom right'
                });
                adContainer.style.right = '0px';
            } else {
                streamampUtils.log('Applying styles for sticky ad unit', {
                    code: adUnitCode,
                    position: 'bottom center'
                });
                adContainer.style.transform = 'translate(-50%, 0%)';
                adContainer.style.left = '50%';
            }
            adContainer.style.display = '';
            var closeAdButton = document.createElement('img');
            closeAdButton.id = "close-button";
            closeAdButton.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjQyNC4wMzIsNDQzLjcgNDQzLjcsNDI0LjAzMiAzMjUuNjY3LDMwNiA0NDMuNywxODcuOTY3IDQyNC4wMzIsMTY4LjMgMzA2LDI4Ni4zMzMgMTg3Ljk2NywxNjguMyAxNjguMywxODcuOTY3ICAgICAyODYuMzMzLDMwNiAxNjguMyw0MjQuMDMyIDE4Ny45NjcsNDQzLjcgMzA2LDMyNS42NjcgICAiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNjEyLDMwNkM2MTIsMTM3LjAwNCw0NzQuOTk1LDAsMzA2LDBDMTM3LjAwNCwwLDAsMTM3LjAwNCwwLDMwNmMwLDE2OC45OTUsMTM3LjAwNCwzMDYsMzA2LDMwNiAgICBDNDc0Ljk5NSw2MTIsNjEyLDQ3NC45OTUsNjEyLDMwNnogTTI3LjgxOCwzMDZDMjcuODE4LDE1Mi4zNiwxNTIuMzYsMjcuODE4LDMwNiwyNy44MThTNTg0LjE4MiwxNTIuMzYsNTg0LjE4MiwzMDYgICAgUzQ1OS42NCw1ODQuMTgyLDMwNiw1ODQuMTgyUzI3LjgxOCw0NTkuNjQsMjcuODE4LDMwNnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
            closeAdButton.style.position = "absolute";
            closeAdButton.style.top = "-12px";
            closeAdButton.style.right = "3px";
            closeAdButton.style.maxWidth = "24px";
            closeAdButton.style.maxHeight = "24px";
            closeAdButton.onclick = function() {
                adContainer.style.display = 'none';
            }
            ;
            adContainer.appendChild(closeAdButton);
            var frame = document.getElementById("google_ads_iframe_/5548363/StreamAMP_1x1_0");
            if (frame && frame.contentWindow.length) {
                document.getElementById("StreamAMP_1x1").style.backgroundColor = "";
                document.getElementById("close-button").style.display = "none";
            }
        }
    },
    polyfills: function() {
        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function(search, this_len) {
                if (this_len === undefined || this_len > this.length) {
                    this_len = this.length;
                }
                return this.substring(this_len - search.length, this_len) === search;
            }
            ;
        }
        if (!Array.prototype.find) {
            Object.defineProperty(Array.prototype, 'find', {
                value: function(predicate) {
                    if (this == null) {
                        throw new TypeError('"this" is null or not defined');
                    }
                    var o = Object(this);
                    var len = o.length >>> 0;
                    if (typeof predicate !== 'function') {
                        throw new TypeError('predicate must be a function');
                    }
                    var thisArg = arguments[1];
                    var k = 0;
                    while (k < len) {
                        var kValue = o[k];
                        if (predicate.call(thisArg, kValue, k, o)) {
                            return kValue;
                        }
                        k++;
                    }
                    return undefined;
                },
                configurable: true,
                writable: true
            });
        }
        if (!Array.prototype.includes) {
            Object.defineProperty(Array.prototype, 'includes', {
                value: function(searchElement, fromIndex) {
                    if (this == null) {
                        throw new TypeError('"this" is null or not defined');
                    }
                    var o = Object(this);
                    var len = o.length >>> 0;
                    if (len === 0) {
                        return false;
                    }
                    var n = fromIndex | 0;
                    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                    function sameValueZero(x, y) {
                        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                    }

                    while (k < len) {
                        if (sameValueZero(o[k], searchElement)) {
                            return true;
                        }
                        k++;
                    }
                    return false;
                }
            });
        }
        Object.values = Object.values ? Object.values : function(obj) {
            var allowedTypes = ["[object String]", "[object Object]", "[object Array]", "[object Function]"];
            var objType = Object.prototype.toString.call(obj);
            if (obj === null || typeof obj === "undefined") {
                throw new TypeError("Cannot convert undefined or null to object");
            } else if (!~allowedTypes.indexOf(objType)) {
                return [];
            } else {
                if (Object.keys) {
                    return Object.keys(obj).map(function(key) {
                        return obj[key];
                    });
                }
                var result = [];
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        result.push(obj[prop]);
                    }
                }
                return result;
            }
        }
        ;
    }
};
streamampUtils.polyfills()
overrideGoogletagDisplay(streamampConfig)

var streamampDebugMode = streamampUtils.isStreamampDebugMode();
var dnsUrls = {
    a9: 'https://c.amazon-adsystem.com/aax2/apstag.js',
    prebid: 'https://static.amp.services/prebidLeya1.0.3.js',
    gpt: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
    cmp: 'https://quantcast.mgr.consensu.org/'
};

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

window.gptAdSlots = {}
var onSlotCreatedEvents = [];

window.AD_UNITS_TOGGLE_OFF = window.AD_UNITS_TOGGLE_OFF || [];
streamampUtils.log('AD_UNITS_TOGGLE_OFF is', window.AD_UNITS_TOGGLE_OFF)
window.AD_UNITS_TOGGLE_ON = window.AD_UNITS_TOGGLE_ON || [];
streamampUtils.log('AD_UNITS_TOGGLE_ON is ', window.AD_UNITS_TOGGLE_ON)
window.adRefreshTimer = null;
var _streamampVariables = {
    levels: window.location.pathname.split('/').filter(function(level) {
        return level !== '';
    }),
    bidTimeout: streamampConfig.bidTimeout * 1e3 || 2000,
    currentBreakpoint: streamampGetBreakpoint()
}
streamampUtils.log('URL Levels', _streamampVariables.levels)
streamampUtils.log('Setting the bid timeout', _streamampVariables.bidTimeout)
streamampAddDNSPrefetch(Object.values(dnsUrls));
streamampSetup()

function streamampSetup() {
    streamampUtils.log('Running setup()')
    pbjs.que.push(function() {
        if (streamampConfig.afterLoad && typeof streamampConfig.afterLoad === 'function') {
            streamampUtils.log('Running afterLoad event', streamampConfig.afterLoad);
            streamampConfig.afterLoad();
        }
    });
    streamampUtils.loadScript(dnsUrls.gpt);
    streamampUtils.logGpt('Initializing Ad Server, loading GoogleTag library gpt.js');
    streamampUtils.loadScript(dnsUrls.prebid);
    var prebidVersion = dnsUrls.prebid.split('/').filter(function(item) {
        return item.indexOf('prebid') != -1
    }).join('')
    streamampUtils.logPbjs('Loading', prebidVersion);
    if (streamampConfig.a9Enabled) {
        streamampUtils.logAps('APS/A9 enabled, loading apstag library apstag.js')
        !function(a9, a, p, s, t, A, g) {
            if (a[a9])
                return;

            function q(c, r) {
                a[a9]._Q.push([c, r])
            }

            a[a9] = {
                init: function() {
                    q("i", arguments)
                },
                fetchBids: function() {
                    q("f", arguments)
                },
                setDisplayBids: function() {},
                targetingKeys: function() {
                    return []
                },
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsByTagName(s)[0];
            g.parentNode.insertBefore(A, g)
        }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
        apstag.init({
            pubID: streamampConfig.apsPubID,
            adServer: 'googletag'
        });
    }
    if (streamampConfig.levelTargeting) {
        for (var levelIndex = 1; levelIndex < 6; levelIndex++) {
            window.streamampConfig.globalKeyValues.push({
                name: 'Level' + levelIndex,
                value: _streamampVariables.levels[levelIndex - 1] || 'none',
                keyValueType: 'static'
            });
        }
    }
    ;if (streamampConfig.toggleOffUrls) {
        streamampConfig.toggleOffUrls.forEach(function(url) {
            var level = url.level;
            var path = url.url;
            var levelsKeys = [];
            levelsKeys.push(level);
            var toggleOff = false;
            levelsKeys.forEach(function(levelKey) {
                if (_streamampVariables.levels && _streamampVariables.levels[levelKey - 1] && _streamampVariables.levels[levelKey - 1].toLowerCase() === path.toLowerCase()) {
                    toggleOff = true;
                }
            })
            if (toggleOff) {
                window.streamampConfig.adUnits.forEach(function(adUnit) {
                    adUnit.bids = []
                })
            }
        })
    }
    ;pbjs.que.push(function() {
        streamampUtils.logPbjs('Queuing enableAnalytics()')
        pbjs.enableAnalytics({
            provider: 'leya',
        });
    });
    pbjs.que.push(function() {
        pbjs.aliasBidder('appnexus', 'streamamp')
        pbjs.aliasBidder('appnexus', 'totaljobs')
    });
    pbjs.que.push(function() {
        var currencyValue = streamampConfig.currency.value;
        var currencyFlag = streamampConfig.currency.enabled;
        var currencyFileURL = 'https://static.amp.services/currency/conversion-rates.json';
        streamampUtils.logPbjs('Queuing setConfig() for consent management')
        pbjs.setConfig({
            consentManagement: {
                cmpApi: 'iab',
                timeout: 10000,
                allowAuctionWithoutConsent: true
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for filter settings')
        pbjs.setConfig({
            userSync: {
                filterSettings: {
                    iframe: {
                        bidders: '*',
                        filter: 'include'
                    }
                }
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for user ids')
        pbjs.setConfig({
            userSync: {
                userIds: [{
                    name: "pubCommonId",
                    storage: {
                        type: "cookie",
                        name: "_pubCommonId",
                        expires: 365
                    }
                }]
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for price granularity')
        pbjs.setConfig({
            priceGranularity: generatePriceGranularity(streamampConfig.pbjsPriceGranularity)
        });
        streamampUtils.logPbjs('Queuing setConfig() for bidder timeout', _streamampVariables.bidTimeout)
        pbjs.setConfig({
            bidderTimeout: _streamampVariables.bidTimeout
        });
        streamampUtils.logPbjs('Queuing setConfig() for size config (breakpoints)', streamampConfig.breakpoints.map(function(breakpoint) {
            return breakpoint.label
        }))
        pbjs.setConfig({
            sizeConfig: streamampConfig.breakpoints.map(function(breakpoint) {
                return {
                    'mediaQuery': '(min-width: ' + breakpoint.minWidth + 'px) and (max-width: ' + breakpoint.maxWidth + 'px)',
                    'sizesSupported': breakpoint.sizesSupported,
                    'labels': [breakpoint.label],
                }
            })
        });
        if (currencyFlag && currencyValue.length !== 0) {
            streamampUtils.logPbjs('Queuing setConfig() for currency. Ad server currency is', currencyValue)
            if (currencyValue === 'JPY') {
                pbjs.setConfig({
                    currency: {
                        adServerCurrency: currencyValue,
                        conversionRateFile: currencyFileURL,
                        granularityMultiplier: 100
                    }
                });
            } else {
                pbjs.setConfig({
                    currency: {
                        adServerCurrency: currencyValue,
                        conversionRateFile: currencyFileURL,
                        granularityMultiplier: 1
                    }
                });
            }
        } else {
            streamampUtils.logPbjs('Queuing setConfig() for currency. Ad server currency is USD')
            pbjs.setConfig({
                currency: {
                    adServerCurrency: 'USD',
                    conversionRateFile: currencyFileURL,
                    granularityMultiplier: 1
                }
            });
        }
    });
    if (!streamampConfig.preventInit) {
        streamampInit()
    }
}

function streamampInit() {
    // console.trace('tracing streamamp init')
    pbjs.isAuctionEnded = false;

    streamampUtils.log('Running init()')
    if (streamampConfig.cmp.isEnabled) {
        if (streamampConfig.cmp.pathnamesToExclude && streamampConfig.cmp.pathnamesToExclude.length > 0 && streamampConfig.cmp.pathnamesToExclude.indexOf(window.location.pathname) != -1) {
            streamampUtils.log('CMP pathnames to exclude are', streamampConfig.cmp.pathnamesToExclude)
            streamampUtils.log('Preventing CMP initialization as', window.location.pathname, 'is in streamampConfig.cmp.pathnamesToExclude')
        } else {
            streamampInitializeCmp()
        }
    }
    ;if (streamampConfig.beforeInit && typeof streamampConfig.beforeInit === 'function') {
        streamampUtils.log('Running beforeInit event', streamampConfig.beforeInit);
        streamampConfig.beforeInit();
    }
    var adUnitsGPT = streamampGetAdUnitsPerBreakpoint();
    var adUnitsAPS
    if (streamampConfig.a9Enabled) {
        adUnitsAPS = streamampCreateAPSAdUnits(adUnitsGPT);
    }
    if (pbjs.adUnits && pbjs.adUnits.length) {
        var oldAdUnitCodes = pbjs.adUnits.map(function(adUnit) {
            return adUnit.code;
        });
        streamampDestroySlots(oldAdUnitCodes);
    }

    pbjs.que.push(function() {
        streamampUtils.logPbjs('Queuing addAdUnits() for', adUnitsGPT)
        pbjs.addAdUnits(adUnitsGPT);
    });

    googletag.cmd.push(function() {
        var predefinedSlotIds = googletag.pubads().getSlots().map(function(slot) {
            return slot.getSlotElementId();
        });
        adUnitsGPT.forEach(function(adUnit) {
            streamampDefineAdUnitSlot(adUnit, predefinedSlotIds)
        });
        if (streamampConfig.gptSingleRequestEnabled) {
            streamampUtils.logGpt('Enabling single request (SRA)');
            googletag.pubads().enableSingleRequest();
        }
        if (streamampConfig.hasCollapedEmptyDivs) {
            streamampUtils.logGpt('Enabling collapse of empty ad divs');
            googletag.pubads().collapseEmptyDivs(true, true);
        }
        streamampUtils.logGpt('Enabling googletag service');
        googletag.enableServices();
    })
    if (streamampConfig.afterInit && typeof streamampConfig.afterInit === 'function') {
        streamampUtils.log('Running afterInit event', streamampConfig.afterInit);
        streamampConfig.afterInit();
    }
    if (streamampConfig.hasRefreshBids) {
        streamampRefresh(streamampConfig.adUnitsToRefresh)
    }
    streamampUtils.stickyAd(adUnitsGPT);
    auction(adUnitsGPT, adUnitsAPS)
}

function streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS) {
    var bidders = ['prebid'];
    if (streamampConfig.a9Enabled) {
        bidders = ['a9', 'prebid'];
    }
    streamampUtils.log('Fetching header bids for bidders', bidders)
    var requestManager = {
        adserverRequestSent: false,
    };
    bidders.forEach(function(bidder) {
        requestManager[bidder] = false;
    });

    function allBiddersBack() {
        var allBiddersBack = bidders.map(function(bidder) {
            return requestManager[bidder];
        }).filter(Boolean).length === bidders.length;
        streamampUtils.log('Checking if all bidders are back', allBiddersBack)
        return allBiddersBack;
    }

    function headerBidderBack(bidder) {
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        if (bidder === 'a9') {
            streamampUtils.logAps('Handling header bidder back for A9/APS')
            requestManager.a9 = true;
        } else if (bidder === 'prebid') {
            streamampUtils.logPbjs('Handling header bidder back for Prebid')
            requestManager.prebid = true;
        }
        if (allBiddersBack()) {
            sendAdServerRequest();
        }
    }

    function sendAdServerRequest() {
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        requestManager.adserverRequestSent = true;
        pbjs.adserverRequestSent = true;
        requestManager.sendAdServerRequest = true;
        googletag.cmd.push(function() {
            if (streamampConfig.a9Enabled) {
                apstag.setDisplayBids();
                streamampUtils.logAps('Setting display bids')
            }
            streamampAddClientTargeting();
            pbjs.que.push(function() {
                streamampUtils.logPbjs('Queuing setTargetingForGPTAsync()')
                pbjs.setTargetingForGPTAsync();
                if (streamampConfig.gptSingleRequestEnabled) {
                    var sraArray = ["Top", "Top2", "Top3", "TopLeft", "TopRight"];
                    var t = googletag.pubads().getSlots().filter(function(slot) {
                        return !sraArray.includes(slot.getSlotElementId()) && !slot.getSlotElementId().startsWith('nav-ads')
                    })

                    googletag.pubads().refresh(t);
                }

                pbjs.isAuctionEnded = true;
                processAuctionEndQueue();
            });
            streamampUtils.logGpt('Sending ad server request')
        });
    }

    function requestBids(adUnitsGPT, adUnitsAPS, bidTimeout) {

        if (streamampConfig.a9Enabled) {
            streamampUtils.logAps('Fetching bids for', adUnitsAPS)
            var start = new Date().getTime()
            apstag.fetchBids({
                slots: adUnitsAPS,
                timeout: bidTimeout
            }, function(bids) {

                if (Leya) {
                    var a = {
                        start: start,
                        finish: new Date().getTime(),
                        request: adUnitsAPS,
                        response: bids
                    };

                    Leya.Events.A9.getLineItemsMap().then(function(lineItemsMap) {
                        if (Object.keys(lineItemsMap).length === 0 && lineItemsMap.constructor === Object) {
                            Leya.Events.A9.init().then(function() {
                                Leya.Events.A9.handleAuctionEvent(a)
                            })
                        } else {
                            Leya.Events.A9.handleAuctionEvent(a)
                        }
                    })

                }

                streamampUtils.logAps('Bids received (all)', bids, '(filtered out)', bids.filter(function(bid) {
                    return bid.amzniid
                }))

                headerBidderBack('a9');
            });
        }
        pbjs.que.push(function() {

            streamampUtils.logPbjs('Queuing requestBids()')
            pbjs.requestBids({
                timeout: bidTimeout,
                bidsBackHandler: function(bidResponses) {
                    headerBidderBack('prebid');
                }
            });
        });
    }

    requestBids(adUnitsGPT, adUnitsAPS, _streamampVariables.bidTimeout);
    window.setTimeout(function() {
        sendAdServerRequest();
    }, _streamampVariables.bidTimeout);
}

function auction(adUnitsGPT, adUnitsAPS) {
    if (window.__cmp && !window.__cmp.streamampOverridden) {
        window.__cmp('getConsentData', null, function(data, success) {
            streamampUtils.log('Getting CMP Consent Data', {
                data: data,
                success: success
            })
            streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS);
        });
    } else {
        streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS);
    }
}

function streamampInitializeCmp() {
    streamampUtils.log('Initializing CMP')
    var elem = document.createElement('script');
    elem.src = 'https://quantcast.mgr.consensu.org/cmp.js';
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
    (function() {
        var gdprAppliesGlobally = false;

        function addFrame() {
            if (!window.frames['__cmpLocator']) {
                if (document.body) {
                    var body = document.body
                      , iframe = document.createElement('iframe');
                    iframe.style = 'display:none';
                    iframe.name = '__cmpLocator';
                    body.appendChild(iframe);
                } else {
                    setTimeout(addFrame, 5);
                }
            }
        }

        addFrame();

        function cmpMsgHandler(event) {
            var msgIsString = typeof event.data === "string";
            var json;
            if (msgIsString) {
                json = event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
            } else {
                json = event.data;
            }
            if (json.__cmpCall) {
                var i = json.__cmpCall;
                window.__cmp(i.command, i.parameter, function(retValue, success) {
                    var returnMsg = {
                        "__cmpReturn": {
                            "returnValue": retValue,
                            "success": success,
                            "callId": i.callId
                        }
                    };
                    event.source.postMessage(msgIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
                });
            }
        }

        window.__cmp = function(c) {
            var b = arguments;
            if (!b.length) {
                return __cmp.a;
            } else if (b[0] === 'ping') {
                b[2]({
                    "gdprAppliesGlobally": gdprAppliesGlobally,
                    "cmpLoaded": false
                }, true);
            } else if (c == '__cmp')
                return false;
            else {
                if (typeof __cmp.a === 'undefined') {
                    __cmp.a = [];
                }
                __cmp.a.push([].slice.apply(b));
            }
        }
        ;
        window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
        window.__cmp.msgHandler = cmpMsgHandler;
        if (window.addEventListener) {
            window.addEventListener('message', cmpMsgHandler, false);
        } else {
            window.attachEvent('onmessage', cmpMsgHandler);
        }
    }
    )();
    window.__cmp('init', streamampConfig.cmp.config);
    if (streamampConfig.cmp.hasCustomStyles && isNotEmptyCmp(streamampConfig.cmp.styles)) {
        var style = document.createElement('style');
        var ref = document.querySelector('script');
        var quantcastTheme = streamampConfig.cmp.styles;
        streamampUtils.log('Applying custom CMP styles', quantcastTheme)
        style.innerHTML = (isNotEmptyCmp(quantcastTheme.ui) && quantcastTheme.ui.backgroundColor ? '.qc-cmp-ui' + '{' + 'background-color:' + quantcastTheme.ui.backgroundColor + '!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.ui) && quantcastTheme.ui.textColor ? '.qc-cmp-ui,' + '.qc-cmp-ui .qc-cmp-main-messaging,' + '.qc-cmp-ui .qc-cmp-messaging,' + '.qc-cmp-ui .qc-cmp-beta-messaging,' + '.qc-cmp-ui .qc-cmp-title,' + '.qc-cmp-ui .qc-cmp-sub-title,' + '.qc-cmp-ui .qc-cmp-purpose-info,' + '.qc-cmp-ui .qc-cmp-table,' + '.qc-cmp-ui .qc-cmp-vendor-list,' + '.qc-cmp-ui .qc-cmp-vendor-list-title' + '{' + 'color:' + quantcastTheme.ui.textColor + '!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.link) ? '.qc-cmp-ui a,' + '.qc-cmp-ui .qc-cmp-alt-action,' + '.qc-cmp-ui .qc-cmp-link' + '{' + (quantcastTheme.link.textColor ? 'color:' + quantcastTheme.link.textColor + '!important;' : '') + (quantcastTheme.link.isUnderlined ? 'text-decoration: underline' : 'text-decoration: none' + '!important;') + '}' : '') + (isNotEmptyCmp(quantcastTheme.primaryButton) ? '.qc-cmp-ui .qc-cmp-button' + '{' + (quantcastTheme.primaryButton.backgroundColor ? 'background-color:' + quantcastTheme.primaryButton.backgroundColor + '!important;' : '') + (quantcastTheme.primaryButton.borderColor ? 'border-color:' + quantcastTheme.primaryButton.borderColor + '!important;' : '') + (quantcastTheme.primaryButton.textColor ? 'color:' + quantcastTheme.primaryButton.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.primaryButtonHover) ? '.qc-cmp-ui .qc-cmp-button:hover' + '{' + (quantcastTheme.primaryButtonHover.backgroundColor ? 'background-color:' + quantcastTheme.primaryButtonHover.backgroundColor + '!important;' : '') + (quantcastTheme.primaryButtonHover.borderColor ? 'border-color:' + quantcastTheme.primaryButtonHover.borderColor + '!important;' : '') + (quantcastTheme.primaryButtonHover.textColor ? 'color:' + quantcastTheme.primaryButtonHover.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.secondaryButton) ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button' + '{' + (quantcastTheme.secondaryButton.backgroundColor ? 'background-color:' + quantcastTheme.secondaryButton.backgroundColor + '!important;' : '') + (quantcastTheme.secondaryButton.borderColor ? 'border-color:' + quantcastTheme.secondaryButton.borderColor + '!important;' : '') + (quantcastTheme.secondaryButton.textColor ? 'color:' + quantcastTheme.secondaryButton.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.secondaryButtonHover) ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button:hover' + '{' + (quantcastTheme.secondaryButtonHover.backgroundColor ? 'background-color:' + quantcastTheme.secondaryButtonHover.backgroundColor + '!important;' : '') + (quantcastTheme.secondaryButtonHover.borderColor ? 'border-color:' + quantcastTheme.secondaryButtonHover.borderColor + '!important;' : '') + (quantcastTheme.secondaryButtonHover.textColor ? 'color:' + quantcastTheme.secondaryButtonHover.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (quantcastTheme.isSecondaryButtonHidden ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button' + '{' + 'display: none!important;' + '}' + '.qc-cmp-ui .qc-cmp-horizontal-buttons .qc-cmp-button.qc-cmp-secondary-button,' + '.qc-cmp-ui .qc-cmp-nav-bar-buttons-container .qc-cmp-button.qc-cmp-secondary-button' + '{' + 'display: block!important;' + '}' + '@media screen and (max-width: 550px)' + '{' + '.qc-cmp-buttons.qc-cmp-primary-buttons' + '{' + 'height: 3.8rem!important;' + '}' + '}' : '') + (isNotEmptyCmp(quantcastTheme.tableHeader) ? '.qc-cmp-ui .qc-cmp-table-header,' + '.qc-cmp-ui .qc-cmp-vendor-list .qc-cmp-vendor-row-header' + '{' + (quantcastTheme.tableHeader.backgroundColor ? 'background-color:' + quantcastTheme.tableHeader.backgroundColor + '!important;' : '') + (quantcastTheme.tableHeader.textColor ? 'color:' + quantcastTheme.tableHeader.textColor + '!important;' : '') + '}' : '') + (isNotEmptyCmp(quantcastTheme.tableRow) ? '.qc-cmp-ui .qc-cmp-publisher-purposes-table .qc-cmp-table-row,' + '.qc-cmp-ui .qc-cmp-table-row.qc-cmp-vendor-row' + '{' + (quantcastTheme.tableRow.backgroundColor ? 'background-color:' + quantcastTheme.tableRow.backgroundColor + '!important;' : '') + (quantcastTheme.tableRow.textColor ? 'color:' + quantcastTheme.tableRow.textColor + '!important;' : '') + '}' : '') + '.qc-cmp-ui .qc-cmp-purpose-description,' + '.qc-cmp-ui .qc-cmp-company-cell,' + '.qc-cmp-ui .qc-cmp-vendor-info-content,' + '.qc-cmp-ui .qc-cmp-vendor-policy,' + '.qc-cmp-ui .qc-cmp-vendor-info-list' + '{' + 'color: inherit!important;' + '}' + (isNotEmptyCmp(quantcastTheme.toggleOn) ? '.qc-cmp-ui .qc-cmp-toggle.qc-cmp-toggle-on,' + '.qc-cmp-ui .qc-cmp-small-toggle.qc-cmp-toggle-on' + '{' + (quantcastTheme.toggleOn.backgroundColor ? 'background-color:' + quantcastTheme.toggleOn.backgroundColor + '!important;' : '') + (quantcastTheme.toggleOn.borderColor ? 'border-color:' + quantcastTheme.toggleOn.borderColor + '!important;' : '') + '}' : '') + (isNotEmptyCmp(quantcastTheme.toggleOff) ? '.qc-cmp-ui .qc-cmp-toggle.qc-cmp-toggle-off,' + '.qc-cmp-ui .qc-cmp-small-toggle.qc-cmp-toggle-off' + '{' + (quantcastTheme.toggleOff.backgroundColor ? 'background-color:' + quantcastTheme.toggleOff.backgroundColor + '!important;' : '') + (quantcastTheme.toggleOff.borderColor ? 'border-color:' + quantcastTheme.toggleOff.borderColor + '!important;' : '') + '}' : '') + (quantcastTheme.toggleSwitchBorderColor ? '.qc-cmp-ui .qc-cmp-toggle-switch' + '{' + 'border: 1px solid ' + quantcastTheme.toggleSwitchBorderColor + '!important;' + '}' : '') + (quantcastTheme.toggleStatusTextColor ? '.qc-cmp-ui .qc-cmp-toggle-status' + '{' + 'color:' + quantcastTheme.toggleStatusTextColor + '!important;' + '}' : '') + (quantcastTheme.dropdownArrowColor ? '.qc-cmp-ui .qc-cmp-arrow-down' + '{' + 'background:' + 'url("data:image/svg+xml;charset=utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%23' + quantcastTheme.dropdownArrowColor.replace('#', '') + '\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M2 5l6 6 6-6\'/></svg>") 50% no-repeat' + '!important;' + '}' : '') + (quantcastTheme.additionalStyles ? quantcastTheme.additionalStyles : '') + '}';
        ref.parentNode.insertBefore(style, ref);
    }
}

function isNotEmptyCmp(obj) {
    return obj ? Object.getOwnPropertyNames(obj).length > 0 : false;
}
;
function generatePriceGranularity(priceGranularity) {
    streamampUtils.log('Setting price granularity to', priceGranularity)
    if (priceGranularity != 'custom') {
        return priceGranularity;
    }
    return {
        'buckets': [{
            'precision': 2,
            'min': 0,
            'max': 20,
            'increment': 0.01
        }, {
            'precision': 2,
            'min': 20,
            'max': 30,
            'increment': 0.1
        }, {
            'precision': 2,
            'min': 30,
            'max': 40,
            'increment': 0.25
        }, {
            'precision': 2,
            'min': 40,
            'max': 50,
            'increment': 0.5
        }]
    };
}

function streamampConfigAdUnitSlotKeyValue(adUnitCode, googleSlot) {
    if (streamampConfig.keyValues && streamampConfig.keyValues[adUnitCode]) {
        streamampConfig.keyValues[adUnitCode].forEach(function(keyValue) {
            keyValue = streamampUtils.normalizeKeyValue(keyValue);
            if (keyValue.value !== undefined) {
                googleSlot = googleSlot.setTargeting(keyValue.name, [keyValue.value]);
            } else {
                googleSlot = googleSlot.setTargeting(keyValue.name, []);
            }
            streamampUtils.logGpt('Setting custom targeting', keyValue, 'for ad unit', adUnitCode);
        });
    }
    return googleSlot;
}

function streamampConfigSlotSafeFrame(googleSlot, adUnit) {
    streamampUtils.logGpt('Setting force safe frame for ad unit', adUnit)
    return googleSlot.setForceSafeFrame(true)
}

function streamampDefineAdUnitSlot(adUnit, predefinedSlotIds) {
    var googleSlot
    var predefinedSlotId
    if (streamampConfig.predefinedSlotOverride === true) {
        if (streamampConfig.predefinedSlotOverrideMethod === 'metoffice') {
            if (typeof unitFn !== "undefined") {
                var adUnitsToFilter = [];
                for (var key in window['metoffice']['advertising']['requiredSlots']) {
                    if (window['metoffice']['advertising']['requiredSlots'].hasOwnProperty(key)) {
                        adUnitsToFilter.push(key);
                    }
                }
                predefinedSlotId = predefinedSlotIds.find(function(slotId) {
                    return adUnitsToFilter.indexOf(adUnit.code) !== -1 && adUnit.code === slotId;
                });
            }
        }
        if (predefinedSlotId) {
            googleSlot = googletag.pubads().getSlots().find(function(slot) {
                return slot.getSlotElementId() === predefinedSlotId;
            });
            adUnit.code = googleSlot.getSlotElementId();
            adUnit.path = googleSlot.getAdUnitPath();
        } else {
            pbjs.que.push(function() {
                pbjs.removeAdUnit(adUnit.code);
            });
            return;
        }
    } else {
        if (!adUnit.outOfPage) {
            googleSlot = googletag.defineSlot(adUnit.path, adUnit.breakpoints[_streamampVariables.currentBreakpoint.label], adUnit.code)
        } else {
            googleSlot = googletag.defineOutOfPageSlot(adUnit.path, adUnit.code);
        }
    }
    googleSlot = streamampConfigAdUnitSlotKeyValue(adUnit.code, googleSlot);
    if (googleSlot && adUnit.safeFrame) {
        googleSlot = streamampConfigSlotSafeFrame(googleSlot, adUnit);
    }
    if (!predefinedSlotId && googleSlot) {
        googleSlot = googleSlot.addService(googletag.pubads());
    }

    window.gptAdSlots[adUnit.code] = googleSlot;

    onSlotCreated(adUnit.code, googleSlot);

    streamampUtils.logGpt('Defining ad unit slot', {
        code: adUnit.code,
        path: adUnit.path,
        sizes: JSON.stringify(adUnit.mediaTypes.banner.sizes)
    });
    return googleSlot;
}

function streamampAddDNSPrefetch(urls) {
    if (urls && urls.length) {
        streamampUtils.log('Pre-fetching links', urls)
        var dnsPrefetchElement;
        var i;
        var node;
        for (i = 0; i < urls.length; i++) {
            dnsPrefetchElement = window.document.createElement('link');
            dnsPrefetchElement.rel = 'preconnect';
            dnsPrefetchElement.href = urls[i];
            node = window.document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(dnsPrefetchElement);
        }
    }
}

function streamampShouldShowAddUnit(adUnitCode) {
    if (window.AD_UNITS_TOGGLE_ON.length) {
        var toggleOn = window.AD_UNITS_TOGGLE_ON.indexOf(adUnitCode) !== -1;
        toggleOn ? streamampUtils.log('Ad unit', adUnitCode, 'is in AD_UNITS_TOGGLE_ON and should be shown') : null;
        return toggleOn;
    } else {
        var toggleOff = window.AD_UNITS_TOGGLE_OFF.indexOf(adUnitCode) === -1;
        toggleOff ? streamampUtils.log('Ad unit', adUnitCode, 'is not in AD_UNITS_TOGGLE_OFF and should be shown') : null;
        return toggleOff;
    }
}

function streamampAddClientTargeting() {
    var key;
    var keyValue;
    var i;
    var clientConfig = window[streamampConfig.namespace + 'ClientConfig'] || {};
    if (clientConfig && clientConfig.targets) {
        for (key in clientConfig.targets) {
            if (clientConfig.targets.hasOwnProperty(key)) {
                keyValue = {
                    name: key,
                    value: clientConfig.targets[key],
                    keyValueType: 'static'
                };
                keyValue = streamampUtils.normalizeKeyValue(keyValue);
                streamampUtils.logGpt('Setting custom targeting.', keyValue);
                googletag.pubads().setTargeting(keyValue.name, [keyValue.value]);
            }
        }
    }
    if (streamampConfig.globalKeyValues && streamampConfig.globalKeyValues.length) {
        for (i = 0; i < streamampConfig.globalKeyValues.length; i++) {
            keyValue = streamampConfig.globalKeyValues[i];
            keyValue = streamampUtils.normalizeKeyValue(keyValue);
            if (keyValue.value !== undefined) {
                googletag.pubads().setTargeting(keyValue.name, [keyValue.value]);
            } else {
                googletag.pubads().setTargeting(keyValue.name, []);
            }
        }
    }
}

function streamampGetBreakpoint() {
    var browserWidth = streamampUtils.getBrowserWidth();
    var i;
    var selectedBreakpoint;
    var breakpoint;
    for (i = 0; i < streamampConfig.breakpoints.length; i++) {
        breakpoint = streamampConfig.breakpoints[i];
        if (browserWidth >= breakpoint.minWidth && browserWidth <= breakpoint.maxWidth) {
            selectedBreakpoint = breakpoint;
            break;
        }
    }
    streamampUtils.log('Getting current breakpoint', selectedBreakpoint);
    return selectedBreakpoint;
}

function streamampGetAdUnitsPerBreakpoint() {
    var selectedBreakpoint = _streamampVariables.currentBreakpoint;
    var i;
    var adUnit;
    var filteredAdUnits = [];
    if (selectedBreakpoint) {
        for (i = 0; i < streamampConfig.adUnits.length; i++) {
            adUnit = streamampConfig.adUnits[i];
            var key
            if (streamampConfig.adUnits[i].breakpoints) {
                key = Object.keys(streamampConfig.adUnits[i].breakpoints)
            } else {
                key = []
            }
            if (adUnit && streamampShouldShowAddUnit(adUnit.code) && key.indexOf(selectedBreakpoint.label) !== -1) {
                adUnit.bids = adUnit.bids.filter(function(bid) {
                    return bid.labelAny.includes(selectedBreakpoint.label)
                })
                filteredAdUnits.push(adUnit);
            }
        }
    }
    streamampUtils.log('Filtering ad units for current breakpoint', filteredAdUnits)
    return filteredAdUnits;
}

function streamampRefreshBids(selectedAdUnits) {
    streamampUtils.log(selectedAdUnits ? ('Refreshing',
    selectedAdUnits) : 'Refreshing all ad units')
    var bidTimeout = _streamampVariables.bidTimeout
    var gptSlots = streamampGetAdUnitsPerBreakpoint();
    var apstagSlots;
    if (streamampConfig.a9Enabled) {
        apstagSlots = streamampCreateAPSAdUnits(gptSlots);
        if (selectedAdUnits) {
            if (Array.isArray(selectedAdUnits)) {
                apstagSlots = apstagSlots.filter(function(apstagSlot) {
                    return selectedAdUnits.indexOf(apstagSlot.slotID) > -1;
                });
            } else if (typeof selectedAdUnits === 'string') {
                apstagSlots = apstagSlots.filter(function(apstagSlot) {
                    return apstagSlot.slotID === selectedAdUnits
                })
            }
        }
        streamampUtils.logAps('Fetching bids for', apstagSlots)
        apstag.fetchBids({
            slots: apstagSlots,
            timeout: bidTimeout
        }, function(bids) {
            streamampUtils.logAps('Bids received (all)', bids, '(filtered out)', bids.filter(function(bid) {
                return bid.amzniid
            }))
        });
    }
    googletag.cmd.push(function() {
        var gptSlots = googletag.pubads().getSlots();
        var adUnitsToRefresh = [];
        var slotIds = [];
        if (selectedAdUnits) {
            var slots = {};
            for (i = 0; i < gptSlots.length; i++) {
                slot = gptSlots[i];
                slots[slot.getSlotElementId()] = slot;
            }
            if (Array.isArray(selectedAdUnits)) {
                for (var i = 0; i < selectedAdUnits.length; i++) {
                    adUnitsToRefresh.push(slots[selectedAdUnits[i]]);
                }
                slotIds = selectedAdUnits
            } else if (typeof selectedAdUnits === 'string') {
                adUnitsToRefresh = [slots[selectedAdUnits]];
                slotIds = [selectedAdUnits];
            }
        } else {
            adUnitsToRefresh = gptSlots
            slotIds = gptSlots.map(function(gptSlot) {
                return gptSlot.getSlotElementId()
            })
        }
        pbjs.que.push(function() {
            streamampUtils.logPbjs('Queuing requestBids()')
            pbjs.requestBids({
                timeout: bidTimeout,
                adUnitCodes: slotIds,
                bidsBackHandler: function() {
                    streamampAddClientTargeting();
                    streamampUtils.logPbjs('Queuing setTargetingForGPTAsync() for', slotIds)
                    pbjs.setTargetingForGPTAsync(slotIds);
                    streamampUtils.logGpt('Sending ad server request for', adUnitsToRefresh)
                    googletag.pubads().refresh(adUnitsToRefresh);

                    pbjs.isAuctionEnded = true;
                    processAuctionEndQueue();
                },
            })
            if (streamampConfig.a9Enabled) {
                streamampUtils.logAps('Setting display bids')
                apstag.setDisplayBids();
            }
        });
    })
}

function streamampRefresh(selectedAdUnits) {
    function generateRefreshTimeout() {
        var min = +streamampConfig.minRefreshTime || 60;
        var max = +streamampConfig.maxRefreshTime || 90;
        return (Math.floor(Math.random() * (max - min)) + min) * 1e3;
    }

    var refreshAds = function() {
        var refreshTimeout = generateRefreshTimeout()
        streamampUtils.log('Setting refresh', {
            selectedAdUnits: (selectedAdUnits ? selectedAdUnits : 'all'),
            refreshTimeout: refreshTimeout / 1e3 + ' seconds'
        });
        if (window.adRefreshTimer) {
            window.clearInterval(window.adRefreshTimer);
        }
        window.adRefreshTimer = setInterval(function() {
            if (streamampConfig.hasRefreshBids) {
                streamampRefreshBids(selectedAdUnits);
            }
        }, refreshTimeout);
    };
    refreshAds();
    window.onfocus = function() {
        refreshAds();
    }
    ;
    window.onblur = function() {
        streamampUtils.log('Refresh paused (interval cleared) due to window.onblur');
        window.clearInterval(window.adRefreshTimer);
        window.adRefreshTimer = null;
    }
    ;
}
;
function streamampDestroySlots(adUnitCodes) {
    streamampUtils.log('Destroying ad unit slots', adUnitCodes);
    var adUnitSlots = adUnitCodes.reduce(function(slots, adUnitCode) {
        slots.push(window.gptAdSlots[adUnitCode]);
        return slots;
    }, []);
    pbjs.que.push(function() {
        streamampUtils.logPbjs('Queuing removal of', adUnitCodes, 'from pbjs.adUnits')
        pbjs.adUnits = pbjs.adUnits.filter(function(adUnit) {
            return adUnitCodes.indexOf(adUnit.code) === -1;
        });
    });
    googletag.cmd.push(function() {
        streamampUtils.logGpt('Queuing destroySlots() for', adUnitSlots)
        googletag.destroySlots(adUnitSlots);
        adUnitSlots.forEach(function(adUnitCode) {
            delete window.gptAdSlots[adUnitCode];
        });
    });
}

function streamampCreateAPSAdUnits(adUnitsGPT) {
    var label = _streamampVariables.currentBreakpoint.label
    var googleSizes = [[320, 100], [970, 90], [468, 60], [120, 600], [300, 1050], [150, 30]]

    function filterGoogleSize(adUnits) {
        var googleSizejson = googleSizes.map(function(googleSize) {
            return JSON.stringify(googleSize)
        })
        var filterGoogleSizes = adUnits.filter(function(adUnit) {
            return !googleSizejson.includes(JSON.stringify(adUnit))
        })
        streamampUtils.logAps('Filtering out Google sizes')
        return filterGoogleSizes
    }

    var apstagSlots = adUnitsGPT.map(function(adUnit) {
        return {
            slotID: adUnit.code,
            slotName: adUnit.path,
            sizes: filterGoogleSize(adUnit.breakpoints[label])
        }
    });
    streamampUtils.logAps('Generating apstag slots', apstagSlots)
    return apstagSlots
}

var isElementInViewport = function(el) {
    var bounding = el.getBoundingClientRect();
    return (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
}

var auctionEndCallbacks = [];
var auctionEndQueue = {
    push: function(cb) {
        if (typeof cb === 'function') {
            pbjs.que.push(function() {
                if (pbjs.isAuctionEnded) {
                    cb.call();
                } else {
                    auctionEndCallbacks.push(cb);
                }
            });
        } else {
            streamampUtils.logError('Commands written into auctionEndQueue must be wrapped in a function');
        }
    }
};

function processAuctionEndQueue() {
    auctionEndCallbacks.forEach(function(cb) {
        if (typeof cb === 'function') {
            cb.call();
        } else {
            streamampUtils.logError('Commands written into auctionEndQueue must be wrapped in a function');
        }
    });
    auctionEndCallbacks = [];
}

window[streamampConfig.namespace] = window[streamampConfig.namespace] || {};
window[streamampConfig.namespace].que = window[streamampConfig.namespace].que || [];

processQueue()

function processQueue() {
    window[streamampConfig.namespace].que.forEach(function(cmd) {
        if (typeof cmd.called === 'undefined' && typeof cmd === 'function') {
            try {
                cmd.call();
                cmd.called = true;
            } catch (e) {
                streamampUtils.logError('Error processing command :' + e.message);
            }
        }
    });

    window[streamampConfig.namespace].que.push = function(cmd) {
        if (typeof cmd === 'function') {
            try {
                cmd.call();
            } catch (e) {
                streamampUtils.logError('Error processing command :' + e.message);
            }
        } else {
            streamampUtils.logError('Commands written into ', streamampConfig.namespace + '.cmd.push must be wrapped in a function');
        }
    }
    ;
}

function overrideGoogletagDisplay(config) {
    googletag.cmd.push(function() {
        var _googletagDisplay = googletag.display;
        googletag.display = function(adUnitCode) {
            streamampUtils.log('DEBUG:', 'googletag.display called for', adUnitCode);
            _googletagDisplay(adUnitCode);
            var slot = googletag.pubads().getSlots().find(function(slot) {
                return slot.getSlotElementId() === adUnitCode;
            });

            window[config.namespace].que.push(function() {
                // Code updated for the SRA with lazyloading.
                var pos1 = document.querySelector('#Position1');
                var sraArray = ["Top", "Top2", "Top3", "TopLeft", "TopRight"];
                if (pos1) {
                    (isElementInViewport(pos1)) ? sraArray.push("Position1") : sraArray;
                }
                auctionEndQueue.push(function() {
                    if (sraArray.includes(slot.getSlotElementId())) {
                        googletag.pubads().refresh([slot]);
                    }
                })
            })
        }
    })
}

function registerOnSlotCreated(cb) {
    streamampUtils.log('DEBUG:', 'Register onSlotCreated Events');
    onSlotCreatedEvents.push(cb);
}

function onSlotCreated(code, slot) {
    if (!onSlotCreatedEvents.length) {
        return;
    }

    streamampUtils.log('DEBUG:', 'Fire onSlotCreated Events');
    onSlotCreatedEvents.forEach(function(func) {
        func.call(this, {
            code: code,
            slot: slot
        });
    });
}

function copyToNewAdUnit(newAdUnitCode, originalAdUnitCode, callback) {
    if (!document.getElementById(newAdUnitCode)) {
        return;
    }

    streamampUtils.log('DEBUG:', 'Copy Ad Unit from', originalAdUnitCode, 'to', newAdUnitCode);

    pbjs.que.push(function() {
        pbjs.isAuctionEnded = false;

        var originalAdUnit = pbjs.adUnits.find(function(adUnit) {
            return adUnit.code === originalAdUnitCode;
        });
        if (!originalAdUnit) {
            return;
        }

        var newAdUnit = JSON.parse(JSON.stringify(originalAdUnit));
        newAdUnit.code = newAdUnitCode;
        delete newAdUnit.transactionId;

        pbjs.addAdUnits(newAdUnit);
        streamampDefineAdUnitSlot(newAdUnit, []);

        pbjs.requestBids({
            timeout: streamampConfig.bidTimeout,
            adUnitCodes: [newAdUnitCode],
            bidsBackHandler: function() {
                googletag.cmd.push(function() {
                    pbjs.setTargetingForGPTAsync();
                    streamampAddClientTargeting()

                    if (typeof callback === 'function') {
                        callback.call();
                    }

                    pbjs.isAuctionEnded = true;
                    processAuctionEndQueue();
                });
            }
        });

        if (streamampConfig.adUnitsToRefresh && streamampConfig.adUnitsToRefresh.length !== 0 && streamampConfig.adUnitsToRefresh.indexOf(originalAdUnitCode) !== -1) {
            streamampUtils.log('DEBUG:', 'Register copied ad unit', newAdUnitCode, 'to ad refreshing list');
            streamampConfig.adUnitsToRefresh.push(newAdUnitCode);
        }
    });
}

window.streamamp = {
    refreshAllBids: function() {
        streamampUtils.log('window.streamamp.refreshAllBids() was called')
        streamampRefreshBids()
    },
    refreshBids: function(selectedAdUnits) {
        if (selectedAdUnits.length > 0) {
            streamampUtils.log('window.streamamp.refreshBids() was called with', selectedAdUnits, 'ad unit(s)')
            streamampRefreshBids(selectedAdUnits)
        } else {
            streamampUtils.logError('refreshBids() must be passed an array of strings or a string of a single ad unit code')
        }
    },
    destroySlots: function(selectedAdUnits) {
        streamampDestroySlots(selectedAdUnits)
    },
    initialize: function() {
        if (streamampConfig.preventInit) {
            streamampUtils.log('window.streamamp.initialize() was called')
            streamampInit()
        }
    },
    que: window[streamampConfig.namespace].que,
    onSlotCreated: registerOnSlotCreated,
    auctionEndQueue: auctionEndQueue,
    copyToNewAdUnit: copyToNewAdUnit
};

Leya.setKey(streamampConfig.token);
