/* 0.5.0 2020-11-20 12:44:31 */
var app=new function(){this.name="Little Miss",this.version="2",this.date="2012",this.folder="asset-v2/",this.looptime=8130,this.bpm=185,this.totalframe=245,this.nbpolo=7,this.nbloopbonus=4,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=38,this.recminloop=5,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#1c0d0d",this.col0="#EB4B4B",this.col1="#C32D2D",this.col2="#9B2323",this.col3="#691E1E",this.col4="#371919",this.animearray=[{name:"beat1_boom",color:"828282",uniqsnd:!0},{name:"beat2_kashi",color:"828282",uniqsnd:!0},{name:"beat3_paomeu",color:"828282",uniqsnd:!0},{name:"beat4_ptttpeu",color:"828282",uniqsnd:!1},{name:"beat5_slupttt",color:"828282",uniqsnd:!0},{name:"effet1_poulll",color:"85adad",uniqsnd:!1},{name:"effet2_tucati",color:"85adad",uniqsnd:!0},{name:"effet3_tuilopta",color:"85adad",uniqsnd:!1},{name:"effet4_tululou",color:"85adad",uniqsnd:!0},{name:"effet5_tumttt",color:"85adad",uniqsnd:!1},{name:"melo1_nananana",color:"828282",uniqsnd:!1},{name:"melo2_pelulu",color:"828282",uniqsnd:!1},{name:"melo3_siffle",color:"828282",uniqsnd:!1},{name:"melo4_tatouti",color:"828282",uniqsnd:!1},{name:"melo5_tvutvutvu",color:"828282",uniqsnd:!1},{name:"coeur1_oaaah",color:"e63900",uniqsnd:!1},{name:"coeur2_cougou",color:"e63900",uniqsnd:!1},{name:"coeur3_porticoeur",color:"e63900",uniqsnd:!1},{name:"voix1_isit",color:"e63900",uniqsnd:!1},{name:"voix2_uare",color:"e63900",uniqsnd:!1}],this.bonusarray=[{name:"Satisfied",src:"v2-b1-satisfy-hb.mp4",code:"1,4,7,8,16",sound:"bonus-satisfy",aspire:"aspire"}];for(var o=0,n=this.animearray.length;o<n;o++){var i=this.animearray[o].name;this.animearray[o].soundA=i+"_a",this.animearray[o].soundB=this.animearray[o].uniqsnd?i+"_a":i+"_b",this.animearray[o].anime=i+"-sprite.png",this.animearray[o].animeData=i+".json"}};