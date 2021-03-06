var streamampConfig = {
    gptSingleRequestEnabled: true,
    levelTargeting: false,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    refreshBidsTimeout: 90,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    adUnitsToRefresh: ["SA-Unit1", "SA-Unit2", "SA-Unit3", "SA-Unit4", "SA-Unit5", "SA-Unit6", "SA-Unit7", "SA-Unit8", "SA-Unit9", "SA-Unit10", "SA-Unit11", "SA-Unit12", "SA-Unit13", "SA-Unit14", "SA-Unit15", "SA-Unit16", "SA-Unit17", "SA-Unit19", "SA-Unit20", "SA-Sticky", "SA-Tablet", "SA-OutOfPage", "SA-RecommendationWidget", "SA-HomepageBillboard", "SA-Unit21", "Widget-320x50", "SA-Unit22-HomePage", "SA-Unit23-HomePage", "SA-Unit24-HomePage", "SA-Unit25-HomePage", "SA-Unit26-HomePage"],
    hasCollapsedEmptyDivs: true,
    publisher_id: 'Pocket-lint/pocket-lint-2',
    token: '1aejlUWVaAv14ZFfjjskPR5dhvF6psOSHzwj1cBZkeLZjuydMfMCXiBbkTFEXi4D',
    currency: {
        enabled: true,
        value: 'GBP'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    beforeInit: function () {
        var fn_pageskin = "false";
        if (screen.width >= 375) {
            fn_pageskin = "true";
        }
        googletag.cmd.push(function () {
            googletag.pubads().setTargeting("inskin_yes", fn_pageskin);
        });
        var PL_settings = window._pl_settings;
        googletag.cmd.push(function () {
            if (PL_settings && PL_settings.targeting) {
                for (index = 0,
                         length = PL_settings.targeting.length; index < length; ++index) {
                    googletag.pubads().setTargeting(PL_settings.targeting[index][0], PL_settings.targeting[index][1]);
                }
            }
        });
    },
    adUnits: [
        {
            code: 'SA-Unit1',
            path: '/92354202/SA-Unit1',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit1_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit1_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308251',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308252',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308249',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308250',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775393',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775393',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775393',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775393',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450612
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450611
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450613
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763783
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303396
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303397
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303393
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303394
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit2',
            path: '/92354202/SA-Unit2',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit2_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit2_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308255',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308256',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308253',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308254',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775395',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775395',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775395',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775395',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450616
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450615
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450617
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763785
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303410
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303417
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303399
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303403
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit3',
            path: '/92354202/SA-Unit3',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit3_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit3_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308260',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308259',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308258',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308257',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775396',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775396',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775396',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775396',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450618
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450619
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763787
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450620
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303437
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303436
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303434
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303423
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit4',
            path: '/92354202/SA-Unit4',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit4_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit4_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308263',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308264',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308262',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308261',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775397',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775397',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775397',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775397',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450622
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450621
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763789
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450623
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303440
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303441
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303439
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303438
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit5',
            path: '/92354202/SA-Unit5',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit5_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit5_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308268',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308267',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308265',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308266',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775398',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775398',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775398',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775398',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450624
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450625
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450626
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763795
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303451
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303450
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303444
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303449
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit6',
            path: '/92354202/SA-Unit6',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit6_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit6_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308273',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308271',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308269',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308270',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775399',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775399',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775399',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775399',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'pubmatic',
                    labelAny: ['990 - 9999'],
                    params: {
                        publisherId: '852486',
                        adSlot: 'pocket-lint_unit6_970x250'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450627
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450628
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450629
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763797
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303455
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303454
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303444
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303449
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit7',
            path: '/92354202/SA-Unit7',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit7_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit7_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308279',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308278',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308276',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308274',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775400',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775400',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775400',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775400',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450630
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450631
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763801
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450632
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303461
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303460
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303457
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303456
                    }
                }],
            breakpoints: {
                '990 - 9999': [[970, 250], [728, 90]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit8',
            path: '/92354202/SA-Unit8',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit8_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit8_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308283',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308282',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308281',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308280',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775401',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775401',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775401',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775401',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450633
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450634
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763802
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450635
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303469
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303468
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303465
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303462
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit9',
            path: '/92354202/SA-Unit9',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit9_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit9_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308302',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308296',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308295',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308286',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775402',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775402',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775402',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775402',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450636
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450637
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763803
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450638
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303477
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303476
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303473
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303470
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit10',
            path: '/92354202/SA-Unit10',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit10_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308305',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308306',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308304',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '308303',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775403',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775403',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775403',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775403',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450640
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450639
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763805
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450641
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303484
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303485
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303482
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303480
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit11',
            path: '/92354202/SA-Unit11',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'PocketLint_Unit11_300x600'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit11_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '399640',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308308',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308307',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775404',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775404',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775404',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16697355
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450642
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763810
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 17063092
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303487
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303486
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 600], [300, 250]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit12',
            path: '/92354202/SA-Unit12',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit12_300x250'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'PocketLint_Unit12_300x600'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308309',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308311',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308310',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775405',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775405',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775405',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450643
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 12557395
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763811
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303504
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303509
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303508
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 600], [300, 250]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit13',
            path: '/92354202/SA-Unit13',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'PocketLint_Unit13_300x600'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit13_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '399642',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308313',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308312',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775406',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775406',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775406',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16697357
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450644
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763813
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 17063096
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303515
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303512
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250], [300, 600]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit14',
            path: '/92354202/SA-Unit14',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'PocketLint_Unit14_300x600'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit14_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '399643',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308315',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308314',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775407',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775407',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775407',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16697358
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450645
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763814
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 17063099
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303522
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303518
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250], [300, 600]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit15',
            path: '/92354202/SA-Unit15',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'PocketLint_Unit15_300x600'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit15_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '399644',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308317',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308316',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775408',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775408',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775408',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16697359
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450646
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763819
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 17063102
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303526
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303523
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250], [300, 600]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit16',
            path: '/92354202/SA-Unit16',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382492,
                        publisherSubId: 'PocketLint_Unit16_300x600'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit16_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '399645',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308319',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308318',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775409',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775409',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775409',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16697360
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450647
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763820
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303532
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303529
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250], [300, 600]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-Unit17',
            path: '/92354202/SA-Unit17',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250], [300, 600], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit17_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308320',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '0 - 374'],
                    params: {
                        siteId: '308322',
                        size: [300, 600]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308321',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '538775411',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '0 - 374'],
                    params: {
                        unit: '538775411',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747'],
                    params: {
                        unit: '538775411',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 9450648
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '0 - 374'],
                    params: {
                        placementId: 9450649
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763823
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303535
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303538
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250], [300, 600]],
                '748 - 989': [[300, 250], [300, 600]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [300, 600]]
            }
        },
        {
            code: 'SA-Unit18',
            path: '/92354202/SA-Unit18',
            mediaTypes: {
                banner: {
                    sizes: [[970, 250], [1, 1]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999'],
                    params: {
                        zoneId: 1382488,
                        publisherSubId: 'PocketLint_Unit18_970x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '308323',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'justpremium',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zone: '70926',
                        allow: ['wp', 'wv']
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775412',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 9450650
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303544
                    }
                }],
            breakpoints: {
                '990 - 9999': [[970, 250], [1, 1]],
                '748 - 989': [[1, 1]]
            }
        },
        {
            code: 'SA-Unit20',
            path: '/92354202/SA-Unit20',
            mediaTypes: {
                banner: {
                    sizes: [[728, 90], [970, 250], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Unit20_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['748 - 989', '375 - 747'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit20_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308324',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999'],
                    params: {
                        siteId: '387854',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['748 - 989', '375 - 747'],
                    params: {
                        siteId: '387853',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '387852',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        unit: '538775414',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999'],
                    params: {
                        unit: '538775414',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['748 - 989', '375 - 747'],
                    params: {
                        unit: '538775414',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775414',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 9450651
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16401177
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['748 - 989', '375 - 747'],
                    params: {
                        placementId: 16401176
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16401173
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303549
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999'],
                    params: {
                        placementId: 16303555
                    }
                }],
            breakpoints: {
                '990 - 9999': [[728, 90], [970, 250]],
                '748 - 989': [[728, 90], [300, 250]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[320, 50], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-HomepageBillboard',
            path: '/92354202/SA-HomepageBillboard',
            mediaTypes: {
                banner: {
                    sizes: [[970, 250], [728, 90], [300, 250], [320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['748 - 989'],
                    params: {
                        zoneId: 1382489,
                        publisherSubId: 'PocketLint_Homepage_Billboard_728x90'
                    }
                }, {
                    bidder: 'criteo',
                    labelAny: ['748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Homepage_Billboard_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        siteId: '308326',
                        size: [970, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['748 - 989'],
                    params: {
                        siteId: '418574',
                        size: [728, 90]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        siteId: '308328',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747'],
                    params: {
                        siteId: '308327',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        unit: '540149673',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 13529280
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 13529282
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['748 - 989'],
                    params: {
                        placementId: 17318431
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 13763826
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989'],
                    params: {
                        placementId: 16303278
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['748 - 989'],
                    params: {
                        placementId: 17428280
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['748 - 989', '375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303392
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747'],
                    params: {
                        placementId: 16303389
                    }
                }],
            breakpoints: {
                '990 - 9999': [[970, 250]],
                '748 - 989': [[970, 250], [300, 250]],
                '375 - 747': [[300, 250], [320, 50], [320, 100]],
                '0 - 374': [[300, 250], [320, 50], [320, 100]]
            }
        },
        {
            code: 'SA-1x1-interscroller',
            path: '/92354202/SA-1x1-interscroller',
            mediaTypes: {
                banner: {
                    sizes: [[1, 1]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'justpremium',
                    labelAny: ['990 - 9999'],
                    params: {
                        zone: '70926',
                        allow: ['ci']
                    }
                }, {
                    bidder: 'justpremium',
                    labelAny: ['748 - 989'],
                    params: {
                        zone: '70926',
                        allow: ['ci']
                    }
                }, {
                    bidder: 'justpremium',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zone: '70926',
                        allow: ['is', 'mt', 'mo', 'ms']
                    }
                }],
            breakpoints: {
                '990 - 9999': [[1, 1]],
                '748 - 989': [[1, 1]],
                '375 - 747': [[1, 1]],
                '0 - 374': [[1, 1]]
            }
        },
        {
            code: 'SA-Unit21',
            path: '/92354202/SA-Unit21',
            mediaTypes: {
                banner: {
                    sizes: [[320, 50], [320, 100]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '375 - 747',
                        '0 - 374'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        zoneId: 1382490,
                        publisherSubId: 'PocketLint_Unit21_320x50'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        siteId: '318260',
                        size: [320, 50]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        unit: '538775412',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 14356560
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['375 - 747', '0 - 374'],
                    params: {
                        placementId: 16303561
                    }
                }],
            breakpoints: {
                '375 - 747': [[320, 50], [320, 100]],
                '0 - 374': [[320, 50]]
            }
        },
        {
            code: 'Widget-320x50',
            path: '/92354202/Widget',
            mediaTypes: {
                banner: {
                    sizes: [[320, 50]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: []
        },
        {
            code: 'SA-Unit22-HomePage',
            path: '/92354202/SA-Unit22-HomePage',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit22_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        siteId: '389151',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        unit: '540798220',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 16427015
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 17063115
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250]],
                '748 - 989': [[300, 250]],
                '375 - 747': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit23-HomePage',
            path: '/92354202/SA-Unit23-HomePage',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit23_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        siteId: '389152',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        unit: '540798221',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 16427025
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 17063119
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250]],
                '748 - 989': [[300, 250]],
                '375 - 747': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit24-HomePage',
            path: '/92354202/SA-Unit24-HomePage',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit24_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        siteId: '389153',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        unit: '540798222',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 16427029
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 17063125
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250]],
                '748 - 989': [[300, 250]],
                '375 - 747': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit25-HomePage',
            path: '/92354202/SA-Unit25-HomePage',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit25_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        siteId: '389154',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        unit: '540798224',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 16427032
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 17063130
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250]],
                '748 - 989': [[300, 250]],
                '375 - 747': [[300, 250]]
            }
        },
        {
            code: 'SA-Unit26-HomePage',
            path: '/92354202/SA-Unit26-HomePage',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]]
                }
            },
            isSticky: false,
            safeFrame: false,
            outOfPage: false,
            bids: [
                {
                    bidder: 'conversant',
                    labelAny: [
                        '990 - 9999',
                        '748 - 989',
                        '375 - 747'
                    ],
                    params: {
                        site_id: '200686',
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        zoneId: 1382491,
                        publisherSubId: 'PocketLint_Unit26_300x250'
                    }
                }, {
                    bidder: 'ix',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        siteId: '389155',
                        size: [300, 250]
                    }
                }, {
                    bidder: 'openx',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        unit: '540798225',
                        delDomain: 'streamamp-d.openx.net'
                    }
                }, {
                    bidder: 'streamamp',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 16427036
                    }
                }, {
                    bidder: 'totaljobs',
                    labelAny: ['990 - 9999', '748 - 989', '375 - 747'],
                    params: {
                        placementId: 17063132
                    }
                }],
            breakpoints: {
                '990 - 9999': [[300, 250]],
                '748 - 989': [[300, 250]],
                '375 - 747': [[300, 250]]
            }
        }],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
            'No Option': false,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [1, 2, 3, 4, 5],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Title Text': 'Cookies & Advertising',
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Name': 'Pocket Lint',
            'Publisher Logo': 'https://static.amp.services/logos/pocketlint.png',
            'Display Persistent Consent Link': false
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
    breakpoints: [{
        label: '990 - 9999',
        minWidth: 990,
        maxWidth: 9999,
        sizesSupported: [[728, 90], [970, 250], [300, 600], [300, 250], [1, 1]]
    }, {
        label: '748 - 989',
        minWidth: 748,
        maxWidth: 989,
        sizesSupported: [[728, 90], [300, 250], [300, 600], [970, 250], [1, 1]]
    }, {
        label: '375 - 747',
        minWidth: 375,
        maxWidth: 747,
        sizesSupported: [[300, 250], [320, 50], [1, 1]]
    }, {
        label: '0 - 374',
        minWidth: 0,
        maxWidth: 374,
        sizesSupported: [[300, 250], [320, 50], [1, 1], [300, 600]]
    }]
}
