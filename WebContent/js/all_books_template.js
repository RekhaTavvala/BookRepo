/*
<h3> Results Found: {{Total}}</h3>
  {{#ifCond Total '>' 10}}
     <div id="paginationGadjet">
     
      {{#startPagination Total Page}}
      {{#if this.enablePrevious}}
      <a href="#" id="previousPagination" onclick="pega.actions.doPaginate('','PREVIOUS')"> < </a>
      {{/if}}

      {{#for this.startIndex this.endIndex}}
        {{#ifCond this "===" ../currentPageIndex}}
          <a href="#" onclick="pega.actions.doPaginate('{{this}}','')" style="background-color:#1961D0; color:white;"> {{this}} </a>
        {{else}}
          <a href="#" onclick="pega.actions.doPaginate('{{this}}','')"> {{this}} </a>
        {{/ifCond}}
      {{/for}}
      
      {{#if this.enableNext}}
      <a href="#" id="nextPagination" onclick="pega.actions.doPaginate('','NEXT')"> > </a>
      {{/if}}
      {{/startPagination}}

     </div>
  {{/ifCond}}
    {{{includePartial 'allBooksResultsOnly' this}}}

{{!-- Template for book results only --}}
<div id="searchResultsWrapper">
{{#ifCond Total '>' 0}}
  <div id="searchResults">
    {{#each Books}}
    <div class="search-result">
      <div class="image-preview">
        <image src="{{Image}}" class="book-preview-img" alt="Book image not available"/>
      </div>
      <div class="book-details">
        <div class="title"> Title: {{Title}} </div>
        <div class="sub-title"> Subtitle: {{SubTitle}} </div>
         <div class="isbn"> 
          ISBN: {{isbn}} 
          <input type="hidden" value="{{ID}}"/>
         </div>
         <button class="more-details" onclick="pega.actions.doDisplayBookDetails(event)"> More Details... </button>
      </div>
    </div>
    {{/each}}
  </div>
{{/ifCond}}
</div>
*/

/* Template for allBooks starts here */
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['allBooks'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "     <div id=\"paginationGadjet\">\n     \n"
    + ((stack1 = (helpers.startPagination || (depth0 && depth0.startPagination) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Total : depth0),(depth0 != null ? depth0.Page : depth0),{"name":"startPagination","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n     </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.enablePrevious : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers["for"] || (depth0 && depth0["for"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.startIndex : depth0),(depth0 != null ? depth0.endIndex : depth0),{"name":"for","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      \n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.enableNext : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "      <a href=\"#\" id=\"previousPagination\" onclick=\"pega.actions.doPaginate('','PREVIOUS')\"> < </a>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,"===",(depths[1] != null ? depths[1].currentPageIndex : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "          <a href=\"#\" onclick=\"pega.actions.doPaginate('"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "','')\" style=\"background-color:#1961D0; color:white;\"> "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " </a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "          <a href=\"#\" onclick=\"pega.actions.doPaginate('"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "','')\"> "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " </a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "      <a href=\"#\" id=\"nextPagination\" onclick=\"pega.actions.doPaginate('','NEXT')\"> > </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<h3> Results Found: "
    + container.escapeExpression(((helper = (helper = helpers.Total || (depth0 != null ? depth0.Total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Total","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Total : depth0),">",10,{"name":"ifCond","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + ((stack1 = (helpers.includePartial || (depth0 && depth0.includePartial) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"allBooksResultsOnly",depth0,{"name":"includePartial","hash":{},"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
})();
/* Template for allBooks ends here */




/* Template for allBooksResultsOnly starts here*/
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['allBooksResultsOnly'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div id=\"searchResults\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Books : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"search-result\">\n      <div class=\"image-preview\">\n        <image src=\""
    + container.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" class=\"book-preview-img\" alt=\"Book image not available\"/>\n      </div>\n      <div class=\"book-details\">\n        <div class=\"title\"> Title: "
    + container.escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Title","hash":{},"data":data}) : helper)))
    + " </div>\n        <div class=\"sub-title\"> Subtitle: "
    + container.escapeExpression(((helper = (helper = helpers.SubTitle || (depth0 != null ? depth0.SubTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SubTitle","hash":{},"data":data}) : helper)))
    + " </div>\n         <div class=\"isbn\"> \n          ISBN: "
    + container.escapeExpression(((helper = (helper = helpers.isbn || (depth0 != null ? depth0.isbn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"isbn","hash":{},"data":data}) : helper)))
    + " \n          <input type=\"hidden\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ID","hash":{},"data":data}) : helper)))
    + "\"/>\n         </div>\n         <button class=\"more-details\" onclick=\"pega.actions.doDisplayBookDetails(event)\"> More Details... </button>\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"searchResultsWrapper\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Total : depth0),">",0,{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();
/* Template for allBooksResultsOnly ends here*/
