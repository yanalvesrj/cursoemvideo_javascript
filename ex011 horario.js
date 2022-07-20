agora = new Date()
var hor = agora.getHours()
console.log (`RELÓGIO: São exatamente ${hor}h`)
if (hor < 12){
    console.log ('E está de manhã')
}
else if (hor <= 18 )
    console.log('Boa tarde!')
else 
    console.log('Boa noite!')


    
