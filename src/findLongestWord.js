let mots = ['test','hello','js']
let nvMots = mots.map(mot => ({mot, longueur: mot.length}));

let motLePlusLong = nvMots.reduce((motLePlusLong, motCourant) => {
    return motCourant.longueur > motLePlusLong.longueur ? motCourant : motLePlusLong ;
    }
);
console.log(`Le mot le plus long est "${motLePlusLong.mot}" avec une longueur de ${motLePlusLong.longueur}`);

let Mat = [["a", "b", "c"], ["c", "d", "f"], ["d", "f" ,"g"]];
let  occ= Mat.flat().reduce((comp, mot) => {
    if (!comp[mot]) {
        comp[mot] = 0;
      }
      comp[mot]++;
      return comp;
    }, {} );
console.log(occ);
  
let students = [{name  :"Jane " , id :"123" , marks : 98},
                {name  :"John " , id :"456" , marks : 23},
                {name  :"Mary " , id :"789" , marks : 45},
                {name  :"Wick " , id :"456" , marks : 75},]  ;

let total = students.map(student => {
    if (student.marks < 50) {
        student.marks += 15;
    }
    return student;
}
).filter(student => student.marks > 50)
.reduce((total, student) => total + student.marks, 0);
console.log(total);



  
  
  

