//exercice 1
let here = new Date()
console.log(here.toLocaleString ('Fr-BE',{timeZone: 'America/Anchorage'}))
console.log(here.toLocaleString ('Fr-BE',{timeZone: 'Atlantic/Reykjavik'}))
console.log(here.toLocaleString ('Fr-BE',{timeZone: 'Europe/Moscow'}))
console.log(here.toLocaleString ('Fr-BE',{timeZone: 'Europe/Brussels'}))

//exercice 2
let birthday= new Date ('1998-01-05')
let time = here.getTime() - birthday.getTime()
let daytime=  (time /(1000*60*60*24)).toFixed(0)
console.log (daytime)


function randomdate(olddate){
    let time = here.getTime() - olddate.getTime()
    let daytime=  (time /(1000*60*60*24)).toFixed(0)
    return daytime
}
let yesterday= new Date('2022-12-12')
console.log(randomdate(yesterday))

//exercice 3
let time80= 1000*60*60*80000
let futur = new Date (here.getTime()+time80)
console.log(futur.toString());

function jules(heures){
    let randomday= 1000*60*60*heures
    let futur = new Date (here.getTime()+randomday)
    return futur
}
console.log(jules(8000))
   
    let idk=document.getElementsByClassName("form_date")[0]
    idk.addEventListener('keyup',() =>{ 
        let fu=document.getElementsByClassName("form_date")[0].value
        console.log(jules(fu))
        
})

