let imgData
const API_URL = "http://localhost:9000";
$(document).ready(function () {
    let data = test()
    createCanvas(data)

});

async function test() {
    return await getUserInfo()
}



function getUserInfo() {
    return new Promise((resolve) => {
        $.get(API_URL + '/api/invoice/get_user_invoice/1/init', function (data) {
        });
    });

}





async function onCanvas() {

    // let memberParse = JSON.parse(window.localStorage.getItem('memberInfo'))
    // let currentmeter = window.localStorage.getItem('currentmeter')
    // let twman = JSON.parse(window.localStorage.getItem('twman'))
    //   let	subzone_name_selected = window.localStorage.getItem('subzone_name_selected')

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.font = "bold 40px Serif";
    //เทศบาลตำบลห้องแซง
    context.strokeStyle = 'black';
    context.strokeRect(5, 100, 330, 100); // Draw the rectangle
    

    var img = new Image();
    img.src = 'img/logogray_black_and_white.jpg';
    context.drawImage(img, 10, 10, 120, 120);

    context.textAlign = "center";
    context.textBaseline = "middle";

    context.fillText("ใบแจ้งหนี้ค่าน้ำประปา", 240, 50, 200, 100);

    context.font = "bold 21px Serif";
    context.fillText("(ไม่ใช่ใบเสร็จรับเงิน)", 245, 80, 230, 100);

    context.font = "bold 28px Serif";
    context.fillText("เทศบาลตำบลห้องแซง",  180, 145, 230, 100);
    context.font = "bold 22px serif";
    context.fillText("กิจการประปา โทร.08-81005436", 180, 180, 230, 100);
    // ประจำเดือน
    context.font = "23px serif";
    context.strokeRect( 170, 210, 165, 40);
    context.fillText("ประจำเดือน", 70, 235, 155, 30);
    //ประจำเดือนvalue
    

    let _date = new Date();
    let m_invPeroid = _date.getMonth() + 1
    let m_invPeroid_formate = m_invPeroid < 10 ? `0${_date.getMonth() + 1}` : _date.getMonth() + 1
    let y_invPeroid = _date.getFullYear();
    let y_th_invPeroid = y_invPeroid + 543;
    let y_th_invPeroid_substr = y_th_invPeroid.toString().substr(2);
    let lastdate = new Date(y_invPeroid, m_invPeroid, 0).getDate();
    var months_th = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",];

    let expired_date = `${lastdate} ${months_th[m_invPeroid - 1]} ${y_th_invPeroid}`

    
    // เลขที่ใบแจ้ง
    context.strokeRect( 170, 260, 165, 40);
    context.fillText("เลขใบแจ้งหนี้", 80, 285, 155, 30);
    context.font = "22px serif";
    // เลขผู้ใช้น้ำ
    context.strokeRect( 170, 310, 165, 40);
    context.fillText("เลขผู้ใช้น้ำ", 65, 330, 155, 40);

    context.strokeRect( 170, 360, 165, 40);
    context.fillText("เลขมิเตอร์", 60, 380, 155, 40);

    context.strokeRect( 170, 410, 165, 40);
    context.fillText("สังกัดเขต", 60, 430, 155, 40);
    
    // ส่วนหัวข้อด้านบน
    context.font =" 20px serif";
    context.textAlign ="right"
    context.fillText("มกราคม 2567", 320, 230, 155, 40);
    context.fillText("Hs01011111", 320, 280, 155, 40);
    context.fillText("Hs01011111",320, 330, 155, 40);
    context.fillText("Hs01011111",  320, 380, 155, 40);
    context.fillText("หมู่ 12 เขต หมู่12",  320, 430, 155, 40);


    // ชื่อผู้ใช้น้ำ   
     

    context.font = "28px serif";
    context.strokeStyle = 'black';
    context.strokeRect(10, 468, 330, 100); // Draw the rectangle

    context.strokeStyle = 'white';
    context.strokeRect(20, 468, 130, 3); // Draw the rectangle
    context.textAlign ="center"
    context.fillText("ชื่อผู้ใช้น้ำ", 85, 470, 330, 100);
    context.fillText("memberParse.nssssame", 180, 500, 330, 100);
    context.font = "22px serif";
    context.fillText("`${membesssrParse.address} ${memberParse.user_zonename}ต.ห้องแซง`", 180, 525, 330, 100);
    context.fillText("อ.เลิงนกทา จ.ยโสธร 35120", 180, 555, 330, 100);
    context.stroke();
    context.strokeStyle = 'black';
  
    context.font = "bold 24px serif";
    context.strokeRect(10, 600, 140, 100);
    context.strokeRect(155, 600, 90, 100);
    context.strokeRect(250, 600, 90, 100);

    context.fillText("วันจดมาตร", 75, 625, 330, 100);
    context.fillText("ครั้งนี้", 290, 625, 330, 100);
    context.fillText("ครั้งก่อน", 200, 625, 330, 100);

    context.font = "bold 22px serif";
    context.textAlign = "center";
    context.fillText("10 เม.ย. 2567", 80, 670, 330, 100);//วันจดมาตร
    context.fillText("20", 200, 670, 330, 100);//ครั้งนี้
    context.fillText("200", 290, 670, 330, 100);//ครั้งก่อน

  
    context.fillText("ใช้น้ำจำนวน", 65, 730, 330, 100);
    context.fillText("ค่าน้ำประปาปัจจุบัน", 100, 770, 330, 100);  
    context.fillText("ค่ารักษามาตร", 75, 810, 330, 100);
    context.fillText("ภาษีมูลค่าเพิ่ม", 75, 850, 330, 100);
    context.fillText("รวมที่ต้อง", 75, 900, 330, 100);
    context.fillText("ชำระทั้งสิ้น", 80, 930, 330, 100);

    
    context.textAlign = "right";
    context.fillText("2809990.00", 300, 730, 330, 100);
    context.fillText("000.00", 300, 770, 330, 100);
    context.fillText("700.40", 300, 810, 330, 100);
    context.fillText("20.40", 300, 850, 330, 100);
    context.font = "bold 18px serif";
    context.fillText("หน่วย",345, 730, 330, 100);
    context.fillText("บาท",345, 770, 330, 100);
    context.fillText("บาท",345, 810, 330, 100);
    context.fillText("บาท",345, 850, 330, 100);
    context.fillText("บาท",340, 910, 330, 100);

    context.strokeRect(10, 870, 335, 80);

    context.font = "bold 25px serif";

    context.fillText("289990.00", 305, 915, 330, 100);

    context.font = "bold 20px serif";

    context.textAlign = "center";
    context.fillText("โปรดชำระเงินภายในวันที่", 170, 980, 330, 100);
    context.fillText("30 เมษายน 2567", 170, 1010, 330, 100);
    context.fillText("*หากเกินกำหนดจะถูกระงับการใช้น้ำและ", 170, 1040, 330, 100);
    context.fillText("จะจ่ายน้ำใหม่หลังจากได้รับการชำระหนี้ค้าง", 170, 1070, 330, 100);
    context.fillText("ทั้งหมดพร้อมค่าธรรมเนียมการใช้น้ำแล้ว*", 170, 1100, 330, 100);

    context.strokeRect( 10, 1130, 320, 2);
    context.strokeStyle = 'white';
    context.strokeRect( 10, 1150, 320, 1);
  

}


document.getElementById('printBase64_2').addEventListener("click", function () {
    
    creteCanvasToBase64().then(function () {
        BTPrinter.printBase64(
            function (data) {
                console.log("Success");
                console.log(data);
            },
            function (err) {
                console.log("Error");
                console.log(err);
            },
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAFwCAIAAACXbzEgAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO2dfZyNdf7/LzUmxZJyU5mxRBbZIjfbEksspbW7ZCNSFjWaisZdNyi5ab5UqEyMmxJSuYlIKYvaEk2hZLd2itwVKpWWEPJ7Pq73r89enTNn5pyZ87nOmTnv5x8exzXX+Vyf63O9X++b67rO55N06tQpR1EUOyTFugOKUpJRgSmKRVRgimIRFZiiWEQFpigWUYEpikVUYIpiERWYolhEBaYoFlGBKYpFVGCKYhEVmKJYRAWmKBZRgSmKRVRgimIRFZiiWKS4Cmz9+vX33HPPe++9d/jw4Vj3RbFIqVKlUlNTe/XqNWLEiDJlysS6OxFTLAWWm5t73XXX7dmzJ9YdUaxz6tSpXbt2jRs37uTJk5mZmbHuTsQUS4HNnDlT1ZVozJgxIy0trUaNGrHuSGQUS4Ft2rQp1l1Q/ObAgQM7d+5UgfnBiRMnYt0FJQYUxwmaiqXAKHxj3QVFCYtiKTBFKS6UKIE1bNjw7LPPjnUvlKLy/vvvf/fdd7HuRXQoUQLLyspq3rx5rHuhFJW2bduuWbMm1r2IDiVKYD/++GOsu6BEgZ9++inWXYgaJUpgihJvqMAUxSIqMEWxiApMUSyiAlMUiySQwI4cObJ169Zwft6iz9OUaJEoAlu3bt3QoUNzcnJOnjxZ4M6rV6++8sorfeiVUuJJCIHl5uZ27949/F+4nHbaaVb7oyQOCSEw/f2YEisSQmD6+zElViSEwPT3Y0qsSAiB6e/HlFiREAKLlJL0sqkSWxJaYKGed51zzjn+d0YpkSS0wPT3Y4ptElpg+vsxxTbFUmD6IDgxSU5OjnUXIiZOBZb/e4PffPONz/1R4oGcnJw8kw4cbmpqas2aNf3vUoHEo8Aiem9QSRwyMjJC/alq1ao33njjyJEjf/WrX/nZpQKJO4GtXbu2e/fuX375Zaw7ohQn9u/f/9BDD5H1LFy4sGzZsrHuzv+IL4FZUleomxn6vKuE8corr/Tv33/GjBnxsw5LHAnMXuxq1qxZnvWxPu8qecybNy8pKWnq1KlxorF4EZjVzHDSpEk2mlXik9mzZ/NvnGgsLgSmdZcSXeJHY7EXmKpLsUGcaCzGAitQXRUrVrz00ksDNpakucuV8Al+d/TgwYObN28OtX88aCyWAitQXVWqVHnuuefatGkTsL0kzV2uhE/wu6PHjh3r37+/CClPYq6xmAksNze3V69ehVCXo7fXE5Xgxy1nnHEG4nF+FlKe8KfzzjsvVus7x0xgM2fO/Pzzz0P9NR91KYoXQlOBGovh+s4xE1g+82SoupSIKFBjMVzfOWYCCzVPBtF8/vz5qi4lIozGnn766TyXco7V+s4xE1ioeTImTpyo6lIKgWjsgw8+yOe+ov/E/jlYACkpKbHuglJcQWMVK1aMdS9+QdwJTH+iohSFeLvDHHcCU5SShApMUSyiAlMUi6jAFMUiKjBFsYgKTFEsogJTFIuowBTFIiowRbGICkxRLKICUxSLqMAUxSIqMEWxiApMUSyiAlMUi6jAFMUiKjBFsYgKTFEsogJTFIuowBTFIiowRbGICkxRLKICUxSLqMAUxSIqMEWxiApMUSwSM4GddtppUW8zOTk56m0q/lOSbCMKAtu3b9+OHTuOHj0a0be++eaboh86gJycnOBFEJViRzzYRqlSpc4999y6desmJRVJI0X6cm5u7uTJk1955RUEVpR2okVGRkasu6DEKYWwjXLlyl1yySVpaWnXX3996dKlC3fcwgts3rx5gwcPzmeRZUUp1hw6dOhtl2XLlk2ZMuW8884rRCOFFNi0adMGDBhw/Pjxwn1dUYoRixcv/uKLL1544YVCaKwwAlu7du2dd95pSV3hLPUZq+VAlfjHkm2sX78+PT39+eefjzRXjFhg33333YgRI44dOxbpF8Ph9NNPJ/ENZzcbR1finHDuLlaqVMnS0ZcsWbJw4cIePXpE9K2IBTZ37twNGzZE+q0wadKkSf369QvcrVOnTmvWrLHUByU+qVWrVr169QrcrWvXrmR0lvowffp06wJ78sknLa3SmZKSMnHixLJlyxa45y233PL666+/+OKLNrqhxCHly5efPHly5cqVC9yzS5cuaWlp2dnZNrqxdevWSL8SscC2bNmS5/aGDRueffbZkbYmEPqbNm3ar1+/2rVrh7P/WWedNX/+/BkzZixfvlzXdC7xVK9efcCAAY0bNw5n5+Tk5ClTprRu3XrRokUHDhwo9EHff/99qqGAjYV4QBexwEKFr6ysrObNm0faWqFBYwNdfDuiUlxISkrq7lKURtq2bRtchhTiDkrUXpXSVyiUkkS06iB92VdRLKICUxSLqMAUxSIqMEWxiApMUSyiAlMUi6jAFMUiKjBFsYgKTFEsogJTFIuowBTFIiowRbGICkxRLKICUxSLqMAUxSIqMEWxiApMUSwSA4EdOXJk69athw8ftnqU0047LTU1tWbNmlaPouTD0aNHP/vsswMHDpw8ebJs2bLVqlU7//zzi1H7UcFvga1bt27o0KE5OTk+TFZTtWrV3r17jxo1qkyZMraPpXjJzc2dM2fOihUrEMDBgwcdd54MBNCwYcNevXp17NjxzDPPjOf2o4ivAmNcunfvvmfPHn8Ot3///vHjx5cqVSozM9OfIyqY+4QJE7KzswNmdDpx4sROlxdffPGKK64YM2ZM69at47D9qOOrwGbOnOmbugwzZsxIS0urUaOGz8dNQD766KObb76ZJCX/3d56661rrrmGzGLw4MERLQVmu30b+CqwTZs2+Xk4AVeHY1OB2Wbz5s1/+9vftm3bFs7OP/zww7Bhw77++usHH3wwzInQbbdvCV8FRhz383AGXSzCNrt376b4CdP6DSR7lSpVoiaPefv28FVglEN+Hk7xB/xmRkbGv/71r0J897777vvd737XqlWrGLZvFX0OphSVpUuXLlmypHDfPXr06D333LN69ep87vTabt8qcSGwosxr7yXP+cQVqxw7dmzixImh5sFNSUn59a9/nZSUxHX5+OOP81z1av369S+//HKXLl1i0r5t4kJg0ZrXPs/5xBWrvPfee++++27w9tKlS999991paWnVqlVz3EiSk5Nzxx13BC8eQoU8Z86czp0751lB2G7fNnEhsGjNa29pXSUlH15//fU871116tRp9OjR5r9kaBRCeNL27dsfOXIkYOdNmzbt27cvz/cwbLdvm7gQmFJ8+eCDD/LcnmdK1rRp0zp16gR/Bev//PPP8xSA7fZtowJTisRXX32V5/YLLrggeOMZZ5yRZ7F9/PjxUO+m2m7fNiowpUhg03lupygK3kg5hK3nuX+ox8G227eNCkwpEhdeeGGe2997772rr746YOOXX365a9eu4J0rVKgQavFy2+3bJi4ElpycHJV2Yv7iWQLSokWLqVOnBm+fPXt2t27dqIi8G7OysvJ8GbVmzZrVq1ePSfu2iQuB5eTkROVGYiGW0FWKSKtWrapUqULoCNi+ffv2Dh069O7du1mzZmXKlMHuly5dGmrd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xFIudkAHQp0FxoTGDh8+/J///IeEE7vx3nXAF6AKwho70G3v3QKzfHso8PGYo9xDS0lJkXdovCAAogRqxOvRLAl2ni/gET169+5N93AidevWpZOPPfaY414d75099DnWhY4RyWkt+M3GdJeAjVyCgMGncgt+6NzXhXqVPxHPA26cELikgKSfqCvPVzrNwwkveT7skkf50aWEv+wbfJO3mktUGudKF7GSlrXA8/wTZooIC9fs+S7570PEKLDz+BHz/A0xyIqhCCPPBxKpLoXq7/8Ideuvskuob0n0K+KhLVHCBaYUDipVkguKLgluBJChQ4fKy6Xe9eOVAlGBKXlA3UVNK0nXoUOHSKplEbBWrVpFem8wwVGBKXnQrl27jRs3bt68WR4VUoChtJ49ew4aNEgXvI4IFZiSB3LT6OjRo/L2RkpKSsADNyVMVGBKSEgRi37fIsFRgSmKRVRgimIRFZiiWEQFpigWUYEpikVUYIpiERWYolhEBaYoFlGBKYpFVGCKYhEVmKJYRAWmKBZRgSmKRVRgimIRFZiiWEQFpigWUYEpikVUYIpiERWYolhEBaYoFvl/rLVulK+r57QAAAAASUVORK5CYII=',
            0
        ); //base64 string, a

    })

    
});

 async function creteCanvasToBase64() {
    var canvas = document.getElementById("myCanvas");
    imgData = canvas.toDataURL();
    document.getElementById('mybase64').innerHTML =  imgData
}
