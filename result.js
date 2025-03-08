const movies = [
    { title: "FALLUJAH", image: "SRC/fall.jpg", href:"https://t.me/Fallujahtv1/190" },
    { title: "ELFOUNDOU", image: "SRC/foundou.jpg",href:"https://t.me/el_foundou2/100" },
    { title: "RAGOUJ", image: "SRC/rag.jpg",href:"https://www.youtube.com/watch?v=kIQ7wLQWth0&list=PLY1IpuB2HLWiNEWysNniRcK6Dxl9PTFLr" },
    { title: "HARKA", image: "SRC/harka.jpg",href:"https://t.me/Fallujahtv1/190" },
    { title: "EJBAL LHMER", image: "SRC/ejbal.jpg",href:"https://t.me/Fallujahtv1/190" },
    { title: "ELMAESTRO", image: "SRC/stro.jpg",href:"https://www.youtube.com/watch?v=e-UN2OZR5tM&list=PLzfCQunlSZTN_x959VjaWWfWO_RZKcQWY" },
    { title: "LELLA SINDERELLA", image: "SRC/sind.jpg",href:"https://www.youtube.com/watch?v=3piAGR2ANRQ&pp=ygUQbGVsbGEgY2luZGVyZWxsYQ%3D%3D" },
    { title: "SABAK LIKR", image: "SRC/kier.jpg",href:"aicha.html" },
    { title: "TEJ EL HADRA", image: "SRC/TEJ.jpg",href:"https://www.youtube.com/watch?v=OHav22_qOG0&list=PLejo1_Q4LK9QlOxg5riyFcqmlAH190RPs"     },
    { title: "BEB EREZIK", image: "SRC/beb.jpg",href:"https://t.me/Fallujahtv1/190" },
    { title: "SUPER TOUNSI", image: "SRC/super.jpg",href:"aicha.html" },
    { title: "BOLICE", image: "SRC/bo.jpg",href:"https://t.me/filmstn/261" },
    { title: "SAHBEK RAJEL", image: "SRC/sahbek.jpg",href:"https://t.me/filmstn/265" },
    { title: "AICHA", image: "SRC/AICH.jpg",href:"aicha.html" },
    { title: "KEN YA<br>MAKENCH", image: "SRC/ken.jpg",href:"https://www.youtube.com/watch?v=Zca86EJMJbo&list=PLtKHe7Z2QnnGVZw4QCSIc_j98U3npKclT" },
    { title: "NAOURET LHWEE", image: "SRC/naoura.jpg",href:"https://www.youtube.com/watch?v=hpAv02v_htY&list=PLYKfaSQdIDDikRSo-sMNCiQ9lrUtcpOG5" },
    { title: "L'AFFIRE 460", image: "SRC/affai.jpg",href:"https://www.youtube.com/watch?v=FcHY0dc5HQY&list=PLTGtCMX0-RuJMxUHT30HrIIXliCVU2Qng" },
    { title: "AMIL 86", image: "SRC/AMIL.jpg",href:"aicha.html" },
    { title: "MACHAEER", image: "SRC/mach.jpg",href:"aicha.html" },
    { title: "MABIN", image: "SRC/take.jpg",href:"aicha.html" },
    { title: "ELMELLIONNAIRE", image: "SRC/mellion.jpg",href:"https://www.youtube.com/watch?v=yRk1Q_5-9Iw&list=PLPhyFt2uLm8Ux2e0fS6Zhvv8smUo6zytc" },
    { title: "ATIEF", image: "SRC/at.jpg",href:"https://t.me/filmstn/228"},
    { title: "FI INNAYA", image: "SRC/inaya.jpg",href:"https://t.me/elfoundou2/116" },
    { title: "WAHLA", image: "SRC/wah.jpg",href:"https://t.me/filmstn/226" },
    { title: "EBRA", image: "SRC/theneedle.jpg",href:"aicha.html" },
    { title: "LEKER NFASS", image: "SRC/NFASS.jpg",href:"https://t.me/filmstn/221" },
    { title: "KAWALISS", image: "SRC/backstage.jpg",href:"aicha.html" },
    { title: "ENAFOURA", image: "SRC/nafoura.jpg",href:"aicha.html" },
    { title: "SUPER TOUNSI<br>THE SERIE", image: "SRC/super.jpg",href:"https://www.youtube.com/watch?v=qTVAFjcqLIY&list=PLY1IpuB2HLWh81lxz0IhNg1aqQF_1i1Mf" },
    { title: "SABEK LKIR<br>THE SERIE", image: "SRC/kier.jpg",href:"https://www.youtube.com/watch?v=tkc7Xa5vIVs&list=PLfJFC3ML4P6eL6FZ6W209d0ozLNs6Qwv0" },
    { title: "DACHRA", image: "SRC/dach.jpg",href:"https://t.me/filmstn/62" },
    { title: "HBIBA", image: "SRC/hbiba.jpg",href:"https://t.me/filmstn/258" },
    { title: "KATEM ALISSA", image: "SRC/katm.jpg",href:"aicha.html" },
    { title: "JNOUN ELKAYLA", image: "SRC/JNOU.jpg",href:"https://www.youtube.com/watch?v=mcEbjllXDM8&list=PLtKHe7Z2QnnEQcgLWgjQWM8AMcgvQlqjO" },
    { title: "EJAYDA", image: "SRC/JAY.jpg",href:"https://t.me/filmstn/181" },
    { title: "BIK NIICH", image: "SRC/BIK.jpg",href:"aicha.html" },
    { title: "ZAHRAT HALAB", image: "SRC/zahra.jpg",href:"https://t.me/filmstn/186" },
    { title: "HARKA", image: "SRC/HARK.jpg",href:"aicha.html" },
    { title: "RAFEL", image: "SRC/RAF.jpg",href:"https://www.tunigazelle-news.xyz/search/label/%D9%85%D8%B3%D9%84%D8%B3%D9%84%20%D8%A7%D9%84%D8%B1%D8%A7%D9%81%D9%84%20%2F%20al%20Rafel?m=1" },
    { title: "BARAA", image: "SRC/baraa.jpg",href:"https://t.me/el_foundou2/94" },
    { title: "AWLED MOUFIDA", image: "SRC/awled.jpg",href:"https://www.youtube.com/watch?v=7t7v21IiDdU&list=PLFApv2COP4eouxGWNj5_CTrBrjl6RnIXO" },
    { title: "HAB MLOUK", image: "SRC/HAB.jpg",href:"https://www.youtube.com/watch?v=OLwK8pJ7z9w&list=PLSNub_lkFQfxEJAtWd7s59YuruX1yMIZ3" },
    { title: "EZAIEM", image: "SRC/za3.jpg",href:"https://www.tunigazelle-news.xyz/search/label/%D9%85%D8%B3%D9%84%D8%B3%D9%84%20%D8%A7%D9%84%D8%B2%D8%B9%D9%8A%D9%85%20%2F%20al%20za3im" },
    { title: "BEAA DAHRAHOU", image: "SRC/theman.jpg",href:"aicha.html" },
    { title: "ACHKEL", image: "SRC/ACH.jpg",href:"https://t.me/filmstn/237" },
    { title: "HRISSA LEND", image: "SRC/HR.jpg",href:"https://www.tunigazelle-news.xyz/search/label/Hrisa%20land%20%2F%20%D9%87%D8%B1%D9%8A%D8%B3%D8%A9%20%D9%84%D8%A7%D9%86%D8%AF" },
    { title: "JIREN ELGAFLA", image: "SRC/JIR.jpg",href:"https://www.youtube.com/watch?v=s4Mi2Ym9n64&pp=ygUdcHJvbW8gc2VyaWUgemFpbSAyMDI1IFRVTklTSUU%3D" },
    { title: "CODE ZIN", image: "SRC/CODE.jpg",href:"https://www.youtube.com/watch?v=t-XCTIV0Cew&pp=ygUecHJvbW8gb2ZmaWNpZWwgc2l0a29tIGNvZGUgemlu" },
    { title: "GALB EDIB", image: "SRC/GLB.jpg",href:"https://www.youtube.com/watch?v=cpHSO5UykeI&list=PLtKHe7Z2QnnFV995T-rpMOu8zKou-7GhE"},
    { title: "NOUBA", image: "SRC/NOUB.jpg",href:"https://www.youtube.com/watch?v=PtUOftDMjCM&list=PLe29ryYu5oLUt2WWDOkYbSieKg0JFJjoq" },
    { title: "FELLA&YASMINA", image: "SRC/FELA.jpg",href:"https://www.tunigazelle-news.xyz/search/label/Yasmin%20w%20fola%20%2F%20%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86%20%D9%88%20%D9%81%D9%84%D8%A9?m=l"},
    { title: "WED ELBAY", image: "SRC/WED.jpg",href:"aicha.html" },
    { title: "BOLICE<br>THE SERIE", image: "SRC/BOL.jpg",href:"https://www.tunigazelle-news.xyz/search/label/Sitcom%20bolice%20%2F%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A8%D9%88%D9%84%D9%8A%D8%B3?m=1" },
    { title: "SAHBEK RAJEL<br>THE SERIE", image: "SRC/SAH.jpg",href:"https://www.tunigazelle-news.xyz/search/label/%D8%B5%D8%A7%D8%AD%D8%A8%D9%83%20%D8%B1%D8%A7%D8%AC%D9%84%20%2F%20sitcom%20Sahbek%20Rajel?m=1" },
    { title: "ELFETNA", image: "SRC/elfetna.jpg",href:"https://t.me/alfetna2025/194" },
    { title: "RAGOUJ ELKENZ", image: "SRC/KENZ.jpg",href:"https://www.tunigazelle-news.xyz/search/label/%D9%85%D8%B3%D9%84%D8%B3%D9%84%20%D8%B1%DA%A4%D9%88%D8%AC%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%2F%20Ragouj%202?m=1" }
];
const params = new URLSearchParams(window.location.search);
const query = params.get("query");
const resultDiv = document.getElementById("result");

let found = false;
let count = 0;
let resultsHTML = ""; 


movies.forEach(movie => {
    if (movie.title.toLowerCase().includes(query.toLowerCase())) {
        count++; 
        found = true; 
    }
});

if (found) {
    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(query.toLowerCase())) {
            let imageClass = "series small-image"; 
            if (count === 2) {
                imageClass = "series medium-image"; 
            }else if(count===3){
                imageClass = "series mediumtwo-image"; 
            }else if(count>3){
                imageClass = "series"; 
            }
            resultsHTML += `
                <div class="content">
                    <div class="${imageClass}">
                        <a href="${movie.href}">
                            <img src="${movie.image}" alt="${movie.title}">
                        </a>
                        <h3>${movie.title}</h3>
                    </div>
                </div>
            `;
        }
    });

    resultDiv.innerHTML = resultsHTML;
} else {

    resultDiv.innerHTML = "<h3>THIS CONTENT IS NOT AVAILABLE YET</h3>";
}