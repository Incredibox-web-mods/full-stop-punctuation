/* 1.2.1 2021-04-23 18:14:05 */
var app = new (function () {
  (this.name = "Void"),
    (this.version = "ch3"),
    (this.date = "2023"),
    (this.folder = "asset-v3/"),
    (this.looptime = 8e3),
    (this.bpm = 120),
    (this.totalframe = 384),
    (this.nbpolo = 7),
    (this.nbloopbonus = 6),
    (this.bonusloopA = !0),
    (this.bonusendloopA = !1),
    (this.recmaxloop = 27),
    (this.recminloop = 4),
    (this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop),
    (this.spritepolo = "polo-sprite.png"),
    (this.spritepicto = "game-picto.png"),
    (this.colBck = "#000000"),
    (this.col0 = "#c6c6c6"),
    (this.col1 = "#727272"),
    (this.col2 = "#5e5e5e"),
    (this.col3 = "#2b2b2b"),
    (this.col4 = "#444444"),
    (this.animearray = [
      { name: "1_chukuno", color: "727272", uniqsnd: !1 },
      { name: "2_lanuqkicktsu", color: "727272", uniqsnd: !1 },
      { name: "3_plaqque", color: "727272", uniqsnd: !1 },
      { name: "4_qipqqtppsgskkskk", color: "727272", uniqsnd: !0 },
      { name: "5_boomgueh", color: "727272", uniqsnd: !0 },
      { name: "6_mooooqumesa", color: "727272", uniqsnd: !1 },
      { name: "7_aughjaiuruskk", color: "727272", uniqsnd: !0 },
      { name: "8_", color: "727272", uniqsnd: !1 },
      { name: "9_072021", color: "727272", uniqsnd: !1 },
      { name: "10_nightmare", color: "727272", uniqsnd: !0 },
      { name: "11_ewoo", color: "727272", uniqsnd: !1 },
      { name: "12_rendgen", color: "727272", uniqsnd: !1 },
      { name: "13_uod", color: "727272", uniqsnd: !1 },
      { name: "14_sticlaateshi", color: "727272", uniqsnd: !1 },
      { name: "15_musicbox", color: "727272", uniqsnd: !1 },
      { name: "16_rafe", color: "727272", uniqsnd: !1 },
      { name: "17_TV", color: "727272", uniqsnd: !1 },
      { name: "18_aries", color: "727272", uniqsnd: !1 },
      { name: "19_accident", color: "727272", uniqsnd: !1 },
      { name: "20_infectat", color: "727272", uniqsnd: !0 },
    ]),
    (this.bonusarray = [
      {
        name: "Nightmare",
        src: "c3-b1-nightmare-hb.mp4",
        code: "2,6,11,16,19",
        sound: "bonus-nightmare",
        aspire: "aspire-nigthmare",
      },
      {
        name: "Friends?",
        src: "c3-b2-friends-hb.mp4",
        code: "1,4,6,8,12",
        sound: "bonus-friends",
        aspire: "aspire-friends",
      },
      {
        name: "Wake-Up",
        src: "c3-b3-wakeup-hb.mp4",
        code: "2,6,13,17,20",
        sound: "bonus-wakeup",
        aspire: "aspire-wakeup",
      },
    ]);
  for (var e = 0, n = this.animearray.length; e < n; e++) {
    var o = this.animearray[e].name;
    (this.animearray[e].soundA = o + "_a"),
      (this.animearray[e].soundB = this.animearray[e].uniqsnd
        ? o + "_a"
        : o + "_b"),
      (this.animearray[e].anime = o + "-sprite.png"),
      (this.animearray[e].animeData = o + ".json");
  }
})();
