// Pemain kunci 48 tim WC 2026 — 5-8 pemain per tim
// Sumber: Wikipedia squad pages (publik), Transfermarkt (publik)
// Update: Juni 2026 (final squad announced 1 Juni 2026)

export interface KeyPlayer {
  name: string;
  short: string;         // nama pendek untuk display
  pos: "GK" | "DEF" | "MID" | "FWD";
  jersey: number;
  club: string;
  age: number;
  caps: number;
  goals: number;         // gol tim nasional
  isStar: boolean;       // pemain bintang utama tim
  form: number;          // 1-10 berdasarkan performa musim ini
  injuryRisk: "LOW" | "MED" | "HIGH";
  traits: string[];
}

export const KEY_PLAYERS: Record<string, KeyPlayer[]> = {
  // ─── GROUP A ───────────────────────────────────────────────────────
  mex: [
    { name:"Guillermo Ochoa",short:"Ochoa",pos:"GK",jersey:1,club:"América",age:39,caps:140,goals:0,isStar:true,form:7,injuryRisk:"LOW",traits:["Reflex luar biasa","Penyelamat WC","Berpengalaman"] },
    { name:"Hirving Lozano",short:"Lozano",pos:"FWD",jersey:22,club:"PSV",age:28,caps:85,goals:17,isStar:true,form:8,injuryRisk:"LOW",traits:["Kecepatan","Dribbling","Sayap berbahaya"] },
    { name:"Edson Álvarez",short:"Álvarez",pos:"MID",jersey:4,club:"West Ham",age:27,caps:72,goals:7,isStar:false,form:8,injuryRisk:"LOW",traits:["Defensive mid","Intersep","Tenaga"] },
    { name:"Henry Martín",short:"Martín",pos:"FWD",jersey:9,club:"América",age:32,caps:40,goals:16,isStar:false,form:7,injuryRisk:"LOW",traits:["Target man","Heading","Set piece"] },
    { name:"César Montes",short:"Montes",pos:"DEF",jersey:3,club:"Monterrey",age:28,caps:45,goals:4,isStar:false,form:7,injuryRisk:"LOW",traits:["CB solid","Udara","Kepemimpinan"] },
  ],
  rsa: [
    { name:"Ronwen Williams",short:"Williams",pos:"GK",jersey:1,club:"Mamelodi Sundowns",age:32,caps:40,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Penyelamat kelas Afrika","Konsisten"] },
    { name:"Percy Tau",short:"Tau",pos:"FWD",jersey:10,club:"Al Ahly",age:30,caps:50,goals:9,isStar:true,form:7,injuryRisk:"LOW",traits:["Teknik","Kreativitas","Pengalaman Eropa"] },
    { name:"Bongani Zungu",short:"Zungu",pos:"MID",jersey:8,club:"Mamelodi Sundowns",age:31,caps:38,goals:3,isStar:false,form:7,injuryRisk:"LOW",traits:["Box-to-box","Fisik","Tekel"] },
    { name:"Siyanda Xulu",short:"Xulu",pos:"DEF",jersey:5,club:"Al Wehda",age:32,caps:30,goals:0,isStar:false,form:6,injuryRisk:"MED",traits:["CB berpengalaman","Udara"] },
  ],
  kor: [
    { name:"Kim Seung-gyu",short:"Seung-gyu",pos:"GK",jersey:1,club:"Vissel Kobe",age:36,caps:70,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Konsisten"] },
    { name:"Son Heung-min",short:"Son",pos:"FWD",jersey:7,club:"Tottenham",age:33,caps:120,goals:40,isStar:true,form:8,injuryRisk:"LOW",traits:["Kecepatan","Finishing","Kapten","Pemimpin"] },
    { name:"Lee Jae-sung",short:"Jae-sung",pos:"MID",jersey:10,club:"Mainz",age:32,caps:75,goals:11,isStar:false,form:7,injuryRisk:"LOW",traits:["Teknis","Visi bermain","Set piece"] },
    { name:"Kim Min-jae",short:"Min-jae",pos:"DEF",jersey:3,club:"Bayern München",age:28,caps:50,goals:4,isStar:true,form:9,injuryRisk:"LOW",traits:["CB world-class","Udara","Speed"] },
    { name:"Hwang Hee-chan",short:"Hee-chan",pos:"FWD",jersey:11,club:"Wolverhampton",age:28,caps:55,goals:15,isStar:false,form:7,injuryRisk:"MED",traits:["Pressing","Energi","Pace"] },
  ],
  cze: [
    { name:"Tomáš Vaclík",short:"Vaclík",pos:"GK",jersey:1,club:"Olympiacos",age:35,caps:44,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Solid"] },
    { name:"Tomáš Souček",short:"Souček",pos:"MID",jersey:8,club:"West Ham",age:29,caps:65,goals:18,isStar:true,form:8,injuryRisk:"LOW",traits:["Heading","Gol penting","Box-to-box"] },
    { name:"Patrik Schick",short:"Schick",pos:"FWD",jersey:11,club:"Bayer Leverkusen",age:29,caps:45,goals:28,isStar:true,form:8,injuryRisk:"MED",traits:["Finishing","Teknik","Aerial"] },
    { name:"Vladimír Coufal",short:"Coufal",pos:"DEF",jersey:2,club:"West Ham",age:32,caps:40,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["RB modern","Overlapping"] },
  ],
  // ─── GROUP B ───────────────────────────────────────────────────────
  can: [
    { name:"Maxime Crépeau",short:"Crépeau",pos:"GK",jersey:1,club:"LA Galaxy",age:30,caps:30,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Agresif","Sweep keeper"] },
    { name:"Alphonso Davies",short:"Davies",pos:"DEF",jersey:12,club:"Bayern München",age:24,caps:52,goals:13,isStar:true,form:8,injuryRisk:"MED",traits:["Kecepatan brutal","Dribbling","LB ofensif"] },
    { name:"Jonathan David",short:"J. David",pos:"FWD",jersey:9,club:"Lille",age:24,caps:40,goals:28,isStar:true,form:9,injuryRisk:"LOW",traits:["Goalscorer murni","Teknik","Konsisten"] },
    { name:"Tajon Buchanan",short:"Buchanan",pos:"FWD",jersey:11,club:"Inter Milan",age:25,caps:35,goals:8,isStar:false,form:7,injuryRisk:"MED",traits:["Kecepatan","Sayap","Direct"] },
    { name:"Atiba Hutchinson",short:"Hutchinson",pos:"MID",jersey:13,club:"Beşiktaş",age:40,caps:95,goals:10,isStar:false,form:6,injuryRisk:"MED",traits:["Veteran","Kepemimpinan","Visi"] },
  ],
  bih: [
    { name:"Ibrahim Šehić",short:"Šehić",pos:"GK",jersey:1,club:"Akhisar",age:34,caps:30,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Solid","Berpengalaman"] },
    { name:"Edin Džeko",short:"Džeko",pos:"FWD",jersey:10,club:"Fenerbahçe",age:39,caps:111,goals:63,isStar:true,form:7,injuryRisk:"MED",traits:["Legenda Bosnia","Target man","Pengalaman"] },
    { name:"Haris Hajradinović",short:"Hajradinović",pos:"MID",jersey:8,club:"Angers",age:28,caps:20,goals:3,isStar:false,form:7,injuryRisk:"LOW",traits:["Kreatif","Dribbling"] },
  ],
  qat: [
    { name:"Meshaal Barsham",short:"Barsham",pos:"GK",jersey:1,club:"Al Sadd",age:26,caps:25,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Agile","Penyelamat"] },
    { name:"Akram Afif",short:"Afif",pos:"FWD",jersey:11,club:"Al Sadd",age:28,caps:70,goals:28,isStar:true,form:9,injuryRisk:"LOW",traits:["Dribler terbaik Asia","Teknik","Kecepatan","Ballon d'Or AFC"] },
    { name:"Almoez Ali",short:"Almoez",pos:"FWD",jersey:19,club:"Al Duhail",age:28,caps:75,goals:45,isStar:false,form:8,injuryRisk:"LOW",traits:["Prolific","Heading","Counter"] },
    { name:"Hassan Al Haydos",short:"Al Haydos",pos:"FWD",jersey:10,club:"Al Sadd",age:33,caps:140,goals:50,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Kreativitas"] },
  ],
  sui: [
    { name:"Yann Sommer",short:"Sommer",pos:"GK",jersey:1,club:"Inter Milan",age:36,caps:80,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Kelas dunia","Konsisten","Penalti stopper"] },
    { name:"Granit Xhaka",short:"Xhaka",pos:"MID",jersey:10,club:"Bayer Leverkusen",age:33,caps:120,goals:16,isStar:true,form:9,injuryRisk:"LOW",traits:["Umpan jauh","Set piece","Kepemimpinan"] },
    { name:"Xherdan Shaqiri",short:"Shaqiri",pos:"FWD",jersey:23,club:"Chicago Fire",age:33,caps:100,goals:30,isStar:false,form:7,injuryRisk:"MED",traits:["Big game player","Tembakan keras","Berpengalaman"] },
    { name:"Manuel Akanji",short:"Akanji",pos:"DEF",jersey:5,club:"Manchester City",age:29,caps:55,goals:2,isStar:false,form:8,injuryRisk:"LOW",traits:["CB world-class","Build-up","Tenang"] },
    { name:"Ruben Vargas",short:"Vargas",pos:"FWD",jersey:11,club:"Augsburg",age:26,caps:35,goals:8,isStar:false,form:7,injuryRisk:"LOW",traits:["Kecepatan","Sayap kiri","Energi"] },
  ],
  // ─── GROUP C ───────────────────────────────────────────────────────
  bra: [
    { name:"Alisson",short:"Alisson",pos:"GK",jersey:1,club:"Liverpool",age:32,caps:72,goals:1,isStar:true,form:9,injuryRisk:"LOW",traits:["Best GK dunia","Sweeper-keeper","Playmaking"] },
    { name:"Vinícius Júnior",short:"Vini Jr",pos:"FWD",jersey:7,club:"Real Madrid",age:24,caps:60,goals:21,isStar:true,form:9,injuryRisk:"LOW",traits:["Kecepatan ekstrem","Dribbling","Finishing","Ballon d'Or"] },
    { name:"Rodrygo",short:"Rodrygo",pos:"FWD",jersey:11,club:"Real Madrid",age:24,caps:40,goals:15,isStar:false,form:8,injuryRisk:"LOW",traits:["Big match player","Versatile","Teknik"] },
    { name:"Casemiro",short:"Casemiro",pos:"MID",jersey:5,club:"Manchester United",age:33,caps:80,goals:8,isStar:true,form:7,injuryRisk:"LOW",traits:["Defensive anchor","Winning culture","UCL"] },
    { name:"Marquinhos",short:"Marquinhos",pos:"DEF",jersey:4,club:"PSG",age:31,caps:85,goals:8,isStar:false,form:8,injuryRisk:"LOW",traits:["Kapten","CB solid","Kepemimpinan"] },
    { name:"Raphinha",short:"Raphinha",pos:"FWD",jersey:19,club:"Barcelona",age:28,caps:50,goals:18,isStar:false,form:8,injuryRisk:"LOW",traits:["Kreativitas","Dribbling","Direct"] },
    { name:"Endrick",short:"Endrick",pos:"FWD",jersey:9,club:"Real Madrid",age:18,caps:12,goals:6,isStar:false,form:8,injuryRisk:"LOW",traits:["Wonderkid","Explosif","Finishing muda"] },
  ],
  mar: [
    { name:"Yassine Bounou",short:"Bono",pos:"GK",jersey:1,club:"Al Hilal",age:33,caps:50,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Penyelamat WC 2022","Penalti stopper","Konsisten"] },
    { name:"Achraf Hakimi",short:"Hakimi",pos:"DEF",jersey:2,club:"PSG",age:26,caps:70,goals:13,isStar:true,form:9,injuryRisk:"LOW",traits:["RB terbaik dunia","Kecepatan","Overlapping agresif"] },
    { name:"Hakim Ziyech",short:"Ziyech",pos:"MID",jersey:7,club:"Galatasaray",age:32,caps:65,goals:19,isStar:true,form:7,injuryRisk:"MED",traits:["Umpan kreatif","Tendangan bebas","Visi"] },
    { name:"Youssef En-Nesyri",short:"En-Nesyri",pos:"FWD",jersey:9,club:"Fenerbahçe",age:27,caps:55,goals:25,isStar:false,form:8,injuryRisk:"LOW",traits:["Target man","Heading","Gol penting"] },
    { name:"Azzedine Ounahi",short:"Ounahi",pos:"MID",jersey:8,club:"Marseille",age:24,caps:35,goals:4,isStar:false,form:8,injuryRisk:"LOW",traits:["Box-to-box","Energi","Pressing"] },
  ],
  hai: [
    { name:"Josué Duverger",short:"Duverger",pos:"GK",jersey:1,club:"CS Moulins",age:32,caps:20,goals:0,isStar:false,form:6,injuryRisk:"LOW",traits:["Berpengalaman regional"] },
    { name:"Duckens Nazon",short:"Nazon",pos:"FWD",jersey:9,club:"Portland Timbers",age:30,caps:30,goals:8,isStar:true,form:7,injuryRisk:"LOW",traits:["Kecepatan","Sayap","Target man"] },
    { name:"Derrick Etienne Jr",short:"Etienne",pos:"FWD",jersey:11,club:"Toronto FC",age:28,caps:25,goals:7,isStar:false,form:7,injuryRisk:"LOW",traits:["Pace","Direct"] },
  ],
  sco: [
    { name:"Angus Gunn",short:"Gunn",pos:"GK",jersey:1,club:"Norwich City",age:29,caps:20,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Solid","Modern"] },
    { name:"Andrew Robertson",short:"Robertson",pos:"DEF",jersey:3,club:"Liverpool",age:31,caps:80,goals:4,isStar:true,form:8,injuryRisk:"LOW",traits:["LB world-class","Kapten","Crossing"] },
    { name:"Scott McTominay",short:"McTominay",pos:"MID",jersey:5,club:"Napoli",age:28,caps:55,goals:14,isStar:true,form:9,injuryRisk:"LOW",traits:["Gol penting","Tenaga","Heading"] },
    { name:"John McGinn",short:"McGinn",pos:"MID",jersey:7,club:"Aston Villa",age:30,caps:70,goals:9,isStar:false,form:8,injuryRisk:"LOW",traits:["Box-to-box","Kapitan lokal","Energi"] },
    { name:"Che Adams",short:"Adams",pos:"FWD",jersey:9,club:"Torino",age:29,caps:30,goals:8,isStar:false,form:7,injuryRisk:"LOW",traits:["Pace","Pressing","Target"] },
  ],
  // ─── GROUP D ───────────────────────────────────────────────────────
  usa: [
    { name:"Matt Turner",short:"Turner",pos:"GK",jersey:1,club:"Nottm Forest",age:30,caps:30,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Atlet superior","Kuat udara"] },
    { name:"Christian Pulisic",short:"Pulisic",pos:"FWD",jersey:10,club:"AC Milan",age:27,caps:65,goals:25,isStar:true,form:8,injuryRisk:"MED",traits:["Captain America","Teknik","Big game","Pemimpin"] },
    { name:"Gio Reyna",short:"Reyna",pos:"MID",jersey:7,club:"Borussia Dortmund",age:23,caps:35,goals:8,isStar:true,form:8,injuryRisk:"MED",traits:["Wonderkid","Kreativitas","Tembakan jauh"] },
    { name:"Yunus Musah",short:"Musah",pos:"MID",jersey:6,club:"AC Milan",age:22,caps:40,goals:2,isStar:false,form:8,injuryRisk:"LOW",traits:["Energi","Dribbling","Modern mid"] },
    { name:"Tyler Adams",short:"T. Adams",pos:"MID",jersey:4,club:"Leeds United",age:26,caps:55,goals:2,isStar:false,form:7,injuryRisk:"MED",traits:["Kapten","Defensive mid","Pressing"] },
    { name:"Folarin Balogun",short:"Balogun",pos:"FWD",jersey:9,club:"Monaco",age:23,caps:20,goals:8,isStar:false,form:7,injuryRisk:"LOW",traits:["Pace","Finishing","Muda"] },
  ],
  par: [
    { name:"Antony Silva",short:"A. Silva",pos:"GK",jersey:1,club:"Cerro Porteño",age:34,caps:55,goals:0,isStar:true,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Refleks"] },
    { name:"Miguel Almirón",short:"Almirón",pos:"MID",jersey:10,club:"Newcastle",age:30,caps:60,goals:11,isStar:true,form:8,injuryRisk:"LOW",traits:["Energi","Pressing","Gol penting"] },
    { name:"Ángel Romero",short:"Á. Romero",pos:"FWD",jersey:9,club:"Olimpia",age:32,caps:45,goals:18,isStar:false,form:7,injuryRisk:"LOW",traits:["Target man","Gol","Aerial"] },
  ],
  aus: [
    { name:"Mathew Ryan",short:"Ryan",pos:"GK",jersey:1,club:"Real Sociedad",age:33,caps:80,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Penalti stopper","Berpengalaman","Sweeper"] },
    { name:"Mathew Leckie",short:"Leckie",pos:"FWD",jersey:7,club:"Melbourne City",age:34,caps:85,goals:14,isStar:true,form:7,injuryRisk:"MED",traits:["Veteran","Pace","Kapten emosional"] },
    { name:"Riley McGree",short:"McGree",pos:"MID",jersey:8,club:"Middlesbrough",age:26,caps:30,goals:5,isStar:false,form:8,injuryRisk:"LOW",traits:["Energi","Goal scoring","Modern"] },
    { name:"Mitchell Duke",short:"Duke",pos:"FWD",jersey:9,club:"Fagiano Okayama",age:34,caps:30,goals:8,isStar:false,form:7,injuryRisk:"LOW",traits:["Target man","Heading","Fisik"] },
  ],
  tur: [
    { name:"Mert Günok",short:"Günok",pos:"GK",jersey:1,club:"Galatasaray",age:35,caps:40,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Solid"] },
    { name:"Hakan Çalhanoğlu",short:"Çalhanoğlu",pos:"MID",jersey:10,club:"Inter Milan",age:31,caps:85,goals:22,isStar:true,form:9,injuryRisk:"LOW",traits:["Tendangan bebas","Playmaker","Visi luar biasa"] },
    { name:"Arda Güler",short:"Güler",pos:"MID",jersey:7,club:"Real Madrid",age:19,caps:20,goals:6,isStar:true,form:9,injuryRisk:"LOW",traits:["Wonderkid","Teknik","Kreativitas","Tembakan jauh"] },
    { name:"Cenk Tosun",short:"Tosun",pos:"FWD",jersey:9,club:"Beşiktaş",age:33,caps:70,goals:25,isStar:false,form:7,injuryRisk:"LOW",traits:["Target man","Berpengalaman","Heading"] },
    { name:"Ferdi Kadıoğlu",short:"Kadıoğlu",pos:"DEF",jersey:3,club:"Brighton",age:24,caps:30,goals:3,isStar:false,form:8,injuryRisk:"LOW",traits:["LB modern","Teknik","Direct"] },
  ],
  // ─── GROUP E ───────────────────────────────────────────────────────
  ger: [
    { name:"Manuel Neuer",short:"Neuer",pos:"GK",jersey:1,club:"Bayern München",age:39,caps:120,goals:1,isStar:true,form:7,injuryRisk:"MED",traits:["Legenda","Sweeper-keeper","Berpengalaman WC"] },
    { name:"Florian Wirtz",short:"Wirtz",pos:"MID",jersey:10,club:"Bayer Leverkusen",age:21,caps:25,goals:9,isStar:true,form:10,injuryRisk:"LOW",traits:["Wonderkid termahal","Kreativitas","Tembakan jauh","Invincible Leverkusen"] },
    { name:"Jamal Musiala",short:"Musiala",pos:"MID",jersey:14,club:"Bayern München",age:21,caps:32,goals:12,isStar:true,form:9,injuryRisk:"LOW",traits:["Dribbling terbaik Jerman","Teknik","Explosif"] },
    { name:"Leroy Sané",short:"Sané",pos:"FWD",jersey:19,club:"Bayern München",age:29,caps:60,goals:16,isStar:false,form:8,injuryRisk:"MED",traits:["Kecepatan","Finishing","Sayap"] },
    { name:"Robert Andrich",short:"Andrich",pos:"MID",jersey:23,club:"Bayer Leverkusen",age:30,caps:20,goals:3,isStar:false,form:9,injuryRisk:"LOW",traits:["Defensive mid","Fisik","Intercept"] },
    { name:"Jonathan Tah",short:"Tah",pos:"DEF",jersey:5,club:"Bayern München",age:29,caps:25,goals:2,isStar:false,form:8,injuryRisk:"LOW",traits:["CB Leverkusen","Build-up","Kuat"] },
  ],
  cuw: [
    { name:"Eloy Room",short:"Room",pos:"GK",jersey:1,club:"Columbus Crew",age:33,caps:25,goals:0,isStar:true,form:7,injuryRisk:"LOW",traits:["Best GK Curaçao","MLS berpengalaman"] },
    { name:"Cuco Martina",short:"Martina",pos:"DEF",jersey:2,club:"Waalwijk",age:35,caps:60,goals:0,isStar:false,form:6,injuryRisk:"MED",traits:["Veteran","Berpengalaman"] },
    { name:"Leandro Bacuna",short:"Bacuna",pos:"MID",jersey:10,club:"Middlesbrough",age:33,caps:45,goals:8,isStar:true,form:7,injuryRisk:"LOW",traits:["Kapten","Pengalaman Premier League","Set piece"] },
  ],
  civ: [
    { name:"Yann M'Vila",short:"M'Vila",pos:"MID",jersey:5,club:"Rennes",age:34,caps:22,goals:0,isStar:false,form:6,injuryRisk:"MED",traits:["Veteran","Tenaga"] },
    { name:"Sébastien Haller",short:"Haller",pos:"FWD",jersey:9,club:"Borussia Dortmund",age:30,caps:40,goals:15,isStar:true,form:8,injuryRisk:"LOW",traits:["Target man","Heading","Power"] },
    { name:"Franck Kessié",short:"Kessié",pos:"MID",jersey:8,club:"Al Ahli",age:27,caps:60,goals:9,isStar:true,form:7,injuryRisk:"LOW",traits:["Power","Box-to-box","Set piece"] },
    { name:"Simon Adingra",short:"Adingra",pos:"FWD",jersey:17,club:"Brighton",age:22,caps:20,goals:5,isStar:false,form:8,injuryRisk:"LOW",traits:["Kecepatan","Muda","AFCON 2024"] },
    { name:"Serge Aurier",short:"Aurier",pos:"DEF",jersey:2,club:"Club Brugge",age:32,caps:80,goals:12,isStar:false,form:7,injuryRisk:"MED",traits:["Berpengalaman","Overlapping"] },
  ],
  ecu: [
    { name:"Hernán Galíndez",short:"Galíndez",pos:"GK",jersey:1,club:"Universidad Católica",age:36,caps:40,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Konsisten"] },
    { name:"Enner Valencia",short:"Valencia",pos:"FWD",jersey:13,club:"Independiente",age:34,caps:80,goals:40,isStar:true,form:7,injuryRisk:"MED",traits:["Legenda Ecuador","Big game","Gol penting WC"] },
    { name:"Moisés Caicedo",short:"Caicedo",pos:"MID",jersey:10,club:"Chelsea",age:23,caps:35,goals:3,isStar:true,form:9,injuryRisk:"LOW",traits:["Defensive mid top","Intersep","Chelsea record"] },
    { name:"Gonzalo Plata",short:"Plata",pos:"FWD",jersey:11,club:"Al Qadsiah",age:24,caps:40,goals:8,isStar:false,form:7,injuryRisk:"LOW",traits:["Pace","Dribbling","Direct"] },
  ],
  // ─── GROUP F ───────────────────────────────────────────────────────
  ned: [
    { name:"Bart Verbruggen",short:"Verbruggen",pos:"GK",jersey:1,club:"Brighton",age:22,caps:15,goals:0,isStar:false,form:8,injuryRisk:"LOW",traits:["Sweeper keeper","Muda","Brighton"] },
    { name:"Virgil van Dijk",short:"Van Dijk",pos:"DEF",jersey:4,club:"Liverpool",age:33,caps:55,goals:7,isStar:true,form:8,injuryRisk:"LOW",traits:["CB terbaik dunia","Kepemimpinan","Kapten","Udara"] },
    { name:"Frenkie de Jong",short:"De Jong",pos:"MID",jersey:21,club:"Barcelona",age:27,caps:60,goals:5,isStar:true,form:7,injuryRisk:"MED",traits:["Playmaker","Dribbling dari belakang","Teknik"] },
    { name:"Cody Gakpo",short:"Gakpo",pos:"FWD",jersey:11,club:"Liverpool",age:25,caps:40,goals:15,isStar:true,form:8,injuryRisk:"LOW",traits:["Versatile","Muda berbakat","Gol penting"] },
    { name:"Dumfries",short:"Dumfries",pos:"DEF",jersey:2,club:"Inter Milan",age:28,caps:40,goals:6,isStar:false,form:8,injuryRisk:"LOW",traits:["RB powerhouse","Overlapping","Inter"] },
    { name:"Wout Weghorst",short:"Weghorst",pos:"FWD",jersey:9,club:"Hoffenheim",age:32,caps:45,goals:20,isStar:false,form:7,injuryRisk:"LOW",traits:["Target man","Heading","Set piece"] },
  ],
  jpn: [
    { name:"Shuichi Gonda",short:"Gonda",pos:"GK",jersey:1,club:"Shimizu S-Pulse",age:34,caps:45,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Konsisten"] },
    { name:"Takehiro Tomiyasu",short:"Tomiyasu",pos:"DEF",jersey:5,club:"Arsenal",age:26,caps:40,goals:2,isStar:true,form:8,injuryRisk:"MED",traits:["Versatile defender","Pressing","Arsenal"] },
    { name:"Daichi Kamada",short:"Kamada",pos:"MID",jersey:10,club:"Crystal Palace",age:28,caps:35,goals:9,isStar:true,form:8,injuryRisk:"LOW",traits:["Teknis","Gol dari jauh","Visi"] },
    { name:"Ritsu Doan",short:"Doan",pos:"FWD",jersey:15,club:"Freiburg",age:26,caps:40,goals:14,isStar:false,form:8,injuryRisk:"LOW",traits:["Pace","Direct","Gol Jerman & Spanyol WC 2022"] },
    { name:"Kaoru Mitoma",short:"Mitoma",pos:"FWD",jersey:11,club:"Brighton",age:27,caps:35,goals:10,isStar:true,form:9,injuryRisk:"LOW",traits:["Dribbling analitik","Kecepatan","Brighton star"] },
  ],
  swe: [
    { name:"Robin Olsen",short:"Olsen",pos:"GK",jersey:1,club:"Aston Villa",age:34,caps:55,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Tinggi"] },
    { name:"Alexander Isak",short:"Isak",pos:"FWD",jersey:9,club:"Newcastle",age:25,caps:40,goals:16,isStar:true,form:9,injuryRisk:"MED",traits:["Pace","Teknik","Finishing","Newcastle sensation"] },
    { name:"Dejan Kulusevski",short:"Kulusevski",pos:"FWD",jersey:10,club:"Tottenham",age:24,caps:35,goals:10,isStar:true,form:8,injuryRisk:"LOW",traits:["Versatile","Direct","Spurs key player"] },
    { name:"Emil Forsberg",short:"Forsberg",pos:"MID",jersey:7,club:"New York Red Bulls",age:32,caps:80,goals:28,isStar:false,form:7,injuryRisk:"LOW",traits:["Kreativitas","Set piece","Berpengalaman"] },
  ],
  tun: [
    { name:"Bechir Ben Said",short:"Ben Said",pos:"GK",jersey:1,club:"Zamalek",age:29,caps:20,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Agile","Modern"] },
    { name:"Hannibal Mejbri",short:"Hannibal",pos:"MID",jersey:10,club:"Birmingham",age:21,caps:25,goals:3,isStar:true,form:8,injuryRisk:"LOW",traits:["Wonderkid Tunisia","Kreativitas","Teknik","Manchester United"] },
    { name:"Wahbi Khazri",short:"Khazri",pos:"FWD",jersey:19,club:"Rayo Vallecano",age:33,caps:65,goals:23,isStar:false,form:7,injuryRisk:"MED",traits:["Berpengalaman","Set piece","Teknik"] },
  ],
  // ─── GROUP G ───────────────────────────────────────────────────────
  bel: [
    { name:"Koen Casteels",short:"Casteels",pos:"GK",jersey:1,club:"Al Qadsiah",age:32,caps:35,goals:0,isStar:false,form:8,injuryRisk:"LOW",traits:["Solid","Shot-stopper"] },
    { name:"Kevin De Bruyne",short:"De Bruyne",pos:"MID",jersey:7,club:"Manchester City",age:34,caps:100,goals:27,isStar:true,form:8,injuryRisk:"MED",traits:["Best midfielder era","Vision","Passing","City legend"] },
    { name:"Romelu Lukaku",short:"Lukaku",pos:"FWD",jersey:9,club:"Napoli",age:31,caps:110,goals:75,isStar:true,form:8,injuryRisk:"LOW",traits:["Top scorer Belgia","Fisik dominan","Target man"] },
    { name:"Jeremy Doku",short:"Doku",pos:"FWD",jersey:11,club:"Manchester City",age:22,caps:25,goals:5,isStar:false,form:8,injuryRisk:"MED",traits:["Kecepatan","Dribbling","Sayap muda"] },
    { name:"Axel Witsel",short:"Witsel",pos:"MID",jersey:6,club:"Atletico Madrid",age:35,caps:130,goals:11,isStar:false,form:7,injuryRisk:"LOW",traits:["Veteran","Defensive mid","Tenang"] },
  ],
  egy: [
    { name:"Mohamed El Shenawy",short:"El Shenawy",pos:"GK",jersey:1,club:"Al Ahly",age:35,caps:40,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Pengalaman Afrika","Refleks"] },
    { name:"Mohamed Salah",short:"Salah",pos:"FWD",jersey:10,club:"Liverpool",age:33,caps:95,goals:57,isStar:true,form:9,injuryRisk:"LOW",traits:["Premier League legend","Kecepatan","Finishing","Liverpool icon"] },
    { name:"Trezeguet",short:"Trezeguet",pos:"FWD",jersey:17,club:"Trabzonspor",age:29,caps:60,goals:19,isStar:false,form:7,injuryRisk:"MED",traits:["Kecepatan sayap","Cutting inside"] },
    { name:"Ramy Bensebaini",short:"Bensebaini",pos:"DEF",jersey:5,club:"Borussia Dortmund",age:30,caps:35,goals:6,isStar:false,form:8,injuryRisk:"LOW",traits:["LB ofensif","Set piece","Gol dari belakang"] },
  ],
  irn: [
    { name:"Alireza Beiranvand",short:"Beiranvand",pos:"GK",jersey:1,club:"Antwerp",age:31,caps:55,goals:0,isStar:true,form:8,injuryRisk:"MED",traits:["Best GK Iran","Kuat","Berpengalaman WC"] },
    { name:"Mehdi Taremi",short:"Taremi",pos:"FWD",jersey:9,club:"Inter Milan",age:32,caps:90,goals:50,isStar:true,form:9,injuryRisk:"LOW",traits:["Inter Milan striker","Teknik","Overhead kick","Konsisten"] },
    { name:"Ali Gholizadeh",short:"Gholizadeh",pos:"FWD",jersey:11,club:"Charleroi",age:27,caps:35,goals:8,isStar:false,form:7,injuryRisk:"LOW",traits:["Pace","Sayap kiri","Direct"] },
  ],
  nzl: [
    { name:"Oliver Sail",short:"Sail",pos:"GK",jersey:1,club:"Nantes",age:26,caps:15,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Modern","Sweeper keeper"] },
    { name:"Chris Wood",short:"Wood",pos:"FWD",jersey:9,club:"Nottm Forest",age:32,caps:70,goals:31,isStar:true,form:7,injuryRisk:"LOW",traits:["Target man","Heading","Premier League proven"] },
    { name:"Clayton Lewis",short:"Lewis",pos:"MID",jersey:10,club:"Club Brugge",age:30,caps:45,goals:7,isStar:false,form:7,injuryRisk:"LOW",traits:["Playmaker","Berpengalaman"] },
  ],
  // ─── GROUP H ───────────────────────────────────────────────────────
  esp: [
    { name:"Unai Simón",short:"U. Simón",pos:"GK",jersey:1,club:"Athletic Club",age:27,caps:35,goals:0,isStar:false,form:8,injuryRisk:"LOW",traits:["Sweeper-keeper","Build-up","Modern"] },
    { name:"Lamine Yamal",short:"Yamal",pos:"FWD",jersey:19,club:"Barcelona",age:17,caps:25,goals:9,isStar:true,form:9,injuryRisk:"MED",traits:["Wonderkid terbaik dunia","EURO 2024","Dribbling","Teknik"] },
    { name:"Pedri",short:"Pedri",pos:"MID",jersey:8,club:"Barcelona",age:22,caps:35,goals:5,isStar:true,form:8,injuryRisk:"MED",traits:["Playmaker generasi baru","Visi","Teknik Barcelona"] },
    { name:"Rodri",short:"Rodri",pos:"MID",jersey:16,club:"Manchester City",age:28,caps:55,goals:7,isStar:true,form:9,injuryRisk:"LOW",traits:["Ballon d'Or 2024","Best DM dunia","Poros permainan"] },
    { name:"Álvaro Morata",short:"Morata",pos:"FWD",jersey:7,club:"AC Milan",age:32,caps:80,goals:35,isStar:false,form:7,injuryRisk:"LOW",traits:["Kapten","Big game player","Heading"] },
    { name:"Dani Carvajal",short:"Carvajal",pos:"DEF",jersey:2,club:"Real Madrid",age:32,caps:58,goals:6,isStar:false,form:8,injuryRisk:"MED",traits:["RB terbaik Eropa","UCL","Berpengalaman"] },
  ],
  cpv: [
    { name:"Vozinha",short:"Vozinha",pos:"GK",jersey:1,club:"Getafe",age:32,caps:35,goals:0,isStar:true,form:7,injuryRisk:"LOW",traits:["Best GK Cape Verde","Penyelamat kunci"] },
    { name:"Bryan Tavares",short:"B. Tavares",pos:"MID",jersey:10,club:"Vitesse",age:24,caps:20,goals:4,isStar:false,form:8,injuryRisk:"LOW",traits:["Muda","Kreativitas","Energi"] },
  ],
  ksa: [
    { name:"Mohammed Al-Owais",short:"Al-Owais",pos:"GK",jersey:1,club:"Al Hilal",age:31,caps:50,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Penyelamat Argentina WC 2022","Solid"] },
    { name:"Salem Al-Dawsari",short:"Al-Dawsari",pos:"FWD",jersey:10,club:"Al Hilal",age:32,caps:85,goals:31,isStar:true,form:8,injuryRisk:"LOW",traits:["Teknis","Kecepatan","Gol legendaris vs Argentina"] },
    { name:"Firas Al-Buraikan",short:"Al-Buraikan",pos:"FWD",jersey:9,club:"Al Fateh",age:24,caps:30,goals:12,isStar:false,form:8,injuryRisk:"LOW",traits:["Muda","Cepat","Finishing"] },
  ],
  uru: [
    { name:"Sergio Rochet",short:"Rochet",pos:"GK",jersey:1,club:"Nacional",age:30,caps:25,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Konsisten","Solid"] },
    { name:"Darwin Núñez",short:"Darwin",pos:"FWD",jersey:9,club:"Liverpool",age:25,caps:40,goals:25,isStar:true,form:8,injuryRisk:"MED",traits:["Pace brutal","Power","Liverpool striker","Ledak-ledakan"] },
    { name:"Federico Valverde",short:"Valverde",pos:"MID",jersey:8,club:"Real Madrid",age:26,caps:40,goals:9,isStar:true,form:9,injuryRisk:"LOW",traits:["Box-to-box terbaik","Stamina","Gol penting Real Madrid"] },
    { name:"Rodrigo Bentancur",short:"Bentancur",pos:"MID",jersey:6,club:"Tottenham",age:27,caps:50,goals:3,isStar:false,form:7,injuryRisk:"LOW",traits:["Teknis","Visi","Build-up"] },
    { name:"Luis Suárez",short:"Suárez",pos:"FWD",jersey:9,club:"Peñarol",age:38,caps:135,goals:69,isStar:false,form:6,injuryRisk:"HIGH",traits:["Legenda Uruguay","Veteran","Big match"] },
  ],
  // ─── GROUP I ───────────────────────────────────────────────────────
  fra: [
    { name:"Mike Maignan",short:"Maignan",pos:"GK",jersey:16,club:"AC Milan",age:28,caps:30,goals:0,isStar:true,form:9,injuryRisk:"LOW",traits:["Best GK Eropa saat ini","Sweeper-keeper","Refleks"] },
    { name:"Kylian Mbappé",short:"Mbappé",pos:"FWD",jersey:10,club:"Real Madrid",age:26,caps:85,goals:52,isStar:true,form:9,injuryRisk:"LOW",traits:["Kecepatan terbaik dunia","Kapten","Finishing","Real Madrid"] },
    { name:"Antoine Griezmann",short:"Griezmann",pos:"FWD",jersey:7,club:"Atletico Madrid",age:35,caps:130,goals:53,isStar:true,form:8,injuryRisk:"LOW",traits:["Veteran kelas dunia","Big game player","Berpengalaman WC"] },
    { name:"Ousmane Dembélé",short:"Dembélé",pos:"FWD",jersey:11,club:"PSG",age:27,caps:55,goals:10,isStar:false,form:9,injuryRisk:"MED",traits:["Dribbling","Kecepatan","Sayap berbahaya"] },
    { name:"Aurélien Tchouaméni",short:"Tchouaméni",pos:"MID",jersey:8,club:"Real Madrid",age:25,caps:35,goals:4,isStar:false,form:9,injuryRisk:"LOW",traits:["Defensive mid elite","Intersep","Real Madrid"] },
    { name:"William Saliba",short:"Saliba",pos:"DEF",jersey:17,club:"Arsenal",age:23,caps:20,goals:0,isStar:false,form:9,injuryRisk:"LOW",traits:["CB terbaik Premier League","Baca permainan","Tenang"] },
  ],
  sen: [
    { name:"Édouard Mendy",short:"Mendy",pos:"GK",jersey:16,club:"Al Ahli",age:32,caps:35,goals:0,isStar:true,form:7,injuryRisk:"LOW",traits:["UCL winner Chelsea","Fisik besar","Solid"] },
    { name:"Sadio Mané",short:"Mané",pos:"FWD",jersey:10,club:"Al Nassr",age:32,caps:100,goals:39,isStar:true,form:7,injuryRisk:"MED",traits:["AFCON 2021 & 2023","Pace","Decisive"] },
    { name:"Ismaïla Sarr",short:"I. Sarr",pos:"FWD",jersey:11,club:"Crystal Palace",age:26,caps:50,goals:12,isStar:false,form:8,injuryRisk:"MED",traits:["Kecepatan","Sayap","Direct"] },
    { name:"Idrissa Gueye",short:"Gueye",pos:"MID",jersey:5,club:"Éverton",age:35,caps:80,goals:4,isStar:false,form:7,injuryRisk:"LOW",traits:["Veteran","Defensive mid","Pressing"] },
  ],
  irq: [
    { name:"Jalal Hachim",short:"Hachim",pos:"GK",jersey:1,club:"Al Quwa Al Jawiya",age:28,caps:25,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Solid","Berpengalaman regional"] },
    { name:"Amjad Attwan",short:"Attwan",pos:"FWD",jersey:10,club:"Al Khor",age:27,caps:40,goals:15,isStar:true,form:8,injuryRisk:"LOW",traits:["Teknis","Kecepatan","Playmaker"] },
  ],
  nor: [
    { name:"Ørjan Nyland",short:"Nyland",pos:"GK",jersey:1,club:"Sheffield United",age:33,caps:30,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Solid"] },
    { name:"Erling Haaland",short:"Haaland",pos:"FWD",jersey:9,club:"Manchester City",age:25,caps:33,goals:34,isStar:true,form:10,injuryRisk:"LOW",traits:["Mesin gol terbaik dunia","Kecepatan+Power","Treble City","Premier League record"] },
    { name:"Martin Ødegaard",short:"Ødegaard",pos:"MID",jersey:10,club:"Arsenal",age:26,caps:55,goals:15,isStar:true,form:8,injuryRisk:"MED",traits:["Kapten Arsenal","Playmaker","Visi bermain"] },
    { name:"Alexander Sørloth",short:"Sørloth",pos:"FWD",jersey:11,club:"Atletico Madrid",age:28,caps:45,goals:26,isStar:false,form:8,injuryRisk:"LOW",traits:["Target man","Atletico","Gol konsisten"] },
  ],
  // ─── GROUP J ───────────────────────────────────────────────────────
  arg: [
    { name:"Emiliano Martínez",short:"Dibu",pos:"GK",jersey:23,club:"Aston Villa",age:32,caps:35,goals:0,isStar:true,form:9,injuryRisk:"LOW",traits:["Psikolog penalti","WC 2022 hero","Mind games","Mental juara"] },
    { name:"Lionel Messi",short:"Messi",pos:"FWD",jersey:10,club:"Inter Miami",age:38,caps:183,goals:109,isStar:true,form:8,injuryRisk:"MED",traits:["Greatest of All Time","WC 2022 champion","Inspirasi","Ballon d'Or ×8"] },
    { name:"Lautaro Martínez",short:"Lautaro",pos:"FWD",jersey:22,club:"Inter Milan",age:27,caps:55,goals:30,isStar:true,form:9,injuryRisk:"LOW",traits:["Striker world-class","Duo Inter","Pressing","Gol penting"] },
    { name:"Rodrigo De Paul",short:"De Paul",pos:"MID",jersey:7,club:"Atletico Madrid",age:30,caps:65,goals:10,isStar:false,form:8,injuryRisk:"LOW",traits:["Motor Argentina","Pressing","Atletico"] },
    { name:"Alexis Mac Allister",short:"Mac Allister",pos:"MID",jersey:20,club:"Liverpool",age:25,caps:30,goals:5,isStar:false,form:9,injuryRisk:"LOW",traits:["Liverpool starter","Teknis","Box-to-box"] },
    { name:"Nicolás Otamendi",short:"Otamendi",pos:"DEF",jersey:19,club:"Benfica",age:36,caps:115,goals:8,isStar:false,form:7,injuryRisk:"MED",traits:["Veteran","Kapten senior","CB keras"] },
  ],
  alg: [
    { name:"Rais M'Bolhi",short:"M'Bolhi",pos:"GK",jersey:1,club:"Al Gharafa",age:37,caps:90,goals:0,isStar:true,form:7,injuryRisk:"MED",traits:["Veteran","Penyelamat besar","Berpengalaman WC"] },
    { name:"Islam Slimani",short:"Slimani",pos:"FWD",jersey:9,club:"Panathinaikos",age:35,caps:100,goals:40,isStar:true,form:7,injuryRisk:"MED",traits:["Target man","Berpengalaman","Gol penting"] },
    { name:"Riyad Mahrez",short:"Mahrez",pos:"FWD",jersey:7,club:"Al Ahli",age:35,caps:90,goals:35,isStar:true,form:7,injuryRisk:"MED",traits:["Teknik","Cutting inside","Tendangan bebas","City legend"] },
    { name:"Youcef Atal",short:"Atal",pos:"DEF",jersey:2,club:"Nice",age:28,caps:45,goals:9,isStar:false,form:8,injuryRisk:"LOW",traits:["RB ofensif","Gol dari luar","Pace"] },
  ],
  aut: [
    { name:"Patrick Pentz",short:"Pentz",pos:"GK",jersey:1,club:"Bayer Leverkusen",age:27,caps:20,goals:0,isStar:false,form:8,injuryRisk:"LOW",traits:["Invincible Leverkusen","Modern","Solid"] },
    { name:"David Alaba",short:"Alaba",pos:"DEF",jersey:10,club:"Real Madrid",age:32,caps:100,goals:19,isStar:true,form:7,injuryRisk:"HIGH",traits:["Real Madrid","Versatile","Berpengalaman","Kapten"] },
    { name:"Marcel Sabitzer",short:"Sabitzer",pos:"MID",jersey:8,club:"Borussia Dortmund",age:31,caps:70,goals:12,isStar:true,form:8,injuryRisk:"LOW",traits:["Box-to-box","Gol dari jauh","Pressing Rangnick"] },
    { name:"Marko Arnautović",short:"Arnautović",pos:"FWD",jersey:9,club:"Inter Milan",age:35,caps:100,goals:37,isStar:false,form:7,injuryRisk:"MED",traits:["Target man","Berpengalaman","Physique"] },
  ],
  jor: [
    { name:"Yazeed Abo Laila",short:"Abo Laila",pos:"GK",jersey:1,club:"Al Jazeera",age:27,caps:20,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Solid","Berpengalaman regional"] },
    { name:"Musa Al-Taamari",short:"Al-Taamari",pos:"FWD",jersey:10,club:"Montpellier",age:26,caps:40,goals:10,isStar:true,form:8,injuryRisk:"LOW",traits:["Teknis","Kecepatan","Ligue 1"] },
  ],
  // ─── GROUP K ───────────────────────────────────────────────────────
  por: [
    { name:"Diogo Costa",short:"D. Costa",pos:"GK",jersey:1,club:"Porto",age:25,caps:20,goals:0,isStar:false,form:8,injuryRisk:"LOW",traits:["Sweeper-keeper","Modern","Muda"] },
    { name:"Cristiano Ronaldo",short:"Ronaldo",pos:"FWD",jersey:7,club:"Al Nassr",age:41,caps:200,goals:130,isStar:true,form:7,injuryRisk:"MED",traits:["GOAT scorer dunia","Kapten Portugal","Pengalaman 5 WC","Mentalitas"] },
    { name:"Bruno Fernandes",short:"Bruno",pos:"MID",jersey:8,club:"Manchester United",age:30,caps:65,goals:16,isStar:true,form:8,injuryRisk:"LOW",traits:["Kapten aktual","Kreativitas","Set piece","Gol penting"] },
    { name:"Bernardo Silva",short:"B. Silva",pos:"MID",jersey:10,club:"Manchester City",age:30,caps:80,goals:18,isStar:true,form:9,injuryRisk:"LOW",traits:["City key player","Teknik","Pressing","Versatile"] },
    { name:"Rafael Leão",short:"Leão",pos:"FWD",jersey:17,club:"AC Milan",age:25,caps:35,goals:10,isStar:false,form:8,injuryRisk:"MED",traits:["Pace","Dribbling","Milan sensation"] },
    { name:"Rúben Dias",short:"R. Dias",pos:"DEF",jersey:4,club:"Manchester City",age:27,caps:55,goals:3,isStar:false,form:8,injuryRisk:"LOW",traits:["CB world-class","Man City","Kepemimpinan"] },
  ],
  cod: [
    { name:"Joël Kiassumbua",short:"Kiassumbua",pos:"GK",jersey:1,club:"Charleroi",age:36,caps:40,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Veteran","Berpengalaman Africa"] },
    { name:"Yannick Bolasie",short:"Bolasie",pos:"FWD",jersey:11,club:"Hatayspor",age:34,caps:35,goals:7,isStar:false,form:7,injuryRisk:"MED",traits:["Pace","Dribbling","Berpengalaman"] },
    { name:"Chancel Mbemba",short:"Mbemba",pos:"DEF",jersey:4,club:"Olympique Marseille",age:30,caps:45,goals:4,isStar:true,form:7,injuryRisk:"LOW",traits:["CB solid","Fisik","Marseille"] },
  ],
  uzb: [
    { name:"Eldorbek Sobirov",short:"Sobirov",pos:"GK",jersey:1,club:"Lokomotiv Tashkent",age:26,caps:20,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Modern","Solid"] },
    { name:"Abdukodir Khusanov",short:"Khusanov",pos:"DEF",jersey:5,club:"Lens",age:24,caps:20,goals:2,isStar:true,form:8,injuryRisk:"LOW",traits:["CB Ligue 1","Modern","Solid bawah tekanan"] },
    { name:"Eldor Shomurodov",short:"Shomurodov",pos:"FWD",jersey:9,club:"Torino",age:28,caps:45,goals:18,isStar:true,form:8,injuryRisk:"LOW",traits:["Target man","Serie A","Konsisten"] } as KeyPlayer,
  ],
  col: [
    { name:"Camilo Vargas",short:"Vargas",pos:"GK",jersey:1,club:"Atlas",age:32,caps:45,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Berpengalaman","Solid"] },
    { name:"James Rodríguez",short:"James",pos:"MID",jersey:10,club:"Rayo Vallecano",age:34,caps:90,goals:33,isStar:true,form:7,injuryRisk:"MED",traits:["Visioner","Umpan terbaik","WC 2014 golden boot","Kelas"] },
    { name:"Luis Díaz",short:"L. Díaz",pos:"FWD",jersey:11,club:"Liverpool",age:28,caps:45,goals:15,isStar:true,form:9,injuryRisk:"LOW",traits:["Liverpool key player","Pace","Dribbling","Energi"] },
    { name:"Jhon Durán",short:"Durán",pos:"FWD",jersey:9,club:"Aston Villa",age:21,caps:15,goals:5,isStar:false,form:8,injuryRisk:"LOW",traits:["Muda","Power","Impak dari bench"] },
    { name:"Richard Ríos",short:"Ríos",pos:"MID",jersey:6,club:"Palmeiras",age:24,caps:20,goals:3,isStar:false,form:8,injuryRisk:"LOW",traits:["Pressing","Energi","Modern mid"] },
  ],
  // ─── GROUP L ───────────────────────────────────────────────────────
  eng: [
    { name:"Jordan Pickford",short:"Pickford",pos:"GK",jersey:1,club:"Everton",age:30,caps:60,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Konsisten","Shot stopper","Berpengalaman"] },
    { name:"Jude Bellingham",short:"Bellingham",pos:"MID",jersey:22,club:"Real Madrid",age:21,caps:45,goals:17,isStar:true,form:9,injuryRisk:"LOW",traits:["Real Madrid sensation","Gol+assist","Mentalitas juara","Generasi terbaik Inggris"] },
    { name:"Harry Kane",short:"Kane",pos:"FWD",jersey:9,club:"Bayern München",age:31,caps:90,goals:68,isStar:true,form:9,injuryRisk:"LOW",traits:["Top scorer Inggris sepanjang masa","Umpan","Bayern","Konsisten"] },
    { name:"Phil Foden",short:"Foden",pos:"FWD",jersey:26,club:"Manchester City",age:26,caps:45,goals:16,isStar:true,form:9,injuryRisk:"MED",traits:["Wonderkid dewasa","Kreativitas","City DNA"] },
    { name:"Declan Rice",short:"Rice",pos:"MID",jersey:4,club:"Arsenal",age:26,caps:50,goals:8,isStar:false,form:9,injuryRisk:"LOW",traits:["Best DM England","Arsenal","Fisik+teknik"] },
    { name:"Bukayo Saka",short:"Saka",pos:"FWD",jersey:7,club:"Arsenal",age:23,caps:40,goals:14,isStar:true,form:9,injuryRisk:"LOW",traits:["Konsisten","Sayap berbahaya","EURO 2020 villain jadi hero"] },
  ],
  cro: [
    { name:"Dominik Livaković",short:"Livaković",pos:"GK",jersey:1,club:"Fenerbahçe",age:29,caps:40,goals:0,isStar:true,form:8,injuryRisk:"LOW",traits:["Penalti stopper","WC 2022 hero","Solid"] },
    { name:"Luka Modrić",short:"Modrić",pos:"MID",jersey:10,club:"Real Madrid",age:40,caps:175,goals:26,isStar:true,form:7,injuryRisk:"MED",traits:["GOAT mid bersama De Bruyne","Ballon d'Or 2018","Veteran WC","Inspirasi Kroasia"] },
    { name:"Ivan Perišić",short:"Perišić",pos:"FWD",jersey:4,club:"Hajduk Split",age:36,caps:120,goals:34,isStar:false,form:6,injuryRisk:"HIGH",traits:["Veteran","Big game player","Berpengalaman WC"] },
    { name:"Mateo Kovačić",short:"Kovačić",pos:"MID",jersey:8,club:"Manchester City",age:31,caps:90,goals:4,isStar:false,form:8,injuryRisk:"LOW",traits:["Teknis","Dribbling","City UCL winner"] },
    { name:"Bruno Petković",short:"Petković",pos:"FWD",jersey:16,club:"Ferencváros",age:30,caps:35,goals:12,isStar:false,form:7,injuryRisk:"LOW",traits:["Super sub","Gol penting","Target man"] },
  ],
  gha: [
    { name:"Lawrence Ati-Zigi",short:"Ati-Zigi",pos:"GK",jersey:1,club:"St. Gallen",age:27,caps:25,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Modern","Agile"] },
    { name:"Thomas Partey",short:"Partey",pos:"MID",jersey:5,club:"Arsenal",age:31,caps:50,goals:14,isStar:true,form:7,injuryRisk:"MED",traits:["Arsenal","Power","Defensive mid","Gol dari luar"] },
    { name:"Mohammed Kudus",short:"Kudus",pos:"FWD",jersey:10,club:"West Ham",age:24,caps:30,goals:8,isStar:true,form:8,injuryRisk:"LOW",traits:["Versatile","Teknik","Muda berbakat","Premier League"] },
    { name:"Jordan Ayew",short:"J. Ayew",pos:"FWD",jersey:11,club:"Leicester City",age:32,caps:100,goals:21,isStar:false,form:7,injuryRisk:"LOW",traits:["Veteran","Berpengalaman","Pekerja keras"] },
  ],
  pan: [
    { name:"Luis Mejía",short:"Mejía",pos:"GK",jersey:1,club:"Olimpia",age:32,caps:40,goals:0,isStar:false,form:7,injuryRisk:"LOW",traits:["Konsisten","Berpengalaman CONCACAF"] },
    { name:"Édgar Bárcenas",short:"Bárcenas",pos:"FWD",jersey:10,club:"Galatasaray",age:30,caps:55,goals:14,isStar:true,form:7,injuryRisk:"LOW",traits:["Sayap kanan","Kecepatan","Galatasaray"] },
    { name:"Ismael Díaz",short:"I. Díaz",pos:"FWD",jersey:9,club:"Levante",age:24,goals:4,caps:20,isStar:false,form:7,injuryRisk:"LOW",traits:["Muda","Pace","Potensi"] },
  ],
};

/** Get key players for a team */
export function getKeyPlayers(teamId: string): KeyPlayer[] {
  return KEY_PLAYERS[teamId] ?? [];
}

/** Get the star player (biggest name) of a team */
export function getStarPlayer(teamId: string): KeyPlayer | null {
  const players = KEY_PLAYERS[teamId] ?? [];
  return players.find(p => p.isStar) ?? players[0] ?? null;
}

/** Get overall team strength from players: average form of starters */
export function getLineupStrength(teamId: string): number {
  const players = KEY_PLAYERS[teamId] ?? [];
  if (!players.length) return 50;
  const avg = players.reduce((s, p) => s + p.form, 0) / players.length;
  return Math.round(avg * 10); // 0-100
}
