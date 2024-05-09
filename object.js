//an object is an entity
const student = {
    firstName: "chioma",
    lastName: "Brenda",
    age : 18,
    favFood: ["rice","beans","plantain"],
    skills:["Html","Css","Javascript"],
    address:{
        street: "35 oke street",
        city: "lagos",
        country:"Nigeria",
    },

    fullName: function () {
        return this.firstName + " "+ this.lastName;
    },

};
//access object

//console.log(student.fullName());
//console.log(student['favFood'][0]);

//console.log(student.address.city);
//console.log(student['address']['city']);

//console.log(Object.keys(student));
//console.log(Object.values(student));

console.log(Object.entries(student));

if("lastName"in student){
    student.lastname ="santos";
}
console.log(student);



const employees = [{
    "id": 1,
    "first_name": "Lambert",
    "last_name": "Fielders",
    "email": "lfielders0@yelp.com",
    "gender": "Male",
    "ip_address": "100.11.164.223",
    "salary": "$7089.02",
    "country": "Brazil"
  }, {
    "id": 2,
    "first_name": "Cati",
    "last_name": "Conlon",
    "email": "cconlon1@hostgator.com",
    "gender": "Female",
    "ip_address": "32.48.246.71",
    "salary": "$6656.61",
    "country": "China"
  }, {
    "id": 3,
    "first_name": "Jerald",
    "last_name": "Melbourne",
    "email": "jmelbourne2@wikimedia.org",
    "gender": "Male",
    "ip_address": "250.13.234.124",
    "salary": "$8611.01",
    "country": "Azerbaijan"
  }, {
    "id": 4,
    "first_name": "Sheridan",
    "last_name": "Tatam",
    "email": "statam3@wordpress.org",
    "gender": "Male",
    "ip_address": "182.179.73.218",
    "salary": "$5543.89",
    "country": "China"
  }, {
    "id": 5,
    "first_name": "Quentin",
    "last_name": "Gillyett",
    "email": "qgillyett4@shutterfly.com",
    "gender": "Female",
    "ip_address": "99.89.209.205",
    "salary": "$2163.96",
    "country": "Mongolia"
  }, {
    "id": 6,
    "first_name": "Etta",
    "last_name": "McQuirter",
    "email": "emcquirter5@ihg.com",
    "gender": "Female",
    "ip_address": "209.79.28.174",
    "salary": "$3267.44",
    "country": "China"
  }, {
    "id": 7,
    "first_name": "Dalston",
    "last_name": "Binnall",
    "email": "dbinnall6@seesaa.net",
    "gender": "Male",
    "ip_address": "193.136.80.65",
    "salary": "$6550.89",
    "country": "Guatemala"
  }, {
    "id": 8,
    "first_name": "Killie",
    "last_name": "Althrop",
    "email": "kalthrop7@sohu.com",
    "gender": "Male",
    "ip_address": "0.6.197.242",
    "salary": "$3322.69",
    "country": "Brazil"
  }, {
    "id": 9,
    "first_name": "Tomasina",
    "last_name": "Trinke",
    "email": "ttrinke8@oracle.com",
    "gender": "Genderqueer",
    "ip_address": "227.189.199.84",
    "salary": "$6948.86",
    "country": "Sweden"
  }, {
    "id": 10,
    "first_name": "Jillana",
    "last_name": "Caccavale",
    "email": "jcaccavale9@ucsd.edu",
    "gender": "Female",
    "ip_address": "147.22.176.95",
    "salary": "$3063.05",
    "country": "Nigeria"
  }, {
    "id": 11,
    "first_name": "Hughie",
    "last_name": "Stainer",
    "email": "hstainera@wiley.com",
    "gender": "Male",
    "ip_address": "8.226.209.199",
    "salary": "$7808.18",
    "country": "North Korea"
  }, {
    "id": 12,
    "first_name": "Lem",
    "last_name": "Domoney",
    "email": "ldomoneyb@bluehost.com",
    "gender": "Male",
    "ip_address": "7.165.68.137",
    "salary": "$5921.64",
    "country": "Philippines"
  }, {
    "id": 13,
    "first_name": "Merry",
    "last_name": "Sperrett",
    "email": "msperrettc@wired.com",
    "gender": "Female",
    "ip_address": "172.220.211.123",
    "salary": "$5125.88",
    "country": "South Africa"
  }, {
    "id": 14,
    "first_name": "Jamil",
    "last_name": "McGuane",
    "email": "jmcguaned@google.de",
    "gender": "Male",
    "ip_address": "203.8.99.216",
    "salary": "$4978.90",
    "country": "Indonesia"
  }, {
    "id": 15,
    "first_name": "Ronda",
    "last_name": "Trevains",
    "email": "rtrevainse@is.gd",
    "gender": "Female",
    "ip_address": "236.18.15.22",
    "salary": "$2411.96",
    "country": "Senegal"
  }, {
    "id": 16,
    "first_name": "Alonso",
    "last_name": "Bemand",
    "email": "abemandf@artisteer.com",
    "gender": "Male",
    "ip_address": "181.232.146.135",
    "salary": "$5782.94",
    "country": "China"
  }, {
    "id": 17,
    "first_name": "Brenden",
    "last_name": "Simpkiss",
    "email": "bsimpkissg@dion.ne.jp",
    "gender": "Male",
    "ip_address": "220.227.1.113",
    "salary": "$4112.22",
    "country": "Canada"
  }, {
    "id": 18,
    "first_name": "Arni",
    "last_name": "Semrad",
    "email": "asemradh@theatlantic.com",
    "gender": "Genderfluid",
    "ip_address": "198.230.231.145",
    "salary": "$2068.30",
    "country": "Russia"
  }, {
    "id": 19,
    "first_name": "Roderic",
    "last_name": "Aleksandrev",
    "email": "raleksandrevi@google.com.br",
    "gender": "Male",
    "ip_address": "38.35.90.217",
    "salary": "$2634.37",
    "country": "Slovenia"
  }, {
    "id": 20,
    "first_name": "Hart",
    "last_name": "Ivins",
    "email": "hivinsj@fda.gov",
    "gender": "Male",
    "ip_address": "232.107.73.204",
    "salary": "$2089.16",
    "country": "China"
  }, {
    "id": 21,
    "first_name": "Nina",
    "last_name": "Hollidge",
    "email": "nhollidgek@shinystat.com",
    "gender": "Female",
    "ip_address": "105.122.253.235",
    "salary": "$6232.32",
    "country": "South Africa"
  }, {
    "id": 22,
    "first_name": "Arlin",
    "last_name": "Klug",
    "email": "aklugl@mit.edu",
    "gender": "Male",
    "ip_address": "222.164.52.63",
    "salary": "$4816.56",
    "country": "Vietnam"
  }, {
    "id": 23,
    "first_name": "Byrom",
    "last_name": "Matula",
    "email": "bmatulam@economist.com",
    "gender": "Agender",
    "ip_address": "80.22.63.121",
    "salary": "$2522.35",
    "country": "Guatemala"
  }, {
    "id": 24,
    "first_name": "Donnajean",
    "last_name": "Buncom",
    "email": "dbuncomn@netscape.com",
    "gender": "Female",
    "ip_address": "221.14.237.178",
    "salary": "$9082.98",
    "country": "France"
  }, {
    "id": 25,
    "first_name": "Sibeal",
    "last_name": "Conor",
    "email": "sconoro@slate.com",
    "gender": "Female",
    "ip_address": "152.179.55.80",
    "salary": "$6898.15",
    "country": "Thailand"
  }, {
    "id": 26,
    "first_name": "Jae",
    "last_name": "Arrington",
    "email": "jarringtonp@mozilla.org",
    "gender": "Male",
    "ip_address": "167.159.248.161",
    "salary": "$8077.88",
    "country": "Czech Republic"
  }, {
    "id": 27,
    "first_name": "Anastasie",
    "last_name": "Cranney",
    "email": "acranneyq@ebay.com",
    "gender": "Female",
    "ip_address": "156.225.135.43",
    "salary": "$9480.80",
    "country": "Sweden"
  }, {
    "id": 28,
    "first_name": "Donelle",
    "last_name": "Arkell",
    "email": "darkellr@fda.gov",
    "gender": "Female",
    "ip_address": "196.181.144.139",
    "salary": "$4122.34",
    "country": "Yemen"
  }, {
    "id": 29,
    "first_name": "Freddy",
    "last_name": "Dollen",
    "email": "fdollens@independent.co.uk",
    "gender": "Female",
    "ip_address": "253.81.191.235",
    "salary": "$8816.78",
    "country": "Mexico"
  }, {
    "id": 30,
    "first_name": "Esra",
    "last_name": "Castells",
    "email": "ecastellst@usnews.com",
    "gender": "Male",
    "ip_address": "210.118.183.148",
    "salary": "$9012.60",
    "country": "Indonesia"
  }, {
    "id": 31,
    "first_name": "Malanie",
    "last_name": "Silveston",
    "email": "msilvestonu@istockphoto.com",
    "gender": "Female",
    "ip_address": "122.67.85.84",
    "salary": "$8920.68",
    "country": "Vietnam"
  }, {
    "id": 32,
    "first_name": "Humbert",
    "last_name": "Grand",
    "email": "hgrandv@gmpg.org",
    "gender": "Male",
    "ip_address": "70.90.10.223",
    "salary": "$7899.36",
    "country": "Sweden"
  }, {
    "id": 33,
    "first_name": "Odette",
    "last_name": "Blackly",
    "email": "oblacklyw@blog.com",
    "gender": "Female",
    "ip_address": "202.62.107.35",
    "salary": "$7536.99",
    "country": "Indonesia"
  }, {
    "id": 34,
    "first_name": "Mariejeanne",
    "last_name": "Vasyuchov",
    "email": "mvasyuchovx@archive.org",
    "gender": "Female",
    "ip_address": "121.17.158.220",
    "salary": "$5537.75",
    "country": "Russia"
  }, {
    "id": 35,
    "first_name": "Margareta",
    "last_name": "Zamorano",
    "email": "mzamoranoy@sciencedaily.com",
    "gender": "Genderqueer",
    "ip_address": "237.10.185.216",
    "salary": "$4547.23",
    "country": "Japan"
  }, {
    "id": 36,
    "first_name": "Bamby",
    "last_name": "Lambregts",
    "email": "blambregtsz@edublogs.org",
    "gender": "Female",
    "ip_address": "216.54.176.214",
    "salary": "$4126.14",
    "country": "China"
  }, {
    "id": 37,
    "first_name": "Ernesto",
    "last_name": "Ribbens",
    "email": "eribbens10@soup.io",
    "gender": "Male",
    "ip_address": "187.40.40.222",
    "salary": "$5558.14",
    "country": "Iran"
  }, {
    "id": 38,
    "first_name": "Enrica",
    "last_name": "Bazelle",
    "email": "ebazelle11@nyu.edu",
    "gender": "Female",
    "ip_address": "8.75.21.167",
    "salary": "$4805.43",
    "country": "Panama"
  }, {
    "id": 39,
    "first_name": "Hewitt",
    "last_name": "Spellicy",
    "email": "hspellicy12@printfriendly.com",
    "gender": "Male",
    "ip_address": "168.190.15.32",
    "salary": "$5082.98",
    "country": "China"
  }, {
    "id": 40,
    "first_name": "Roseanna",
    "last_name": "Jansema",
    "email": "rjansema13@jugem.jp",
    "gender": "Female",
    "ip_address": "174.200.251.220",
    "salary": "$8997.29",
    "country": "Portugal"
  }, {
    "id": 41,
    "first_name": "Lanae",
    "last_name": "Corbridge",
    "email": "lcorbridge14@multiply.com",
    "gender": "Female",
    "ip_address": "48.192.45.16",
    "salary": "$4479.99",
    "country": "Netherlands"
  }, {
    "id": 42,
    "first_name": "Freddy",
    "last_name": "Fuggles",
    "email": "ffuggles15@e-recht24.de",
    "gender": "Male",
    "ip_address": "89.223.199.10",
    "salary": "$3040.66",
    "country": "Indonesia"
  }, {
    "id": 43,
    "first_name": "Marijn",
    "last_name": "Noller",
    "email": "mnoller16@taobao.com",
    "gender": "Male",
    "ip_address": "111.146.222.192",
    "salary": "$6169.49",
    "country": "United States"
  }, {
    "id": 44,
    "first_name": "Lowell",
    "last_name": "Tollady",
    "email": "ltollady17@nsw.gov.au",
    "gender": "Male",
    "ip_address": "95.17.91.162",
    "salary": "$3021.85",
    "country": "French Guiana"
  }, {
    "id": 45,
    "first_name": "Beatrisa",
    "last_name": "Wardington",
    "email": "bwardington18@washingtonpost.com",
    "gender": "Genderfluid",
    "ip_address": "115.6.75.213",
    "salary": "$3228.87",
    "country": "Philippines"
  }, {
    "id": 46,
    "first_name": "Jimmy",
    "last_name": "Van Vuuren",
    "email": "jvanvuuren19@aol.com",
    "gender": "Male",
    "ip_address": "142.221.154.146",
    "salary": "$4770.66",
    "country": "Mexico"
  }, {
    "id": 47,
    "first_name": "Fae",
    "last_name": "Reye",
    "email": "freye1a@pinterest.com",
    "gender": "Female",
    "ip_address": "73.170.49.228",
    "salary": "$3393.86",
    "country": "United States"
  }, {
    "id": 48,
    "first_name": "Georgeta",
    "last_name": "Habin",
    "email": "ghabin1b@behance.net",
    "gender": "Female",
    "ip_address": "91.253.74.74",
    "salary": "$7568.79",
    "country": "Philippines"
  }, {
    "id": 49,
    "first_name": "Phylys",
    "last_name": "Muzzullo",
    "email": "pmuzzullo1c@vistaprint.com",
    "gender": "Female",
    "ip_address": "237.100.96.79",
    "salary": "$9342.10",
    "country": "Finland"
  }, {
    "id": 50,
    "first_name": "Petronella",
    "last_name": "Doley",
    "email": "pdoley1d@kickstarter.com",
    "gender": "Female",
    "ip_address": "58.182.206.190",
    "salary": "$9228.22",
    "country": "Libya"
  }]
  



function getGender(sex, country, id){
    return employees
    .filter((employee) =>employee.gender === sex)
    .filter((employee) => employee.country === country)
    .filter(employee => employee.id=== id) 

}

console.log(getGender("Male","China"));

//function gethighestPaid(money) {
//}

delete student.skill