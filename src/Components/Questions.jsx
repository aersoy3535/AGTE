const questions = [
/*İlk soru grubu*/{
    stage: "0-3 Months",
    title : "DOĞUMDAN 3 AY SONUNA KADAR (1 , 2 , 3 Aylar)",
    context: [{
        id: 0,
        answered: false,
        text: "Ani ses ya da gürültüden ürküp sıçrar mı?",
        developementArea: "Dil-Bilissel",
    },
    {
        id:1,
        answered: false,
        text: "Konuşulunca sesler (ağlama dışında) çıkarır mı? (Cevap evetse) Nasıl sesler çıkarır diye sorun ve kaydedin.",
        developementArea: "Dil-Bilissel"
    },
    {
        id:2,
        answered: false,
        text: "Tanıdık bir sese başını çevirir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:3,
        answered: false,
        text: "Kucağa alındığında susar sakinleşir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:4,
        answered: false,
        text: "Kaşık, meme yaklaşınca daha ağzına dokundurmadan ağzını açar mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:5,
        answered: false,
        text: "Kucağınıza aldığınızda kafasını dik tutar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id:6,
        answered: false,
        text: "Bebek sırt üstü yatarken ellerini seyreder mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:7,
        answered : false,
        text: "Bebek yüzüstü yatarken başını kaldırır mı?",
        developementArea: "Kaba Motor"
    },
    {
        id:8,
        answered: false,
        text: "Ellerini bazen açık tutar mı?",
        developementArea: "Ince Motor"
    },
    {
        id:9,
        answered : false,
        text: "Bebeğinizle konuşup gülümserseniz bebeğiniz de size gülümser mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:10,
        answered: false,
        text: "Gözleri ile hareket eden şekilleri izler mi?",
        developementArea: "Ince Motor"
    },
    {
        id:11,
        answered: false,
        text:"Kucağınızda otururken kafasını çevirip etrafa bakar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id:12,
        answered: false,
        text: "Bebek biberonunu, anne memesini görünce hareketlenir, elini kolunu sallar mı?",
        developementArea: "Dil-Bilissel"
    }
    ]
},
/*İkinci soru grubu*/{
    stage: "4-5 Months",
    title : "4 AYDAN 5 AY SONUNA KADAR (4,5 Aylar)",
    context: [{
        id: 13,
        answered: false,
        text: "Bebek sırt üstü yatarken ellerini seyreder mi?",
        developementArea: "Dil-Bilissel",
    },
    {
        id:14,
        answered: false,
        text: "Kendi kendine ya da beslenirken ağlama dışında ses çıkarır mı? Cevap evetse “ne sesler çıkarır?”(En az iki farklı ses olması:mmm, sss, ah, uf, da, ma, ga, ka gibi)",
        developementArea: "Dil-Bilissel"
    },
    {
        id:15,
        answered: false,
        text: "Siz gıdıklamadan, dokunmadan yüksek sesle güler mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:16,
        answered: false,
        text: "Azarlandığı zaman yüzünün şekli değişir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:17,
        answered: false,
        text: "Püre ya da lapa gibi besinler yer mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:18,
        answered: false,
        text: "Elindeki oyuncağı, ekmeği ağzına götürür mü?",
        developementArea: "Ince Motor"
    },
    {
        id:19,
        answered: false,
        text: "Biraz uzaktaki oyuncaklara eşyalara uzanır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:20,
        answered : false,
        text: "Eşyaları eline alıp bakar mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:21,
        answered: false,
        text: "Bebek çıngırağı bir elinden öbür eline geçirir mi?",
        developementArea: "Ince Motor"
    },
    {
        id:22,
        answered : false,
        text: "Elinin uzanabileceği yere oyuncak koysanız onu tutar mı?",
        developementArea: "Ince Motor"
    },
    {
        id:23,
        answered: false,
        text: "Önüne konan kibrit kutusu büyüklüğünde bir kutuyu eline alır mı? (Kibrit kutusu büyüklüğünü elinizle gösteriniz)",
        developementArea: "Ince Motor"
    },
    {
        id:24,
        answered: false,
        text:"Bisküvi ve kabuk ekmek ile diş etlerini kaşır, onları emer mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:25,
        answered: false,
        text: "Küçük parçalar halindeki yiyecekleri alıp ağzına götürür mü?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:26,
        answered: false,
        text: "Annesine, babasına sarılarak sevgisini gösterir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    }
    ]
},

/*Üçüncü soru grubu*/{
    stage: "6-7 Months",
    title : "6 AYDAN 7 AY SONUNA KADAR (6,7 Aylar)",
    context: [{
        id: 27,
        answered: false,
        text: "Oyuncakları yere atıp düşüşünü seyreder mi?",
        developementArea: "Dil-Bilissel",
    },
    {
        id:28,
        answered: false,
        text: "Önüne konan bir kesme şekeri eline almaya çalışır mı?",
        developementArea: "Ince Motor"
    },
    {
        id:29,
        answered: false,
        text: "Bardağı iki eliyle tutar mı?",
        developementArea: "Ince Motor"
    },
    {
        id:30,
        answered: false,
        text: "Yatarken yastıklara ya da ellerinize tutunup kendini yukarı çekerek oturur mu?",
        developementArea: "Kaba Motor"
    },
    {
        id:31,
        answered: false,
        text: "Küçük bir parça ekmek ya da bisküviyi bir elinden öbür eline geçirir mi? (kaşık, çıngırak gibi uzun sapı olmayan bir şey olmalı)",
        developementArea: "Ince Motor"
    },
    {
        id:32,
        answered: false,
        text: "Eğilerek, düşen eşyaları arar mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:33,
        answered: false,
        text: "Kollarının altından tutunca yürüme hareketleri yapar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id:34,
        answered : false,
        text: "Başlığını çekip çıkarır mı? (göstererek sorunuz)",
        developementArea: "Ince Motor"
    },
    {
        id:35,
        answered: false,
        text: "Sırtüstü yatarken yana döner mi? (elinizi düz durumdan yana çevirerek gösteriniz)",
        developementArea: "Kaba Motor"
    },
    {
        id:36,
        answered : false,
        text: "Sırtüstü yatarken karnının üzerine döner mi? (elinizi düz durumdan tersine çevirerek gösteriniz)",
        developementArea: "Kaba Motor"
    },
    {
        id:37,
        answered: false,
        text: "Elindeki kaşığı ses çıkarmak için yere vurur mu?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:38,
        answered: false,
        text:"Küçük üzüm tanelerini avuçlayarak eline alır mı?",
        developementArea: "Ince Motor"
    },
    {
        id:39,
        answered: false,
        text: "Yemeğini çiğner mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id:40,
        answered: false,
        text: "“Da-da, ba-ba, ma-ma, de-de” gibi sesler çıkarır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id:41,
        answered: false,
        text: "İki elini kullanarak bardağı kaldırır mı?",
        developementArea: "Sosyal Beceri-Oz bakim" 
    },
    {
        id:42,
        answered: false,
        text: "Elindeki oyuncakları yere atarak oyun yapıp sizin almanızdan hoşlanır mı?",
        developementArea: "Sosyal Beceri-Oz bakim" 
    }
    ]
},
/*Dördüncü soru grubu*/{
    stage: "8-9 Months",
    title : "8 AYDAN 9 AY SONUNA KADAR (8,9 Aylar)",
    context: [{
        id: 43,
        answered: false,
        text: "“Atta” dendiğinde kapıya bakar ya da hareketlenir mi? (1 puan alması için sözel uyarıcıya tepki vermesi gereklidir)",
        developementArea: "Dil-Bilissel",
    },
    {
        id: 44,
        answered: false,
        text: "Elindeki iki kutuyu, oyuncağı birbirine vurur mu?",
        developementArea: "Ince Motor",
    },
    {
        id: 45,
        answered: false,
        text: "Önündeki oyuncağı mendil veya örtü koyarak saklarsanız mendili, örtüyü çekerek oyuncağı bulur mu?",
        developementArea: "Dil-Bilissel",
    },
    {
        id: 46,
        answered: false,
        text: "Yastıkla desteklemezseniz veya duvara dayanmadan bir süre düşmeden kendi kendine oturur mu?",
        developementArea: "Kaba Motor",
    },
    {
        id: 47,
        answered: false,
        text: "“El çırpar” oyunu oynar mı? (Göstererek sorun)",
        developementArea: "Sosyal Beceri-Oz bakim",
    },
    {
        id: 48,
        answered: false,
        text: "Emekler mi?",
        developementArea: "Kaba Motor",
    }
    ] 
},
/*Beşinci Bölüm*/{
    stage: "10-11 Months",
    title : "10 AYDAN 11 AY SONUNA KADAR (10,11 Aylar)",
    context:[{
        id: 49,
        answered: false,
        text: "Müzik çalınca sallanır mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 50,
        answered: false,
        text: "İşaret parmağını kullanarak masa üzerindeki şeyleri yoklar, iter, yuvarlar mı? (İşaret parmağınızla gösteriniz)",
        developementArea: "Ince Motor"
    },
    {
        id: 51,
        answered: false,
        text: "Eşyaya tutunarak sıralar mı? (Anlaşılmazsa gösteriniz)",
        developementArea: "Kaba Motor"
    },
    {
        id: 52,
        answered: false,
        text: "Tek eli tutulduğunda adım atar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id: 53,
        answered: false,
        text: "Babasını görünce “baba”, yemek isteyince “mama”, su isteyince “su “ gibi kelimeler söyler mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 54,
        answered: false,
        text: "Bir yere giderken baş baş yapar mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 55,
        answered: false,
        text: "Tay-tay durur mu, çok kısa da olsa kendi başına ayakta durur mu?",
        developementArea: "Kaba Motor"
    },
    {
        id: 56,
        answered: false,
        text: "Ayaktayken çömelir mi?",
        developementArea: "Kaba Motor"
    },
    {
        id: 57,
        answered: false,
        text: "Bana ver deyince elindeki oyuncağı size uzatır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 58,
        answered: false,
        text: "“Hayır” “cıs”, denince durur mu?",
        developementArea: "Sosyal Beceri-Oz bakim"
    }
]
},
/*Altıncı Bölüm*/{
    stage: "12-13 Months",
    title : "12 AYDAN 13 AY SONUNA KADAR (12,13 Aylar)",
    context: [{
        id: 59,
        answered: false,
        text: "Kollarını uzatarak elbisesinin giydirilmesine yardımcı olur mu?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 60,
        answered: false,
        text: "İstediği bir eşyayı eliyle gösterir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 61,
        answered: false,
        text: "Bir şeyi isteyip istemediğini belli eder mi?(Evet ise ne yaptığını sorunuz)",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 62,
        answered: false,
        text: "Yardımsız bir kaç adım atar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id: 63,
        answered: false,
        text: "Yardımsız yürür mü?",
        developementArea: "Kaba Motor"
    },
    {
        id: 64,
        answered: false,
        text: "Sepet, kova, file içine bir şeyler koyarak taşır mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 65,
        answered: false,
        text: "“Bana ayakkabını göster” derseniz gösterir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 66,
        answered: false,
        text: "Tek tek kelimelerle konuşur mu? (Örnek vermesini isteyiniz)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 67,
        answered: false,
        text: "Bazı işleri kendi başına yapmakta ısrar eder mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 68,
        answered: false,
        text: "Ayaktayken topa ayağı ile vurur mu?",
        developementArea: "Kaba Motor"
    },
    {
        id: 69,
        answered: false,
        text: "“Kapıyı kapat” gibi söylenen basit işleri yapar mı?",
        developementArea: "Dil-Bilissel"
    }
]
},
/*Yedinci Bölüm*/{
    stage: "14-15 Months",
    title : "14 AYDAN 15 AY SONUNA KADAR (14,15 Aylar)",
    context:[{
        id: 70,
        answered: false,
        text: "Evdeki bazı eşyaların yerlerinin bilir mi?(Örneğin bardağın mutfakta olduğunu bilir mi?)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 71,
        answered: false,
        text: "Bebeğini sever mi? Bebeğine dayak atar mı? Kendinden ufak bir bebeği sever mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 72,
        answered: false,
        text: "Sandalyeye, sedire çıkar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id: 73,
        answered: false,
        text: "Arkasından oyuncak çekerek yürür mü?",
        developementArea: "Kaba Motor"
    },
    {
        id: 74,
        answered: false,
        text: "Koşar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id: 75,
        answered: false,
        text: "Ayakkabı ve çorabını çıkarır mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    }
]
},
/*Sekizinci Bölüm*/{
    stage: "16-17 Months",
    title : "16 AYDAN 17 AY SONUNA KADAR (16,17 Aylar)",
    context:[{
        id: 76,
        answered: false,
        text: "Misafirlere oyuncağını gösterir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 77,
        answered: false,
        text: "Geri geri yürür mü?",
        developementArea: "Kaba Motor"
    },
    {
        id: 78,
        answered: false,
        text: "Kaşıkla yemek yer mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 79,
        answered: false,
        text: "Şarkı söyler ya da mırıldanır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 80,
        answered: false,
        text: "2 ya da 3 kelimeyi açıkça söyler mi? Evetse hangi kelimeler, yazınız.",
        developementArea: "Dil-Bilissel" 
    },
    {
        id: 81,
        answered: false,
        text: "Televizyonda gördüğü bazı şeyleri tanır mı? Kedi, araba gibi.",
        developementArea: "Dil-Bilissel" 
    },
    {
        id: 82,
        answered: false,
        text: "“Topunu (bebeğini) kaldır, bardağı içeri götür” dendiğinde söyleneni yapar mı?",
        developementArea: "Dil-Bilissel" 
    },
    {
        id: 83,
        answered: false,
        text: "Şekerin ya da sakızın kâğıdını açar mı?",
        developementArea: "Ince Motor" 
    }
]
},
/*Dokuzuncu Bölüm*/{
    stage: "18-23 Months",
    title : "18 AYDAN 23 AY SONUNA KADAR (18,19,20,21,22,23 Aylar)",
    context: [{
        id: 84,
        answered: false,
        text: "İki kibrit kutusunu üst üste koyup kule yapar mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 85,
        answered: false,
        text: "Altı ıslandığında size haber verir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 86,
        answered: false,
        text: "Kavanozların, şişelerin kapaklarını açıp kapar mı?",
        developementArea: "Ince Motor"
    },
    {
        id: 87,
        answered: false,
        text: "Kapıyı açar mı?",
        developementArea: "Kaba Motor"
    },
    {
        id: 88,
        answered: false,
        text: "Ufak ev işlerini yapar mı? Örnek verilebilir: ”Bardağı mutfağa koyar mı?”",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 89,
        answered: false,
        text: "Müziğe uygun olarak ellerini çırpar mı? (Tempo tutar mı?)",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 90,
        answered: false,
        text: "Bir elini öbür eline tercih eder mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 91,
        answered: false,
        text: "İki kelimelik cümleler kurar mı? “Baba gitti”, “ elma ver” gibi, örnekler veririniz.",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 92,
        answered: false,
        text: "Kendi kendine kaşık, çatal kullanarak yemek yer mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 93,
        answered: false,
        text: "Tehlikelerden kendini korur mu? Sıcak soba, kırı cam, bıçak, ateş gibi",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 94,
        answered: false,
        text: "Arkadaşının ismini bilir mi? (ismi yazınız)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 95,
        answered: false,
        text: "İsteklerini basit cümlelerle ifade eder mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 96,
        answered: false,
        text: "Bir kutuyu alıp sanki arabaymış gibi yürütür mü ya da bir sopa parçasını at yerine koyar mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 97,
        answered: false,
        text: "Ellerini yıkamayı bilir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 98,
        answered: false,
        text: "“İlk önce mutfağa git, tabağı al, bana getir” gibi üç isteği birden yerine getirir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 99,
        answered: false,
        text: "Diğer çocuklarla (evcilik) oynar mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 100,
        answered: false,
        text: "Kendi başına merdivenden inip çıkar mı? (Büyüklerin inip çıktığı gibi) göstererek sorun",
        developementArea: "Kaba Motor"
    }
]  
},
/*Onuncu Bölüm*/{
    stage: "24-29 Months",
    title : "24 AYDAN 29 AY SONUNA KADAR (24,25,26,27,28,29 Aylar)",
    context: [{
        id: 101,
        answered: false,
        text: "Elini, ağzını, gözünü, ayağını, burnunu gösterip “Bu ne” derseniz isimlerini doğru olarak söyler mi? ( Göstererek sorun)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 102,
        answered: false,
        text: "Resimlere ya da TV’ye bakarken tanıdığı şeylerin adını söyler mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 103,
        answered: false,
        text: "Bardağa şişeden su doldurur mu?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 104,
        answered: false,
        text: "Basit sorulara “evet, hayır” diye cevap verir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 105,
        answered: false,
        text: "Soru sorar mı? “Baba nerede”, “bu kim”, “ bu ne” ? gibi",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 106,
        answered: false,
        text: "Konuşması kolaylıkla anlaşılır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 107,
        answered: false,
        text: "Çişini tutup, söyleyebilir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 108,
        answered: false,
        text: "Topu başının üzerinden ileri doğru atar mı?(gösteriniz)",
        developementArea: "Kaba Motor"
    }
]
},
/*Onbirinci Bölüm*/{
    stage: "30-35 Months",
    title : "30 AYDAN 35 AY SONUNA KADAR (30,31,32,33,34,35. Aylar)", 
    context : [{
        id: 109,
        answered: false,
        text: "Düğmesini açar mı, açabilir mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 110,
        answered: false,
        text: "Diğer çocukların kız ya da erkek olduklarını bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 111,
        answered: false,
        text: "Kakasını tutup, söyleyebilir mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 112,
        answered: false,
        text: "”Hangisi büyük” deyince daha büyük olan gösterir mi?(Göstererek sorun)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 113,
        answered: false,
        text: "Sevdiği, tercih ettiği arkadaşı var mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 114,
        answered: false,
        text: "2,3 gün önceki olayları hatırlayıp anlatır mı? ”hani çarşıya gitmiştik ya” gibi",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 115,
        answered: false,
        text: "İsmin ne diye sorulunca ismini söyler mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 116,
        answered: false,
        text: "”Bayram geliyor” veya “parka gideceğiz” diye heyecanlanır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 117,
        answered: false,
        text: "”Ekmeğin, simidin yarısını ver” deyince yarısını verebilir mi? “yarım”ın ne demek olduğunu bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 118,
        answered: false,
        text: "Siz konuşurken anlamadığı bir kelime olursa sorar mı? ”Ne demek“ der mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 119,
        answered: false,
        text: ".Kutu, makara gibi eşyaları kullanarak oyuncak yapar mı?",
        developementArea: "Dil-Bilissel"
    }
]
},
/*Onikinci Bölüm*/{
    stage: "36-47 Months",
    title : "36 AYDAN 47 AY SONUNA KADAR (36,37,38,39,40,41,42,43,44,45,46,47. Aylar)", 
    context : [{
        id: 120,
        answered: false,
        text: "Düz bir çizgi çizer mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 121,
        answered: false,
        text: "Bir iki düğmeyi ilikler mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 122,
        answered: false,
        text: "”Hangisi uzun” diye sorulunca, uzun olanı gösterir mi?(Göstererek sorun)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 123,
        answered: false,
        text: "Tuvalete yardımsız gider mi? Kilodunu yardımsız indirip çeker mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 124,
        answered: false,
        text: "Ayakkabılarını yardımsız giyer mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 125,
        answered: false,
        text: "Ezbere televizyon reklamı, şiir, tekerleme söyler mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 126,
        answered: false,
        text: "”Nasıl” kelimesini kullanarak soru sorar mı? (Örnek isteyiniz)",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 127,
        answered: false,
        text: "Başka çocuklarla körebe, sek sek, saklambaç gibi oyunlar oynar mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 128,
        answered: false,
        text: "Sek sek oynar mı? Tek ayağı üzerinde zıplar mı? (Göstererek sorun)",
        developementArea: "Kaba Motor"
    },
    {
        id: 129,
        answered: false,
        text: "Mahallede (köyde) veya evinizin civarında tek başına dolaşır mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 130,
        answered: false,
        text: "Yaşını bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 131,
        answered: false,
        text: "Yardımsız pantolonunu, kazağını giyer mi? Kızlara: Yardımsız eteğini, kazağını giyer mi?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 132,
        answered: false,
        text: "Tek başına komşuya gidip istenileni alır mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 133,
        answered: false,
        text: "Parmaklarını şaklatır mı? (gösteriniz)",
        developementArea: "Ince Motor"
    },
    {
        id: 134,
        answered: false,
        text: "”Eğer uslu durursam bana şeker verir misin?” gibi eğerle başlayan cümleler kurar mı?",
        developementArea: "Dil-Bilissel"
    }
]
},
/*Onüçüncü Bölüm*/{
    stage: "48-72 Months",
    title : "48 AYDAN 72 AY SONUNA KADAR(48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72. Aylar)",  
    context: [{
        id: 135,
        answered: false,
        text: "Birden ona kadar sayar mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 136,
        answered: false,
        text: "Terliklerini doğru giyer mi? Sağ terliğini sağa, sol terliğini sol ayağına giyer mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 137,
        answered: false,
        text: "Rüyalarını anlatır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 138,
        answered: false,
        text: "Renkleri bilir mi? Renk adı verilerek sorulabilir.",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 139,
        answered: false,
        text: "Paraları tanır mı? Hangilerini? (Yuvarlak içine alınız) 1 TL, 5 TL, 10 TL, 20 TL. iki tanesini biliyorsa 1 yazınız.",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 140,
        answered: false,
        text: "Bir elde kaç parmak olduğunu bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 141,
        answered: false,
        text: "Yardımsız kendi kendine elbisesinin hepsinin giyip çıkarır mı?",
        developementArea: "Sosyal Beceri-Oz bakim"
    },
    {
        id: 142,
        answered: false,
        text: "TV’de sevdiği programın zamanını bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 143,
        answered: false,
        text: "”Bugün” “Yarın” “dün” gibi kelimeleri doğru ve yerinde kullanır mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 144,
        answered: false,
        text: "Makasla gazeteden, dergiden resim keser mi?",
        developementArea: "Ince Motor"
    },
    {
        id: 145,
        answered: false,
        text: "Bakarak birkaç kelime yazar mı?",
        developementArea: "Ince Motor"
    },
    {
        id: 146,
        answered: false,
        text: "7’den sonra hangi sayının geldiğini bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 147,
        answered: false,
        text: "1’den 9’a kadar sayıları yazar mı?",
        developementArea: "Ince Motor"
    },
    {
        id: 148,
        answered: false,
        text: "Ekmek, simit gibi yiyeceklerin kaç para olduğunu bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 149,
        answered: false,
        text: "Birer birer yüze kadar sayar mı?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 150,
        answered: false,
        text: "Haftanın günlerini sırası ile bilir mi?",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 151,
        answered: false,
        text: "Basit toplama işlemleri yapar mı? 2, 2 daha kaç eder gibi",
        developementArea: "Dil-Bilissel"
    },
    {
        id: 152,
        answered: false,
        text: "Adını yazar mı?",
        developementArea: "Ince Motor"
    },
    {
        id: 153,
        answered: false,
        text: "Köydeyse: Köyün, kasabanın adını bilir mi? Şehirdeyse: Mahallenin, sokağın adını bilir mi?",
        developementArea: "Dil-Bilissel"
    }
]
}
]


export default questions