function _cMap_ini_use(a) {
	var b, c, d, e = a.tplsCtrl,
		f = a.mapBoxID,
		g = BID.sentimBlock(f).title([]).tabTils([]),
		h = g.getEl("tabUl")[0].id,
		i = T("#" + f + " .R_paper"),
		j = BID.gsid(i[0]),
		k = {
			Industry: "getIndRegion/"
		}[e] || "getRegion/",
		l = BID.cMap({
			divID: j,
			userIn: e,
			padds: a.padds
		}),
		m = BID.cityIDname(),
		n = BID.getParams(),
		o = b = -1,
		p = c = "",
		q = d = -1;
	b = n.area[0], c = "prov", d = 0, a.city && (b = a.city), a.tag && a.tag > 0 && a.tag < n.word.length && (d = a.tag), "city" == a.tab || "prov" == a.tab ? c = a.tab : a.tab = "", T("#" + h + " .tabLi").each(function(a) {
		a == d ? T(this).addClass("curr") : T(this).removeClass("curr")
	});
	var r = function(b) {
			if ("0" != b) {
				var d = m.city(b);
				d.pid && (b = d.pid)
			}
			var e = BID.cMapUtil.getEid(b);
			return e || (e = b = "0"), l.drawMain(e), l.divBackNav("0" != e ? m.getName(b) : ""), c = "0" != e ? "city" : a.tab ? a.tab : "prov", T("#" + l.opts.divID).siblings(".R_copyright").css({
				right: l.opts.padds.right
			}), b
		},
		s = function() {
			if (b != o || c != p || d != q) {
				l.tipHide();
				try {
					l.sets.stsExtp.ctShadow.hide()
				} catch (a) {}
				o = b, l.ctyRegion = b, q = d, l.tagIndex = d;
				var e = document.getElementById("areaName");
				"area" === c ? e.style.display = "block" : e.style.display = "none", l.drawCitys(d, c), l.drawPoints(d, c), l.drawValv(d, c), l.divBars(d, c), p = c, l.tabVal = c
			}
		},
		t = function(c) {
			c = b = r(c), BID.dataInterface("Region/" + k, "region=" + c, function(b) {
				var d = BID.getParams.C32().tags,
					e = (b.data || {}).region;
				if (!e) {
					e = [];
					for (var f = d.length; f--;) e[f] = {
						key: d[f]
					}
				}
				l.setDatas(e), l.dataCache[c] = e, s(), window.pageStatus = !0, a.funCbk && a.funCbk()
			}, {
				loading: i.parent()[0]
			})
		};
	return BID.evts.care(h + "_tabClick", function(a) {
		l.raise("tagClick", null, a)
	}), BID.evts.care("width_resize", l.forceResize = function() {
		l.paperSize(), q = -1, s(), T("#" + l.opts.divID).siblings(".R_copyright").css({
			right: l.opts.padds.right
		})
	}, {
		gt: 500
	}), l.care("tagClick", function(a) {
		d = a, s()
	}).care("tabClick", function(a) {
		c = a, s()
	}).care("cityClick", function(a) {
		if ("Industry" != e && "area" !== c) {
			var d = BID.cMapUtil.getPid(a);
			if ("0" != d) {
				if (!d || !m.citys(d)) return;
				if (isNaN(l.sets.stsCity.eid[a].data("index"))) return
			}
			l.dataCache[d] ? (b = r(d), l.setDatas(l.dataCache[d]), s()) : t(d)
		}
	}).care("cityHover", function(a) {
		this.tipCity(a, c)
	}).care("cityHout", function(a) {
		this.tipCity()
	}), t(b), l
}
var ecmpDataPts = {
	cityIDs: "0,11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82,110101,110102,110103,110104,110105,110106,110107,110108,110109,110111,110112,110113,110114,110115,110116,110117,110228,110229,120101,120102,120103,120104,120105,120106,120107,120108,120109,120110,120111,120112,120113,120114,120115,120221,120223,120225,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1501,1502,1503,1504,1505,1506,1507,1508,1509,1522,1525,1529,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2201,2202,2203,2204,2205,2206,2207,2208,2224,2301,2302,2303,2304,2305,2306,2307,2308,2309,2310,2311,2312,2327,310101,310103,310104,310105,310106,310107,310108,310109,310110,310112,310113,310114,310115,310116,310117,310118,310119,310120,310230,3201,3202,3203,3204,3205,3206,3207,3208,3209,3210,3211,3212,3213,3301,3302,3303,3304,3305,3306,3307,3308,3309,3310,3311,3401,3402,3403,3404,3405,3406,3407,3408,3410,3411,3412,3413,3414,3415,3416,3417,3418,3501,3502,3503,3504,3505,3506,3507,3508,3509,3601,3602,3603,3604,3605,3606,3607,3608,3609,3610,3611,3701,3702,3703,3704,3705,3706,3707,3708,3709,3710,3711,3712,3713,3714,3715,3716,3717,4101,4102,4103,4104,4105,4106,4107,4108,4109,4110,4111,4112,4113,4114,4115,4116,4117,4201,4202,4203,4205,4206,4207,4208,4209,4210,4211,4212,4213,4228,429004,429005,429006,429021,4301,4302,4303,4304,4305,4306,4307,4308,4309,4310,4311,4312,4313,4331,4401,4402,4403,4404,4405,4406,4407,4408,4409,4412,4413,4414,4415,4416,4417,4418,4419,4420,4451,4452,4453,4501,4502,4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4601,4602,469001,469002,469003,469005,469006,469007,469025,469026,469027,469028,469030,469031,469033,469034,469035,469036,500101,500102,500103,500104,500105,500106,500107,500108,500109,500110,500111,500112,500113,500114,500115,500116,500117,500118,500119,500222,500223,500224,500225,500226,500227,500228,500229,500230,500231,500232,500233,500234,500235,500236,500237,500238,500240,500241,500242,500243,5101,5103,5104,5105,5106,5107,5108,5109,5110,5111,5113,5114,5115,5116,5117,5118,5119,5120,5132,5133,5134,5201,5202,5203,5204,5222,5223,5224,5226,5227,5301,5303,5304,5305,5306,5307,5308,5309,5323,5325,5326,5328,5329,5331,5333,5334,5401,5421,5422,5423,5424,5425,5426,6101,6102,6103,6104,6105,6106,6107,6108,6109,6110,6201,6202,6203,6204,6205,6206,6207,6208,6209,6210,6211,6212,6229,6230,6301,6321,6322,6323,6325,6326,6327,6328,6401,6402,6403,6404,6405,6501,6502,6521,6522,6523,6527,6528,6529,6530,6531,6532,6540,6542,6543,659001,659002,659003,659004,7100,8100,8200",
	cityPts: "28523,21087,42978,16644,43945,17688,41923,19501,38935,19886,44121,11536,48867,15601,52998,12469,54668,6317,47988,27851,46582,25818,47021,30597,43769,26917,44824,34552,42539,32849,45263,21423,39990,24609,38759,28016,38056,32739,39990,38452,34804,37408,36474,42957,34277,29224,29443,29224,33134,33288,28388,35486,15293,27356,36123,22412,22236,16754,22763,22687,32519,20324,11425,14777,47548,37463,40781,39057,40078,39277,42941,17041,42886,17043,42940,17111,42883,17106,43021,17026,42791,17173,42712,17043,42743,16932,42323,16967,42368,17317,43253,17196,43247,16759,42701,16696,42995,17418,43161,16184,43694,16706,43615,16322,42677,16301,43724,18063,43780,18061,43760,18112,43676,18078,43738,18009,43683,18004,44203,18213,44412,17938,43911,18516,43924,18059,43706,18209,43919,18262,43699,17893,43585,17697,43950,17473,44203,17731,43505,18423,43990,16957,41023,19336,45000,17358,45736,16933,41001,21293,41330,20359,41572,18093,41671,15896,44099,15202,43352,19199,43044,18148,42407,19817,38858,19536,40308,17207,40001,19343,39386,21368,39309,22419,39594,17338,39298,20249,37672,22962,38979,18341,38001,21759,37880,19796,37935,16349,36870,15099,33409,17619,45197,12882,47999,12003,35496,17901,47329,4188,34079,15312,39100,14749,47911,9283,42165,11742,28542,16837,49647,14309,48746,17661,49603,16204,51108,14639,50669,15463,51064,16432,48186,15176,48955,16424,48526,14124,49932,15539,48471,15656,50800,13534,46593,15099,46681,16239,52338,11639,53360,12456,51064,12601,51866,13507,52481,14639,53745,14344,50614,11062,49526,10382,55920,12888,54492,10252,51064,7484,59315,9792,56964,7327,60117,8522,51295,8927,55722,7011,59524,7492,57799,9517,56305,11076,53668,5342,53239,8459,50625,1668,48010,27938,47999,27953,47956,28011,47908,27947,47971,27926,47911,27887,47974,27863,48011,27863,48051,27841,48022,28107,47958,27706,47767,27758,48216,27892,47789,28448,47721,28178,47698,27973,48399,28269,48098,28402,48087,27539,45329,27061,46867,27521,44044,24053,45977,27514,47175,27713,47625,26758,45648,23772,45450,25207,46746,25014,45988,25942,45999,26999,46582,26271,45077,24739,46054,29616,48120,29903,47021,32197,47439,28668,46384,28489,47087,29766,46527,30583,45208,30878,48779,29183,47658,31126,46087,31731,43813,26889,44879,28104,43934,25578,43308,25997,45153,27542,43220,24849,44461,28289,43275,28804,44571,29519,44714,26292,42286,25722,44044,24857,44296,27589,42835,27171,42714,25124,43912,29211,45329,28682,45977,34559,44692,36152,45615,35279,44055,34086,44846,35568,44099,36496,44659,32856,43330,35458,46175,33234,42528,31133,43857,30308,40451,32609,41945,30241,41473,32191,43604,31668,41803,34697,41407,33254,41539,31558,42967,32596,44384,31051,43681,20874,46988,21541,44560,21204,43846,23346,45230,20023,47263,20071,45615,21307,43352,22789,43549,21897,48471,20538,45802,22584,44176,21623,44835,22844,43209,20448,42440,21458,44340,20092,42143,22954,39990,23683,41099,23697,38584,24067,39495,24788,41056,21959,40902,22282,40726,22762,39364,23023,41715,22213,40221,24403,40396,24843,37353,24067,38924,25667,42264,24108,41352,26937,41396,24843,40682,25832,40913,28633,41539,29561,37035,26477,37694,28509,38463,27054,41253,28949,39199,28214,40473,28063,39814,29451,41792,28633,40781,29883,39957,27116,36024,29142,39902,29087,39287,29011,39550,28661,36980,27487,39605,31641,40056,33172,39067,32327,38935,33474,37485,33447,39759,30542,37924,30377,37035,30302,38254,31483,39759,34628,38232,34772,36474,32657,38166,32313,36309,31119,40034,37937,40319,36083,41067,38782,40254,39317,43692,37786,39419,38074,39155,39277,36881,40726,37529,39434,38650,37484,41143,38006,42649,36771,42099,38157,41440,36997,38353,39372,39441,36551,40418,38336,39946,38864,43308,37176,42649,37821,38309,38397,35002,38068,35903,35741,37078,35314,37518,37581,35837,39936,34574,39551,35551,39344,36463,37779,36738,38988,33123,37058,37837,36461,34387,36234,36233,37162,33859,38871,36912,42147,35895,43999,36051,43424,36944,42932,35852,42506,37414,42234,36837,43413,35373,43161,36861,42624,36561,42759,36517,42298,36219,42204,35893,42948,35564,42944,35551,43674,36515,43784,36151,43698,36364,43119,34914,28592,33859,29862,33057,30027,33014,30186,33354,29938,32893,29938,32882,30206,33189,30041,33090,29602,33431,30796,32310,30096,33244,29649,33255,30186,35244,30123,33684,29492,32739,30728,32849,29327,32387,30391,33695,30549,33178,30941,32299,29319,32552,29704,32277,29944,32036,30123,32728,29986,34266,28647,35299,27074,34365,29581,33980,29156,34178,30274,34420,29059,34936,27892,35354,28201,35914,28303,36408,28063,35859,27611,34804,29333,35540,31311,35343,30878,34727,30213,30476,28509,31190,30363,28213,33571,31981,31346,31003,28071,31256,27123,32212,26677,32058,28627,31377,29944,30102,30494,32728,28022,30333,29443,31179,31277,33156,28914,34134,27796,29190,29594,33585,26964,31497,29264,29004,26394,26444,28112,28487,32368,33222,33502,31278,34346,33431,31744,32431,34477,35145,31949,32058,35218,31684,33131,34947,33941,33772,34662,29443,35129,30465,34833,28454,37099,25587,35727,30619,32458,26971,33268,27268,37683,26136,36893,28125,35259,29564,37457,31410,37498,27421,39633,26477,34861,24653,36228,25675,33763,25982,32046,17710,29278,23543,28578,18731,31538,12766,30076,14721,25309,8888,26003,21983,30569,35639,24212,35562,22968,33706,24033,34936,23373,36309,23174,35628,21431,33409,25694,36397,19206,35639,25997,36331,24761,30113,21582,24697,17207,28597,18821,31388,21327,32168,23676,29542,19329,26323,18533,33596,22811,22785,16397,34057,21712,31080,23106,31827,25008,29795,22494,29443,23601,27927,20936,28894,21588,26894,19569,28092,23064,26894,22034,25905,24403,20116,24541,21500,20572,32882,19239,33003,18209,33376,20242,32662,22042,31926,20771,14447,12477,11810,10081,16161,13946,20302,13307,16204,11398,8371,11089,14688,17462,9503,15683,1153,17558,3691,19646,7690,20729,9074,12524,13150,9648,14820,8096,12546,11598,7800,16143,5658,17118,14062,11584,47553,37452,40801,39079,40095,39264"
};
! function(a) {
	a = a || window;
	var b, c, d = "cmapIDs",
		e = function() {
			if (b && c) return e;
			b = e.e2p = {}, c = e.p2e = {};
			for (var a, d = f.length; d--;) a = f[d].split(","), b[a[0]] = a[1], c[a[1]] = a[0];
			return c[514] = "11", c[164] = "12", c[57] = "31", c[11] = "50", b[0] = "0", c[0] = "0", e
		},
		f = e.strArr = {
			a: ["11,911", "12,923", "13,920", "14,929", "15,905", "21,907", "22,922", "23,921", "31,910", "32,916", "33,917", "34,928", "35,909", "36,903", "37,901", "41,927", "42,906", "43,908", "44,913", "45,912", "46,930", "50,904", "51,914", "52,902", "53,915", "54,932", "61,924", "62,925", "63,918", "64,919", "65,926", "71,931", "81,933", "82,934", "8100,663", "8200,664", "1301,141", "1302,261", "1303,146", "1304,292", "1305,293", "1306,259", "1307,144", "1308,145", "1309,148", "1310,147", "1311,143", "1401,231", "1402,227", "1403,236", "1404,228", "1405,234", "1406,235", "1407,230", "1408,233", "1409,229", "1410,232", "1411,237", "1501,20", "1502,13", "1503,16", "1504,21", "1505,22", "1506,14", "1507,25", "1508,15", "1509,331", "1522,333", "1525,19", "1529,17", "2101,150", "2102,29", "2103,215", "2104,222", "2105,220", "2106,219", "2107,217", "2108,221", "2109,223", "2110,224", "2111,151", "2112,218", "2113,216", "2114,225", "2201,154", "2202,270", "2203,155", "2204,191", "2205,407", "2206,408", "2207,194", "2208,410", "2224,525", "2301,152", "2302,319", "2303,323", "2304,301", "2305,359", "2306,153", "2307,295", "2308,320", "2309,302", "2310,322", "2311,300", "2312,324", "2327,297", "3201,125", "3202,127", "3203,161", "3204,162", "3205,126", "3206,163", "3207,156", "3208,157", "3209,160", "3210,158", "3211,169", "3212,159", "3213,172", "3301,138", "3302,289", "3303,149", "3304,304", "3305,305", "3306,303", "3307,135", "3308,288", "3309,306", "3310,287", "3311,134", "3401,189", "3402,188", "3403,187", "3404,178", "3405,185", "3406,183", "3407,173", "3408,186", "3410,174", "3411,182", "3412,184", "3413,179", "3414,177", "3415,181", "3416,391", "3417,175", "3418,176", "3501,50", "3502,54", "3503,51", "3504,52", "3505,55", "3506,56", "3507,253", "3508,53", "3509,87", "3601,5", "3602,137", "3603,136", "3604,6", "3605,246", "3606,7", "3607,10", "3608,115", "3609,256", "3610,8", "3611,9", "3701,1", "3702,77", "3703,81", "3704,85", "3705,82", "3706,78", "3707,80", "3708,352", "3709,353", "3710,88", "3711,366", "3712,356", "3713,79", "3714,86", "3715,83", "3716,76", "3717,84", "4101,168", "4102,264", "4103,378", "4104,266", "4105,370", "4106,374", "4107,263", "4108,265", "4109,380", "4110,268", "4111,379", "4112,381", "4113,262", "4114,376", "4115,373", "4116,375", "4117,371", "4201,28", "4202,30", "4203,36", "4205,35", "4206,32", "4207,39", "4208,34", "4209,41", "4210,31", "4211,33", "4212,40", "4213,37", "4228,38", "429004,42", "429005,74", "429006,73", "4301,43", "4302,46", "4303,47", "4304,45", "4305,405", "4306,44", "4307,68", "4308,226", "4309,48", "4310,49", "4311,269", "4312,67", "4313,66", "4331,65", "4401,95", "4402,201", "4403,94", "4404,200", "4405,212", "4406,196", "4407,198", "4408,197", "4409,203", "4412,209", "4413,199", "4414,211", "4415,213", "4416,210", "4417,202", "4418,208", "4419,133", "4420,207", "4451,204", "4452,205", "4453,195", "4501,90", "4502,89", "4503,91", "4504,132", "4505,128", "4506,130", "4507,129", "4508,93", "4509,118", "4510,131", "4511,92", "4512,119", "4513,506", "4601,239", "4602,243", "469001,582", "469002,242", "469003,244", "469006,241", "469007,456", "5101,97", "5103,111", "5104,112", "5105,103", "5106,106", "5107,98", "5108,99", "5109,100", "5110,102", "5111,107", "5113,104", "5114,291", "5115,96", "5116,108", "5117,113", "5118,114", "5119,101", "5120,109", "5132,457", "5133,417", "5134,479", "5201,2", "5202,4", "5203,59", "5204,424", "5222,422", "5223,588", "5224,426", "5226,61", "5227,3", "5301,117", "5303,339", "5304,123", "5305,438", "5306,335", "5307,342", "5308,662", "5309,350", "5323,124", "5325,337", "5326,437", "5329,334", "5401,466", "5421,311", "5423,516", "5424,655", "5426,656", "6101,165", "6102,271", "6103,273", "6104,277", "6105,275", "6106,401", "6107,276", "6108,278", "6109,272", "6110,274", "6201,166", "6202,286", "6203,343", "6204,309", "6205,308", "6206,283", "6207,285", "6208,307", "6209,284", "6210,281", "6211,282", "6212,344", "6229,346", "6301,139", "6321,652", "6327,659", "6328,608", "6401,140", "6402,472", "6403,395", "6404,396", "6405,480", "6501,467", "6502,317", "6521,310", "6522,312", "6527,318", "6528,499", "6529,315", "6530,653", "6531,384", "6532,386", "6540,660", "6542,563", "6543,383", "659001,280", "659004,661"]
		}.a;
	return a[d] = e
}(BID),
function(a, b, c) {
	c = c || window;
	var d = "cMapUtil",
		e = c.cmapIDs(),
		f = function() {
			return this instanceof f ? void 0 : new f
		},
		g = (f.getEid = function(a) {
			return "0" === a ? "0" : e.p2e[a] || ""
		}, f.getPid = function(a) {
			return "0" === a ? "0" : e.e2p[a] || ""
		}, f.getCityDatas = function(b, c) {
			var d;
			if (d = c ? a[c].Ct[b] : a[b], !d)
				for (var e in a)
					if (d = a[e].Ct[b]) break;
			return d && "string" == typeof d.Gc && (d.Gc = g(d.Gc)), d
		}, f.getCityPoint = function(a) {
			if (b[0]) return b[a];
			for (var c = b.cityIDs.split(","), d = b.cityPts.split(","), e = c.length; e--;) b[c[e]] = [+d[2 * e], +d[2 * e + 1]];
			return b[a]
		}, f.getPoints = function(a) {
			for (var b = [], c = a.split(","), d = "", e = [], f = 0, g = c.length; g > f; f++)
				if (d = c[f], d.length < 4) e.push(d);
				else if ("-" === d.charAt(0))[].push.apply(e, d.slice(1).split(""));
			else
				for (var h = 0, i = d.length; i > h; h += 2) e.push(d.slice(h, h + 2));
			var j = parseInt(e[0], 36),
				k = parseInt(e[1], 36),
				l = 0,
				m = 0;
			b.push([j, k]);
			for (var f = 0, g = e.length;
				(f += 2) < g;) l = parseInt(e[f], 36), m = parseInt(e[f + 1], 36), isNaN(l) ? b.push(["M", "M"]) : (j += l % 2 ? -(l + 1) / 2 : l / 2, k += m % 2 ? -(m + 1) / 2 : m / 2, b.push([j, k]));
			return b
		}),
		h = (f.getPaths = function(a, b) {
			for (var c = {}, d = ["M", a[0][0], a[0][1], "L"], e = 0, f = 0; f = a[++e];) isNaN(f[0]) ? (e += 1, d.push("M", a[e][0], a[e][1], "L")) : d.push(f[0] + " " + f[1]);
			if (c.svg = d.join(" "), !b) return c;
			for (var g = 21600, d = ["m" + (a[0][0] * g | 0) + "," + (a[0][1] * g | 0) + " l" + (a[1][0] * g | 0) + "," + (a[1][1] * g | 0)], e = 1, f = 0; f = a[++e];) isNaN(f[0]) ? (e += 1, d[d.length - 1] = d[d.length - 1] + " m" + (a[e][0] * g | 0), d.push((a[e][1] * g | 0) + " l" + (a[e + 1][0] * g | 0)), d.push(a[e + 1][1] * g | 0), e += 1) : d.push(f[0] * g | 0, f[1] * g | 0);
			return c.vml = d.join(",") + " e", c
		}, f.moveXYz = function(a, b, d) {
			d = d || 1;
			var e = b[0],
				f = b[1],
				g = [];
			return c.each(a, function(a, b) {
				g.push([+((b[0] + e) * d).toFixed(1), +((b[1] + f) * d).toFixed(1)])
			}), g
		}, f.getMMN = function(a) {
			for (var b = 2e9, c = 0, d = a.length; d--;) {
				var e = a[d];
				e > c && (c = e), b > e && (b = e)
			}
			return [b, c]
		});
	f.getMMO = function(a, b) {
		b = b || h(a);
		for (var c = [], d = a.length; d--;) c[d] = a[d] / b[1] || 0, a[d] !== a[d] && (c[d] = NaN);
		return c
	}, f.getMMK = function(a, b) {
		b = b || h(a);
		for (var c = b[0], d = b[1], e = d - c, f = [], g = a.length; g--;) 0 == e ? f[g] = 0 == d ? 0 : 1 : f[g] = (a[g] - c) / e;
		return f
	};
	return c.sCopy(f.prototype, f), c[d] = f
}(ecmpData, ecmpDataPts, BID),
function(a) {
	a = a || window;
	var b = "cMap",
		c = a.cMapUtil,
		d = a.sCopy,
		e = function(a) {
			return new f(a)
		},
		f = e.fn = function(a) {
			this.tagIndex = -1, this.tabVal = "", this.dataCache = {}, this.opts = a, this.sets = {
				stsExtp: {},
				stsTitl: {},
				stsTags: {},
				stsBars: {},
				stsVals: {},
				stsCity: {},
				stsText: {},
				stsPoint: {},
				stsLayer: {}
			}, this.xys = {}, this.paper = Raphael(a.divID), a.city = d(a.city || {}, this.OPTS.city), a.cityP = d(a.cityP || {}, this.OPTS.cityP), this.paper.gsid = BID.gsid()
		};
	f.OPTS = {
		city: {
			fill: "#aa8866",
			stroke: "#fefefe",
			"stroke-width": 1
		},
		cityP: {
			fill: "#fe7727",
			stroke: "#ffffff",
			"stroke-width": 3,
			"stroke-opacity": .5
		},
		padds: {
			title: 66,
			left: 20,
			right: 25,
			bottom: 20,
			tagHig: 0,
			barWid: 260,
			barLft: 30,
			valHig: 40
		}
	}, f.paperSize = function() {
		var a = T("#" + this.opts.divID),
			b = a.width(),
			c = a.height();
		return (this.width != b || this.height != c) && (this.width = b, this.height = c, this.paper.setSize(b, c), this.drawMain(this.opts.outerCity)), this
	}, f.drawMain = function(b) {
		b = b || "0";
		var e = this.paper,
			f = e.width,
			g = e.height,
			h = c.getCityDatas(b),
			i = this.sets,
			j = this.xys,
			k = this.opts;
		k.padds = d(k.padds || {}, this.OPTS.padds);
		var l = k.padds;
		l.width = f, l.height = e.height;
		var m = l.left,
			n = l.title + l.tagHig,
			o = l.right + l.barWid + l.barLft,
			p = l.bottom + l.valHig,
			q = e.width - m - o,
			r = e.height - n - p;
		k.outerCity != b && (k.outerCity = b, i.stsExtp.ctShadow && i.stsExtp.ctShadow.hide(), this.tipHide()), j.mapLeft = m, j.mapWidth = q, j.mapTop = n, j.mapHeight = r, j.Wd = h.Wd, j.Hg = h.Hg, j.Po = [-h.Po[0], -h.Po[1]];
		var s = Math.min(q / j.Wd, r / j.Hg);
		if (j.Po[0] += m / s + (q - j.Wd * s) / 2 / s, j.Po[1] += n / s + (r - j.Hg * s) / 2 / s, j.Zo = s, this.varsBars) {
			var t = T("#" + this.varsBars.divID + " .scrolls"),
				u = BID.createScroll.inis,
				v = g - l.title - l.tagHig - l.bottom - 20 - 24;
			t.height(v), u && u[t[0].id] && (u[t[0].id].update(), t.children().height(v))
		}
		return (this.sets.stsExtp.noData || (this.sets.stsExtp.noData = e.text(0, 0, a.sTips.noData).hide())).attr(a.sTips.noDataAttr), this
	};
	var g = {
			part: {
				"东北": ["辽宁", "黑龙江", "吉林"],
				"华东": ["上海", "江苏", "浙江", "山东", "江西", "福建", "安徽"],
				"华中": ["湖北", "湖南", "河南"],
				"华北": ["北京", "天津", "河北", "山西", "内蒙古"],
				"华南": ["广东", "海南", "台湾", "广西"],
				"西北": ["青海", "宁夏", "陕西", "甘肃", "新疆"],
				"西南": ["重庆", "四川", "云南", "贵州", "西藏"]
			},
			prov: {
				"北京": "911",
				"上海": "910",
				"广东": "913",
				"天津": "923",
				"河南": "927",
				"四川": "914",
				"重庆": "904",
				"江苏": "916",
				"湖北": "906",
				"浙江": "917",
				"福建": "909",
				"黑龙江": "921",
				"山东": "901",
				"陕西": "924",
				"河北": "920",
				"辽宁": "907",
				"吉林": "922",
				"云南": "915",
				"新疆": "926",
				"广西": "912",
				"山西": "929",
				"湖南": "908",
				"江西": "903",
				"安徽": "928",
				"内蒙古": "905",
				"甘肃": "925",
				"海南": "930",
				"贵州": "902",
				"宁夏": "919",
				"青海": "918",
				"西藏": "932",
				"台湾": "931",
				"香港": "933",
				"澳门": "934"
			}
		},
		h = function() {
			var a = g.prov,
				b = g.part,
				c = {};
			return _.each(b, function(b, d) {
				_.each(b, function(b) {
					a[b] && (c[a[b]] = d)
				})
			}), c
		}();
	f.setDatas = function(b) {
		var d = this.datas = {},
			e = d.tagItems = [],
			f = d.mapDatas = [],
			h = d.barDatas = [];
		this.sourceDatas = b, a.each(b, function(d, g) {
			var i = a.getColor(d),
				j = a.cityIDname();
			e.push({
				text: g.key,
				color: i
			}), f.push({}), h.push({}), a.each(["prov", "city"], function(e, f) {
				var k = g[f],
					l = [],
					m = [];
				for (var n in k) l.push({
					pid: n,
					eid: c.getEid(n),
					val: +k[n],
					val_real: +g[f + "_real"][n]
				});
				l.sort(function(a, b) {
					return b.val_real - a.val_real
				});
				for (var o = l.length; o--;) {
					var p = l[o],
						q = [p.val],
						r = [i];
					a.each(b, function(b, c) {
						b != d && (+c[f][p.pid] >= 0 ? q.push(+c[f][p.pid]) : q.push(NaN), r.push(a.getColor(b)))
					}), m[o] = {
						pid: p.pid,
						text: j.getName(p.pid),
						vals: q,
						colors: r
					}
				}
				h[d][f] = m
			}), a.each(["prov_real", "city_real"], function(a, b) {
				var e = g[b],
					h = [];
				for (var i in e) h.push({
					pid: i,
					eid: c.getEid(i),
					val: +e[i]
				});
				h.sort(function(a, b) {
					return b.val - a.val
				}), f[d][b] = h
			})
		});
		var i, j, k, l, m = d.areaDatas = [];
		return _.each(b, function(a) {
			i = a.prov_real, j = {}, _.each(g.part, function(a, b) {
				k = 0, _.each(a, function(a) {
					l = g.prov[a], l && i[l] && (k += parseInt(i[l], 10))
				}), j[b] = k
			}), m.push(j)
		}), this
	}, f.drawCitys = function(b, e) {
		var f = this.datas.mapDatas[b] || {},
			g = f[e + "_real"];
		if ("area" === e) {
			g = [];
			var i, j = this.datas.areaDatas[b];
			_.each(f.prov_real, function(a) {
				i = h[a.pid], i && g.push({
					eid: a.eid,
					pid: a.pid,
					val: j[i]
				})
			})
		}
		var k = "#e8e8e8",
			l = a.getColor(b),
			m = this,
			n = this.paper,
			o = this.opts,
			p = this.sets,
			q = this.xys,
			r = (o.padds, this.cColor),
			s = o.outerCity,
			t = g.length,
			u = {},
			v = [];
		p.stsCity.eid = {}, p.stsCity[""] || (p.stsCity[""] = [], this.care("cityHover", function(a) {
			if ("area" != this.tabVal && ("city" !== this.tabVal || "0" != this.opts.outerCity)) {
				var b = p.stsCity.eid[a];
				Raphael.svg && b.insertBefore(p.stsLayer.cts).attr({
					"stroke-opacity": 0
				}), p.stsExtp.ctShadow.insertBefore(b).transform("t1.5,1.5"), Raphael.svg ? p.stsExtp.ctShadow.node.setAttribute("d", b.node.getAttribute("d")) : p.stsExtp.ctShadow.node.path = b.node.path, p.stsExtp.ctShadow.show()
			}
		}).care("cityHout", function(a) {
			if ("area" != this.tabVal && ("city" !== this.tabVal || "0" != this.opts.outerCity) && p.stsCity.eid) {
				var b = p.stsCity.eid[a];
				b && (p.stsExtp.ctShadow.hide(), b.attr({
					"stroke-opacity": 1
				}))
			}
		}));
		for (var w = p.stsCity[""], x = function() {
				return n.path().hover(function() {
					"area" != m.tabVal && ("0" != m.opts.outerCity || "city" != m.tabVal) && m.raise("cityHover", m, this.data("cityID"))
				}, function() {
					"area" != m.tabVal && ("0" != m.opts.outerCity || "city" != m.tabVal) && m.raise("cityHout", m, this.data("cityID"))
				}).click(function() {
					this.stop(), ("0" != m.opts.outerCity || "city" != m.tabVal) && m.raise("cityClick", m, this.data("cityID"))
				})
			}, y = t; y--;) v[y] = +g[y].val, u[g[y].eid] = {
			val: v[y],
			index: y
		};
		v = c.getMMN(v);
		var z = (v[1] - v[0]) / 6,
			A = -1;
		a.each(c.getCityDatas(s).Ct, function(a) {
			A += 1;
			var b = {
				fill: k,
				cursor: "default"
			};
			t && u[a] && "number" == typeof u[a].val && (b.fill = r(l, Math.pow(v[1] + z, 2) - Math.pow(v[1] - u[a].val, 2), Math.pow(v[1] + z, 2), Math.pow(v[0], 2)), b.cursor = "pointer"), "city" == e && "0" == o.outerCity && (b.fill = k, b.cursor = "default"), "city" !== m.tabVal && "0" == m.opts.outerCity && c.getPid(a) && "Industry" != m.opts.userIn || (b.cursor = "default");
			var f, g = c.getCityDatas(a, s),
				h = [g.Po[0] + q.Po[0], g.Po[1] + q.Po[1]],
				i = c.moveXYz([g.Pt], q.Po, q.Zo)[0],
				j = c.moveXYz(g.Gc, h, q.Zo),
				n = c.getPaths(j, !Raphael.svg);
			b = d(b, o.city), f = w[A] ? w[A].stop() : w[A] = x(), f.attr(b).data("cityID", a).data("attr", b).attrs.path = n.svg, Raphael.svg ? f.node.setAttribute("d", n.svg) : f.node.path = n.vml, p.stsCity.eid[a] = f.data("index", u[a] && "number" == typeof u[a].val ? u[a].index : "暂无数据").data("center", i).show()
		}), t || (A = -1);
		for (var y = w.length; y-- > A + 1;) w[y].stop().hide();
		if ("0" == s || "46" == s) {
			var B = c.moveXYz([
				[51548, 34463]
			], q.Po, q.Zo)[0];
			"46" == s && (B = c.moveXYz([
				[37437, 43713]
			], q.Po, q.Zo)[0]), (p.stsExtp.sisImg || (p.stsExtp.sisImg = n.image(PPval.imgsUrl + "cmapsis.png", 0, 0, 56, 80).hide())).attr({
				x: B[0],
				y: B[1],
				width: 56 * q.Zo * 120,
				height: 80 * q.Zo * 120
			}).show()
		} else p.stsExtp.sisImg && p.stsExtp.sisImg.hide();
		return p.stsExtp.ctShadow || (p.stsExtp.ctShadow = n.path().attr({
			fill: "#888888",
			stroke: "#888888",
			"stroke-width": 3,
			opacity: .4
		})), p.stsLayer.cts || (p.stsLayer.cts = n.path()), this
	}, f.tipHide = function(a) {
		var b = this.varsTip || (this.varsTip = {});
		clearTimeout(b.timer), T("#" + b.divID).hide().stop().css({
			opacity: 1
		})
	}, f.tipCity = function(b, d) {
		var e, f = this,
			g = this.opts,
			h = g.outerCity,
			i = this.sets,
			j = this.xys,
			k = this.varsTip || (this.varsTip = {});
		if ("area" !== d) {
			var l = function() {
				k.timer = setTimeout(function() {
					k.cityID = "", T("#" + k.divID).fadeOut()
				}, 1e3)
			};
			if (k.divID ? e = T("#" + k.divID) : (e = T('<div class="tip4map"><div class="titl"></div><div class="cont"></div><div class="arrow arrDown"></div></div>').hide().appendTo(T("#" + g.divID).parent()).css({
					left: j.mapLeft + j.mapWidth / 2,
					top: j.mapTop + j.mapHeight / 2
				}).mouseenter(function() {
					clearTimeout(k.timer), f.raise("cityHover", f, k.cityID)
				}).mouseleave(function() {
					f.raise("cityHout", f, k.cityID)
				}), k.divID = BID.gsid(e[0])), !b) return void l();
			clearTimeout(k.timer), b == k.cityID && e.stop(!0).css({
				opacity: 1
			}).show(), k.cityID = b;
			var m = i.stsCity,
				n = c.getPid(b),
				o = a.cityIDname().getName(n) || c.getCityDatas(b).Nm;
			if ("0" == h && "city" === d && (m = i.stsPoint), m = m.eid[b], !m) return void e.hide();
			var p = m.data("index"),
				q = m.data("center"),
				r = q[0] - 57,
				s = q[1] + 25;
			return s > j.mapTop + j.mapHeight / 2 ? (s -= 115, e.find(".arrow").removeClass("arrUp").addClass("arrDown")) : e.find(".arrow").removeClass("arrDown").addClass("arrUp"), e.find(".titl").html(a.subStr(o, 12)), e.find(".cont").html("排名： " + (p >= 0 ? p + 1 : p)), e.stop(!0).css({
				opacity: 1
			}).show().animate({
				left: r,
				top: s
			}), this
		}
	}, f.drawPoints = function(b, d) {
		var e = this.datas.mapDatas[b] || {},
			f = e[d + "_real"];
		("city" != d || "0" != this.opts.outerCity) && (f = []);
		var g, h = 20,
			i = a.getColor(b),
			j = this,
			k = this.paper,
			l = this.xys,
			m = this.opts,
			n = this.sets.stsPoint,
			o = m.outerCity,
			p = f.length,
			q = n[""],
			r = {},
			s = [];
		q || (q = n[""] = [], this.care("cityHover", function(a) {
			var b = n.eid[a];
			if (b) {
				b.data("attr");
				b.attr({
					"stroke-opacity": 1
				})
			}
		}).care("cityHout", function(a) {
			var b = n.eid[a];
			b && b.attr(b.data("attr"))
		}));
		for (var t = function() {
				return k.circle().hover(function() {
					this.data("attr");
					j.raise("cityHover", j, this.data("cityID"))
				}, function() {
					j.raise("cityHout", j, this.data("cityID"))
				})
			}, u = p; u--;) s[u] = f[u].val;
		p > h && (s.length = p = h), s = c.getMMK(s);
		var v = -1;
		a.each(f, function(a, b) {
			if (v + 1 >= h) return 1;
			v += 1;
			var d, e = c.getCityPoint(b.eid, o),
				f = c.moveXYz([e], l.Po, l.Zo)[0];
			d = q[v] ? q[v].stop() : q[v] = t(), g = j.cStyle(s[v], i), g.cx = f[0], g.cy = f[1], d.attr(g).data("cityID", b.eid).data("data", b).data("attr", g), r[b.eid] = d.data("index", a).data("center", f).show()
		}), n.eid = r;
		for (var u = q.length; u-- > v + 1;) q[u].stop().hide();
		return this
	};
	var i = function(a, b) {
		var c = a.splice(b, 1);
		return a.unshift(c[0]), a
	};
	return f.divBars = function(b, d) {
		var e = this.datas.barDatas[b][d];
		if ("area" === d) {
			var f = this.varsBars || (this.varsBars = {}),
				h = T("#" + f.divID).find(".scTab .scLi").removeClass("curr");
			h.eq(1).addClass("curr");
			var j = this.datas.areaDatas,
				k = _.keys(g.part),
				l = [];
			_.each(j, function(b, c) {
				l.push(a.getColor(c))
			}), e = [];
			var m = {};
			_.each(j, function(a) {
				_.each(a, function(a, b) {
					m[b] || (m[b] = []), m[b].push(a)
				})
			}), k.sort(function(a, c) {
				return m[c][b] - m[a][b]
			}), _.each(k, function(a) {
				e.push({
					colors: i(l, b),
					pid: "100",
					text: a,
					vals: i(m[a], b)
				})
			})
		}
		var n, o = 2,
			p = 140,
			q = 10,
			r = e.length,
			s = 0 == r ? 0 : e[0].vals.length,
			t = this.varsBars || (this.varsBars = {}),
			u = this.opts,
			v = u.outerCity,
			w = u.padds,
			x = function(a) {
				var b = '<div class="zbar"></div>',
					c = '<div class="zbars">' + b + b + b + b + b + "</div>",
					d = '<table><tr><td class="scRank"></td><td class="scName"></td><td>' + c + "</td></tr></table>",
					e = '<div class="items">' + d + "</div>",
					f = ['<ul class="scTab"><li class="scLi" tabVal="prov">省份</li><li class="scLi" tabVal="area">区域</li><li class="scLi" tabVal="city">城市</li></ul>'];
				for (f.push('<div class="scrolls" style="border-bottom:1px solid #e5e5e5;">'); a--;) f.push(e);
				return f.push("</div>"), f.join("")
			};
		if (t.divID) n = T("#" + t.divID).hide();
		else {
			var y = this;
			n = T('<div class="bar4map"></div>').hide().html(x(q)).appendTo(T("#" + u.divID).parent()), t.divID = BID.gsid(n[0]), n.find(".scTab .scLi").click(function() {
				T(this).parent().find(".scLi").removeClass("curr"), y.raise("tabClick", y, T(this).addClass("curr").attr("tabVal"))
			}), n.find(".items").mouseenter(function() {
				y.raise("cityHover", y, T(this).data("eid"), "barItem")
			}).mouseleave(function() {
				y.raise("cityHout", y, T(this).data("eid"), "barItem")
			}), this.care("cityHover", function(a, b) {
				var c = t.eids[a],
					d = n.find(".items").removeClass("hover");
				if (d.eq(c).addClass("hover"), c >= 0 && 9 >= c && "barItem" != b) {
					var e = BID.createScroll.inis[T("#" + t.divID + " .scrolls")[0].id],
						f = T(e.getElement("content")),
						g = T(e.getElement("wrapper")),
						h = f.height(),
						i = g.height();
					if (i >= h) return;
					c >= 6 ? f.stop().animate({
						top: i - h
					}, function() {
						e.scrollToTop(), e.scrollToBottom()
					}) : 2 >= c && f.stop().animate({
						top: 0
					}, function() {
						e.scrollToBottom(), e.scrollToTop()
					})
				}
			}).care("cityHout", function(a) {
				n.find(".items").removeClass("hover")
			})
		}
		if (!r) return this.sets.stsExtp.sisImg.hide(), void this.sets.stsExtp.noData.attr({
			x: this.paper.width / 2,
			y: this.xys.mapTop + this.xys.mapHeight / 2
		}).toFront().show();
		this.sets.stsExtp.noData.hide();
		var z = n.find(".scTab .scLi").removeClass("curr");
		z.eq("prov" == d ? 0 : "area" == d ? 1 : 2).addClass("curr"), "0" != v ? (z.eq(0).hide(), z.eq(1).hide()) : (z.eq(0).show(), z.eq(1).show());
		var A = [];
		r > q && (r = e.length = q), a.each(e, function(a, b) {
			for (var c = b.vals, d = c.length; d--;) A.push(+c[d])
		}), A = c.getMMN(A), t.eids = {}, n.find(".items").hide().each(function(b) {
			if (b >= r) return "break";
			var d = e[b],
				f = c.getEid(d.pid),
				g = c.getMMO(d.vals, A);
			T(this).find(".scRank").html(b + 1 + "."), T(this).find(".scName").html(a.subStr(d.text, 8)), T(this).find(".zbar").hide().each(function(a) {
				return a >= g.length ? "break" : void T(this).css({
					width: g[a] >= 0 ? g[a] * p + o : 0,
					"background-color": d.colors[a]
				}).show()
			}), T(this).css({
				padding: [0, 10, 10, 8, 5, 4][s] + "px 10px"
			}).data("eid", f).show(), t.eids[f] = b
		}), n.css({
			left: w.width - w.right - w.barWid - 10,
			top: w.title + w.tagHig - 10
		}).show();
		var B = T("#" + t.divID + " .scrolls"),
			C = BID.createScroll.inis,
			D = w.height - w.title - w.tagHig - w.bottom - 20 - 24;
		return B.height(D), C && C[B[0].id] || (BID.createScroll(B[0]), B.mouseout(), C = BID.createScroll.inis), C[B[0].id].update(), B.children().height(D), this
	}, f.cColor = function(a, b, c, d) {
		var e = c || 1;
		return d = d || 0, b = (b - d) / (e - d), e == d && (b = 1), 0 === c && (b = 1 / 6), a = Raphael.color(a), Raphael.hsl(a.h, a.s * b, 1 - (1 - a.l) * b)
	}, f.cStyle = function(a, b) {
		var c = d({
				fill: b,
				stroke: b
			}, this.opts.cityP),
			e = 4 + 5 * a * 1.5,
			f = 2 + 5 * a * .7;
		return c.r = e, c["stroke-width"] = 2 * f, c
	}, f.drawValv = function(b, c) {
		var d = "circ";
		("prov" == c || "0" != this.opts.outerCity) && (d = "rect");
		var e = a.getColor(b),
			f = this.paper,
			g = this.opts.padds,
			h = this.sets.stsVals,
			i = this.varsValv || (this.varsValv = {}),
			j = h.rects || (h.rects = []),
			k = h.circs || (h.circs = []),
			l = 60,
			m = 6,
			n = g.left + 8,
			o = f.height - g.bottom - g.valHig,
			p = {
				"text-anchor": "start",
				fill: "#999999"
			};
		if ("rect" == d) {
			if (h.circ && h.circ.hide(), h[d])(n != i.left || o != i.top) && (h[d].translate(n - i.left, o - i.top), i.left = n, i.top = o);
			else {
				i.left = n, i.top = o, f.setStart();
				var q = f.text(n, o + 14, "搜索指数：高").attr(p),
					r = q.getBBox().width;
				f.text(n + r + l + 15, o + 14, "低").attr(p);
				for (var s = m; s--;) j[s] = f.rect(n + r + 10 + s * l / m, o + 8, l / m - 2, 13), j[s].attr({
					"stroke-width": 0,
					"stroke-opacity": 0
				});
				h[d] = f.setFinish()
			}
			for (var s = m; s--;) j[s].attr({
				fill: this.cColor(e, m - s, m)
			})
		} else {
			if (h.rect && h.rect.hide(), h[d])(n != i.left || o != i.top) && (h[d].translate(n - i.left, o - i.top), i.left = n, i.top = o);
			else {
				i.left = n, i.top = o, f.setStart();
				var q = f.text(n, o + 14, "搜索指数：高").attr(p),
					r = q.getBBox().width,
					t = n + r + l + 15 + 77,
					u = [10, 27, 45, 68, 97, 130];
				f.text(t, o + 14, "低").attr(p), f.path(["M", t - u[0], o + 15, "L", t - u[5], o + 15]).attr({
					stroke: "#dadada"
				});
				for (var s = m; s--;) k[s] = f.circle(t - u[s], o + 15);
				h[d] = f.setFinish()
			}
			for (var s = m; s--;) k[s].attr(this.cStyle((s - 1) / (m - 1), e))
		}
		var v = this.datas.mapDatas[b] || {};
		return v[c + "_real"] && v[c + "_real"].length ? h[d].show() : h[d].hide(), this
	}, f.divBackNav = function(a) {
		var b, c = this.varsBnav || (this.varsBnav = {}),
			d = this.opts,
			e = d.padds;
		if (c.divID) b = T("#" + c.divID);
		else {
			var f = this;
			b = T('<div class="bNav4map"><a class="back" href="javascript:;">全国</a> 〉<span class="provName"></span></div>').appendTo(T("#" + d.divID).parent()), b.find("a.back").click(function() {
				f.raise("cityClick", f, 0)
			}), c.divID = BID.gsid(b[0])
		}
		return b.css({
			left: e.left,
			top: e.title + 5
		}).find(".provName").html(a), a ? b.show() : b.hide(), this
	}, f.care = function(a, b) {
		var c = this.events || (this.events = {}),
			d = c[a] || (c[a] = []);
		return d.push(b), this
	}, f.raise = function(a, b, c) {
		var d = this.events || {},
			e = d[a] || [],
			f = e.length;
		c = [].slice.call(arguments, 2);
		for (var g = 0; f > g; g++) e[g].apply(b, c);
		return this
	}, d(f.prototype, f), a[b] = e
}(BID);