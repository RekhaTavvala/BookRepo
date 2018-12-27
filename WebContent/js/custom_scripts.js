var pega = pega || {};
pega.service = pega.service || {};

/*****************************************************************************************/
pega.service.utils = (function(){

	var _performAjax = function(url, successCallBack){
		$("#loadingIcon").css("display","block");
		$.ajax({url:url,
				success: successCallBack,
				error: function(xhr, textStatus, errorThrown){
					alert("Ajax request failed with error:"+errorThrown);
				},
				complete: function(){
					$("#loadingIcon").css("display","none");
				}
			   });
	}

	return{
		performAjax : _performAjax
	}

})();
/*****************************************************************************************/

/*****************************************************************************************/
pega.service.books = (function(){
	var urlInUse = "";
	var domainUrl = "http://it-ebooks-api.info/v1/";
	var utils = pega.service.utils;

	var _performSearch = function(keyword){
		var searchUrl = domainUrl + "search/"+keyword;
		_setUrlInUse(searchUrl);
		var successCallBack = function(response){
			var resultsWrapper = document.getElementById("resultsRoot");
			resultsWrapper.innerHTML = Handlebars.templates["allBooks"](response);
		};
		utils.performAjax(searchUrl, successCallBack);
		
		//Reset pagination
		pega.service.books.paginationMeta = {};
	};

	var _showBookDetails = function(bookid){
		var bookSearchUrl = "http://localhost:8001/SampleProject/Book.json";
		var successCallBack = function(response){
			var modalContent = document.getElementById("modalContent");
			modalContent.innerHTML = Handlebars.templates["book"](response);
			var modalOverlay = document.getElementById("modalOverlay");
			modalOverlay.style.display = "flex";
		};
		utils.performAjax(bookSearchUrl, successCallBack);
	};

	var _setUrlInUse = function setUrlInUse(url){
		urlInUse = url;
	};

	var _getUrlInUse = function(){
		return urlInUse;
	};

	return{
		paginationMeta : {},
		performSearch : _performSearch,
		showBookDetails: _showBookDetails,
		setUrlInUse: _setUrlInUse,
		getUrlInUse: _getUrlInUse
	}

})();
/*****************************************************************************************/

/*****************************************************************************************/
pega.service.books.pagination = (function(){
	var utils = pega.service.utils;
	var _getPageResults = function(pageIndex){
		var paginationMeta = pega.service.books.paginationMeta;
		var urlInUse = pega.service.books.getUrlInUse();
		var pageUrl = urlInUse+"/page/"+pageIndex;
		var successCallBack = function(response){
			paginationMeta.currentPageIndex = pageIndex;
			var results, template;
			results = document.getElementById("resultsRoot");
			template = "allBooks";
			var markup = Handlebars.templates[template](response);
			results.innerHTML = markup;
		};
		utils.performAjax(pageUrl, successCallBack);

	};

	var _paginationHandler = function(paginationWindowType){
		var paginationMeta = pega.service.books.paginationMeta;
		var pagesCount = paginationMeta.pagesCount;
		var startIndex = paginationMeta.startIndex;
		var endIndex = paginationMeta.endIndex;
		if(paginationWindowType === 'NEXT'){
			startIndex = endIndex + 1;
			if(pagesCount < (endIndex+10)){
				endIndex = pagesCount;
			}else{
				endIndex = endIndex+10;
			}
			//Update the pagination meta data
			paginationMeta.startIndex = startIndex;
			paginationMeta.endIndex = endIndex;
		}
		else if(paginationWindowType === 'PREVIOUS'){
			endIndex = startIndex - 1;
			startIndex = endIndex-10+1;
			//Update the pagination meta data
			paginationMeta.startIndex = startIndex;
			paginationMeta.endIndex = endIndex;
		}
		_getPageResults(startIndex);
	}

	return{
		getPageResults : _getPageResults,
		paginationHandler : _paginationHandler
	}

})();
/*****************************************************************************************/

/*****************************************************************************************/
pega.actions = (function(){

	var service = pega.service.books;

	var _doSearch = function(){
		var keyword = document.getElementsByClassName("searchTextBox")[0].value;
		service.performSearch(keyword);
	};

	var _doDisplayBookDetails = function(event){
		var target = event.target;
		var id = $(target).closest(".book-details").find(".isbn input[type='hidden']").val();
		service.showBookDetails(id);
		$("body").css("overflow","hidden");
	};

	var _doModalClose = function(){
		$("#modalContent").html("");
		$("#modalOverlay").css("display","none");
		$("body").css("overflow","auto");
	};

	var _doPaginate  = function(pageIndex, paginationWindowType){
			if(pageIndex !== ''){
				service.pagination.getPageResults(parseInt(pageIndex));
			}
			else if(pageIndex == ''){
				service.pagination.paginationHandler(paginationWindowType);
			}
	}

	return{
		doSearch : _doSearch,
		doDisplayBookDetails : _doDisplayBookDetails,
		doModalClose : _doModalClose,
		doPaginate : _doPaginate
	}

})();
/*****************************************************************************************/

$(document).ready(function(){
	$("#modalClose").on("click", pega.actions.doModalClose);
});

