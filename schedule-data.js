/* ============================================================
   DERS PROGRAMI: DEĞİŞİKLİK İÇİN SADECE BU LİSTEYİ DÜZENLE
   day  : 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday
   start/end : "HH:MM" (24 saat)
   type : "class" (altın)  veya  "meet" (mavi)
   Bir satırı silersen etkinlik kalkar, yeni satır eklersen çıkar.
   ============================================================ */
const EVENTS = [
  { day:1, start:"08:00", end:"12:00", title:"Differential Equations for Engineers", type:"class" },
  { day:1, start:"12:00", end:"13:00", title:"Advanced Programming I (Python)", type:"class" },
  { day:1, start:"13:00", end:"14:00", title:"Supervised Graduate Research", type:"class" },
  { day:1, start:"14:00", end:"17:00", title:"LaTeX for Graduate Students", type:"class" },

  /* Salı 08:00-12:00 dersinin adını yazıp başındaki // işaretlerini kaldır:
  { day:2, start:"08:00", end:"12:00", title:"Ders adı", type:"class" }, */
  { day:2, start:"12:00", end:"15:00", title:"Advanced Programming I (Python)", type:"class" },
  { day:2, start:"17:30", end:"19:30", title:"Online Research Meeting with Tom and Nick", type:"meet" },

  { day:4, start:"17:30", end:"19:30", title:"Online Research Meeting with Nick and Dilara", type:"meet" }
];
