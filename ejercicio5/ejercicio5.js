const priceBestsellerDay = 500.0;
const priceLiteratureDay = 100.0;
let finalMessage = '';
let finalPrice = 0;
let counter = 0;
let category = '';
let title = '';
let days = '';
let bandPrice = 0;
let continueband = true;

if(counter<=5){
    questions();
    switch (category) {
        case '1':
            bandPrice=calculatePrice(days,priceBestsellerDay);
            addInfoFinalMessage(days,'Bestseller',title,bandPrice)
            counter++;
            finalPrince+=bandPrice;
            break;
        case '2':
            bandPrice=calculatePrice(days,priceLiteratureDay);
            addInfoFinalMessage(days,'Literatura',title,bandPrice)
            counter++;
            finalPrince+=bandPrice;
            break;
        case '3':
            bandPrice=calculatePrice(days,0);
            addInfoFinalMessage(days,'Academico',title,bandPrice)
            counter++;
            finalPrince+=bandPrice;
            break;
        default:
            break;
    }
}

if(counter<=5){
    if(continueband==true){
        if(continueAlert=='yes'){
            questions();
            switch (category) {
                case '1':
                    bandPrice=calculatePrice(days,priceBestsellerDay);
                    addInfoFinalMessage(days,'Bestseller',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '2':
                    bandPrice=calculatePrice(days,priceLiteratureDay);
                    addInfoFinalMessage(days,'Literatura',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '3':
                    bandPrice=calculatePrice(days,0);
                    addInfoFinalMessage(days,'Academico',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                default:
                    break;
            }
        }else{
            continueBand=false;        
        }
    } 
}

if(counter<=5){
    if(continueband==true){
        if(continueAlert=='yes'){
            questions();
            switch (category) {
                case '1':
                    bandPrice=calculatePrice(days,priceBestsellerDay);
                    addInfoFinalMessage(days,'Bestseller',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '2':
                    bandPrice=calculatePrice(days,priceLiteratureDay);
                    addInfoFinalMessage(days,'Literatura',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '3':
                    bandPrice=calculatePrice(days,0);
                    addInfoFinalMessage(days,'Academico',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                default:
                    break;
            }
        }else{
            continueBand=false;        
        }
    } 
}

if(counter<=5){
    if(continueband==true){
        if(continueAlert=='yes'){
            questions();
            switch (category) {
                case '1':
                    bandPrice=calculatePrice(days,priceBestsellerDay);
                    addInfoFinalMessage(days,'Bestseller',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '2':
                    bandPrice=calculatePrice(days,priceLiteratureDay);
                    addInfoFinalMessage(days,'Literatura',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '3':
                    bandPrice=calculatePrice(days,0);
                    addInfoFinalMessage(days,'Academico',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                default:
                    break;
            }
        }else{
            continueBand=false;        
        }
    } 
}

if(counter<=5){
    if(continueband==true){
        if(continueAlert=='yes'){
            questions();
            switch (category) {
                case '1':
                    bandPrice=calculatePrice(days,priceBestsellerDay);
                    addInfoFinalMessage(days,'Bestseller',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '2':
                    bandPrice=calculatePrice(days,priceLiteratureDay);
                    addInfoFinalMessage(days,'Literatura',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                case '3':
                    bandPrice=calculatePrice(days,0);
                    addInfoFinalMessage(days,'Academico',title,bandPrice)
                    counter++;
                    finalPrince+=bandPrice;
                    break;
                default:
                    break;
            }
        }else{
            continueBand=false;        
        }
    } 
}


function questions(){
    category = prompt(`Digite la categoria del libro que desea pedir prestado\n1. Bestseller\n2. Literatura\n3. Academicos`);
    title = prompt(`Digite el titulo del libro que desea pedir prestado`);
    days = prompt(`Digite la cantidad de dias que desea pedir prestado\nentre 1 a 30 dias`);
    if(days>30){
        alert('dia invalido se data el valor por defecto de 1')
        days=1
    }
}

function continueAlert(){
    return prompt('Desea continuar\n1. yes\n2. no');
}

function calculatePrice(days,categoryPrice) {
    return days>=10
        ? (days * categoryPrice)-((days * categoryPrice)*0.1)
        : days * categoryPrice;
}

function addInfoFinalMessage(days,category,title,finalPrice){
    finalMessage+=`\n${title} - ${category} - ${days} - ${finalPrice}`
}