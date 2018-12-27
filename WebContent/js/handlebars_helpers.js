Handlebars.registerHelper('ifCond', function(operand1, operator, operand2, options){
    switch(operator){
        case '==' : return operand1 == operand2 ? options.fn(this) : options.inverse(this);
        case '===' : return operand1 === operand2 ? options.fn(this) : options.inverse(this);
        case '>' : return operand1 > operand2 ? options.fn(this) : options.inverse(this);
        case '<' : return operand1 < operand2 ? options.fn(this) : options.inverse(this);
        case '!=' : return operand1 != operand2 ? options.fn(this) : options.inverse(this);
    }
});

Handlebars.registerHelper('includePartial', function(name, meta){
    var markup = Handlebars.templates[name](meta);
    return markup;
});

Handlebars.registerHelper('for', function(startIndex, endIndex, options){
    var result = "";
    for(let i=startIndex;i<=endIndex;i++){
        result += options.fn(i);
    }
    return result;
});

Handlebars.registerHelper('startPagination', function(total, page, options){
    var paginationMeta = pega.service.books.paginationMeta;
    paginationMeta = paginationMeta ? paginationMeta : {};
    paginationMeta.total = total;
    paginationMeta.currentPageIndex = page;
    paginationMeta.pagesCount = (total%10 > 0) ? parseInt(total/10) + 1 : total/10;
    paginationMeta.startIndex = paginationMeta.startIndex ? paginationMeta.startIndex : 1;
    if(!paginationMeta.endIndex){
        paginationMeta.endIndex = paginationMeta.pagesCount < 10 ? paginationMeta.pagesCount : 10;
    }
    paginationMeta.enablePrevious = paginationMeta.enableNext = false;
    if(paginationMeta.endIndex < paginationMeta.pagesCount){
        paginationMeta.enableNext = true;
    }
    if(paginationMeta.startIndex > 1){
        paginationMeta.enablePrevious = true;
    }
    return options.fn(paginationMeta);
});