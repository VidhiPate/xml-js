(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const students = require("../data/mock_data.json");
    
    const getAllStudents = (term, valueTerm) =>
      new Promise((resolve) => {
        let data = students;
    
        if(term) {
    
            switch(term) {
                
                case "first_name":
                    data = data.filter((student) => student.first_name.toLowerCase().includes(valueTerm));
                    break;
                case "last_name":
                    data = data.filter((student) => student.last_name.toLowerCase().includes(valueTerm));
                    break;
                case "gender":
                    data = data.filter((student) => student.gender.toLowerCase() === valueTerm.toLowerCase());
                    break;
                case "email":
                    data = data.filter((student) => student.email.toLowerCase().includes(valueTerm));
                    break;
                case "birth_date":
                    data = data.filter((student) => student.birth_date.toLowerCase().includes(valueTerm));
                    break;  
                case "language":
                    data = data.filter((student) => student.language.toLowerCase().includes(valueTerm));
                    break;
                default:
                    // do nothing
                    break;
            }
        }
        
        resolve({ code: 200, data: data });
      });
    
    const getStudentById = (id) =>
      new Promise((resolve) => {
        const student = students.find((student) => student.id === Number(id.trim()));
    
        if (student) {
            resolve({ code: 200, data: Array(student) });
        } else {
            resolve({
                code: 404,
                data: { message: `No Car found for id ${id}` },
            });
        }
      });
    
    module.exports = {
      getAllStudents,
      getStudentById,
    };
    
    // build : browerift main.js -o dist/bundle.js
    },{"../data/mock_data.json":2}],2:[function(require,module,exports){
    module.exports=
    [{"id":1,"first_name":"Darryl","last_name":"Mawdsley","email":"dmawdsley0@washington.edu","gender":"Female","birth_date":"1/22/2022","language":"Norwegian"},
{"id":2,"first_name":"Josefina","last_name":"Triplet","email":"jtriplet1@bluehost.com","gender":"Female","birth_date":"11/30/2021","language":"German"},
{"id":3,"first_name":"Clem","last_name":"Hambleton","email":"chambleton2@digg.com","gender":"Male","birth_date":"11/24/2021","language":"Italian"},
{"id":4,"first_name":"Jennica","last_name":"Pristnor","email":"jpristnor3@dedecms.com","gender":"Female","birth_date":"4/26/2021","language":"Korean"},
{"id":5,"first_name":"Evin","last_name":"Pickup","email":"epickup4@flavors.me","gender":"Male","birth_date":"4/16/2021","language":"Dzongkha"},
{"id":6,"first_name":"Atlante","last_name":"Ongin","email":"aongin5@virginia.edu","gender":"Female","birth_date":"3/3/2022","language":"Belarusian"},
{"id":7,"first_name":"Agustin","last_name":"Meiner","email":"ameiner6@wp.com","gender":"Non-binary","birth_date":"12/15/2021","language":"Romanian"},
{"id":8,"first_name":"Avrom","last_name":"Gentzsch","email":"agentzsch7@freewebs.com","gender":"Male","birth_date":"2/28/2022","language":"Czech"},
{"id":9,"first_name":"Carlynne","last_name":"Rape","email":"crape8@php.net","gender":"Female","birth_date":"7/31/2021","language":"Swahili"},
{"id":10,"first_name":"Freddie","last_name":"Bigham","email":"fbigham9@fema.gov","gender":"Female","birth_date":"12/26/2021","language":"Lithuanian"},
{"id":11,"first_name":"Meg","last_name":"Dimitrie","email":"mdimitriea@storify.com","gender":"Female","birth_date":"7/24/2021","language":"Marathi"},
{"id":12,"first_name":"Mariellen","last_name":"Kidson","email":"mkidsonb@ezinearticles.com","gender":"Female","birth_date":"2/18/2022","language":"Macedonian"},
{"id":13,"first_name":"Kora","last_name":"Doelle","email":"kdoellec@skype.com","gender":"Genderqueer","birth_date":"9/1/2021","language":"Kazakh"},
{"id":14,"first_name":"Bobby","last_name":"Greenroad","email":"bgreenroadd@ovh.net","gender":"Female","birth_date":"11/28/2021","language":"Lao"},
{"id":15,"first_name":"Darlene","last_name":"Crevy","email":"dcrevye@reuters.com","gender":"Female","birth_date":"12/10/2021","language":"New Zealand Sign Language"},
{"id":16,"first_name":"Virge","last_name":"Touret","email":"vtouretf@oracle.com","gender":"Male","birth_date":"6/13/2021","language":"Romanian"},
{"id":17,"first_name":"Sunny","last_name":"Humble","email":"shumbleg@newsvine.com","gender":"Male","birth_date":"12/7/2021","language":"Hindi"},
{"id":18,"first_name":"Howard","last_name":"Showte","email":"hshowteh@cnn.com","gender":"Male","birth_date":"4/16/2021","language":"Hungarian"},
{"id":19,"first_name":"Carolynn","last_name":"Baelde","email":"cbaeldei@dailymail.co.uk","gender":"Female","birth_date":"10/14/2021","language":"Belarusian"},
{"id":20,"first_name":"Ginger","last_name":"Treeby","email":"gtreebyj@instagram.com","gender":"Female","birth_date":"1/27/2022","language":"Papiamento"},
{"id":21,"first_name":"Millie","last_name":"Millgate","email":"mmillgatek@sun.com","gender":"Female","birth_date":"5/29/2021","language":"Estonian"},
{"id":22,"first_name":"Ben","last_name":"Geroldini","email":"bgeroldinil@hexun.com","gender":"Non-binary","birth_date":"7/24/2021","language":"Dari"},
{"id":23,"first_name":"Marne","last_name":"Stobbs","email":"mstobbsm@usgs.gov","gender":"Female","birth_date":"5/12/2021","language":"Hungarian"},
{"id":24,"first_name":"Gaelan","last_name":"de Guerre","email":"gdeguerren@g.co","gender":"Male","birth_date":"7/25/2021","language":"Fijian"},
{"id":25,"first_name":"Kass","last_name":"Lunam","email":"klunamo@about.me","gender":"Female","birth_date":"10/5/2021","language":"Papiamento"},
{"id":26,"first_name":"Stace","last_name":"Dorcey","email":"sdorceyp@networksolutions.com","gender":"Polygender","birth_date":"5/30/2021","language":"Telugu"},
{"id":27,"first_name":"Pepita","last_name":"Hinzer","email":"phinzerq@webmd.com","gender":"Female","birth_date":"5/12/2021","language":"Belarusian"},
{"id":28,"first_name":"Nara","last_name":"Verden","email":"nverdenr@ftc.gov","gender":"Female","birth_date":"3/5/2022","language":"Tsonga"},
{"id":29,"first_name":"Cheryl","last_name":"Bradborne","email":"cbradbornes@wunderground.com","gender":"Female","birth_date":"5/22/2021","language":"Swati"},
{"id":30,"first_name":"Bord","last_name":"Pignon","email":"bpignont@reddit.com","gender":"Male","birth_date":"7/5/2021","language":"Hindi"},
{"id":31,"first_name":"Dirk","last_name":"Hamlyn","email":"dhamlynu@ftc.gov","gender":"Male","birth_date":"9/11/2021","language":"Finnish"},
{"id":32,"first_name":"Prudence","last_name":"McLaughlin","email":"pmclaughlinv@princeton.edu","gender":"Female","birth_date":"1/7/2022","language":"Irish Gaelic"},
{"id":33,"first_name":"Teresita","last_name":"Corneck","email":"tcorneckw@i2i.jp","gender":"Female","birth_date":"5/27/2021","language":"Maltese"},
{"id":34,"first_name":"Ric","last_name":"Mylechreest","email":"rmylechreestx@ucoz.ru","gender":"Genderqueer","birth_date":"7/28/2021","language":"Tetum"},
{"id":35,"first_name":"Bibi","last_name":"Anmore","email":"banmorey@jigsy.com","gender":"Female","birth_date":"5/18/2021","language":"Azeri"},
{"id":36,"first_name":"Edgar","last_name":"Nutbeam","email":"enutbeamz@odnoklassniki.ru","gender":"Male","birth_date":"11/29/2021","language":"Amharic"},
{"id":37,"first_name":"Tan","last_name":"Jennings","email":"tjennings10@shutterfly.com","gender":"Male","birth_date":"2/5/2022","language":"Tok Pisin"},
{"id":38,"first_name":"Kesley","last_name":"Brockington","email":"kbrockington11@toplist.cz","gender":"Female","birth_date":"2/3/2022","language":"Korean"},
{"id":39,"first_name":"Zebedee","last_name":"Nice","email":"znice12@nature.com","gender":"Male","birth_date":"11/16/2021","language":"Hindi"},
{"id":40,"first_name":"Brier","last_name":"Woollaston","email":"bwoollaston13@phpbb.com","gender":"Female","birth_date":"9/6/2021","language":"Aymara"},
{"id":41,"first_name":"Pascale","last_name":"Sirman","email":"psirman14@cyberchimps.com","gender":"Male","birth_date":"8/24/2021","language":"Hungarian"},
{"id":42,"first_name":"Keary","last_name":"Scotchmore","email":"kscotchmore15@ow.ly","gender":"Male","birth_date":"9/25/2021","language":"Azeri"},
{"id":43,"first_name":"Saba","last_name":"Townes","email":"stownes16@yahoo.com","gender":"Female","birth_date":"8/15/2021","language":"Somali"},
{"id":44,"first_name":"Lemar","last_name":"Casa","email":"lcasa17@google.cn","gender":"Male","birth_date":"10/25/2021","language":"Guaraní"},
{"id":45,"first_name":"Huey","last_name":"Swidenbank","email":"hswidenbank18@theatlantic.com","gender":"Male","birth_date":"8/13/2021","language":"Persian"},
{"id":46,"first_name":"Zola","last_name":"Milnthorpe","email":"zmilnthorpe19@microsoft.com","gender":"Female","birth_date":"11/12/2021","language":"Kashmiri"},
{"id":47,"first_name":"Timothee","last_name":"Haley","email":"thaley1a@fc2.com","gender":"Male","birth_date":"5/22/2021","language":"Macedonian"},
{"id":48,"first_name":"Uriah","last_name":"Gaythor","email":"ugaythor1b@aboutads.info","gender":"Male","birth_date":"4/4/2022","language":"Papiamento"},
{"id":49,"first_name":"Wilbur","last_name":"Trask","email":"wtrask1c@xinhuanet.com","gender":"Genderqueer","birth_date":"7/18/2021","language":"Czech"},
{"id":50,"first_name":"Shurwood","last_name":"Netherclift","email":"snetherclift1d@princeton.edu","gender":"Genderfluid","birth_date":"4/5/2022","language":"Polish"},
{"id":51,"first_name":"Webster","last_name":"Camelia","email":"wcamelia1e@joomla.org","gender":"Male","birth_date":"11/12/2021","language":"Icelandic"},
{"id":52,"first_name":"Cleon","last_name":"Lemin","email":"clemin1f@house.gov","gender":"Male","birth_date":"5/18/2021","language":"Swedish"},
{"id":53,"first_name":"Amelita","last_name":"Oley","email":"aoley1g@msn.com","gender":"Female","birth_date":"10/25/2021","language":"Japanese"},
{"id":54,"first_name":"Woodrow","last_name":"Corde","email":"wcorde1h@themeforest.net","gender":"Male","birth_date":"2/10/2022","language":"Kazakh"},
{"id":55,"first_name":"Piotr","last_name":"Bauldrey","email":"pbauldrey1i@icio.us","gender":"Male","birth_date":"9/20/2021","language":"Tajik"},
{"id":56,"first_name":"Rudie","last_name":"Junes","email":"rjunes1j@icq.com","gender":"Male","birth_date":"7/30/2021","language":"Sotho"},
{"id":57,"first_name":"Brittni","last_name":"Manntschke","email":"bmanntschke1k@ow.ly","gender":"Female","birth_date":"5/23/2021","language":"Polish"},
{"id":58,"first_name":"Siana","last_name":"Birrell","email":"sbirrell1l@marketwatch.com","gender":"Female","birth_date":"2/11/2022","language":"Latvian"},
{"id":59,"first_name":"Saundra","last_name":"Aidler","email":"saidler1m@mayoclinic.com","gender":"Male","birth_date":"9/18/2021","language":"Tajik"},
{"id":60,"first_name":"Ania","last_name":"Elland","email":"aelland1n@webnode.com","gender":"Female","birth_date":"7/25/2021","language":"Māori"},
{"id":61,"first_name":"Marys","last_name":"Lamprecht","email":"mlamprecht1o@soundcloud.com","gender":"Agender","birth_date":"1/17/2022","language":"Kazakh"},
{"id":62,"first_name":"Brocky","last_name":"Simione","email":"bsimione1p@google.it","gender":"Male","birth_date":"10/6/2021","language":"Finnish"},
{"id":63,"first_name":"Mike","last_name":"Steinor","email":"msteinor1q@shinystat.com","gender":"Male","birth_date":"1/6/2022","language":"West Frisian"},
{"id":64,"first_name":"Amalea","last_name":"Mainds","email":"amainds1r@mtv.com","gender":"Female","birth_date":"11/14/2021","language":"Malayalam"},
{"id":65,"first_name":"Lurette","last_name":"Dainton","email":"ldainton1s@unesco.org","gender":"Female","birth_date":"8/9/2021","language":"Kyrgyz"},
{"id":66,"first_name":"Veronica","last_name":"Hylands","email":"vhylands1t@youtu.be","gender":"Female","birth_date":"1/23/2022","language":"Swati"},
{"id":67,"first_name":"Janeczka","last_name":"Haughey","email":"jhaughey1u@squarespace.com","gender":"Polygender","birth_date":"4/25/2021","language":"Bengali"},
{"id":68,"first_name":"Howie","last_name":"Cicutto","email":"hcicutto1v@statcounter.com","gender":"Non-binary","birth_date":"12/28/2021","language":"Macedonian"},
{"id":69,"first_name":"Lauri","last_name":"Kerans","email":"lkerans1w@apple.com","gender":"Female","birth_date":"10/29/2021","language":"New Zealand Sign Language"},
{"id":70,"first_name":"Murray","last_name":"Stiven","email":"mstiven1x@yahoo.com","gender":"Male","birth_date":"10/6/2021","language":"Kashmiri"},
{"id":71,"first_name":"Jamesy","last_name":"Edgley","email":"jedgley1y@wix.com","gender":"Male","birth_date":"10/2/2021","language":"Malagasy"},
{"id":72,"first_name":"Berkly","last_name":"Euels","email":"beuels1z@shutterfly.com","gender":"Male","birth_date":"1/5/2022","language":"Kashmiri"},
{"id":73,"first_name":"Piotr","last_name":"Whaites","email":"pwhaites20@ucoz.ru","gender":"Male","birth_date":"10/22/2021","language":"Guaraní"},
{"id":74,"first_name":"Bethanne","last_name":"Le - Count","email":"blecount21@google.com.br","gender":"Female","birth_date":"4/8/2022","language":"Tswana"},
{"id":75,"first_name":"Gibb","last_name":"Melesk","email":"gmelesk22@so-net.ne.jp","gender":"Male","birth_date":"3/7/2022","language":"Belarusian"},
{"id":76,"first_name":"Rosemaria","last_name":"Binyon","email":"rbinyon23@fastcompany.com","gender":"Female","birth_date":"2/19/2022","language":"Northern Sotho"},
{"id":77,"first_name":"Whitman","last_name":"De Blase","email":"wdeblase24@google.com.hk","gender":"Male","birth_date":"8/18/2021","language":"Georgian"},
{"id":78,"first_name":"Ash","last_name":"Ajam","email":"aajam25@histats.com","gender":"Male","birth_date":"10/7/2021","language":"Bislama"},
{"id":79,"first_name":"Emiline","last_name":"Moggach","email":"emoggach26@msn.com","gender":"Female","birth_date":"5/14/2021","language":"French"},
{"id":80,"first_name":"Kellen","last_name":"Appleyard","email":"kappleyard27@nyu.edu","gender":"Male","birth_date":"7/19/2021","language":"Yiddish"},
{"id":81,"first_name":"Roldan","last_name":"Guirau","email":"rguirau28@hud.gov","gender":"Polygender","birth_date":"7/28/2021","language":"Oriya"},
{"id":82,"first_name":"Clem","last_name":"Di Domenico","email":"cdidomenico29@biblegateway.com","gender":"Male","birth_date":"5/19/2021","language":"Marathi"},
{"id":83,"first_name":"Barnebas","last_name":"Langthorn","email":"blangthorn2a@sakura.ne.jp","gender":"Male","birth_date":"11/28/2021","language":"Dari"},
{"id":84,"first_name":"Lazar","last_name":"Pipet","email":"lpipet2b@walmart.com","gender":"Male","birth_date":"5/4/2021","language":"Quechua"},
{"id":85,"first_name":"Gardiner","last_name":"Ruxton","email":"gruxton2c@google.ru","gender":"Male","birth_date":"5/16/2021","language":"Bosnian"},
{"id":86,"first_name":"Gallard","last_name":"Erat","email":"gerat2d@yolasite.com","gender":"Male","birth_date":"1/5/2022","language":"Zulu"},
{"id":87,"first_name":"Rorke","last_name":"Prandin","email":"rprandin2e@dailymail.co.uk","gender":"Male","birth_date":"6/28/2021","language":"Ndebele"},
{"id":88,"first_name":"Christoffer","last_name":"Girling","email":"cgirling2f@wunderground.com","gender":"Male","birth_date":"1/15/2022","language":"Papiamento"},
{"id":89,"first_name":"Gisela","last_name":"Borrow","email":"gborrow2g@cocolog-nifty.com","gender":"Female","birth_date":"12/14/2021","language":"Somali"},
{"id":90,"first_name":"Morgen","last_name":"Denisot","email":"mdenisot2h@mayoclinic.com","gender":"Female","birth_date":"1/15/2022","language":"Irish Gaelic"},
{"id":91,"first_name":"Giralda","last_name":"Arp","email":"garp2i@ebay.co.uk","gender":"Female","birth_date":"4/11/2022","language":"Spanish"},
{"id":92,"first_name":"Danell","last_name":"Staddon","email":"dstaddon2j@ycombinator.com","gender":"Female","birth_date":"12/1/2021","language":"Catalan"},
{"id":93,"first_name":"Kelsey","last_name":"Seale","email":"kseale2k@4shared.com","gender":"Female","birth_date":"12/13/2021","language":"Kannada"},
{"id":94,"first_name":"Desirae","last_name":"Higounet","email":"dhigounet2l@businessinsider.com","gender":"Female","birth_date":"5/14/2021","language":"Kashmiri"},
{"id":95,"first_name":"Kristo","last_name":"Shucksmith","email":"kshucksmith2m@reddit.com","gender":"Male","birth_date":"5/14/2021","language":"Filipino"},
{"id":96,"first_name":"Stace","last_name":"Ellick","email":"sellick2n@yahoo.co.jp","gender":"Female","birth_date":"5/4/2021","language":"Khmer"},
{"id":97,"first_name":"Guthrey","last_name":"Hulks","email":"ghulks2o@youtube.com","gender":"Agender","birth_date":"2/4/2022","language":"Dzongkha"},
{"id":98,"first_name":"Jaquelyn","last_name":"Bunney","email":"jbunney2p@t.co","gender":"Female","birth_date":"1/18/2022","language":"West Frisian"},
{"id":99,"first_name":"Ritchie","last_name":"Sired","email":"rsired2q@slideshare.net","gender":"Agender","birth_date":"1/8/2022","language":"Romanian"},
{"id":100,"first_name":"Rhianon","last_name":"Nevett","email":"rnevett2r@ca.gov","gender":"Female","birth_date":"7/27/2021","language":"Bengali"},
{"id":101,"first_name":"Mary","last_name":"Aulton","email":"maulton2s@delicious.com","gender":"Female","birth_date":"1/31/2022","language":"Malayalam"},
{"id":102,"first_name":"Reese","last_name":"Wolstencroft","email":"rwolstencroft2t@google.com.hk","gender":"Male","birth_date":"9/17/2021","language":"Kyrgyz"},
{"id":103,"first_name":"Carlee","last_name":"McLae","email":"cmclae2u@youtube.com","gender":"Bigender","birth_date":"9/12/2021","language":"Filipino"},
{"id":104,"first_name":"Cordelia","last_name":"Ferriere","email":"cferriere2v@ted.com","gender":"Female","birth_date":"7/14/2021","language":"Belarusian"},
{"id":105,"first_name":"Andrea","last_name":"Duesberry","email":"aduesberry2w@guardian.co.uk","gender":"Male","birth_date":"10/15/2021","language":"Japanese"},
{"id":106,"first_name":"Ken","last_name":"Stain","email":"kstain2x@ustream.tv","gender":"Male","birth_date":"3/14/2022","language":"West Frisian"},
{"id":107,"first_name":"Levi","last_name":"Ragdale","email":"lragdale2y@ustream.tv","gender":"Male","birth_date":"9/7/2021","language":"Belarusian"},
{"id":108,"first_name":"Antonio","last_name":"Hulburd","email":"ahulburd2z@uol.com.br","gender":"Male","birth_date":"3/10/2022","language":"Japanese"},
{"id":109,"first_name":"Marven","last_name":"Meffin","email":"mmeffin30@live.com","gender":"Male","birth_date":"12/31/2021","language":"Tsonga"},
{"id":110,"first_name":"Shepherd","last_name":"Rapsey","email":"srapsey31@cnn.com","gender":"Male","birth_date":"6/11/2021","language":"Finnish"},
{"id":111,"first_name":"Ezequiel","last_name":"Child","email":"echild32@prlog.org","gender":"Male","birth_date":"5/5/2021","language":"Latvian"},
{"id":112,"first_name":"Skyler","last_name":"Branni","email":"sbranni33@nifty.com","gender":"Male","birth_date":"9/20/2021","language":"Bosnian"},
{"id":113,"first_name":"Darrin","last_name":"Oades","email":"doades34@xrea.com","gender":"Male","birth_date":"7/21/2021","language":"Filipino"},
{"id":114,"first_name":"Tait","last_name":"Roller","email":"troller35@bbb.org","gender":"Male","birth_date":"4/17/2021","language":"West Frisian"},
{"id":115,"first_name":"Elwyn","last_name":"Maultby","email":"emaultby36@barnesandnoble.com","gender":"Male","birth_date":"1/28/2022","language":"Montenegrin"},
{"id":116,"first_name":"Roger","last_name":"Steffans","email":"rsteffans37@mlb.com","gender":"Male","birth_date":"4/7/2022","language":"Tswana"},
{"id":117,"first_name":"Elden","last_name":"Norker","email":"enorker38@icio.us","gender":"Male","birth_date":"5/6/2021","language":"Aymara"},
{"id":118,"first_name":"Minnaminnie","last_name":"Jewiss","email":"mjewiss39@taobao.com","gender":"Female","birth_date":"7/6/2021","language":"Croatian"},
{"id":119,"first_name":"Nickolas","last_name":"Tofano","email":"ntofano3a@dropbox.com","gender":"Male","birth_date":"11/2/2021","language":"Burmese"},
{"id":120,"first_name":"Emmery","last_name":"Haddick","email":"ehaddick3b@ucla.edu","gender":"Male","birth_date":"2/7/2022","language":"Oriya"},
{"id":121,"first_name":"Lizbeth","last_name":"Spensley","email":"lspensley3c@virginia.edu","gender":"Female","birth_date":"1/3/2022","language":"Sotho"},
{"id":122,"first_name":"Vidovic","last_name":"O'Callaghan","email":"vocallaghan3d@java.com","gender":"Male","birth_date":"7/2/2021","language":"Norwegian"},
{"id":123,"first_name":"Costa","last_name":"Schoroder","email":"cschoroder3e@mapquest.com","gender":"Male","birth_date":"8/19/2021","language":"Telugu"},
{"id":124,"first_name":"Wynnie","last_name":"Keenan","email":"wkeenan3f@china.com.cn","gender":"Female","birth_date":"4/26/2021","language":"Tajik"},
{"id":125,"first_name":"Ariadne","last_name":"Caizley","email":"acaizley3g@ed.gov","gender":"Female","birth_date":"5/19/2021","language":"Hiri Motu"},
{"id":126,"first_name":"Dane","last_name":"Dawber","email":"ddawber3h@hibu.com","gender":"Male","birth_date":"8/10/2021","language":"Belarusian"},
{"id":127,"first_name":"Loria","last_name":"Ketchell","email":"lketchell3i@va.gov","gender":"Non-binary","birth_date":"12/16/2021","language":"Haitian Creole"},
{"id":128,"first_name":"Berty","last_name":"Rickson","email":"brickson3j@wisc.edu","gender":"Male","birth_date":"2/27/2022","language":"Swahili"},
{"id":129,"first_name":"Aimil","last_name":"Kanter","email":"akanter3k@home.pl","gender":"Female","birth_date":"11/16/2021","language":"Kannada"},
{"id":130,"first_name":"Kaiser","last_name":"Ayre","email":"kayre3l@techcrunch.com","gender":"Male","birth_date":"12/25/2021","language":"Arabic"},
{"id":131,"first_name":"Kellby","last_name":"Vinick","email":"kvinick3m@ucsd.edu","gender":"Male","birth_date":"7/26/2021","language":"Haitian Creole"},
{"id":132,"first_name":"Ag","last_name":"Bang","email":"abang3n@eventbrite.com","gender":"Female","birth_date":"9/25/2021","language":"Gagauz"},
{"id":133,"first_name":"Wendy","last_name":"Pakeman","email":"wpakeman3o@tamu.edu","gender":"Female","birth_date":"10/29/2021","language":"Aymara"},
{"id":134,"first_name":"Gerty","last_name":"Lamburne","email":"glamburne3p@jugem.jp","gender":"Female","birth_date":"7/23/2021","language":"Swedish"},
{"id":135,"first_name":"Ewart","last_name":"Pettigree","email":"epettigree3q@kickstarter.com","gender":"Genderqueer","birth_date":"6/1/2021","language":"English"},
{"id":136,"first_name":"Gerik","last_name":"Lissimore","email":"glissimore3r@psu.edu","gender":"Male","birth_date":"12/2/2021","language":"Estonian"},
{"id":137,"first_name":"Farrell","last_name":"Swale","email":"fswale3s@nhs.uk","gender":"Male","birth_date":"2/20/2022","language":"Chinese"},
{"id":138,"first_name":"Remy","last_name":"Schwant","email":"rschwant3t@plala.or.jp","gender":"Female","birth_date":"10/17/2021","language":"Catalan"},
{"id":139,"first_name":"Humfried","last_name":"Augur","email":"haugur3u@wix.com","gender":"Male","birth_date":"9/29/2021","language":"Guaraní"},
{"id":140,"first_name":"Fernando","last_name":"Verheyden","email":"fverheyden3v@usnews.com","gender":"Male","birth_date":"1/2/2022","language":"Azeri"},
{"id":141,"first_name":"Inna","last_name":"Rewcastle","email":"irewcastle3w@examiner.com","gender":"Female","birth_date":"4/1/2022","language":"Papiamento"},
{"id":142,"first_name":"Farly","last_name":"Norley","email":"fnorley3x@imgur.com","gender":"Male","birth_date":"5/21/2021","language":"Dutch"},
{"id":143,"first_name":"Tory","last_name":"Farmer","email":"tfarmer3y@mapy.cz","gender":"Female","birth_date":"12/27/2021","language":"Gujarati"},
{"id":144,"first_name":"Kimbell","last_name":"Buzza","email":"kbuzza3z@usgs.gov","gender":"Male","birth_date":"7/29/2021","language":"Quechua"},
{"id":145,"first_name":"Kellen","last_name":"Whitten","email":"kwhitten40@alexa.com","gender":"Female","birth_date":"7/12/2021","language":"Icelandic"},
{"id":146,"first_name":"Carolus","last_name":"Stovold","email":"cstovold41@php.net","gender":"Male","birth_date":"11/17/2021","language":"Korean"},
{"id":147,"first_name":"Stefanie","last_name":"Drayson","email":"sdrayson42@privacy.gov.au","gender":"Female","birth_date":"5/4/2021","language":"Marathi"},
{"id":148,"first_name":"Blane","last_name":"Blackwood","email":"bblackwood43@php.net","gender":"Male","birth_date":"2/18/2022","language":"Tamil"},
{"id":149,"first_name":"Ber","last_name":"Pietsma","email":"bpietsma44@seattletimes.com","gender":"Male","birth_date":"7/18/2021","language":"Guaraní"},
{"id":150,"first_name":"Lindsay","last_name":"Endicott","email":"lendicott45@privacy.gov.au","gender":"Female","birth_date":"6/22/2021","language":"Dzongkha"},
{"id":151,"first_name":"Howey","last_name":"Greave","email":"hgreave46@ca.gov","gender":"Male","birth_date":"8/24/2021","language":"Yiddish"},
{"id":152,"first_name":"Jillana","last_name":"Leggen","email":"jleggen47@pcworld.com","gender":"Female","birth_date":"1/31/2022","language":"Malay"},
{"id":153,"first_name":"Theobald","last_name":"Slewcock","email":"tslewcock48@liveinternet.ru","gender":"Male","birth_date":"4/18/2021","language":"Kashmiri"},
{"id":154,"first_name":"Trudey","last_name":"Paullin","email":"tpaullin49@usgs.gov","gender":"Female","birth_date":"2/11/2022","language":"Croatian"},
{"id":155,"first_name":"Mead","last_name":"Baise","email":"mbaise4a@prweb.com","gender":"Male","birth_date":"2/25/2022","language":"Danish"},
{"id":156,"first_name":"Leontyne","last_name":"Longworthy","email":"llongworthy4b@foxnews.com","gender":"Female","birth_date":"6/1/2021","language":"French"},
{"id":157,"first_name":"Sibella","last_name":"Race","email":"srace4c@mtv.com","gender":"Female","birth_date":"11/30/2021","language":"Croatian"},
{"id":158,"first_name":"Drusi","last_name":"Knowlden","email":"dknowlden4d@princeton.edu","gender":"Female","birth_date":"7/11/2021","language":"Icelandic"},
{"id":159,"first_name":"Nathalia","last_name":"MacFarlan","email":"nmacfarlan4e@yandex.ru","gender":"Female","birth_date":"8/25/2021","language":"Armenian"},
{"id":160,"first_name":"Blake","last_name":"Caudrelier","email":"bcaudrelier4f@google.pl","gender":"Female","birth_date":"10/9/2021","language":"Kashmiri"},
{"id":161,"first_name":"Reece","last_name":"Maggi","email":"rmaggi4g@cbsnews.com","gender":"Male","birth_date":"2/3/2022","language":"Assamese"},
{"id":162,"first_name":"Nancee","last_name":"Berling","email":"nberling4h@simplemachines.org","gender":"Female","birth_date":"5/11/2021","language":"French"},
{"id":163,"first_name":"Jay","last_name":"Olivello","email":"jolivello4i@homestead.com","gender":"Male","birth_date":"12/3/2021","language":"West Frisian"},
{"id":164,"first_name":"Bernie","last_name":"Cubbinelli","email":"bcubbinelli4j@disqus.com","gender":"Female","birth_date":"11/27/2021","language":"Luxembourgish"},
{"id":165,"first_name":"Vonni","last_name":"Measures","email":"vmeasures4k@illinois.edu","gender":"Female","birth_date":"7/26/2021","language":"Bislama"},
{"id":166,"first_name":"Nicol","last_name":"Bruhnke","email":"nbruhnke4l@umn.edu","gender":"Female","birth_date":"4/28/2021","language":"Malay"},
{"id":167,"first_name":"Ethel","last_name":"Haggas","email":"ehaggas4m@bbc.co.uk","gender":"Female","birth_date":"10/28/2021","language":"Kannada"},
{"id":168,"first_name":"Blayne","last_name":"O'Keefe","email":"bokeefe4n@youku.com","gender":"Male","birth_date":"8/8/2021","language":"Afrikaans"},
{"id":169,"first_name":"Francklin","last_name":"Pople","email":"fpople4o@wiley.com","gender":"Male","birth_date":"11/28/2021","language":"Malagasy"},
{"id":170,"first_name":"Giacinta","last_name":"Spurriar","email":"gspurriar4p@npr.org","gender":"Female","birth_date":"6/17/2021","language":"Punjabi"},
{"id":171,"first_name":"Hakim","last_name":"Gass","email":"hgass4q@tripod.com","gender":"Male","birth_date":"9/21/2021","language":"Maltese"},
{"id":172,"first_name":"Bartel","last_name":"Manketell","email":"bmanketell4r@i2i.jp","gender":"Genderqueer","birth_date":"11/16/2021","language":"Oriya"},
{"id":173,"first_name":"Addie","last_name":"Escofier","email":"aescofier4s@imgur.com","gender":"Female","birth_date":"6/21/2021","language":"Swati"},
{"id":174,"first_name":"Hobart","last_name":"Bough","email":"hbough4t@opensource.org","gender":"Male","birth_date":"10/15/2021","language":"Bengali"},
{"id":175,"first_name":"Carry","last_name":"Gay","email":"cgay4u@netvibes.com","gender":"Female","birth_date":"1/28/2022","language":"Oriya"},
{"id":176,"first_name":"Forrester","last_name":"Lisle","email":"flisle4v@dailymail.co.uk","gender":"Agender","birth_date":"1/14/2022","language":"Amharic"},
{"id":177,"first_name":"Wallache","last_name":"Lockhead","email":"wlockhead4w@amazonaws.com","gender":"Male","birth_date":"6/2/2021","language":"Fijian"},
{"id":178,"first_name":"Winthrop","last_name":"Amner","email":"wamner4x@eepurl.com","gender":"Non-binary","birth_date":"8/19/2021","language":"Tamil"},
{"id":179,"first_name":"Earle","last_name":"Cortnay","email":"ecortnay4y@geocities.jp","gender":"Male","birth_date":"11/11/2021","language":"West Frisian"},
{"id":180,"first_name":"Terese","last_name":"Wynes","email":"twynes4z@mapquest.com","gender":"Female","birth_date":"5/12/2021","language":"Finnish"},
{"id":181,"first_name":"Alfie","last_name":"Francesconi","email":"afrancesconi50@archive.org","gender":"Male","birth_date":"7/17/2021","language":"Malagasy"},
{"id":182,"first_name":"Sisile","last_name":"Kick","email":"skick51@wikispaces.com","gender":"Female","birth_date":"1/7/2022","language":"Italian"},
{"id":183,"first_name":"Mel","last_name":"Woliter","email":"mwoliter52@rediff.com","gender":"Female","birth_date":"11/6/2021","language":"Tajik"},
{"id":184,"first_name":"Ellissa","last_name":"Frow","email":"efrow53@noaa.gov","gender":"Female","birth_date":"11/6/2021","language":"Italian"},
{"id":185,"first_name":"Casey","last_name":"Godball","email":"cgodball54@wiley.com","gender":"Male","birth_date":"9/21/2021","language":"Kannada"},
{"id":186,"first_name":"Penelopa","last_name":"Esome","email":"pesome55@hhs.gov","gender":"Female","birth_date":"5/5/2021","language":"Tok Pisin"},
{"id":187,"first_name":"Millisent","last_name":"Rooson","email":"mrooson56@wikimedia.org","gender":"Female","birth_date":"5/24/2021","language":"Māori"},
{"id":188,"first_name":"Janeva","last_name":"Nolder","email":"jnolder57@tiny.cc","gender":"Female","birth_date":"3/13/2022","language":"Oriya"},
{"id":189,"first_name":"Morgen","last_name":"Harget","email":"mharget58@cmu.edu","gender":"Male","birth_date":"1/19/2022","language":"Portuguese"},
{"id":190,"first_name":"Rich","last_name":"O'Nions","email":"ronions59@networkadvertising.org","gender":"Male","birth_date":"2/28/2022","language":"Khmer"},
{"id":191,"first_name":"Dar","last_name":"Caskey","email":"dcaskey5a@adobe.com","gender":"Male","birth_date":"8/21/2021","language":"Korean"},
{"id":192,"first_name":"Armando","last_name":"Shearstone","email":"ashearstone5b@bravesites.com","gender":"Genderfluid","birth_date":"4/22/2021","language":"Gagauz"},
{"id":193,"first_name":"Port","last_name":"Gates","email":"pgates5c@reddit.com","gender":"Male","birth_date":"10/26/2021","language":"Icelandic"},
{"id":194,"first_name":"Wendel","last_name":"Mertin","email":"wmertin5d@google.pl","gender":"Male","birth_date":"8/30/2021","language":"Latvian"},
{"id":195,"first_name":"Reed","last_name":"McMains","email":"rmcmains5e@noaa.gov","gender":"Male","birth_date":"10/5/2021","language":"Lithuanian"},
{"id":196,"first_name":"Bobbette","last_name":"Whittenbury","email":"bwhittenbury5f@gizmodo.com","gender":"Female","birth_date":"9/22/2021","language":"Czech"},
{"id":197,"first_name":"Leon","last_name":"Kilbourn","email":"lkilbourn5g@narod.ru","gender":"Male","birth_date":"12/7/2021","language":"Dutch"},
{"id":198,"first_name":"Roxane","last_name":"O' Mullan","email":"romullan5h@ning.com","gender":"Genderqueer","birth_date":"8/17/2021","language":"Nepali"},
{"id":199,"first_name":"Lorianna","last_name":"Girkin","email":"lgirkin5i@home.pl","gender":"Female","birth_date":"11/28/2021","language":"Hebrew"},
{"id":200,"first_name":"Birch","last_name":"Eldershaw","email":"beldershaw5j@gmpg.org","gender":"Male","birth_date":"12/14/2021","language":"English"}]

    },{}],3:[function(require,module,exports){
    const { getAllStudents, getStudentById } = require("./api/student");
    
    const renderTable = (data) => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
      
      const rows = data.reduce(
        (acc, { id, first_name, last_name, email, gender, birth_date, language}) =>
          acc +
          `<tr>
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${birth_date}</td>
            <td>${language}</td>
        </tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    
   
    getAllStudents().then(({ data }) => renderTable(data));  
    
    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.filters.value;
      const valueTerm = event.target.input.value;

      if(term === `id`) {
        getStudentById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllStudents(term, valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllStudents().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);
    
    },{"./api/student":1}]},{},[3]);