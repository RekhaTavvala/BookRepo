/*
<div class="modal-header"> Book Details: </div>
<div class="modal-book-details-wrapper">
    <table class="modal-book-details">
    <tbody>
         <tr>
            <td> <a href="{{url}}" target="_blank"> URL </a> </td>
        </tr>
        <tr>
            <td> Title: </td>
            <td> {{title}} </td>
        </tr>
        <tr>
            <td> Subtitle: </td>
            <td> {{subtitle}} </td>
        </tr>
        <tr>
            <td> Authors: </td>
            <td> {{authors}} </td>
        </tr>
        <tr>
            <td> Publisher: </td>
            <td> {{publisher}} </td>
        </tr>
         <tr>
            <td> Language: </td>
            <td> {{language}} </td>
        </tr>
        <tr>
            <td> isbn10: </td>
            <td> {{isbn10}} </td>
        </tr>
        <tr>
            <td> isbn13: </td>
            <td> {{isbn13}} </td>
        </tr>
        <tr>
            <td> Pages: </td>
            <td> {{pages}} </td>
        </tr>
        <tr>
            <td> Year: </td>
            <td> {{year}} </td>
        </tr>
        <tr>
            <td> Rating: </td>
            <td> {{rating}} </td>
        </tr>
        <tr>
            <td> Price: </td>
            <td> {{price}} </td>
        </tr>
        
    </tbody>
    </table>
</div>
*/

(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
  templates['book'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
      var helper;
  
    return "<div class=\"modal-header\"> Book Details: </div>\n<div class=\"modal-book-details-wrapper\">\n    <table class=\"modal-book-details\">\n    <tbody>\n         <tr>\n            <td> <a href=\""
      + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
      + "\" target=\"_blank\"> URL </a> </td>\n        </tr>\n        <tr>\n            <td> Title: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Subtitle: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subtitle","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Authors: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.authors || (depth0 != null ? depth0.authors : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"authors","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Publisher: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.publisher || (depth0 != null ? depth0.publisher : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"publisher","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n         <tr>\n            <td> Language: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"language","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> isbn10: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.isbn10 || (depth0 != null ? depth0.isbn10 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"isbn10","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> isbn13: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.isbn13 || (depth0 != null ? depth0.isbn13 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"isbn13","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Pages: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.pages || (depth0 != null ? depth0.pages : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pages","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Year: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"year","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Rating: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"rating","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        <tr>\n            <td> Price: </td>\n            <td> "
      + container.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price","hash":{},"data":data}) : helper)))
      + " </td>\n        </tr>\n        \n    </tbody>\n    </table>\n</div>";
  },"useData":true});
  })();